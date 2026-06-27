# ISSUE-035: Cross-check storyboard template against the animatic's recovered structure

**Category:** Storyboarding

## Objective

Verify the storyboard template (ISSUE-031) is structurally compatible with the rescue animatic's already-recovered caption transcript, so future storyboards and the one realized animatic can be compared apples-to-apples.

## Tasks

- Compare the template's fields against `data/visual_artifacts.json`'s `caption_transcript` structure.
- Adjust either structure for consistency.

## Acceptance Criteria

- The two structures use compatible field names for panel, timestamp/sequence, and caption.

## Dependencies

- ISSUE-031
- data/visual_artifacts.json

## Progress (2026-06-27)

Resolved. `assets/storyboards/STORYBOARD_TEMPLATE.md` uses `time` and `text` as its
panel/timestamp/caption field names, matching `data/visual_artifacts.json`'s
`caption_transcript.time` / `caption_transcript.text` exactly, so the template and the
animatic's recovered transcript are directly comparable without renaming either
structure.
