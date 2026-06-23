# Accessibility Baseline

Accessibility is infrastructure, not an add-on pass. It applies to the site itself and
to every Nago sign, image, and video referenced from it.

## Site-wide baseline

- Alt text on every meaningful image; empty alt on purely decorative images.
- Screen-reader labels on every interactive control and every Nago mark.
- Full keyboard access — no mouse-only or hover-only interaction.
- No meaning conveyed by color alone.
- No meaning conveyed by hover alone.
- Respect `prefers-reduced-motion`; no autoplaying motion that can't be paused or disabled.
- Plain-language summaries available alongside any dense or archival text.
- Sufficient contrast under the presentation palette (graphite ink on paper meets at
  least WCAG AA for body text).
- Captions/transcript for video (the animatic) once a transcript fragment exists; until
  then, the video entry is tagged accordingly rather than given an invented transcript.

## Nago-specific baseline

Every Nago sign entry requires, at minimum:

- name and canon status
- gesture description
- plain-language meaning
- visual mark description
- tactile form description
- screen-reader label
- use context
- accessibility notes (how it's distinguished without color, how it works for low vision)
- provenance/care note
- open questions, if any

Rules carried from the Nago Signage Guide and the No-Generic-Glyphs rule:

- No sign may rely only on color.
- No sign may require perfect vision.
- No sign may require literacy alone.
- No sign may require hearing alone.
- Nago is multimodal by default: gesture, flat visual mark, raised tactile mark, verbal
  description, screen-reader label, public signage icon, map symbol, episode graphic.
- Tactile marks avoid thin details, use clear edges and high-contrast relief, support
  fingertip scanning, and pair with redundant text labels.
- Design for low vision and blind users from the beginning, not as a retrofit.
