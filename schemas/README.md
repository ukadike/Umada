# Schemas

JSON Schema (2020-12) definitions for every file in `data/`. These describe *shape*, not
canon — they validate that a record has the fields a consumer (the static site, a future
build script) expects, never what its values should say. Adding a field to a `data/*.json`
file should usually mean widening its schema, not the other way around; every schema here
sets `"additionalProperties": true` for exactly that reason — canon is still emerging, and
a schema that rejects an unanticipated field would block legitimate canon work.

This folder is the structural half of
[`docs/project-management/issues/ISSUE-041.md`](../docs/project-management/issues/ISSUE-041.md)
("Build a JSON schema validator for `data/*.json`"). The schemas exist; the validator
script that runs them against the live data files (and checks referenced `0X_`
documents/sections still exist) is the remaining, still-open half of that issue.

## Files

| Schema | Validates |
| --- | --- |
| `canon.schema.json` | `data/canon.json` |
| `characters.schema.json` | `data/characters.json` |
| `civilizational_ledger.schema.json` | `data/civilizational_ledger.json` |
| `factions.schema.json` | `data/factions.json` |
| `nago_proto_signs.schema.json` | `data/nago_proto_signs.json` |
| `nago_signs.schema.json` | `data/nago_signs.json` |
| `nago_symbology.schema.json` | `data/nago_symbology.json` |
| `open_questions.schema.json` | `data/open_questions.json` |
| `rescue_doctrine.schema.json` | `data/rescue_doctrine.json` |
| `sources.schema.json` | `data/sources.json` |
| `timeline.schema.json` | `data/timeline.json` |
| `visual_artifacts.schema.json` | `data/visual_artifacts.json` |

## Conventions

- Draft: `https://json-schema.org/draft/2020-12/schema`.
- `$id` values are repo-relative (`umada/schemas/<name>.schema.json`), not a hosted URL —
  no public schema host exists yet, so none is asserted.
- Canon status strings (`LOCKED`, `PROBABLE`, `EMERGING`, `OPEN QUESTION`, `RETIRED`, and
  their compound forms like `"LOCKED / EMERGING"`) are typed as free-form strings, not
  enums, since compound and parenthetical status forms are already in active use across
  `data/*.json` and constraining them here would fight the canon engine instead of
  serving it.
- Only fields observed present on every record of a file are marked `required`.
