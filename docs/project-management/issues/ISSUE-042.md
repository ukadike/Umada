# ISSUE-042: Audit sections/ pages against their data/*.json sources

**Category:** Website Preparation

## Objective

Verify every public site section renders only what's in `data/*.json`, with no hardcoded fact that has drifted from the JSON.

## Tasks

- Diff each `sections/*.html` page's static text against the JSON it's meant to read from.
- Fix any drift by pointing back to `data-loader.js` rendering instead of hardcoding.

## Acceptance Criteria

- No section page contains a fact that contradicts its corresponding `data/*.json` file.

## Dependencies

- assets/js/data-loader.js
- sections/
