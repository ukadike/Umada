# Visual Canon Registry

The realized plates and animatic in `assets/img/` and `assets/video/` are the **visual
source of truth**. Where any document in this repository disagrees with a plate, the
plate wins and the document is corrected (see `00_governance/CANON_STATUS.md`).

Each artifact entry contains: artifact_id, status, provenance, description, canon
implications, episode usage, alt text, tactile notes, open questions. The structured form
of the present artifacts also lives in `data/visual_artifacts.json`.

---

## Artifacts present in this package

### PLATE_PROTO_NAGO

- **status:** PRESENT — visual source of truth, origin layer
- **provenance:** `assets/img/PLATE_PROTO_NAGO.png`. Titled on the plate "PROTO-NAGO —
  THE FIRST SIGNS OF SURVIVAL."
- **description:** The plate's own framing text: "Before Nago was a language, it was a
  desperate need. Made by hands that had no common words left. Made for shelter, for
  runs, for strangers, for help. Made to be seen, felt, and understood. Not perfect. Not
  beautiful. Necessary. This is where Nago begins." It shows fourteen Core Survival
  Marks (Proto) — Bread/Food, Water, Safe, Danger, Go This Way, Help, Home/Shelter,
  Carry/Bring, Care/Love, Look/Watch, Gather, Down/Below, Up/Above, Stop/No — each with a
  scratch-mark glyph, plain meaning, and example sentence. It documents materials marks
  were made with (charcoal, ash, chalk, blood, paint, soot, mud, cut marks, burn marks,
  "anything — if it could mark, it became Nago"), surfaces they appeared on (walls,
  streets, crates & doors, tents & cloth, rocks, trees, skin), how they were read (seen
  from a distance, felt with the hand, understood in a second, taught by showing, passed
  by doing, remembered always), early combinations (e.g. Bread + Home = "Food and water.
  Home here."; Danger + Help = "Danger. Help needed."), who made the signs (workers,
  survivors, healers, mothers, children, strangers, friends), and how they traveled (by
  hand, by eye, by memory, by story, by heart). Closing quote: "We had no words. So we
  made signs. We had no safety. So we marked the way. We had no certainty. So we watched
  each other. We had each other. That was enough."
- **canon implications:** This is the origin layer beneath the refined Nago system on
  `PLATE_NAGO_SYMBOLOGY_OF_UMADA`. The fourteen proto marks are transcribed into
  `data/nago_proto_signs.json`. Proto-Nago marks are not identical in number or form to
  the eight core survival signs of refined Nago — some proto marks (Go This Way,
  Care/Love, Look/Watch, Gather, Down/Below, Up/Above, Stop/No) did not carry forward
  into the refined eight, and that gap is left open rather than papered over.
- **episode usage:** Visual reference for the origin-era / pre-standardization look of
  Nago marks (walls, crates, skin) wherever Cape Wipeout–era or pre-Tisetan signage
  appears on screen.
- **alt text:** "Illustrated reference plate titled Proto-Nago: The First Signs of
  Survival, showing fourteen hand-scratched survival marks with their meanings, the
  materials and surfaces they were made with, and a closing quote about why they were made."
- **tactile notes:** The plate itself is a 2D reference image with no tactile form; tactile
  forms for individual proto marks are AWAITING FRAGMENT pending a dedicated tactile pass
  (the refined plate, not this one, documents tactile form per sign).
- **open questions:** Which proto marks (if any) besides the refined eight persisted into
  standardized Nago, and which were dropped or absorbed — not stated on either plate.

### PLATE_NAGO_SYMBOLOGY_OF_UMADA

- **status:** PRESENT — visual source of truth, refined/standardized layer
- **provenance:** `assets/img/PLATE_NAGO_SYMBOLOGY_OF_UMADA.png`. Titled on the plate
  "NAGO — SYMBOLOGY OF UMADA: A Visual Language. A Survival Memory. A Promise to
  Understand."
- **description:** The plate's framing text: "Nago is the ancient and living symbol
  system of Umada. Born from survival. Built through accessibility. Carried by hand.
  Heard by all. Remembered always." Design principles: Accessible to all, Easy to learn,
  Easy to feel, Easy to see, Easy to remember, Easy to share. Visual Grammar: Circle
  (memory / shared memory), Open Circle (open / shared access), Broken Circle (lost /
  interrupted memory), Three Rings (relay / signal), Hand + Ring (witness / presence) —
  "All Nago symbols are built on curves, balance, and human connection. Rooted in the
  Golden Rectangle and ancient geometry." Core Survival Signs ("First Breath of Nago"),
  eight: Bread (Food/Nourishment), Water (Water/Life), Safe (Safe/Protection), Danger
  (Danger/Warning), Carry (Carry/Support), Home (Home/Belonging), Help
  (Help/Assistance), Rest (Rest/Recovery) — each shown with meaning, hand gesture
  illustration, and tactile-form illustration. Symbol Families (seven, color-coded):
  Survival (to live), Care (to heal and protect), Signal (to listen and connect),
  Movement (to travel and return), Civic (to build together), Memory (to remember and
  learn), Environment (to honor the world). Signage in Umada: street sign, directional
  sign, accessibility sign, rescue sign, market sign, tower marker, shown as painted
  in-world signage (including a "BAKERY" street sign, an "ACCESS" directional arrow
  sign, a "RESCUE CLUSTER 7-S" sign, a "MARKET" sign, and a "BLACK STARS TOWER" marker).
  Nago Phrase Examples show sign combinations producing compound meanings (e.g. Bread +
  Home = "Food and water at home"; Danger + Help = "Danger. Need help."). Tactile System:
  "Every Nago symbol has a tactile form so it can be read by hand" — raised lines (easy
  to feel), contrasted shapes (easy to distinguish), consistent geometry (always
  readable), built for all (children, elders, and all abilities). "Made with what we
  had" sidebar repeats from the proto plate. Honor & Origin: "Nago was born from the
  hands of survivors. It was created in markets, shelters, and ruins. It was carried by
  Tallai, Ada, Q, and the people. It belongs to everyone." How to Read Nago: Look. Feel.
  Make the gesture. Remember the meaning. Share it forward. The Promise of Nago: "We
  will be understood. We will be included. We will remember. We will build Umada." /
  "NAGO IS CARE. NAGO IS US. NAGO IS UMADA."
- **canon implications:** This plate is the authoritative source for the eight core
  survival signs, the seven function families, and the five Visual Grammar primitives —
  all transcribed into `data/nago_symbology.seed.json` and `data/nago_signs.json`. It
  confirms Tallai, Ada, and Q (not Quartz) as the named carriers in the in-world Honor &
  Origin account; Quartz's role as load-bearer/rescue anchor is locked elsewhere
  (`01_canon/SEED_CANON.md`) but is not named on this plate, which is recorded rather
  than reconciled by inventing a reason.
- **episode usage:** Visual reference for the Language & Signage and Nago Symbology
  sections; reference for in-world signage art direction wherever standardized Nago
  appears (Friedmandostorp, Tisetan, Umada).
- **alt text:** "Illustrated reference plate titled Nago: Symbology of Umada, showing
  design principles, a five-symbol visual grammar, eight core survival signs with hand
  gestures and tactile forms, seven color-coded symbol families, examples of in-world
  signage, sign-combination phrase examples, a tactile-system explanation, and an honor
  and origin statement."
- **tactile notes:** Tactile form is illustrated per core sign directly on the plate
  (see description); these illustrations are the source for written tactile-form
  descriptions in `data/nago_symbology.seed.json`.
- **open questions:** Exact pixel-level shape vocabulary for each Visual Grammar
  primitive (precise curve construction against the Golden Rectangle) is visible on the
  plate but not yet formally specified as buildable vector/CSS shapes — AWAITING a
  dedicated asset-extraction pass.

### UMADA_Friedmandostorp_Rescue_Animatic

- **status:** PRESENT
- **provenance:** `assets/video/UMADA_Friedmandostorp_Rescue_Animatic.mp4` (ISO Media /
  MP4, ~2.2 MB). Score credited to yellowbirdbeats.
- **description:** Cape Wipeout / Friedmandostorp rescue animatic.
- **canon implications:** Reference source confirming the Friedmandostorp spelling and
  setting used across this repository.
- **episode usage:** Referenced from the Visual Archive section and the Cape Wipeout,
  Pt. 1 episode-release entry.
- **alt text:** "Animatic video depicting the Friedmandostorp rescue sequence from Cape
  Wipeout, Pt. 1, scored by yellowbirdbeats."
- **tactile notes:** Not applicable to video; a plain-language summary and transcript are
  AWAITING FRAGMENT.
- **open questions:** No transcript or caption track is present yet — required before this
  asset meets the accessibility baseline for public release.

---

## Artifacts referenced but NOT present

Tagged `AWAITING FRAGMENT`. Expected filename and believed contents are not described —
only what they are called and where they're referenced from.

1. **Ada Character Dossier** — AWAITING FRAGMENT
2. **Tallai Character Dossier** — AWAITING FRAGMENT
3. **Q Character Dossier** — AWAITING FRAGMENT
4. **Quartz Character Dossier** — AWAITING FRAGMENT
5. **Friedmandostorp Bread Stop Board** — AWAITING FRAGMENT
6. **Nago Origin Gestures Board** — AWAITING FRAGMENT
7. **Cape Lab Blast Board** — AWAITING FRAGMENT
8. **ADA-1 Emergence Board** — AWAITING FRAGMENT
9. **Rescue Doctrine Board** — AWAITING FRAGMENT
10. **Super Hurricane Cindy Board** — AWAITING FRAGMENT
11. **Black Stars Tower Board** — AWAITING FRAGMENT

See `data/visual_artifacts.json` for the structured form of this registry.
