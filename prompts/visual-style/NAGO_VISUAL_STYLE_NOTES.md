# Nago / World Visual Style — Prompt Notes

Distilled for direct reuse in image-generation prompts. Authoritative source:
`00_governance/VISUAL_LAYER_RULES.md` and `docs/production/VISUAL_LANGUAGE_GUIDE.md`.
Where this file and either of those disagree, they win; where any of the three disagree
with the realized plates in `assets/img/`, the plates win.

## Two layers — never blend in one prompt

1. **Presentation/archive layer** (site chrome, navigation, governance pages — not
   character or world imagery): monochrome graphite archive only.
   - Paper `#efece2` · Ink `#1a1a1a` · Line `#d0cdc6` · Muted `#6f6f6f`
   - Type: Helvetica Neue (sans/UI), Georgia (serif/long-form), Courier Prime
     (annotations/metadata).
2. **Diegetic/world layer** (characters, locations, in-world signage — i.e. what most
   image-generation prompts in this repo are actually for): colorful wherever canon
   supports it. Southern-African coastal: harbor light, storm light, market color.
   **Never Arctic** — no Ilulissat/Greenland framing, permanently retired
   (`00_governance/CANON_STATUS.md`).

## Nago signage in a prompt

- Built on the Golden Rectangle and curved, balanced forms — legibility and memory, not
  mystification or generic fantasy glyphs (`00_governance/NAGO_NO_GENERIC_GLYPHS_RULE.md`).
- Five Visual Grammar primitives (Circle, Open Circle, Broken Circle, Three Rings,
  Hand+Ring) and eight core survival signs (Bread, Water, Safe, Danger, Carry, Home,
  Help, Rest) are locked to `assets/img/PLATE_NAGO_SYMBOLOGY_OF_UMADA.png` — reference
  that plate directly rather than re-describing a sign from memory.
- No exact vector/CSS shape spec exists yet (`01_canon/OPEN_QUESTIONS.md` #6) — a prompt
  asking for "pixel-precise" Nago geometry would be asking for something nobody has
  defined yet; describe shapes loosely from the plate instead, not precisely.
- Every generated sign still needs an alt-text description and a plain-language meaning
  before use — accessibility is part of the visual language, not added after
  (`00_governance/ACCESSIBILITY_BASELINE.md`).

## Reuse pattern

For a locked subject (Ada, Tallai, the two Nago plates), pull the restated details from
`prompts/characters/` or this file rather than re-deriving them from the source image
each time — keeps independently generated images consistent with each other.
