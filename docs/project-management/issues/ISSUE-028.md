# ISSUE-028: Seed the Environment signage family

**Category:** Visual Development

## Objective

Begin seeding the Environment function family (currently EMERGING with zero signs) once any fragment provides care-of-place/land/water/weather marks.

## Tasks

- Monitor incoming fragments for environment-themed signage.
- When one arrives, route it through `00_governance/FRAGMENT_WORKFLOW.md` rather than inventing a placeholder sign.
- Update `data/nago_symbology.json`.

## Acceptance Criteria

- The Environment family has at least one real, sourced sign, or remains explicitly empty with the reason restated rather than silently dropped.

## Dependencies

- 07_languages/NAGO_SYMBOLOGY_BIBLE.md
- 01_canon/OPEN_QUESTIONS.md #2
