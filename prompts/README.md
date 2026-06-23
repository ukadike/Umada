# Prompts

Reusable image-generation prompt notes, kept separate from the generated images
themselves (`assets/concept-art/`, `assets/storyboards/`, `assets/maps/`) and from the
fragment record of how each locked image was approved (`13_fragments/`).

## No-fabrication rule applies here too

A prompt is a generative act, not a documentation act — but it still has to draw only
from `LOCKED` or `PROBABLE` canon. This folder follows the same rule as everywhere else
in this repository (`00_governance/NO_FABRICATION_RULE.md`):

- If a subject has a locked visual reference (a realized plate, or an approved
  `assets/concept-art/` image), its prompt notes here restate that reference's locked
  details so future images stay consistent with it. They do not add anything the
  reference doesn't already show.
- If a subject has **no** locked visual reference yet, its file here is a stub: it says
  so, links to the subject's dossier or registry entry, and stops. It does not invent an
  appearance to make the prompt "work."
- Nago signage prompts must obey `00_governance/NAGO_NO_GENERIC_GLYPHS_RULE.md` — every
  generated Nago mark still needs a name, gesture, meaning, and tactile form before a
  prompt is written for it, not after.

## Layout

- `characters/` — one file per named character. See each file for status (locked
  reference exists vs. `AWAITING FRAGMENT`).
- `visual-style/` — style notes that apply across subjects (the presentation/diegetic
  layer split, the Nago visual grammar), distilled from
  `00_governance/VISUAL_LAYER_RULES.md` and `docs/production/VISUAL_LANGUAGE_GUIDE.md`
  for direct reuse in prompts.
- `episodes/` — reserved. Episode-specific shot/scene prompts can't exist before a
  script does; see `prompts/episodes/README.md`.

## Provenance

Prompt notes for Ada and Tallai are reverse-derived from their already-approved,
already-locked reference images (`13_fragments/2026-06-23_*.md`) — they describe what
was already approved, for reuse, rather than proposing anything new. Any *new* generated
image still needs Kemi's approval before it can be locked as canon, the same as the five
existing reference images were.
