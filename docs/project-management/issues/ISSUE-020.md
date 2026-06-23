# ISSUE-020: Audit cross-links between /docs and the canon engine

**Category:** Production Bible

## Objective

Verify every fact restated in `/docs` still matches its canon-engine source after ISSUE-001–019 land, since several of those issues change the underlying ledger.

## Tasks

- Re-read every `docs/*.md` file against its cited source after each canon change.
- Fix any drift immediately rather than batching it.
- Record any found drift as a contradiction per `docs/canon/GOVERNANCE.md`.

## Acceptance Criteria

- No `docs/*.md` file contradicts `00_governance/CANON_STATUS.md` or `01_canon/` after this pass.

## Dependencies

- ISSUE-001
- ISSUE-002
- ISSUE-003
- ISSUE-004
- ISSUE-005
- ISSUE-016
- ISSUE-017
