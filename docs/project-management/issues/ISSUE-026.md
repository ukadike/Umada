# ISSUE-026: Build the vector/CSS shape spec for the five Visual Grammar primitives

**Category:** Visual Development

## Objective

Close #6 — no vector/CSS-level shape spec exists yet for Circle, Open Circle, Broken Circle, Three Rings, and Hand+Ring, so the site approximates rather than precisely reproduces them.

## Tasks

- Measure the primitives directly off `PLATE_NAGO_SYMBOLOGY_OF_UMADA.png`.
- Derive a Golden-Rectangle-based construction spec for each.
- Implement as SVG or CSS in `assets/css/` or a new vector asset set.
- Verify against the plate pixel-for-pixel where possible.

## Acceptance Criteria

- Each of the five primitives has a buildable shape spec checked into the repo and matching the plate.
- `01_canon/OPEN_QUESTIONS.md` #6 is resolved.

## Dependencies

- assets/img/PLATE_NAGO_SYMBOLOGY_OF_UMADA.png
- 01_canon/OPEN_QUESTIONS.md #6
