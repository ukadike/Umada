# ISSUE-024: Color-only-meaning audit of the site and status tags

**Category:** Accessibility

## Objective

Verify no meaning on the site (including the `.status-tag` component) is conveyed by color alone.

## Tasks

- Review `assets/css/main.css`'s status-tag implementation.
- Confirm it distinguishes by border style as documented, not color alone.
- Spot-check all five status tags under a grayscale/colorblind simulation.

## Acceptance Criteria

- Every status tag is distinguishable without color.

## Dependencies

- assets/css/README.md
- 00_governance/ACCESSIBILITY_BASELINE.md
