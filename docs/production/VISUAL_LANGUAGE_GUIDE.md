# Visual Language Guide

This is a production-facing summary. The authoritative rules live in
`00_governance/VISUAL_LAYER_RULES.md`; the authoritative visuals are the plates in
`assets/img/`. Where this guide and either of those disagree, they win.

## Two layers, never blended

1. **Presentation / archive layer** — the site's own chrome (navigation, headers,
   governance pages, the archive frame). Monochrome graphite archive only:
   - Paper `#efece2` · Ink `#1a1a1a` · Line `#d0cdc6` · Muted `#6f6f6f`
   - Type: Helvetica Neue (UI/sans), Georgia (long-form/serif), Courier Prime
     (annotations, metadata, status tags, code-like fragments)
2. **Diegetic / world layer** — content that depicts the world itself (illustrations,
   stills, the Nago plates, the animatic, in-world signage photography). Colorful where
   canon supports it: harbor light, storm light, market color. **Never Arctic.** Diegetic
   art is framed by the presentation layer's chrome but never desaturated to match it.

## Nago visual grammar

Built on the Golden Rectangle and ancient geometry, for legibility and memory, not
mystification. Five primitives per the realized plate: Circle, Open Circle, Broken
Circle, Three Rings, Hand+Ring. No vector/CSS-level shape spec exists yet for the site
to render these precisely (`01_canon/OPEN_QUESTIONS.md` #6) — `[CANON REVIEW REQUIRED]`
before the site attempts pixel-precise reproduction rather than the current
approximation.

## Accessibility is part of the visual language, not separate from it

No sign or image may rely on color alone or hover alone. Every Nago sign needs a flat
visual mark, a raised tactile-form description, and a screen-reader label at minimum —
see `00_governance/ACCESSIBILITY_BASELINE.md`.

## Source of truth

`assets/img/PLATE_NAGO_SYMBOLOGY_OF_UMADA.png` and `assets/img/PLATE_PROTO_NAGO.png`
are the visual source of truth for Nago. For anything else visual, no realized art
exists yet — `assets/concept-art/`, `assets/maps/`, and `assets/storyboards/` are
reserved, empty placeholders, not a license to invent in their absence.
