# ISSUE-031: Build a storyboard template

**Category:** Storyboarding

## Objective

Create a reusable storyboard template (panel/shot/dialogue/caption/accessibility-note structure) for when Episode 1 is eventually storyboarded — without storyboarding any content yet.

## Tasks

- Define the template's fields, mirroring the rescue animatic's existing panel structure as a reference point.
- Include an accessibility-note field per panel.
- File the template in `assets/storyboards/`.

## Acceptance Criteria

- A template file exists in `assets/storyboards/` with no actual episode content filled in.

## Dependencies

- assets/storyboards/README.md
- data/visual_artifacts.json

## Progress (2026-06-27)

Resolved. `assets/storyboards/STORYBOARD_TEMPLATE.md` filed with a panel/shot/
character/location/accessibility-note field schema mirroring the rescue animatic's
panel structure, including a required `accessibility_note` field per panel. No
episode content filled in — see the template's own provenance note for why the
fragment's sample storyboard content was not carried over.
