# Archive Recovery

A running record of what was ingested, when, from where, and by what method, as the ship
package and future fragments are absorbed into this repository. Entries are added, never
rewritten — if a later pass corrects or extends an earlier one, the correction is logged as
a new entry that says so, rather than silently editing history.

---

## 2026-06-22 — Phase A: initial ship-package ingestion

- **Source:** `UMADA_Aderin_SHIP_v1` ship package.
- **What:** Three realized artifacts (`PLATE_PROTO_NAGO`, `PLATE_NAGO_SYMBOLOGY_OF_UMADA`,
  `UMADA_Friedmandostorp_Rescue_Animatic`) placed in `assets/img/` and `assets/video/`;
  prose canon distributed across `00_governance/`, `01_canon/`, and the numbered topic
  directories; structured data seeded into `data/*.json`.
- **Method:** Direct transcription from the source package and the plates themselves into
  `01_canon/VISUAL_CANON_REGISTRY.md` and `data/visual_artifacts.json`. No transcript of the
  animatic was attempted at this pass.
- **Result:** Repo skeleton, governance, canon, and structured data (Phase A), followed by
  the public site shell (Phase B). See `README.md` build status for the full record.

## 2026-06-22 — Phase C: animatic deep-pass (caption recovery)

- **Source:** `assets/video/UMADA_Friedmandostorp_Rescue_Animatic.mp4`, already present
  since Phase A but never transcribed.
- **What:** Full on-screen caption, comic-panel, and document/credit-text transcription —
  an 11-beat sequence spanning the animatic's 48.58s runtime, including a precise in-world
  date (March 19, 2226), Ada's full credited name and role (Adanna "Ada" Venter, Care
  Shooter), and a new unresolved name juxtaposition ("Kassey") burned across a military
  record in the same panel.
- **Method:** `ffprobe` to confirm container/stream specs (H.264/AAC, 720×1080, 24fps,
  1166 frames). `ffmpeg` frame extraction at 2fps (97 frames) composited into five
  5×4 contact sheets for fast review, followed by ~15 targeted high-resolution single-frame
  extractions and crops (`ffmpeg -ss <time> -frames:v 1 -q:v 1`, then Pillow crop/zoom) to
  confirm exact wording at caption boundaries and on the document/credit cards. Both
  `ffmpeg` and Pillow were installed ad hoc for this pass; neither is a repo dependency.
- **What was deliberately not done:** The audio track (the yellowbirdbeats score, and any
  dialogue it may carry) was not transcribed. No speech-to-text/ASR tooling was available
  in this environment, and per the no-fabrication rule, audio content is not guessed at.
  This gap is logged as still open in `01_canon/OPEN_QUESTIONS.md` (item 22).
- **Judgment call flagged for Kemi:** the name "Kassey," glowing in a different script from
  the typed military record, is recorded as an unresolved juxtaposition with Adanna "Ada"
  Venter's record — not assumed to be an alias, a relative, or unrelated. See
  `01_canon/OPEN_QUESTIONS.md` item 24.
- **Routed to:** `01_canon/VISUAL_CANON_REGISTRY.md` (full transcript and canon
  implications), `data/visual_artifacts.json` (`caption_transcript`, `transcript_note`
  fields), `data/canon.json` (new LOCKED facts; the Kassey juxtaposition under `emerging`),
  `data/characters.json` (Ada's `known_facts` and new `open_question`),
  `data/open_questions.json` and `01_canon/OPEN_QUESTIONS.md` (five new/updated open
  questions), `sections/visual-archive.html` (renders the new transcript on the public
  page).
- **Visual Grammar shape-spec — explicitly deferred.** Five Visual Grammar primitives
  (Circle, Open Circle, Broken Circle, Three Rings, Hand+Ring) on
  `PLATE_NAGO_SYMBOLOGY_OF_UMADA` were inspected at high zoom (Pillow crops) during this
  pass to scope a vector/CSS shape spec (open question 6 in `01_canon/OPEN_QUESTIONS.md`).
  Three are simple enough to describe precisely from pixels alone (closed ring; ring with a
  gap; ring with a gap plus a detached fragment; three concentric rings); the fifth
  (Hand+Ring) is an illustrated hand-and-circle glyph that pixel inspection alone cannot
  responsibly turn into vector path data without crossing from transcription into design
  invention. Rather than ship a partial or approximated spec under a name that implies
  precision, this pass stopped at description and left the open question open, pending
  either a dedicated vector-tracing pass over the source plate or Kemi's call on whether an
  explicitly-labeled approximation is acceptable in the meantime.

## 2026-06-27 — Studio pipeline package ingestion

- **Source:** `umada_studio_pipeline.zip`, delivered as a generic AI-film
  production-pipeline package addressed to "Claude Code Tasks"
  (`09_claude_tasks/CLAUDE_CODE_TASKS.md`), containing a README and nine numbered
  subfolders (`00_canon/` through `09_claude_tasks/`).
- **What:** Captured verbatim as a fragment
  (`13_fragments/2026-06-27_studio_pipeline_package.md`) per
  `00_governance/FRAGMENT_WORKFLOW.md`. Useful production-tooling material was routed
  into the existing governance/production layers: a storyboard panel template
  (`assets/storyboards/STORYBOARD_TEMPLATE.md`), a shot-naming convention
  (`assets/storyboards/README.md`), a storyboard-panel accessibility baseline
  (`00_governance/ACCESSIBILITY_BASELINE.md`), a canon-approval checklist
  (`00_governance/CANON_APPROVAL_CHECKLIST.md`), a storyboard readiness map
  (`docs/production/STORYBOARD_READINESS_MAP.md`), a reusable image-prompt system
  (`docs/production/IMAGE_PROMPT_SYSTEM.md`), an empty shot database
  (`data/storyboard_shots.json`), and EMERGING character visual descriptors for Ada,
  Tallai, Q, and Quartz (`data/characters.json`).
- **Method:** Extract → fragment capture → cross-checked against already-open
  ISSUE-031 through ISSUE-035 (Storyboarding) and the already-recovered rescue-animatic
  transcript before routing, rather than executing the package's task list verbatim.
- **What was deliberately not done:** The package's Task 6 (fabricate 12 storyboard
  shots, prompts, alt-text entries, a timing sheet, and a transcript for the Cape
  Wipeout opening sequence) and Task 4 (build a new, separate static site) were not
  executed. Episode 1 / the Cape Wipeout opening sequence has been deliberately left
  unwritten (root `README.md`, `docs/production/ROADMAP.md`), ISSUE-031/033 explicitly
  scope storyboarding work to templates and readiness mapping only ("do not draft any
  panel content"), and a real, already-realized rescue animatic with a recovered
  caption transcript already covers much of the same material — fabricating parallel
  Cape Wipeout content risked contradicting it. See the fragment's own Canon section for
  the full reasoning.
- **Correction applied:** The package's "Friedmandestorp" typo (locked spelling:
  **Friedmandostorp**) was logged as a fourth recurrence in
  `00_governance/CANON_STATUS.md`, not reintroduced anywhere.
- **Routed to:** see "What" above, plus `01_canon/OPEN_QUESTIONS.md` and
  `data/open_questions.json` (two new tiny questions, items 36–37),
  `02_characters/README.md` (visual-descriptor note),
  `docs/project-management/issues/INDEX.md` and ISSUE-006/007/008/009/031/032/033/034
  (progress notes).
