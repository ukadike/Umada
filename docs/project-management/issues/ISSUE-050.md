# ISSUE-050: Build a source-provenance index

**Category:** Research

## Objective

Give every locked or probable canon fact a traceable citation back to the source document or fragment that established it, extending `data/sources.json`'s existing coverage.

## Tasks

- Audit `data/sources.json` against `00_governance/CANON_STATUS.md` and `01_canon/SEED_CANON.md` for any locked fact without a listed source.
- Fill gaps only by citing what's actually there; never invent a source.

## Acceptance Criteria

- Every LOCKED entry in `CANON_STATUS.md` has a traceable entry in `data/sources.json`.

## Dependencies

- data/sources.json
- 00_governance/CANON_STATUS.md
