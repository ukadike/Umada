# Canon Approval Checklist

Status: PROBABLE (process document; not yet exercised on a real artifact)

What must be true before any generated or drafted image, video, or storyboard panel
is marked canon-approved (i.e. moved out of `AWAITING FRAGMENT` / `EMERGING` / draft
status). This checklist governs the *gate*, not the content — it does not authorize
drafting any panel content itself (see `docs/production/STORYBOARD_READINESS_MAP.md`
for what is and isn't ready to storyboard).

## 1. Canon sourcing

- [ ] Every fact/detail in the artifact traces to a LOCKED or PROBABLE entry in
      `00_governance/CANON_STATUS.md`, `01_canon/`, or `data/*.json` — or is explicitly
      tagged EMERGING/OPEN QUESTION rather than presented as settled.
- [ ] No invented canon fills a gap that should be `AWAITING FRAGMENT` instead
      (`00_governance/NO_FABRICATION_RULE.md`).
- [ ] Any contradiction with existing canon is logged in `01_canon/OPEN_QUESTIONS.md`
      and `data/open_questions.json`, never silently overwritten
      (`docs/canon/GOVERNANCE.md`).
- [ ] If the artifact disagrees with a realized plate in `assets/img/` or the rescue
      animatic, the plate/animatic wins and the artifact is corrected, not the reverse.

## 2. Visual-layer compliance

- [ ] The artifact is correctly assigned to the presentation/archive layer (monochrome
      graphite) or the diegetic/world layer (colorful), per
      `00_governance/VISUAL_LAYER_RULES.md` — never blended.
- [ ] Diegetic content reflects the southern-African coastal setting; no Arctic/ice/
      Nordic framing.
- [ ] Real-world place/palette references used as mood-board shorthand stay internal —
      not named in the artifact's public-facing text.

## 3. Accessibility compliance

- [ ] Alt text, accessibility note, and (if applicable) audio-description and tactile/
      sign-equivalent notes are present, per `00_governance/ACCESSIBILITY_BASELINE.md`'s
      storyboard/visual-artifact panel baseline.
- [ ] No meaning is conveyed by color or hover alone.
- [ ] Captions/credit text are captured verbatim, not paraphrased.

## 4. Naming and structure

- [ ] File and shot IDs follow the convention in `assets/storyboards/README.md`.
- [ ] The artifact uses locked spellings only (cross-check
      `00_governance/CANON_STATUS.md`'s Locked spellings section — e.g.
      **Friedmandostorp**, never "Friedmandestorp").

## 5. Sign-off

- [ ] Kemi has confirmed the artifact (per
      `00_governance/TINY_QUESTIONS_PROTOCOL.md` — draft first, ask one tiny question
      only if the draft can't proceed).
- [ ] The artifact's canon-status tag is updated from draft/EMERGING to its approved
      status only after the above are all checked.

## Provenance

Drafted 2026-06-27 in response to a production-pipeline fragment
(`13_fragments/2026-06-27_studio_pipeline_package.md`) that requested a pre-canon-
approval validation step. This checklist composes the repo's existing governance docs
(no-fabrication rule, visual layer rules, accessibility baseline, tiny-questions
protocol) into one gate, rather than introducing new rules.
