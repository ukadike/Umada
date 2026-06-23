# ISSUE-040: Audit chimera/cyborg sign usability notes for animation handoff

**Category:** Animation Preparation

## Objective

Verify every Nago sign's "usable by humans, chimeras, cyborgs, or all" note (required by the Symbology Bible's accessibility requirements) is filled in before animation work needs it.

## Tasks

- Enumerate every sign in `data/nago_signs.json`.
- Check for the usability note on each.
- Fill gaps only from existing canon; flag unknowns as `OPEN QUESTION` rather than guessed.

## Acceptance Criteria

- Every LOCKED sign has a usability note populated or explicitly flagged as open.

## Dependencies

- 07_languages/NAGO_SYMBOLOGY_BIBLE.md
- data/nago_signs.json
