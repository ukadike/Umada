# ISSUE-022: Screen-reader label audit for Nago signs

**Category:** Accessibility

## Objective

Verify every Nago sign already defined in `data/nago_signs.json` and `data/nago_proto_signs.json` carries a screen-reader label per the accessibility baseline.

## Tasks

- Enumerate every sign entry in both files.
- Check each against the ten required fields in `00_governance/ACCESSIBILITY_BASELINE.md`.
- Flag and fix any missing field; do not invent a label for a sign whose meaning is itself unconfirmed.

## Acceptance Criteria

- Every LOCKED or PROBABLE sign entry has a non-empty screen-reader label.

## Dependencies

- 00_governance/ACCESSIBILITY_BASELINE.md
- data/nago_signs.json
