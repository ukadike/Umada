# UMADA Production Bible (`/docs`)

This is a production-bible layer, added alongside — not instead of — the existing canon
engine. It exists for people doing production work (writing, art, accessibility,
website, research) who want a single browsable index; it is not a second canon
authority. See `docs/canon/GOVERNANCE.md` for exactly how this layer relates to
`00_governance/`, `01_canon/`, and `data/*.json`, which remain the source of truth.

If you're looking for the canon engine itself, start at the root `README.md` instead.

## Index

- **[Canon Governance](canon/GOVERNANCE.md)** — source-of-truth policy, contradiction
  tracking, retcon process, naming conventions, timeline management, versioning, and
  the canon review workflow for this layer.
- **[World Overview](world/OVERVIEW.md)**
  - [History Overview](world/history/OVERVIEW.md) · [Timeline](world/history/TIMELINE.md)
  - [Technology Overview](world/technology/OVERVIEW.md)
  - [Political Systems](world/politics/OVERVIEW.md)
  - [Language Overview](world/languages/OVERVIEW.md)
  - `world/cultures/`, `world/economics/`, `world/geography/` — reserved, no canon yet
- **[Character Index](characters/INDEX.md)**
- **[Faction Index](factions/INDEX.md)**
- **[Event Index](events/INDEX.md)**
- `episodes/` — reserved; Episode 1 has deliberately not been *scripted* yet. The locked
  facts it will draw from are scaffolded in
  [`11_episodes/EPISODE_01_CAPE_WIPEOUT.md`](../11_episodes/EPISODE_01_CAPE_WIPEOUT.md).
- **[Visual Language Guide](production/VISUAL_LANGUAGE_GUIDE.md)**
- **[Production Roadmap](production/ROADMAP.md)** · **[Next Steps](production/NEXT_STEPS.md)**
  · **[Repo Health Checklist](production/REPO_HEALTH_CHECKLIST.md)**
- **[Research Index](research/INDEX.md)**
- **[Contributor Guide](../docs/CONTRIBUTOR_GUIDE.md)**
- **[Project Management / Issues](project-management/issues/INDEX.md)** — Issue-001
  through Issue-050, grouped by production phase
- `../prompts/` — image-generation prompt notes, reused across future concept art and
  storyboards; restates locked visual canon only, never invents an unlocked appearance.
- `../schemas/` — JSON Schema definitions for every `data/*.json` file.

## Accessibility

This layer inherits the repository's accessibility baseline
(`00_governance/ACCESSIBILITY_BASELINE.md`) rather than restating it: assume blind,
low-vision, keyboard-only, and screen-reader contributors throughout; no meaning by
color or hover alone; captions/transcripts once they exist, never invented in the
meantime.
