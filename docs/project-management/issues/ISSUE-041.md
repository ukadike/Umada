# ISSUE-041: Build a JSON schema validator for data/*.json

**Category:** Website Preparation

## Objective

Catch drift between `data/*.json` files and the documents that cite them automatically, rather than relying on manual review.

## Tasks

- Write a script that validates each `data/*.json` file's structure.
- Have it check that referenced `0X_` documents/sections still exist.
- Document manual invocation (or wire into CI if one exists).

## Acceptance Criteria

- Running the script against the current repo passes with zero errors.

## Dependencies

- data/
- 00_governance/CANON_STATUS.md
