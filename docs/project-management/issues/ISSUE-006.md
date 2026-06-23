# ISSUE-006: Recover Ada's full character dossier

**Category:** Characters

## Objective

Move Ada's dossier from AWAITING FRAGMENT to a filed artifact once the source material arrives.

## Tasks

- Confirm the dossier fragment has not already arrived unprocessed in `13_fragments/`.
- When it arrives, capture it verbatim per `00_governance/FRAGMENT_WORKFLOW.md`.
- Extract canon facts into `data/characters.json` without overwriting the existing locked role-facts.
- Cross-check the "Kassey" open question against the new material before closing it.

## Acceptance Criteria

- `data/characters.json`'s Ada entry has `dossier_status` other than `AWAITING FRAGMENT`, or the stub is confirmed still accurate.
- Any newly confirmed facts are cited to the fragment that supplied them.

## Dependencies

- 01_canon/VISUAL_CANON_REGISTRY.md
- 01_canon/OPEN_QUESTIONS.md #24
