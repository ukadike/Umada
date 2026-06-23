# ISSUE-045: Add a broken-link / cross-reference check across the repo

**Category:** Website Preparation

## Objective

Catch dangling references — like `01_canon/OPEN_QUESTIONS.md` item numbers or file paths cited in `docs/` and `sections/` — that no longer resolve after future edits.

## Tasks

- Write a script that extracts markdown links and backtick-quoted file paths.
- Have it verify each reference resolves.
- Run it against the current repo and fix any failures found.

## Acceptance Criteria

- The script reports zero broken references against the current repo state.

## Dependencies

- docs/
- sections/
- 01_canon/
