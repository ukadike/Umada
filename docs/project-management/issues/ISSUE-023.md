# ISSUE-023: Keyboard-navigation audit of the public site

**Category:** Accessibility

## Objective

Verify the Phase B site (`index.html`, `sections/`) is fully keyboard-operable with no mouse-only or hover-only interaction.

## Tasks

- Manually tab through every interactive control in the live site.
- Check `assets/js/accessibility.js` and `assets/js/nav.js` against the baseline.
- Fix or log any control that fails.

## Acceptance Criteria

- Every interactive control is reachable and operable by keyboard alone.
- Any failures are logged as issues, not silently left.

## Dependencies

- 00_governance/ACCESSIBILITY_BASELINE.md
- assets/js/accessibility.js
