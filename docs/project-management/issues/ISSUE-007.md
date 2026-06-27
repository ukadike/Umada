# ISSUE-007: Recover Tallai/Talla's full character dossier

**Category:** Characters

## Objective

Move Tallai/Talla's dossier from AWAITING FRAGMENT to a filed artifact once the source material arrives.

## Tasks

- Confirm the dossier fragment has not already arrived unprocessed.
- Capture and extract per `00_governance/FRAGMENT_WORKFLOW.md` when it does.
- Resolve in parallel with, but do not block on, ISSUE-001 (Talla vs Tallai spelling).
- Update `data/characters.json` and `02_characters/README.md`.

## Acceptance Criteria

- `data/characters.json`'s Tallai/Talla entry has `dossier_status` other than `AWAITING FRAGMENT`, or the stub is confirmed still accurate.

## Dependencies

- ISSUE-001
- 00_governance/FRAGMENT_WORKFLOW.md

## Progress (2026-06-27)

A fragment (`13_fragments/2026-06-27_studio_pipeline_package.md`) supplied a visual/
style descriptor for Tallai, logged EMERGING in `data/characters.json`'s
`known_facts`. `dossier_status` updated to note the visual descriptor is EMERGING
while the full biographical dossier remains AWAITING FRAGMENT. Does not resolve
ISSUE-001 (Talla vs Tallai spelling).
