# ISSUE-009: Recover Quartz's full character dossier

**Category:** Characters

## Objective

Move Quartz's dossier from AWAITING FRAGMENT to a filed artifact, and resolve Quartz's absence from the Nago plate's Honor & Origin line.

## Tasks

- Confirm no unprocessed fragment already exists.
- Capture and extract per `00_governance/FRAGMENT_WORKFLOW.md` when it arrives.
- Ask whether Quartz's absence from the Honor & Origin line is intentional or predates lock-in (#7).
- Update `data/characters.json` and `02_characters/README.md`.

## Acceptance Criteria

- `data/characters.json`'s Quartz entry has `dossier_status` other than `AWAITING FRAGMENT`, or the stub is confirmed still accurate.
- `01_canon/OPEN_QUESTIONS.md` #7 is resolved or re-confirmed open.

## Dependencies

- 00_governance/FRAGMENT_WORKFLOW.md
- 01_canon/OPEN_QUESTIONS.md #7

## Progress (2026-06-27)

A fragment (`13_fragments/2026-06-27_studio_pipeline_package.md`) supplied a visual/
style descriptor for Quartz, logged EMERGING in `data/characters.json`'s
`known_facts`. `dossier_status` updated to note the visual descriptor is EMERGING
while the full biographical dossier remains AWAITING FRAGMENT. Does not resolve #7
(Quartz's absence from the Honor & Origin line).
