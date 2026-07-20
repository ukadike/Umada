# Accessibility

The site-wide and Nago-specific accessibility rules live in
`00_governance/ACCESSIBILITY_BASELINE.md`. The Nago sign-type and public-sign-template
detail lives in `07_languages/NAGO_SIGNAGE_GUIDE.md`. This directory is intentionally
kept free of a duplicate copy; it holds accessibility audit notes and implementation
records (e.g. per-section accessibility passes) once the site sections exist to audit.

## 2026-07-20 — Site-wide WCAG 2.1 AA pass

First full audit across all 23 HTML files (`index.html`, `sections/`, `episodes/ep01/`).
Found and fixed a site-wide `--muted` text-contrast failure (4.25:1, below the 4.5:1
floor), 8 canon-status badges whose visible text didn't expose the literal status word
to assistive tech, a duplicate `<h1>` and a modal focus-containment gap in the Episode 1
interactive prototype. Confirmed already-compliant: all 10 Nago signs in
`data/nago_signs.json` carry every required documentation field; alt text, skip links,
reduced-motion handling, and keyboard focus indicators were already in place site-wide.
One item left open (animatic audio-track captions — audio not yet reviewed, so no
transcript can be written without fabricating). Full findings, fixes, and open items in
`WCAG_AUDIT.md`.
