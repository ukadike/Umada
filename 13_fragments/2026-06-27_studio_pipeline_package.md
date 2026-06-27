# Fragment

- id: fragment_2026_06_27_studio_pipeline_package_001
- date: 2026-06-27
- source: Kemi — delivered as `umada_studio_pipeline.zip`, containing `README.md` and nine
  numbered subfolders (`00_canon/` through `09_claude_tasks/`)
- type: prompt (a production-pipeline brief and task list addressed to Claude Code, not a
  narrative or visual fragment)
- raw content: |

  ### `README.md`

  # UMADA Studio Pipeline

  A production workflow for turning UMADA from canon, scripts, and visual references into
  consistent AI-assisted storyboards, animatics, video sequences, and accessible release
  materials.

  This package is designed for GitHub, Claude Code, image/video generation tools, and
  human editorial control.

  ## Core Principle

  UMADA is not just AI film content. It is a worldbuilding, accessibility, civic-memory,
  and speculative-systems project. AI tools assist production, but canon, ethics,
  continuity, and accessibility remain human-governed.

  ## Pipeline Overview

  1. Canon lock
  2. Script breakdown
  3. Visual bible
  4. Character consistency system
  5. Scene prompt generation
  6. Storyboard frames
  7. Animatic assembly
  8. Video generation
  9. Accessibility pass
  10. Release package

  ## Recommended Folder Structure

  ```text
  umada-studio/
    00_canon/
    01_scripts/
    02_visual_bible/
    03_prompts/
    04_storyboards/
    05_assets/
    06_video_pipeline/
    07_accessibility/
    08_release/
    09_claude_tasks/
  ```

  ## First Production Target

  Start with the opening Cape Wipeout sequence:

  - Five ticks
  - No sixth tick
  - Blast
  - Friedmandestorp marketplace before disaster
  - Ada injured
  - Tallai discovers Ada
  - Q observes from above
  - Quartz protects the escape
  - Omoluabi device records fragmented history

  ### `00_canon/UMADA_CANON_LOCK.md`

  # UMADA Canon Lock

  ## Non-Negotiables

  - UMADA is a future African/diasporic speculative world.
  - The visual tone begins as charcoal, graphite, ink wash, documentary realism, and
    archival scientific illustration.
  - The opening event is the Cape Wipeout near Cape Agulhas.
  - Friedmandestorp is an ordinary coastal market settlement before history changes.
  - Nothing in the market should visually announce disaster before the blast.
  - Omoluabi is not the main subject of UMADA, but it is present as a recording/governance
    device.
  - Accessibility is part of the world, the production method, and the release format.

  ## Opening Canon

  The story begins with ticking:

  > tick, tick, tick, tick, tick

  There is no sixth tick.

  Then the blast.

  ## Core Characters

  ### Ada / Adanna Venter

  Lead character for the first movement. Black woman, future cybernetic survivor,
  initially badly injured during the Cape Wipeout. Visual reference energy: elegant,
  strong, Iman-like presence.

  ### Tallai

  Nonhuman chimera care-being. Tall, veiled, patient, observant. Communicates through
  gesture, touch, posture, and telepathic impressions. Loves morning bread. First major
  care encounter with Ada.

  ### Q

  Small intelligent chimera. Insect-like but more humanoid than monstrous. Clicks,
  gestures, telepathic fragments. Curious, funny, analytical, watchful.

  ### Quartz

  Massive protector chimera. Gentle, large, Snuffleupagus-like presence. Protective,
  quiet, emotionally intelligent.

  ## Design Constraint

  No glossy sci-fi. No cyberpunk. No generic AI fantasy. Everything must feel inhabited,
  historical, tactile, and documentable.

  ### `01_scripts/OPENING_SEQUENCE_BEAT_SHEET.md`

  # UMADA Opening Sequence Beat Sheet

  ## Sequence Title
  Cape Wipeout: No Sixth Tick

  ## Format
  Short cinematic animatic / proof-of-concept sequence.

  ## Beat 1 — The Market Breathes
  Friedmandestorp marketplace in warm afternoon light. Traders, children, humans, early
  chimeras, baskets, bread, stone walls, weathered concrete, coastal wind. No threat is
  visible.

  ## Beat 2 — The Device Listens
  A disguised future reporter/orator/time traveler moves through the edge of the market
  holding an Omoluabi device. The device records sound, gesture, translation fragments,
  consent markers, and environmental signals.

  ## Beat 3 — Five Ticks
  Close-up fragments: a hand, a cup, cloth moving, dust in light, a child turning, a
  chimera blinking.

  Sound:

  tick
  tick
  tick
  tick
  tick

  No sixth tick.

  ## Beat 4 — Blast
  A violent discontinuity. The image does not become spectacle. It becomes archival
  rupture: whiteout, graphite smear, torn paper, silence, ringing, debris.

  ## Beat 5 — Ada
  Ada lies injured away from the immediate blast path. Her body is alive but damaged. No
  gore. The scene emphasizes shock, breath, dust, and survival.

  ## Beat 6 — Tallai Finds Her
  Tallai enters cautiously. Tallai does not attack. Tallai observes, kneels, reaches, and
  begins care.

  ## Beat 7 — Q Watches
  Q appears above broken laboratory or market structure, clicking softly, scanning
  danger, relaying impressions.

  ## Beat 8 — Quartz Shields
  Quartz enters slowly, enormous and gentle. Dust falls across its body. It positions
  itself between Ada/Tallai and danger.

  ## Beat 9 — Recorded History
  The Omoluabi device glitches but continues recording. It captures fragments future
  councils will later misread, fight over, and need to reconstruct.

  ## Beat 10 — Exit Into Mystery
  The care-beings move Ada out. The world has changed, but the story stays intimate:
  rescue before explanation.

  ### `02_visual_bible/VISUAL_BIBLE_STARTER.md`

  # UMADA Visual Bible Starter

  ## Base Style

  - Charcoal drawing
  - Graphite
  - Ink wash
  - Worn archival paper
  - Documentary realism
  - Scientific illustration aesthetic
  - Slow observational storytelling
  - Painterly light
  - High contrast
  - Dust and coastal atmosphere

  ## Avoid

  - Glossy futuristic design
  - Neon cyberpunk
  - Generic Afrofuturism tropes
  - Overdesigned armor
  - Horror-monster chimeras
  - Explosion spectacle as entertainment

  ## Palette Language

  Use mostly grayscale, charcoal, ivory, ash, stone, weathered concrete, muted coastal
  browns, and very restrained warm light.

  ## Camera Language

  - Observational, not heroic
  - Human-height framing
  - Archival close-ups
  - Slow pans
  - Tactile object shots
  - Survival details
  - Faces and hands matter

  ## Accessibility in Visual Design

  Every generated image should have:

  - Alt text
  - Scene ID
  - Character list
  - Location
  - Canon status
  - Visual continuity notes
  - Motion description if used for video

  ### `03_prompts/PROMPT_SYSTEM.md`

  # UMADA Prompt System

  ## Master Prompt Template

  ```text
  Create a [medium/shot type] for UMADA.

  Scene ID: [SCENE_ID]
  Location: [LOCATION]
  Time: [TIME]
  Characters: [CHARACTERS]
  Canon moment: [CANON_BEAT]

  Visual style:
  charcoal drawing, graphite, ink wash, worn archival paper, documentary realism,
  scientific illustration aesthetic, painterly light, high contrast, tactile historical
  atmosphere.

  Camera:
  [CAMERA ANGLE / LENS / MOTION]

  Composition:
  [FOREGROUND / MIDGROUND / BACKGROUND]

  Continuity requirements:
  [CHARACTER DESIGN RULES]
  [WARDROBE]
  [OBJECTS]
  [ENVIRONMENT]

  Mood:
  [MOTION / EMOTION]

  Avoid:
  glossy sci-fi, cyberpunk, generic fantasy armor, horror-monster design, neon city, clean
  futuristic surfaces, disaster spectacle.
  ```

  ## Character Consistency Block — Ada

  ```text
  Ada / Adanna Venter: Black woman with elegant strong features, Iman-like presence,
  expressive face, grounded survivor energy, no glamour pose, no superhero styling. In
  early Cape Wipeout scenes she is injured, dusty, human, vulnerable, and alive.
  ```

  ## Character Consistency Block — Tallai

  ```text
  Tallai: tall nonhuman chimera care-being, veiled or wrapped silhouette, lab-coat or
  practical cloth layers, gentle posture, elongated but not monstrous, communicates care
  through hands, tilt of head, stillness, and protective attention.
  ```

  ## Character Consistency Block — Q

  ```text
  Q: small intelligent chimera, insect-like yet more humanoid than monstrous, expressive
  eyes, delicate articulated limbs, agile posture, curious analytical energy, communicates
  through clicking and gesture, often perched above the scene observing.
  ```

  ## Character Consistency Block — Quartz

  ```text
  Quartz: massive gentle protector chimera, Snuffleupagus-like emotional presence without
  copying any existing character, large soft form, protective posture, ancient animal
  intelligence, calm power, never horror-coded.
  ```

  ### `04_storyboards/STORYBOARD_SCHEMA.md`

  # UMADA Storyboard Schema

  Use this table for every storyboard shot.

  | Field | Description |
  |---|---|
  | Scene ID | Unique ID, e.g. CW-001 |
  | Beat | Story beat number |
  | Shot type | Wide, medium, close-up, insert, overhead |
  | Duration | Estimated seconds |
  | Characters | Who appears |
  | Action | What happens visibly |
  | Emotion | What the audience should feel |
  | Camera | Still, pan, push-in, handheld, archival |
  | Sound | Ticks, wind, breath, silence, clicks |
  | Prompt | Image generation prompt |
  | Alt text | Accessibility description |
  | Continuity notes | What must remain stable |
  | Status | Draft / approved / revise |

  ## First Six Shots

  | Scene ID | Shot | Description |
  |---|---|---|
  | CW-001 | Wide | Friedmandestorp market alive before disaster |
  | CW-002 | Insert | Omoluabi device recording sound and gesture |
  | CW-003 | Close-up | Dust in light, first tick |
  | CW-004 | Close-up | Ada turning toward sound, fifth tick |
  | CW-005 | Abstract | No sixth tick, blast rupture |
  | CW-006 | Medium | Tallai finds Ada in dust |

  ### `06_video_pipeline/AI_VIDEO_WORKFLOW.md`

  # UMADA AI Video Workflow

  ## Stage 1 — Still Frames
  Generate approved stills first. Do not animate until character design and scene
  composition are approved.

  ## Stage 2 — Micro-Motion
  Animate only small movements first:

  - dust drifting
  - cloth moving
  - eyes shifting
  - Q clicking
  - Tallai kneeling
  - Quartz breathing
  - Omoluabi device flickering

  ## Stage 3 — Animatic
  Assemble still frames with timing, sound, captions, and voice notes before full video
  generation.

  ## Stage 4 — Video Generation
  Use image-to-video tools shot by shot. Keep each clip short. Preserve camera restraint.

  ## Stage 5 — Human Review
  Review each clip for:

  - canon drift
  - character drift
  - disability/accessibility issues
  - accidental horror coding
  - racial/ethnic misrepresentation
  - over-futuristic styling
  - continuity errors

  ## Stage 6 — Release Cut
  Export with:

  - captions
  - audio description
  - transcript
  - alt text package
  - credits
  - process notes

  ### `07_accessibility/ACCESSIBILITY_RELEASE_CHECKLIST.md`

  # UMADA Accessibility Release Checklist

  ## Required for Every Release

  - Captions
  - Transcript
  - Audio description
  - Alt text for key frames
  - Plain-language synopsis
  - Content notes
  - Keyboard-accessible web presentation
  - High-contrast readable layout
  - No autoplay without controls
  - Motion warning where needed
  - Downloadable text version

  ## For GitHub

  - README with project summary
  - Image alt text stored beside images
  - Transcript in Markdown
  - Credits and tool disclosure
  - Canon notes
  - Human editorial statement

  ## For Funders / Partners

  - One-page project summary
  - Accessibility statement
  - Production pipeline diagram
  - Ethical AI statement
  - Community / education use cases

  ### `09_claude_tasks/CLAUDE_CODE_TASKS.md`

  # Claude Code Tasks for UMADA Studio

  ## Task 1 — Build Repo Structure
  Create the folder structure shown in README.md and preserve this package content.

  ## Task 2 — Create Shot Database
  Convert STORYBOARD_SCHEMA.md into a JSON or CSV shot database.

  ## Task 3 — Generate Prompt Cards
  For each shot, generate a reusable prompt card with:

  - scene ID
  - character blocks
  - visual style
  - negative prompt
  - alt text
  - continuity checks

  ## Task 4 — Build Static Site
  Create a simple accessible static site for UMADA Studio with sections:

  - Canon
  - Visual Bible
  - Storyboards
  - Prompts
  - Accessibility
  - Release Notes

  ## Task 5 — Add Validation Checklist
  Create a markdown checklist that must be completed before any image/video is marked
  canon-approved.

  ## Task 6 — Prepare Opening Sequence MVP
  Use the Cape Wipeout beat sheet to create:

  - 12 storyboard shots
  - 12 image prompts
  - 12 alt text entries
  - 1 animatic timing sheet
  - 1 transcript draft

  (Note: `05_assets/` and `08_release/` were present in the delivered zip as empty
  directories with no files; their contents are not reproduced because there was nothing
  in them.)

## Extracted

- characters: visual/style descriptors for **Ada** ("elegant strong features, Iman-like
  presence, expressive face, grounded survivor energy, no glamour pose"), **Tallai**
  ("tall, veiled, patient, observant," "lab-coat or practical cloth layers," "loves
  morning bread"), **Q** ("insect-like yet more humanoid than monstrous," "expressive
  eyes, delicate articulated limbs," "often perched above the scene observing"), and
  **Quartz** ("massive gentle protector chimera, Snuffleupagus-like emotional presence
  without copying any existing character"). These are new visual/style facts, not present
  anywhere in the existing locked canon (`01_canon/SEED_CANON.md`,
  `data/characters.json`) — they read as the visual-design layer of the still-missing
  Character Dossiers (`01_canon/VISUAL_CANON_REGISTRY.md`'s `AWAITING FRAGMENT` items
  1–4), not a complete biographical dossier.
- locations: Friedmandestorp [sic — see Canon note below] market described as ordinary,
  no visible threat before the blast — consistent with, and slightly more detailed than,
  the existing locked "nothing in the market should visually announce disaster before the
  blast" framing already implicit in `01_canon/SEED_CANON.md`.
- factions: none new.
- species: chimera (Tallai, Q, Quartz) — consistent with already-locked species facts;
  no new lineage detail.
- technologies: Omoluabi device described functionally as recording "sound, gesture,
  translation fragments, consent markers, and environmental signals" and as glitching
  but continuing to record during the blast — more specific than, but not contradicting,
  the existing locked "device that lets the story be witnessed" framing. Logged as
  EMERGING, not LOCKED, on a single fragment.
- symbols/signs: none new.
- accessibility concepts: a release checklist (captions, transcript, audio description,
  alt text, plain-language synopsis, content notes, keyboard access, high contrast, no
  autoplay, motion warning, downloadable text) and a storyboard-field accessibility
  pairing (alt text + continuity notes per shot) — both consistent with, and useful
  raw material for extending, the existing `00_governance/ACCESSIBILITY_BASELINE.md`.
- emotional memory: none new beyond what the beat sheet implies (Ada's shock/survival,
  Tallai's caution and care, Q's watchfulness, Quartz's protective stillness) — all
  consistent with already-locked character roles.
- visual language: a full base-style and avoid-list (charcoal/graphite/ink-wash
  documentary realism; avoid glossy sci-fi, cyberpunk, generic Afrofuturism, horror-coded
  chimeras, explosion-as-spectacle), a camera-language list, and a master image-prompt
  template with per-character consistency blocks. This is new, useful production tooling
  that operationalizes already-locked visual-layer rules
  (`00_governance/VISUAL_LAYER_RULES.md`) rather than replacing them.
- episode opportunities: a 10-beat "Cape Wipeout: No Sixth Tick" opening-sequence beat
  sheet and a 6-shot illustrative storyboard sample (`CW-001`…`CW-006`). This beat sheet
  substantially overlaps with material the rescue animatic
  (`assets/video/UMADA_Friedmandostorp_Rescue_Animatic.mp4`) already realizes (Ada
  injured, Tallai finding her, Q and Quartz present, the device recording) — see Canon
  note below on why this fragment's proposed new shot/prompt/transcript content for that
  same sequence is not filed as canon here.
- fanbase opportunities: none specified.

## Canon

- proposed status: **Research / production tooling, not canon.** This fragment is a
  production-pipeline brief and task list, not a narrative or visual artifact. Its
  process material (folder structure, prompt-card system, accessibility checklist,
  storyboard schema) is adopted as tooling, cross-checked against and folded into the
  existing governance/production layers rather than treated as a parallel structure. Its
  character visual-descriptor material is logged as **EMERGING**, sourced to this
  fragment alone, pending corroboration.
- target files: `00_governance/CANON_STATUS.md` (typo recurrence),
  `00_governance/ACCESSIBILITY_BASELINE.md` (storyboard-panel requirements),
  `00_governance/CANON_APPROVAL_CHECKLIST.md` (new), `assets/storyboards/TEMPLATE.md`
  → `assets/storyboards/STORYBOARD_TEMPLATE.md` (new), `assets/storyboards/README.md`
  (naming convention), `docs/production/STORYBOARD_READINESS_MAP.md` (new),
  `docs/production/IMAGE_PROMPT_SYSTEM.md` (new), `data/storyboard_shots.json` (new,
  empty), `data/characters.json` (Ada/Tallai/Q/Quartz visual-reference facts),
  `02_characters/README.md`, `01_canon/OPEN_QUESTIONS.md`, `data/open_questions.json`,
  `15_archive_recovery/README.md`, `docs/production/ROADMAP.md`,
  `docs/project-management/issues/` (ISSUE-006, 007, 008, 009, 031, 032, 033, 034).
- confidence: High for the process/tooling material (it doesn't conflict with anything
  locked, and mirrors structure already proposed in ISSUE-031–035). Low for the character
  visual descriptors (single-source, no corroborating fragment, not a realized artifact)
  — logged EMERGING, not LOCKED, per `00_governance/FRAGMENT_WORKFLOW.md` step 3.
- provenance/care notes: This package's `README.md` "First Production Target" and
  `01_scripts/OPENING_SEQUENCE_BEAT_SHEET.md` spell the settlement **"Friedmandestorp"**
  throughout (also reproduced in `00_canon/UMADA_CANON_LOCK.md` and
  `04_storyboards/STORYBOARD_SCHEMA.md`'s sample shot CW-001). Per
  `00_governance/CANON_STATUS.md`, this is the RETIRED typo variant of the locked
  **Friedmandostorp**; this is now its **fourth** documented recurrence (after the
  2026-06-22 restructuring brief, the 2026-06-25 Book One canon package, and the
  2026-06-25 `UMADA_CANON_INDEX.md`). Corrected to Friedmandostorp in every file this
  fragment's content is routed into; the raw content above is preserved verbatim with the
  typo intact, per the fragment-capture rule that raw content is never edited. This
  fragment's `09_claude_tasks/CLAUDE_CODE_TASKS.md` Task 6 ("Prepare Opening Sequence
  MVP": 12 storyboard shots, 12 image prompts, 12 alt text entries, 1 animatic timing
  sheet, 1 transcript draft, for the Cape Wipeout opening) is **deliberately not
  executed**. Two reasons: (1) the root `README.md` and `docs/production/ROADMAP.md`
  state that Episode 1 / the Cape Wipeout opening sequence's content is deliberately
  blocked until enough open questions are resolved, and `docs/project-management/issues/`
  ISSUE-031 and ISSUE-033 (already-open Storyboarding issues asking for exactly this kind
  of template/mapping work) explicitly scope themselves to *not* draft panel content yet;
  (2) a realized rescue animatic already exists for what reads as the same or an
  overlapping sequence, with its own recovered 11-beat on-screen transcript
  (`01_canon/VISUAL_CANON_REGISTRY.md`) — drafting a second, invented transcript for the
  same beats risks being mistaken for, or contradicting, that real source. Task 4 ("Build
  a Static Site") is also not executed as a new, separate site: a 20-section public site
  already exists (`index.html`, `sections/`, Phase B in `docs/production/ROADMAP.md`)
  reading from `data/*.json`; adding a competing site would fork the site's information
  architecture. Whether to add a Storyboards/Production-Pipeline section to the
  *existing* site nav is logged as an option for Kemi, not done unilaterally.

## Tiny Question

Two tiny questions logged (not blocking — drafting proceeded on both):

1. Shot-naming convention (raised by ISSUE-034, informed by this fragment's `CW-001`
   style sample): should `assets/storyboards/` use the episode/scene/shot convention
   `EP##-SC##-SHOT##` proposed in ISSUE-034 once Episode 1 is authorized, with a
   pre-authorization sequence-prefix scheme (e.g. `CW-###` for the Cape Wipeout proof-of-
   concept sequence specifically) reserved for proof-of-concept work that precedes formal
   episode numbering? Drafted as PROBABLE in `assets/storyboards/README.md`, pending
   confirmation.
2. Now that this fragment supplies visual/style descriptors for Ada, Tallai, Q, and
   Quartz, does Kemi consider this the visual-design portion of the missing Character
   Dossiers (closing part of ISSUE-006–009), or a separate "style guide" artifact distinct
   from a dossier? Filed as EMERGING under `dossier_status` in `data/characters.json`
   pending that confirmation.
