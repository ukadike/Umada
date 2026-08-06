#!/usr/bin/env python3
"""Generate committed navigation markup for the UMADA static site.

Reads the single canonical navigation definition in ``data/navigation.json``
and fills the explicitly delimited generated regions inside ``index.html``
and every ``sections/*.html`` page:

    <!-- BEGIN GENERATED: GLOBAL NAV -->     ... <!-- END GENERATED: GLOBAL NAV -->
    <!-- BEGIN GENERATED: BREADCRUMBS -->    ... <!-- END GENERATED: BREADCRUMBS -->
    <!-- BEGIN GENERATED: LOCAL NAV -->      ... <!-- END GENERATED: LOCAL NAV -->
    <!-- BEGIN GENERATED: PAGE SEQUENCE -->  ... <!-- END GENERATED: PAGE SEQUENCE -->

Everything outside a marker pair is left untouched — this script never parses
or rewrites the document as a whole, only the text strictly between a known
marker pair. A page only needs the marker pairs relevant to its role:

  * index.html                        -> GLOBAL NAV only (no breadcrumbs on the homepage)
  * a page that is the only member     -> GLOBAL NAV, BREADCRUMBS
    of its navigation.json group
    (e.g. start-here, accessibility,
    archive)
  * any other configured section page -> GLOBAL NAV, BREADCRUMBS, LOCAL NAV, PAGE SEQUENCE

The generated HTML is deterministic: running this script twice produces no
further changes once the site is in sync. The deployed site never runs this
script; its output is committed and must work with JavaScript disabled.

Usage:
    python scripts/sync_navigation.py           # write changes
    python scripts/sync_navigation.py --check   # exit 1 if anything would change
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
NAV_PATH = ROOT / "data" / "navigation.json"
SECTIONS_DIR = ROOT / "sections"
INDEX_PATH = ROOT / "index.html"

MARKER_RE = {
    name: re.compile(
        r"<!-- BEGIN GENERATED: " + name + r" -->.*?<!-- END GENERATED: " + name + r" -->",
        re.DOTALL,
    )
    for name in ("GLOBAL NAV", "BREADCRUMBS", "LOCAL NAV", "PAGE SEQUENCE")
}


class NavError(Exception):
    """Raised for any condition sync_navigation.py must fail loudly on."""


def esc(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


# ---------------------------------------------------------------------------
# Load + validate data/navigation.json against the pages actually on disk
# ---------------------------------------------------------------------------

def load_nav() -> dict:
    if not NAV_PATH.exists():
        raise NavError(f"missing {NAV_PATH.relative_to(ROOT)}")
    return json.loads(NAV_PATH.read_text(encoding="utf-8"))


def build_page_index(nav: dict) -> dict:
    """file -> {group_id, group, label, position} for every configured section page."""
    index: dict = {}
    for group_id, group in nav["groups"].items():
        pages = group["pages"]
        if not pages:
            raise NavError(f"navigation.json: group '{group_id}' has no pages")
        if group["landingFile"] != pages[0]["file"]:
            raise NavError(
                f"navigation.json: group '{group_id}' landingFile "
                f"'{group['landingFile']}' must be its first page"
            )
        for i, page in enumerate(pages):
            file = page["file"]
            if file in index:
                raise NavError(
                    f"navigation.json: '{file}' is configured in more than one group"
                )
            index[file] = {
                "group_id": group_id,
                "group": group,
                "label": page["label"],
                "position": i,
            }
    return index


def validate_pages_on_disk(nav: dict, page_index: dict) -> list[str]:
    """Cross-check navigation.json against sections/*.html. Returns sorted section filenames."""
    discovered = sorted(p.name for p in SECTIONS_DIR.glob("*.html"))

    for file in page_index:
        if not (SECTIONS_DIR / file).exists():
            raise NavError(
                f"navigation.json references 'sections/{file}' but that file does not exist"
            )

    for file in discovered:
        if file not in page_index:
            raise NavError(
                f"'sections/{file}' exists but is not mapped in data/navigation.json groups"
            )

    if not INDEX_PATH.exists():
        raise NavError("missing index.html")

    return discovered


# ---------------------------------------------------------------------------
# Href resolution
# ---------------------------------------------------------------------------

def global_entry_href(nav: dict, entry: dict, from_section: bool) -> str:
    if entry["id"] == "home":
        return nav["home"]["sectionHref"] if from_section else nav["home"]["rootHref"]
    group = nav["groups"][entry["groupId"]]
    file = group["landingFile"]
    return file if from_section else f"sections/{file}"


def global_entry_is_current(nav: dict, entry: dict, current_file: str, from_section: bool) -> str | None:
    """Return 'page', 'location', or None for a global/utility nav entry."""
    if entry["id"] == "home":
        is_exact = (not from_section) and current_file == "index.html"
        return "page" if is_exact else None
    group = nav["groups"][entry["groupId"]]
    if not from_section:
        return None
    if current_file == group["landingFile"]:
        return "page"
    if current_file in {p["file"] for p in group["pages"]}:
        return "location"
    return None


# ---------------------------------------------------------------------------
# Region generators
# ---------------------------------------------------------------------------

def render_global_nav(nav: dict, current_file: str, from_section: bool) -> str:
    items = []
    for entry in nav["global"]:
        href = global_entry_href(nav, entry, from_section)
        current = global_entry_is_current(nav, entry, current_file, from_section)
        attr = f' aria-current="{current}"' if current else ""
        items.append(f'    <li><a href="{href}"{attr}>{esc(entry["label"])}</a></li>')
    body = "\n".join(items)
    return (
        "<!-- BEGIN GENERATED: GLOBAL NAV -->\n"
        '  <nav class="global-nav" aria-label="Primary">\n'
        "    <ul>\n"
        f"{body}\n"
        "    </ul>\n"
        "  </nav>\n"
        "  <!-- END GENERATED: GLOBAL NAV -->"
    )


def render_breadcrumbs(nav: dict, current_file: str, page_index: dict) -> str:
    info = page_index[current_file]
    group = info["group"]
    crumbs = ['    <li><a href="../index.html">UMADA</a></li>']
    if current_file == group["landingFile"]:
        crumbs.append(f'    <li aria-current="page">{esc(group["label"])}</li>')
    else:
        crumbs.append(f'    <li><a href="{group["landingFile"]}">{esc(group["label"])}</a></li>')
        crumbs.append(f'    <li aria-current="page">{esc(info["label"])}</li>')
    body = "\n".join(crumbs)
    return (
        "<!-- BEGIN GENERATED: BREADCRUMBS -->\n"
        '<nav class="breadcrumbs" aria-label="Breadcrumb">\n'
        "  <ol>\n"
        f"{body}\n"
        "  </ol>\n"
        "</nav>\n"
        "<!-- END GENERATED: BREADCRUMBS -->"
    )


def render_local_nav(nav: dict, current_file: str, page_index: dict) -> str | None:
    info = page_index[current_file]
    group = info["group"]
    pages = group["pages"]
    if len(pages) <= 1:
        return None
    items = []
    for page in pages:
        attr = ' aria-current="page"' if page["file"] == current_file else ""
        items.append(f'    <li><a href="{page["file"]}"{attr}>{esc(page["label"])}</a></li>')
    body = "\n".join(items)
    return (
        "<!-- BEGIN GENERATED: LOCAL NAV -->\n"
        f'<nav class="section-nav" aria-label="{esc(group["label"])}">\n'
        f'  <p class="section-nav__title">{esc(group["label"])}</p>\n'
        "  <ul>\n"
        f"{body}\n"
        "  </ul>\n"
        "</nav>\n"
        "<!-- END GENERATED: LOCAL NAV -->"
    )


def render_page_sequence(nav: dict, current_file: str, page_index: dict) -> str | None:
    info = page_index[current_file]
    group = info["group"]
    pages = group["pages"]
    if len(pages) <= 1:
        return None
    pos = info["position"]
    parts = []
    if pos > 0:
        prev = pages[pos - 1]
        parts.append(
            f'  <a class="page-sequence__previous" href="{prev["file"]}">\n'
            '    <span class="page-sequence__label">Previous</span>\n'
            f"    <span>{esc(prev['label'])}</span>\n"
            "  </a>"
        )
    if pos < len(pages) - 1:
        nxt = pages[pos + 1]
        parts.append(
            f'  <a class="page-sequence__next" href="{nxt["file"]}">\n'
            '    <span class="page-sequence__label">Next</span>\n'
            f"    <span>{esc(nxt['label'])}</span>\n"
            "  </a>"
        )
    body = "\n\n".join(parts)
    return (
        "<!-- BEGIN GENERATED: PAGE SEQUENCE -->\n"
        f'<nav class="page-sequence" aria-label="{esc(group["label"])} page sequence">\n'
        f"{body}\n"
        "</nav>\n"
        "<!-- END GENERATED: PAGE SEQUENCE -->"
    )


# ---------------------------------------------------------------------------
# Marker replacement — restricted to explicit marker pairs, never a whole-document regex
# ---------------------------------------------------------------------------

def apply_region(text: str, file_label: str, name: str, replacement: str | None) -> str:
    pattern = MARKER_RE[name]
    matches = pattern.findall(text)
    if replacement is None:
        if matches:
            raise NavError(
                f"{file_label}: '{name}' region present but not applicable to this page "
                "(remove it or fix data/navigation.json)"
            )
        return text
    if len(matches) == 0:
        raise NavError(f"{file_label}: missing required '{name}' generated-region markers")
    if len(matches) > 1:
        raise NavError(f"{file_label}: '{name}' generated-region markers appear more than once")
    return pattern.sub(lambda _m: replacement, text, count=1)


def sync_file(path: Path, regions: dict) -> bool:
    """Apply the given {marker_name: replacement_or_None} map. Returns True if changed."""
    label = str(path.relative_to(ROOT))
    original = path.read_text(encoding="utf-8")
    updated = original
    for name, replacement in regions.items():
        updated = apply_region(updated, label, name, replacement)
    if updated != original:
        path.write_text(updated, encoding="utf-8")
        return True
    return False


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main(argv: list[str]) -> int:
    check_only = "--check" in argv

    try:
        nav = load_nav()
        page_index = build_page_index(nav)
        discovered = validate_pages_on_disk(nav, page_index)
    except NavError as exc:
        print(f"sync_navigation: FAIL — {exc}", file=sys.stderr)
        return 1

    changed: list[str] = []
    unchanged: list[str] = []

    try:
        # index.html: global nav only, no breadcrumbs/local-nav/page-sequence
        index_regions = {
            "GLOBAL NAV": render_global_nav(nav, "index.html", from_section=False),
            "BREADCRUMBS": None,
            "LOCAL NAV": None,
            "PAGE SEQUENCE": None,
        }
        target = INDEX_PATH
        text = target.read_text(encoding="utf-8")
        would_change = any(
            apply_region(text, "index.html", n, r) != text
            for n, r in index_regions.items()
        )
        if check_only:
            (changed if would_change else unchanged).append("index.html")
        else:
            did_change = sync_file(target, index_regions)
            (changed if did_change else unchanged).append("index.html")

        # sections/*.html
        for file in discovered:
            path = SECTIONS_DIR / file
            regions = {
                "GLOBAL NAV": render_global_nav(nav, file, from_section=True),
                "BREADCRUMBS": render_breadcrumbs(nav, file, page_index),
                "LOCAL NAV": render_local_nav(nav, file, page_index),
                "PAGE SEQUENCE": render_page_sequence(nav, file, page_index),
            }
            label = f"sections/{file}"
            text = path.read_text(encoding="utf-8")
            if check_only:
                would_change = False
                for n, r in regions.items():
                    if apply_region(text, label, n, r) != text:
                        would_change = True
                (changed if would_change else unchanged).append(label)
            else:
                did_change = sync_file(path, regions)
                (changed if did_change else unchanged).append(label)
    except NavError as exc:
        print(f"sync_navigation: FAIL — {exc}", file=sys.stderr)
        return 1

    if check_only:
        if changed:
            print("sync_navigation --check: out of sync:")
            for f in changed:
                print(f"  would update: {f}")
            return 1
        print(f"sync_navigation --check: {len(unchanged)} pages already in sync.")
        return 0

    for f in changed:
        print(f"updated: {f}")
    print(f"sync_navigation: {len(changed)} updated, {len(unchanged)} already in sync.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
