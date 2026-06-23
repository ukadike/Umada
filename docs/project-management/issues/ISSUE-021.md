# ISSUE-021: Produce the animatic audio transcript

**Category:** Accessibility

## Objective

Close the one confirmed accessibility gap on the rescue animatic — the audio track (yellowbirdbeats score, any dialogue) has no transcript.

## Tasks

- Source or commission speech-to-text/music-description tooling.
- Transcribe the audio track verbatim.
- File into `data/visual_artifacts.json`'s `caption_transcript` alongside the existing on-screen transcript.
- Update `01_canon/OPEN_QUESTIONS.md` #22.

## Acceptance Criteria

- The animatic has a complete audio transcript or description, sourced from real listening, not inferred.
- `01_canon/OPEN_QUESTIONS.md` #22 is resolved or narrowed.

## Dependencies

- data/visual_artifacts.json
- 01_canon/VISUAL_CANON_REGISTRY.md
