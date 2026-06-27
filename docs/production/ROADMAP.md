# Production Roadmap

Status as recorded in the root `README.md`, which remains authoritative for build
phase status.

## Phase A — Spine (done)

Repo skeleton, governance, canon, and structured data, seeded from the source package
with nothing invented.

## Phase B — Site (done)

`index.html` and 20 public sections in `sections/`, built on a framework-free static
shell (`assets/css/main.css`, `assets/js/{data-loader,nav,accessibility}.js`) that
renders straight from `data/*.json` — no build step required to run the site.

## Phase C — Ingestion (in progress)

Archive-recovery logs (`15_archive_recovery/README.md`,
`20_visual_canon_registry/README.md`) and deeper processing of the artifacts already
present in `assets/`. First pass complete: full on-screen caption transcript recovered
from the rescue animatic, surfacing the locked date (March 19, 2226), Ada's full
credited name and role, and the open question about "Kassey."

## This layer (`/docs`) — added alongside, not a new phase

`/docs` is a production-bible read of the canon engine for people doing production work.
It does not block or reorder Phases A–C. See `docs/canon/GOVERNANCE.md` for how it
relates to the engine, and `docs/project-management/issues/INDEX.md` for the open work
items it tracks, grouped by production category (Worldbuilding, Characters, Timeline,
Production Bible, Accessibility, Visual Development, Storyboarding, Animation
Preparation, Website Preparation, Research).

## What comes next

No episode has been written. The next concrete production step — writing Episode 1 — is
deliberately blocked until enough of the open questions and `AWAITING FRAGMENT` items
tracked in `01_canon/OPEN_QUESTIONS.md` and `docs/project-management/issues/` are
resolved that the episode can be generated from recovered canon rather than guessed at.

## Tooling addendum (2026-06-27)

A production-pipeline fragment (`13_fragments/2026-06-27_studio_pipeline_package.md`)
added reusable tooling without unblocking Episode 1 itself: a storyboard panel
template, a shot-naming convention, a storyboard-panel accessibility baseline, a
canon-approval checklist, a storyboard readiness map, and a reusable image-prompt
system (see `15_archive_recovery/README.md`'s 2026-06-27 entry for the full list).
This is groundwork for whenever Episode 1 is unblocked — it does not itself move the
"What comes next" block above.
