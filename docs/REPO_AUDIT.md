# UMADA Repository Audit

Maintained by: Aderin (UMADA Steward). Last full pass: 2026-07-02.

This audit follows the Small Systems Lab ecosystem-wide repository-restoration
standard. It documents current structure, navigation, and gaps — it does not
invent canon, and it does not restate content that already lives in
`00_governance/`, `01_canon/`, or `docs/README.md`.

## Repository purpose

UMADA is a canon-governed archive, canon engine, and (eventually) public site for the
UMADA fictional world — a recovered-archive narrative framed through a future
reporter/time traveler carrying an Omoluabi device. It is speculative fiction used as a
research environment, with accessibility-first, multimodal design as a core subject of
the world itself (Nago Sign / the Hand Relay), not just a delivery constraint on the
repo. See root `README.md` and `CLAUDE.md` for full role and prime-directive framing.

## Current structure

Three layers, all cross-linked rather than duplicated:

1. **Canon engine** — `00_governance/`, `01_canon/`, `02_characters/` … `20_visual_canon_registry/`,
   `data/*.json`. Source of truth for every canon fact and its status.
2. **Public site (Phase B, framework-free static shell)** — `index.html`,
   `sections/*.html` (20 pages), `assets/css/main.css`, `assets/js/{data-loader,nav,accessibility}.js`.
   Renders directly from `data/*.json`; no build step.
3. **Production bible** — `docs/`, including `docs/world/`, `docs/characters/INDEX.md`,
   `docs/factions/INDEX.md`, `docs/events/INDEX.md`, `docs/production/`,
   `docs/project-management/issues/` (Issue-001–050), `docs/research/INDEX.md`.
   Cross-links into the canon engine rather than restating it.

## Homepage / entry points

- `README.md` — contributor/build-process entry point.
- `PUBLIC_README.md` — fan/visitor welcome mat, links into `sections/start-here.html`.
- `index.html` — the live site shell; primary nav exposes all 20 `sections/*.html` pages
  grouped by Orient / Canon / World / Language / Access / Visual / Production / Fan.
- `CLAUDE.md` — steward brief (role, prime directive, canon status, frame narrative,
  Nago symbology axes, visual layer split, accessibility, tiny-questions protocol,
  Faraday Box).

## Important pages

All 20 `sections/*.html` pages are linked from `index.html`'s primary nav and from each
other's shared nav component; each carries a footer link back to `index.html`'s parent
context and to the Small Systems Lab hub
(`https://ukadike.github.io/small-systems-lab/`). `docs/README.md` indexes the full
production-bible layer. `00_governance/CANON_STATUS.md` is the canonical-facts register
linked from the root README badge row.

## Orphan pages

None found. Every `sections/*.html` file is reachable from `index.html`'s nav; every
numbered canon directory (`02_characters/` … `20_visual_canon_registry/`) is referenced
from root `README.md`'s "Where things live" section; every `docs/` subpage is indexed
from `docs/README.md`.

## Broken links

None found in a full internal-link sweep across every `.md` and `.html` file (relative
links resolved against their source file; external `http(s)`/`mailto`/anchor-only links
excluded from the sweep).

## Missing navigation (fixed this pass)

- `07_languages/` (Nago glyph system, root glyphs draft, signage guide, symbology
  bible — 4 files) had no `README.md` index, unlike every other numbered canon
  directory. **Fixed:** added a short index following the existing pattern in
  `02_characters/README.md` etc.

## Missing documentation (fixed this pass)

Per the ecosystem documentation standard, added thin root-level pointer files where
the content already exists under a different name/location, to avoid duplicating a
second source of truth:

- `INDEX.md` — new root sitemap tying together the canon engine, site, and production
  bible in one page (this file did not exist before).
- `SCHEMA_CARD.md` — new root schema card (data structures, interfaces, dependencies,
  related repos) for future code agents.
- `CONTRIBUTING.md` — new root pointer to `docs/CONTRIBUTOR_GUIDE.md` (production
  contributors) and `16_fanbase/FANBASE_FARADAY_BOX.md` (fan contributions).
- `ROADMAP.md` — new root pointer to `docs/production/ROADMAP.md`.
- `CHANGELOG.md` — new root pointer to `15_archive_recovery/README.md`, which already
  functions as an append-only ingestion/change log for this repository.

**Not created** (would be generic-template padding, not real content, per the "do not
flatten complex projects into generic templates" rule): a root `/examples` or `/tests`
directory. UMADA is a narrative/canon archive, not a library — its worked examples are
the `sections/*.html` pages themselves (consuming `data/*.json`), and it has no
automated test suite yet. If a `data-loader.js` unit-test harness is added later, it
should live at `assets/js/__tests__/` or a root `/tests` directory at that time, not
before there's anything to test.

## Duplicated or outdated files

None found. The repo is disciplined about single-source-of-truth: e.g. `06_timelines/`
and `10_visuals/` deliberately hold no duplicate copy of canon that already lives in
`01_canon/`, and say so in their own `README.md`.

## Accessibility issues

None found in this pass beyond what's already tracked. The site already implements:
skip link, `aria-current="page"` on active nav item, `aria-live="polite"` on
JS-rendered card grids, a visible canon-status legend in every footer (not color-only —
status is also a text label), and framework-free progressive enhancement (nav links are
plain `<a>` tags, functional with JS disabled). Baseline policy lives in
`00_governance/ACCESSIBILITY_BASELINE.md`; do not restate it here.

## Code quality issues

None blocking. The static site has no build step and no external JS framework
dependency, matching the "prefer simple, maintainable fixes, no unnecessary
frameworks" rule. `assets/js/nav.js` and `assets/js/data-loader.js` are small and
single-purpose.

## Cross-repository coherence (fixed this pass)

- `08_technology/README.md` and `docs/world/technology/OVERVIEW.md` describe the
  in-world Omoluabi device but did not link to the real-world Omoluabi repository
  (`https://github.com/ukadike/omoluabi`), which is the related controller/interface
  project referenced by the ecosystem's cross-linking guidance. **Fixed:** added a
  one-line production note (clearly marked as a real-world development cross-reference,
  not a canon fact) to both files.
- Site footers already link to the Small Systems Lab hub. No change needed there.

## Recommended changes (not made this pass — flagged for Kemi review)

- **Needs Kemi review:** whether `docs/project-management/issues/` (Issue-001–050)
  should also be mirrored as actual GitHub Issues on this repo, or remain
  file-based only.
- **Needs Kemi review:** whether `assets/concept-art/`, `assets/maps/`,
  `assets/reference/`, and `assets/storyboards/` should be surfaced in the public
  site nav once they hold real fragments, or stay production-only/internal.

## Completed changes (this pass)

- Added `07_languages/README.md`.
- Added root `INDEX.md`, `SCHEMA_CARD.md`, `CONTRIBUTING.md`, `ROADMAP.md`,
  `CHANGELOG.md`.
- Added a real-world cross-repository link to Omoluabi in `08_technology/README.md`
  and `docs/world/technology/OVERVIEW.md`.
- This audit file.
