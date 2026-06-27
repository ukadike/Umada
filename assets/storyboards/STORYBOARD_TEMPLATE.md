# Storyboard Panel Template

Status: EMERGING (template only — no episode content filled in)

This is a field schema, not a storyboard. It exists so that when Episode 1 (or any
other episode) is eventually storyboarded, panels are captured in a consistent,
accessible, cross-referenceable structure from the first panel onward. Per
`00_governance/NO_FABRICATION_RULE.md`, no panel content is drafted here — see
`docs/production/STORYBOARD_READINESS_MAP.md` for which locked anchors are even
eligible for storyboarding, and `assets/storyboards/README.md` for the file-naming
convention to use once real panels are filed.

Fields mirror the panel structure already recovered from the rescue animatic
(`01_canon/VISUAL_CANON_REGISTRY.md`'s `caption_transcript`), and `time`/`text` are
named to match `data/visual_artifacts.json`'s `caption_transcript` fields directly
(ISSUE-035), so a future storyboard and the one realized animatic can be compared
panel-for-panel without renaming anything.

## Per-panel fields

| Field | Required | Description |
|---|---|---|
| `shot_id` | yes | Unique ID per the convention in `assets/storyboards/README.md`. |
| `time` | yes | Timestamp or sequence range, e.g. `0:00–0:05`. Matches `caption_transcript.time`. |
| `text` | yes | On-screen caption/credit/document text only — not a narrative description. Matches `caption_transcript.text`. |
| `scene_id` | yes | Scene grouping this panel belongs to. |
| `characters` | yes | Characters appearing in the panel, by locked name (`data/characters.json`). |
| `location` | yes | Locked location name (`01_canon/` / `00_governance/CANON_STATUS.md`). |
| `canon_status` | yes | LOCKED / PROBABLE / EMERGING / OPEN QUESTION for this panel's content. |
| `visual_continuity_notes` | yes | Continuity notes against prior panels/artifacts (e.g. realized plates, the animatic). |
| `motion_description` | if animated | Camera/motion description, only if the panel feeds video/animatic work. |
| `accessibility_note` | yes | Required per panel. Alt text, audio-description note, and tactile/sign equivalent where relevant — see `00_governance/ACCESSIBILITY_BASELINE.md`. |
| `open_questions` | no | Any open question blocking or qualifying this panel, cross-referenced to `01_canon/OPEN_QUESTIONS.md`. |

## Example row (schema only — not real content)

```json
{
  "shot_id": "[PENDING — see assets/storyboards/README.md naming convention]",
  "time": "0:00–0:00",
  "text": "[AWAITING FRAGMENT]",
  "scene_id": "[AWAITING FRAGMENT]",
  "characters": [],
  "location": "[AWAITING FRAGMENT]",
  "canon_status": "OPEN QUESTION",
  "visual_continuity_notes": "[AWAITING FRAGMENT]",
  "motion_description": "[AWAITING FRAGMENT]",
  "accessibility_note": "[AWAITING FRAGMENT]",
  "open_questions": []
}
```

## Provenance

Field schema drafted 2026-06-27 in response to a production-pipeline fragment
(`13_fragments/2026-06-27_studio_pipeline_package.md`) that proposed a similar but
incompatible panel schema. This template adapts the useful structural idea while
keeping field names aligned to the repo's existing `caption_transcript` structure,
per ISSUE-031 and ISSUE-035. No panel content from that fragment's sample storyboard
(`CW-001`…`CW-006`) is reproduced here.
