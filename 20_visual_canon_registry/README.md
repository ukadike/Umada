# Visual Canon Registry (operational)

The canon-level registry document lives at `01_canon/VISUAL_CANON_REGISTRY.md`; this file
is the operational ingestion log for visual artifacts as they arrive or are re-examined,
cross-referencing that registry without forking it. Full transcripts, alt text, and canon
implications live in the registry and in `data/visual_artifacts.json` — this log only
records what happened and when.

---

## 2026-06-22 — Phase A: three artifacts registered

`PLATE_PROTO_NAGO`, `PLATE_NAGO_SYMBOLOGY_OF_UMADA`, and
`UMADA_Friedmandostorp_Rescue_Animatic` entered the registry as PRESENT, each with
provenance, description, canon implications, episode usage, alt text, tactile notes, and
open questions. Eleven referenced-but-absent artifacts (four character dossiers, six
visual boards) entered as `AWAITING FRAGMENT` index stubs — see the registry's "Artifacts
referenced but NOT present" section.

## 2026-06-22 — Phase C: animatic entry upgraded from thin to full

The animatic's registry entry was re-examined and rewritten: provenance expanded with
exact technical specs (H.264/AAC, 720×1080, 24fps, 1166 frames, 48.583s); description and
canon implications expanded to carry the full 11-beat on-screen caption transcript, split
into LOCKED facts (the March 19, 2226 date; Ada's full credited name/role; the ADA-1
restatement) and a PROBABLE, explicitly unresolved juxtaposition (the "Kassey" name burned
across a military record). Alt text and tactile notes updated; open questions expanded from
one item to five. See `01_canon/VISUAL_CANON_REGISTRY.md` for the full entry and
`15_archive_recovery/README.md` for the recovery method.

No change was made to the `PLATE_PROTO_NAGO` or `PLATE_NAGO_SYMBOLOGY_OF_UMADA` registry
entries in this pass. The Visual Grammar vector/CSS shape-spec open question on the
symbology plate (see that entry's "open questions," and `01_canon/OPEN_QUESTIONS.md` item
6) remains open — see `15_archive_recovery/README.md`'s 2026-06-22 entry for why it was
scoped but not closed.

## 2026-09-22 — Ancient Geometry System — Volume I registered

`PLATE_ANCIENT_GEOMETRY_SYSTEM_VOL_I` entered the registry as PRESENT and LOCKED visual
canon. The plate establishes five primary civic geometries — Circle, Spiral, Radial Field,
Concentric Rings, and Axis + Threshold — and an integrated Eco-Civic District Plan for
memory, ecology, access, water, governance, and Ether stewardship. A semantic
transcription is published at `sections/ancient-geometry-system.html`; the plate is stored
as browser-assembled archived image fragments under
`assets/concept-art/ancient-geometry-system/`. Cross-references were added to the Ether
Power coupling model and Trinity Threshold so the artifact functions as a system-level
canon source rather than a standalone image.


## 2026-09-22 — Geometry Language v0.1 locked and made executable

The five forms established by `PLATE_ANCIENT_GEOMETRY_SYSTEM_VOL_I` were promoted from
visual grammar to executable system canon as **UMADA Geometry Language v0.1**. The mapping
is now locked: Circle → shared state; Spiral → persistent memory; Radial Field →
distributed network; Concentric Rings → permission layers; Axis + Threshold → state
transition. The canonical routing rule is **“Ether follows civic geometry.”** Geometry
does not create Ether; it defines coupling, routing, storage, access, and stewardship
conditions around the pre-existing field.

Reference specification: `08_technology/UMADA_GEOMETRY_LANGUAGE_V0_1.md`. Browser runtime:
`assets/js/umada-geometry-language.js`. Public executable page:
`sections/geometry-language.html`.
