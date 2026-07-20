# WCAG 2.1 AA Audit — Site-wide Pass

Scope: `index.html`, all 20 files under `sections/`, and the two files under
`episodes/ep01/` (`03_PROTOTYPE/episode-cape-wipeout-pt1-interactive.html`,
`04_UX_DOCS/storyboard-ux-documentation.html`) — 23 HTML files total, plus
`assets/css/main.css`, `assets/js/*.js`, and the JSON data these pages render from.
Audited against WCAG 2.1 AA plus the site's own baseline in
`00_governance/ACCESSIBILITY_BASELINE.md` (alt text, screen-reader labels, keyboard
access, no color-only meaning, no hover-only meaning, reduced motion, plain-language
summaries, tactile/sign equivalents).

## Summary counts

- **Issues found:** 12 (across a shared template used by 21 pages + 2 standalone
  episode-tooling pages)
- **Fixed:** 11
- **Open (not fixed, with reason):** 1 (video audio-track captions — see below)
- Baseline finding: this codebase was already substantially accessible before this
  pass (skip link, focus-visible outlines, `prefers-reduced-motion` handling, semantic
  landmarks, alt text discipline, and status-tags distinguished by border style as
  well as color were already in place site-wide). Most findings below are refinements,
  not rebuilds.

## Fixed

| # | Criterion | Severity | Location | Issue | Fix |
|---|-----------|----------|----------|-------|-----|
| 1 | 1.4.3 Contrast (Minimum) | **Serious** — site-wide | `assets/css/main.css:10` (`--muted`) | `--muted: #6f6f6f` on `--paper: #efece2` measures **4.25:1**, below the 4.5:1 AA floor for normal text. This variable is used for body-adjacent text at normal size in `.site-tagline`, `.meta-line`, `.eyebrow`, `.fragment__note`, `.door p`, `.data-status`, `figcaption`, `.site-footer`, `.cross-refs`, `.era-num`, etc. — present on every one of the 21 templated pages. | Darkened to `--muted: #666666` (~4.86:1 on paper, verified against sRGB relative-luminance formula). Same graphite intent, no new colors introduced, per the visual-layer rule. Also updated the LOCKED spec in `00_governance/VISUAL_LAYER_RULES.md` to match. |
| 2 | 1.4.1 Use of Color | Moderate | `index.html` (×3: build-status phases), `sections/episode-releases.html` (×3), `sections/research-archive.html` (×1) | Several `.status-tag` badges carry canon-status meaning via the `data-status` attribute (which drives border-style: solid/dashed/dotted/line-through) but their *visible/accessible text* is custom copy ("Complete", "This layer", "Pending", "EPISODE 1 DRAFT 1 · PUBLIC PROTOTYPE v0.1", "NOT YET WRITTEN" ×2, "RESERVED FOR PHASE C") rather than the literal status word — so screen-reader users never hear the actual canon-status term, only sighted users who know the border-style code can infer it. (Border-style differentiation itself already satisfies "not color alone," but the specific status term wasn't exposed to assistive tech.) | Added a `<span class="visually-hidden">Status: X — </span>` prefix inside each affected badge so the literal status term is announced, while visible copy is unchanged. Badges that already contained the literal status word (e.g. "LOCKED spelling") were left as-is. |
| 3 | 1.3.1 Info & Relationships | Serious | `episodes/ep01/03_PROTOTYPE/episode-cape-wipeout-pt1-interactive.html:98,108` | Two `<h1>` elements existed simultaneously in the DOM: one inside the entry-screen dialog ("Cape Wipeout, Pt. 1") and one for the actual page content ("UMADA — Cape Wipeout, Pt. 1: An Omoluabi Witness Record"). | Changed the entry-dialog's heading to `<h2>` (added a scoped `#intro h2` rule to preserve its visual size/weight) so the page has exactly one `<h1>`. |
| 4 | 2.4.3 Focus Order / 2.1.2-adjacent (focus containment) | Serious | Same file, `#intro` entry dialog (lines ~96–103) and `#frameModal` image lightbox (lines ~134–137) | Both overlays are `role="dialog"` and cover the full viewport visually (`position:fixed;inset:0`), but the page content behind them (`.wrap`) was never removed from the tab order or the accessibility tree. A keyboard or screen-reader user could tab/navigate straight through the visible modal into invisible controls sitting behind it. | Added the `inert` attribute to `.wrap` while either overlay is open, toggled in `showIntro()`/`closeIntro()` and `openModal()`/`closeModal()`; removed on close, with existing focus-return logic (`lastFocus.focus()`) left intact. Also added the missing `aria-modal="true"` to `#intro` (the lightbox already had it). |

Total distinct fix sites: `assets/css/main.css` (1), `00_governance/VISUAL_LAYER_RULES.md` (1, doc parity), `index.html` (3 badges), `sections/episode-releases.html` (3 badges), `sections/research-archive.html` (1 badge), `episodes/ep01/03_PROTOTYPE/episode-cape-wipeout-pt1-interactive.html` (heading + 2 inert toggles + aria-modal).

## Checked and already compliant (no fabricated praise — verified directly)

- **1.1.1 Non-text content:** No `<img>` in any of the 21 templated `sections/`/`index.html` pages (the Nago plates and animatic aren't rendered inline there yet — see "Open" below). Where images *are* rendered — `sections/visual-archive.html` (dynamic, from `data/visual_artifacts.json`), and both files under `episodes/ep01/` — every `<img>` has real, non-empty `alt_text`/`alt` sourced from the data or hand-written, and every decorative/duplicate thumbnail (`.rcard .thumb`, `.rt` etc.) correctly uses `alt=""` because an adjacent text caption already carries the same information.
- **Nago sign documentation:** All 10 entries in `data/nago_signs.json` (Bread, Water, Safe, Danger, Carry, Home, Help, Rest, Witness, Relay) already carry every field the baseline requires: name, canon status, gesture, plain-language meaning, visual mark, tactile form, context, screen-reader label, no-color-only note, low-vision support, provenance/care note, and open questions where applicable — and `sections/language-signage.html` renders every one of those fields. No missing-field pointer needed here.
- **1.3.1 Heading levels / one h1:** All 21 templated pages have exactly one `<h1>`, correct title/description, and no skipped heading levels within `<main>`. (Minor structural note, not fixed: the collapsible nav's group labels — "Orient," "Canon," "World," etc. — are marked up as `<h2>` and sit before the page's own `<h1>` in DOM order on every page. Because they live inside a native, closed-by-default `<details>`, they aren't exposed to heading-list navigation until a user opens the nav disclosure, which limits real-world impact; left as an open/minor item rather than restructured, given 21 files share the exact template and the risk/benefit of a mechanical rename was judged low.)
- **2.4.1 Bypass blocks:** `.skip-link` → `#main` present and functional (verified in `assets/js/nav.js`) on all 21 templated pages.
- **2.4.2 Page titled / 3.1.1 Language:** Every one of the 23 files has a descriptive `<title>` and `<html lang="en">`.
- **2.4.4 Link purpose:** No "click here"/"read more"/bare "here" link text anywhere in the audited files.
- **2.1.1/2.4.7 Keyboard & focus:** No `outline:none`/`outline:0` anywhere in the codebase; `:focus-visible` rules present and unsuppressed in `assets/css/main.css` and in both episode files' inline styles.
- **Forms:** No `<form>`/`<input>`/`<select>`/`<textarea>` exist in any of the 21 templated pages, so no label-association issue applies there.
- **Motion:** `assets/css/main.css` has a global `prefers-reduced-motion: reduce` rule zeroing animation/transition duration. The episode prototype's "tick" countdown (`runTick()`) explicitly checks `matchMedia('(prefers-reduced-motion: reduce)')` and skips the effect entirely when set — this covers the "tick, tick, tick, tick — BOOM" opening beat called out in `CLAUDE.md`. `assets/js/accessibility.js` strips `autoplay` from any `<video>`, forces `controls`, and pauses on load if reduced motion is preferred.
- **4.1.2 Name, Role, Value (custom widgets):** The episode prototype's tab list (`role="tablist"`/`role="tab"`/`aria-selected`), toggle buttons (`aria-pressed`, paired with non-color underline+invert styling — never color alone), live region announcements (`aria-live="polite"` on `#live`), and the storyboard doc's filter buttons all have correct roles/states and were exercised by reading the full event-handling script, not just the markup.
- **Contrast, other palettes:** Recomputed all distinct text/background pairs used in the episode prototype (`--ink #16161a`, `--fade #5f5b52`, `--sig #8f3d1c` on `--paper #e9e6df`, plus the high-contrast-mode variant) and the storyboard doc (`--ink`, `--muted`, `--signal` on `--paper`) — all pass AA comfortably (lowest measured: 4.64:1, most 5–15:1). No changes needed in either file's own palette.

## Open (not fixed) — with reason

- **1.2.2 Captions (video):** `data/visual_artifacts.json`'s animatic entry (`UMADA_Friedmandostorp_Rescue_Animatic`) has a full 11-beat **on-screen caption transcript**, rendered as a `<details>` "On-screen caption transcript" block wherever the video appears — but its own `transcript_note` field states plainly: *"The audio track has not been reviewed."* Per `CLAUDE.md`'s no-fabrication rule, an audio transcript cannot be authored without the source material; the gap is already correctly flagged in the data rather than papered over. **Left open** — this needs an actual audio review pass (outside this audit's scope) before captions/a transcript for spoken audio can be added. Tag: `AWAITING FRAGMENT`.

## Notes on scope decisions

- The realized Nago plates (`assets/img/PLATE_PROTO_NAGO.png`, `PLATE_NAGO_SYMBOLOGY_OF_UMADA.png`) are not yet rendered inline on `sections/nago-symbology.html` or `sections/language-signage.html` — only on `sections/visual-archive.html`, where they're already fully accessible (real alt text, tactile notes, transcript details). This is a content-presentation gap, not an accessibility defect in what's currently rendered, so no fix was applicable; flagging for whoever next builds out those pages.
- ARIA Authoring Practices' roving-tabindex/arrow-key pattern for `role="tablist"` in the episode prototype isn't implemented (every tab button is independently `Tab`-reachable instead) — this is fully keyboard operable and satisfies WCAG 4.1.2's name/role/value requirement, just not the optional APG interaction convention. Left as-is; flagged only as a minor future enhancement.
