# ISSUE-044: Verify reduced-motion behavior site-wide

**Category:** Website Preparation

## Objective

Confirm the live site actually respects `prefers-reduced-motion`, not just that the rule is documented.

## Tasks

- Test the site with the OS-level reduced-motion setting enabled.
- Check `assets/js/accessibility.js`'s handling.
- Fix any autoplaying motion that doesn't pause or disable.

## Acceptance Criteria

- No motion plays automatically when `prefers-reduced-motion` is set, verified by manual test.

## Dependencies

- assets/js/accessibility.js
- 00_governance/ACCESSIBILITY_BASELINE.md
