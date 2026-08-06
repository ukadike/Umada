#!/usr/bin/env python3
"""Validate links and navigation structure across the UMADA public site.

Standard-library only. Checks index.html and every sections/*.html file for:

  1. Broken local href/src targets (mailto:, tel:, external http(s):// and
     protocol-relative links are skipped).
  2. Fragment-only links (#id) and file#id links resolved against the target
     document's actual ids, where practical.
  3. Duplicate `id` attributes within a single page.
  4. Exactly one `<main id="main">` per page.
  5. Every section page has: a `.global-nav` primary navigation, a
     `.breadcrumbs` navigation, and a visible Accessibility link.
  6. Every page configured in data/navigation.json with more than one
     sibling has a `.section-nav` local navigation.
  7. `aria-current="page"` is never duplicated within one `<nav>` landmark.

Usage:
    python scripts/check_site_links.py

Exits 0 if everything passes, 1 with a report otherwise.
"""

from __future__ import annotations

import json
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
NAV_PATH = ROOT / "data" / "navigation.json"
SECTIONS_DIR = ROOT / "sections"
INDEX_PATH = ROOT / "index.html"

SKIP_SCHEMES = ("mailto:", "tel:", "http://", "https://", "//", "javascript:")


class PageScan:
    def __init__(self, path: Path):
        self.path = path
        self.rel = str(path.relative_to(ROOT))
        self.links: list[tuple[int, str]] = []  # (line, href/src value)
        self.ids: dict[str, list[int]] = {}
        self.main_count = 0
        self.has_global_nav = False
        self.has_breadcrumbs = False
        self.has_section_nav = False
        self.has_accessibility_link = False
        self.nav_aria_page_issues: list[str] = []


class SiteParser(HTMLParser):
    def __init__(self, scan: PageScan):
        super().__init__(convert_charrefs=True)
        self.scan = scan
        self._nav_stack: list[dict] = []  # {"line": int, "count": int}

    def handle_starttag(self, tag, attrs):
        self._handle(tag, attrs, self_closing=False)

    def handle_startendtag(self, tag, attrs):
        self._handle(tag, attrs, self_closing=True)

    def _handle(self, tag, attrs, self_closing):
        line = self.getpos()[0]
        d = dict(attrs)
        scan = self.scan

        if tag == "main" and d.get("id") == "main":
            scan.main_count += 1

        if "id" in d and d["id"]:
            scan.ids.setdefault(d["id"], []).append(line)

        classes = (d.get("class") or "").split()
        if "global-nav" in classes:
            scan.has_global_nav = True
        if "breadcrumbs" in classes:
            scan.has_breadcrumbs = True
        if "section-nav" in classes:
            scan.has_section_nav = True

        if tag == "a":
            href = d.get("href")
            if href:
                if href.rstrip("/").endswith("accessibility.html"):
                    scan.has_accessibility_link = True
                scan.links.append((line, href))
        elif tag in ("link",):
            href = d.get("href")
            if href:
                scan.links.append((line, href))
        elif tag in ("img", "script", "source", "video", "audio", "iframe"):
            src = d.get("src")
            if src:
                scan.links.append((line, src))

        if tag == "nav":
            self._nav_stack.append({"line": line, "count": 0})

        if d.get("aria-current") == "page" and self._nav_stack:
            self._nav_stack[-1]["count"] += 1

        if tag == "nav" and self_closing:
            self._pop_nav()

    def handle_endtag(self, tag):
        if tag == "nav":
            self._pop_nav()

    def _pop_nav(self):
        if not self._nav_stack:
            return
        frame = self._nav_stack.pop()
        if frame["count"] > 1:
            self.scan.nav_aria_page_issues.append(
                f"line {frame['line']}: <nav> landmark contains "
                f'{frame["count"]} elements with aria-current="page" (must be at most 1)'
            )


def scan_file(path: Path) -> PageScan:
    scan = PageScan(path)
    parser = SiteParser(scan)
    parser.feed(path.read_text(encoding="utf-8"))
    parser.close()
    return scan


def is_skippable(href: str) -> bool:
    h = href.strip()
    return h == "" or h.startswith(SKIP_SCHEMES)


def check_links(scan: PageScan, id_index: dict[Path, set[str]], errors: list[str]):
    for line, href in scan.links:
        if is_skippable(href):
            continue
        target_part, _, fragment = href.partition("#")
        if target_part == "":
            # fragment-only link within this page
            if fragment and fragment not in id_index.get(scan.path, set()):
                errors.append(
                    f"{scan.rel}:{line}: fragment '#{fragment}' has no matching id on this page"
                )
            continue
        target = (scan.path.parent / target_part).resolve()
        if not target.exists():
            errors.append(f"{scan.rel}:{line}: broken link target '{href}' -> {target}")
            continue
        if fragment and target in id_index:
            if fragment not in id_index.get(target, set()):
                errors.append(
                    f"{scan.rel}:{line}: fragment '#{fragment}' has no matching id in '{href}'"
                )


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []

    nav = json.loads(NAV_PATH.read_text(encoding="utf-8"))
    grouped_files = {
        page["file"]
        for group in nav["groups"].values()
        if len(group["pages"]) > 1
        for page in group["pages"]
    }

    files = [INDEX_PATH] + sorted(SECTIONS_DIR.glob("*.html"))
    scans = {p: scan_file(p) for p in files}
    id_index = {p: set(s.ids.keys()) for p, s in scans.items()}

    for path, scan in scans.items():
        for id_, lines in scan.ids.items():
            if len(lines) > 1:
                errors.append(
                    f"{scan.rel}: duplicate id '{id_}' at lines {', '.join(map(str, lines))}"
                )

        if scan.main_count != 1:
            errors.append(f"{scan.rel}: expected exactly one <main id=\"main\">, found {scan.main_count}")

        if path != INDEX_PATH:
            if not scan.has_global_nav:
                errors.append(f"{scan.rel}: missing persistent primary navigation (.global-nav)")
            if not scan.has_breadcrumbs:
                errors.append(f"{scan.rel}: missing breadcrumb navigation (.breadcrumbs)")
            if not scan.has_accessibility_link:
                errors.append(f"{scan.rel}: missing a visible Accessibility link")

            if path.name in grouped_files and not scan.has_section_nav:
                errors.append(f"{scan.rel}: configured with siblings in data/navigation.json but missing local navigation (.section-nav)")

        for issue in scan.nav_aria_page_issues:
            errors.append(f"{scan.rel}: {issue}")

        check_links(scan, id_index, errors)

    if errors:
        print(f"check_site_links: FAIL — {len(errors)} problem(s)\n")
        for e in errors:
            print(f"  {e}")
        return 1

    print(f"check_site_links: OK — {len(files)} pages checked, no problems found.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
