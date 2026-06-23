# ISSUE-008: Recover Q's full character dossier

**Category:** Characters

## Objective

Move Q's dossier from AWAITING FRAGMENT to a filed artifact once the source material arrives.

## Tasks

- Confirm no unprocessed fragment already exists.
- Capture and extract per `00_governance/FRAGMENT_WORKFLOW.md` when it arrives.
- Update `data/characters.json` and `02_characters/README.md`.

## Acceptance Criteria

- `data/characters.json`'s Q entry has `dossier_status` other than `AWAITING FRAGMENT`, or the stub is confirmed still accurate.

## Dependencies

- 00_governance/FRAGMENT_WORKFLOW.md
