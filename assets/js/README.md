Site behavior scripts, loaded as plain classic scripts with `defer` — no build step.

- `data-loader.js` — defines `window.Umada` (`loadJSON`, `el`, `statusTag`, `list`,
  `renderError`), the shared helpers every section page uses to fetch `data/*.json` and
  render it without fabricating any field that isn't in the data.
- `nav.js` — progressive-enhancement only: marks the current page's link
  `aria-current="page"` and gives the skip-link a focus target. The nav itself is plain
  `<a>` tags inside a native `<details>/<summary>`, so it works with no JS at all.
- `accessibility.js` — enforces video safety (`autoplay` stripped, `controls` on,
  `preload="none"`, paused under `prefers-reduced-motion`) per
  `00_governance/ACCESSIBILITY_BASELINE.md`.
