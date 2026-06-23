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

Episode 1 has a first-pass draft script —
[`EPISODE_01_CAPE_WIPEOUT_SCRIPT.md`](../../11_episodes/EPISODE_01_CAPE_WIPEOUT_SCRIPT.md)
(2026-06-23) — built without waiting for the open questions below to resolve, by using
only verbatim animatic captions, verbatim locked poetry, and scene description grounded
in already-locked facts; every true gap is marked inline rather than guessed at, and
three new ones were surfaced and logged (`01_canon/OPEN_QUESTIONS.md` #32–#34). The open
questions and `AWAITING FRAGMENT` items tracked in `01_canon/OPEN_QUESTIONS.md` and
`docs/project-management/issues/` still block a fuller script — spoken dialogue, a
frame-narrative setting, anything past the animatic's recovered ~49 seconds — from being
written. See [`NEXT_STEPS.md`](NEXT_STEPS.md) for a prioritized, concrete ordering of
those same items.
