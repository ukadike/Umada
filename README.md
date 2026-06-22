# UMADA

> This is not a world that was built. It is a world being remembered.
> Some records survived. Some did not. Some stories were erased. Some refused to disappear.
> If you stay long enough, you may help us remember.

This repository is the living archive, canon engine, and (eventually) public site for
UMADA — built and maintained under **Aderin / UMADA Steward** mode. See `CLAUDE.md` for
the steward's role and operating rules.

## What this is

- A canon engine: locked, probable, emerging, and open-question world facts, with no
  fabrication and a full audit trail.
- A living archive: source documents, governance rules, and structured data that the
  public site and future episodes are generated from.
- Not yet a finished show. Episode 1 has deliberately not been written — this repository
  builds the system that lets it be generated precisely from recovered canon.

## Where things live

- `CLAUDE.md` — the steward brief. Read this first.
- `00_governance/` — the rules: no-fabrication, canon status, accessibility baseline,
  visual layer rules, tiny-questions protocol, fragment workflow, no-generic-glyphs rule.
- `01_canon/` — seed canon, foundational strata, the civilizational ledger, founding myths,
  the visual canon registry, and the open-questions register.
- `02_characters/` … `09_accessibility/` — numbered topic directories (characters,
  relationships, species, world/places, timelines, languages, technology, accessibility).
  Most currently hold a short index pointing to the canon files above rather than
  duplicating them, since very little world detail exists yet beyond what's locked.
- `07_languages/` — the Nago language and signage system documents.
- `10_visuals/`, `11_episodes/`, `12_seasons/`, `13_fragments/`, `14_research/`,
  `15_archive_recovery/`, `16_fanbase/`, `18_fan_archive/`, `19_founding_myths/`,
  `20_visual_canon_registry/` — production, fragment-intake, fanbase, and recovery-log
  directories, populated as the build proceeds and as fragments arrive.
- `data/` — structured JSON the site and tooling read from (canon, timeline, characters,
  factions, visual artifacts, Nago signs and symbology, rescue doctrine, civilizational
  ledger, sources, open questions).
- `assets/img/`, `assets/video/` — the realized Nago plates and the Friedmandostorp
  rescue animatic: the **visual source of truth**. Where any document disagrees with a
  plate, the plate wins.
- `sections/`, `assets/css/`, `assets/js/`, `index.html` — the public site (Phase B).

## Build status

This repository is being built in three phases — see `CLAUDE_CODE_MASTER_PROMPT.md` in
the originating ship package for the full spec:

- **Phase A — Spine** (done): repo skeleton, governance, canon, and structured
  data, seeded from the source package with nothing invented.
- **Phase B — Site** (done): `index.html` and 20 public sections in `sections/`,
  built on a framework-free static shell (`assets/css/main.css`,
  `assets/js/{data-loader,nav,accessibility}.js`) that renders straight from
  `data/*.json` — no build step required to run the site.
- **Phase C — Ingestion:** archive-recovery logs and deeper processing of the artifacts
  already present in `assets/`. Not yet started.

## Canonical facts, locked hard

- Settlement spelling: **Friedmandostorp**.
- Geography: southern-African coastal, Southern Cape corridor, near Cape Agulhas —
  **never Arctic**.
- Core survival signs (eight): Bread, Water, Safe, Danger, Carry, Home, Help, Rest.

Full detail: `00_governance/CANON_STATUS.md`.

## Contributing

Fans and collaborators contribute **signal, not automatic canon**, through the Faraday
Box (`16_fanbase/`). See `18_fan_archive/` for how contributions and development history
are preserved.
