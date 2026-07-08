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

## 2026-07-08 — Kemi asset drop (17 files)

- **Source:** Kemi, direct file drop, no accompanying text.
- **What:** 15 new assets preserved into `assets/` (13 canon-bearing images to
  `concept-art/` and `img/`; 2 real-world references to `assets/reference/`); 2 files were
  byte-identical duplicates of existing repo assets (the animatic and the locked Tallai/Ada
  rescue reference) and were not re-copied.
- **Highlights:** first design sheets for **Q** and **Quartz**; a **Cape Wipeout cast
  board**; reconception sheets casting **Ada (A-7)** and **Tallai (T-11)** as "UMADA Labs"
  heart-reader experiments; the **Omoluabi device** product design; a **Cape Refuge
  Laboratory** facility plate; a **Small Systems Lab "Nago Glyphs"** value-glyph sheet
  (Yorùbá) plus clay-tablet plates; and a monochrome "Coming Soon" branding card.
- **Method:** each image viewed and described from legible content; md5 checksums compared
  against repo assets to catch duplicates.
- **Not done / flagged:** nothing promoted to LOCKED. The drop contains **direct conflicts
  with locked canon** (two incompatible chimera-survivor design directions; an Ada
  reconception that contradicts locked age/appearance/role; C.A.R.F. "Foundation" vs
  "Facility"; a retired settlement spelling on one sign; proliferating lab names; glyph-name
  variance across plates). All are logged, none reconciled unilaterally.
- **Routed to:** full catalog in `15_archive_recovery/2026-07-08_asset_drop_ingestion.md`;
  eight new open questions (`01_canon/OPEN_QUESTIONS.md` #39–#46,
  `data/open_questions.json`); a blocking tiny question put to Kemi (which design direction
  is canonical). Dossiers and `VISUAL_CANON_REGISTRY.md` are intentionally **not** updated
  until Kemi resolves the design direction, so locked canon is not overwritten by candidate
  material.
