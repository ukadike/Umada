# SCHEMA CARD — UMADA

A quick-orientation card for future code agents and contributors. For narrative/canon
detail, do not rely on this card alone — go to the files it points to.

## Project name

UMADA

## Purpose

A canon-governed archive, canon engine, and (eventually) public site for the UMADA
fictional world: a recovered-archive narrative framed through a future reporter/time
traveler carrying an Omoluabi device, with zero fabrication and a full audit trail on
every fact. Speculative fiction used as a research environment for accessibility-first,
multimodal interface and signage design (Nago Sign / the Hand Relay).

## Audience

- **Production contributors** (writers, artists, accessibility reviewers, researchers)
  — entry point: `README.md`, `CLAUDE.md`, `docs/CONTRIBUTOR_GUIDE.md`.
- **Fans/visitors** — entry point: `PUBLIC_README.md`, `index.html`.
- **Future code/steward agents** — entry point: this file, `CLAUDE.md`, `INDEX.md`.

## Core concepts

- **Canon status** — every fact is `LOCKED`, `PROBABLE`, `EMERGING`, `OPEN QUESTION`, or
  `RETIRED`. See `00_governance/CANON_STATUS.md`.
- **No fabrication** — unknowns become `OPEN QUESTION` or `AWAITING FRAGMENT`, never
  invented. See `00_governance/NO_FABRICATION_RULE.md`.
- **Fragment workflow** — how new source material is ingested into canon.
  See `00_governance/FRAGMENT_WORKFLOW.md`.
- **Nago symbology** — Umada's visual operating system (function families vs. motif
  families — two axes, never merged). See `07_languages/NAGO_SYMBOLOGY_BIBLE.md` and
  `CLAUDE.md`.
- **Visual layer split** — monochrome graphite archive/presentation layer vs. colorful
  diegetic world layer. See `00_governance/VISUAL_LAYER_RULES.md`.

## Data structures

Structured canon data lives in `data/*.json`, consumed directly by the static site
(no build step):

| File | Contents |
|---|---|
| `data/canon.json` | General canon facts index |
| `data/characters.json` | Character dossiers (name, status, known facts, open questions) |
| `data/civilizational_ledger.json` | The 17-era timeline ledger |
| `data/factions.json` | Kingdoms/factions |
| `data/five_houses.json` | The Five Houses structure |
| `data/nago_signs.json`, `data/nago_proto_signs.json`, `data/nago_root_glyphs.json`, `data/nago_symbology.json` | Nago sign/glyph system data |
| `data/open_questions.json` | The open-questions register |
| `data/rescue_doctrine.json` | Rescue doctrine facts (from the Friedmandostorp rescue animatic) |
| `data/sources.json` | Source/provenance tracking |
| `data/timeline.json` | Timeline events |
| `data/visual_artifacts.json` | Visual canon registry (plates, animatic, transcripts) |

Each JSON file's authoritative prose counterpart lives in `01_canon/` or
`07_languages/`; the JSON is the structured/renderable form, not a second source of
truth — see `06_timelines/README.md` for the pattern.

## Interfaces

- **Public site** — `index.html` + `sections/*.html` (20 pages), framework-free static
  HTML/CSS/JS. `assets/js/data-loader.js` fetches and renders `data/*.json`;
  `assets/js/nav.js` handles current-page marking and skip-link focus;
  `assets/js/accessibility.js` handles accessibility behavior. No build step required.
- **Governance/canon layer** — plain Markdown, read by humans and by the steward agent
  (`CLAUDE.md`), not by the site.

## Inputs

Source fragments (episodes, art, transcripts, notes) arrive via
`00_governance/FRAGMENT_WORKFLOW.md` and are logged in `15_archive_recovery/README.md`
and `13_fragments/`.

## Outputs

The public static site (GitHub Pages, `.nojekyll` present at root), and eventually
generated episode scripts once enough canon is locked (see `11_episodes/README.md` —
deliberately empty; Episode 1 has not been written yet).

## Dependencies

None beyond a static-file host. No package.json, no build tooling — by design.

## Related repos

- **[Small Systems Lab](https://github.com/ukadike/Small-Systems-Lab)** — the
  ecosystem hub; every section footer links to it.
- **[Omoluabi](https://github.com/ukadike/omoluabi)** — sister project developing the
  real-world observation/controller-device concepts that inform the in-world Omoluabi
  device (production cross-reference only, not canon — see `08_technology/README.md`).

## Accessibility considerations

Accessibility is treated as world infrastructure, not just a site requirement: alt
text, screen-reader labels, keyboard access, no color-only meaning, no hover-only
meaning, reduced motion, plain-language summaries, and tactile/sign equivalents.
Baseline policy: `00_governance/ACCESSIBILITY_BASELINE.md`. Nago-specific accessibility
notes live per-sign in `07_languages/NAGO_SIGNAGE_GUIDE.md`.

## Future implementation notes

- Phase C (ingestion) is in progress — deeper processing of assets already present,
  logged in `15_archive_recovery/README.md`.
- Episode generation (Phase D, not yet named as such) is blocked on enough locked canon
  to write Episode 1 without fabrication.
- See `docs/production/ROADMAP.md` for the fuller production roadmap.
