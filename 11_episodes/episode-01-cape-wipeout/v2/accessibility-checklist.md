# Episode One v2 — Accessibility Checklist

Tested with a headless-Chromium Playwright walkthrough of the full first
reading (balcony → council → refusal → dispatch → transition → arrival →
one pre-Wipeout route → the five ticks → BOOM → one aftermath route →
rescue → closing → witness ledger), plus a second pass exercising the frame
modal, tab list, and Access panel. This is a scripted functional pass, not a
substitute for a manual screen-reader and switch-device audit — see "Known
gaps" below.

## Semantic structure
- [x] One `<title>`, one `<main>`-equivalent landmark (`#panel`, `role="tabpanel"`).
- [x] Logical headings: phase label (`h2`) → beat/scene heading (`h3` where present).
- [x] Real `<button>` elements for every action; no clickable generic `<div>`.
- [x] `role="tablist"` / `role="tab"` / `role="tabpanel"` with `aria-selected`.
- [x] No button wrapped in a `<label>`.

## Keyboard
- [x] Full keyboard operation confirmed by script (every story beat, hub,
      channel, choice, and tab reachable and actuable via `click()`-equivalent
      button semantics — all interactive elements are native `<button>`s, so
      they are Enter/Space-activatable and Tab-reachable by construction).
- [x] Visible focus via `:focus-visible` outline (3px, signal color) on
      buttons, links, and the frame modal's close control.
- [x] Tab list supports ArrowLeft/ArrowRight/Home/End — verified: `ArrowRight`
      from STORY moved `aria-selected` to WITNESS LEDGER and rendered it.
- [x] Escape closes the frame modal — verified: opened a real frame (council
      chamber), pressed Escape, `data-open` returned to `0`.
- [x] Focus trap in the frame modal — verified: `Tab` inside the open modal is
      intercepted and focus is held on the close button.
- [x] Focus restoration after the modal closes — implemented via a stored
      `lastFocus` reference restored on close (same pattern as v1, which
      shipped this correctly).
- [x] New story content receives focus — every "continue"/"finish route"
      action focuses the newest `article[tabindex="-1"]`.

## Motion and flash
- [x] `prefers-reduced-motion` respected: the BOOM beat's `.boom-flash` class
      is only applied when `prefersReducedMotion()` is false; CSS also
      disables the keyframe under `@media (prefers-reduced-motion: reduce)`
      as a second guard.
- [x] Reduced-motion override in Access (`REDUCED MOTION` toggle) works
      independently of the OS setting — verified via the Access panel test.
- [x] No essential information is conveyed only through the flash animation;
      the BOOM text, device block, and frame/placeholder are present
      regardless of the animation.
- [x] A content note precedes the BOOM beat identifying it as a sudden,
      high-impact visual moment.

## Nonvisual access
- [x] Linear transcript mode (Access → "LINEAR TRANSCRIPT MODE") — verified:
      toggling it and switching to STORY renders the full fixed narrative and
      channel text as one continuous read, independent of interactive
      progress.
- [x] Text equivalents for every environmental/device/record signal — all
      "TICK." beats, device blocks, and record blocks are plain text, not
      images or audio.
- [x] Alt text is distinct from captions: `frameFig()` sets `<img alt>` from
      `EP01_V2_FRAMES[id].alt` and a separate `<figcaption>` from the frame
      title/role — verified by inspection of `episode-01.render.js`.
- [x] A single `aria-live="polite"` region (`#live`) announces one message at
      a time; `say()` clears then re-sets the region on a short delay so
      rapid successive announcements don't get dropped or merged.
- [x] No sound is required to understand the five ticks — "TICK." is a
      textual eyebrow line, not an audio cue.

## Display preferences
- [x] Standard/large text toggle — verified via `#accSize` in the Access test.
- [x] High contrast toggle — verified via `#accContrast`; token overrides live
      in `html[data-contrast="high"]` in `episode-01.css`.
- [x] Reduced-motion toggle persists independently (own `localStorage` key).
- [x] Preferences (`umada-ep01-pref-*`) are stored separately from story
      progress (`umada-ep01-v2`) and are untouched by "Clear witness ledger"
      or "Restart episode."

## State and reset
- [x] "Restart episode" resets progress to `EP01_V2_DEFAULT_STATE` after a
      confirm dialog.
- [x] "Clear witness ledger" clears only ledger-derived arrays
      (`contradictionsFound`, `unresolvedQuestions`, `trustDecisions`,
      `witnessesFollowed`, `channelsOpened`, `framesSeen`,
      `archiveLedgerAdditions`, `archiveExamined`, `contextExamined`) and
      leaves story position and preferences untouched, after a confirm
      dialog.
- [x] Both destructive actions require confirmation.

## Functional / technical (acceptance-test crossover)
- [x] End-to-end walkthrough completed with zero console errors and zero
      failed requests other than the browser's automatic `favicon.ico`
      probe (not a repository asset).
- [x] Rendering functions never mutate state; all mutation happens in
      `episode-01.render.js`'s single delegated click handler, which calls
      `EP01V2.*` action methods from `episode-01.state.js` and then
      re-renders.
- [x] Tick Four requires BODY and RECORD to both be opened, in either order,
      before the "What should Luabi preserve?" prompt appears — verified.
- [x] The BOOM scene has no avoidance choice — its only control is the
      continue button.
- [x] Archive Mode is locked until `firstReadingComplete`; unlocking and the
      explicit "ADD THIS FRAGMENT TO MY WITNESS LEDGER" action were both
      exercised without error.
- [x] `umada-ep01-v2` is a distinct, versioned storage key from v1's
      `umada-ep01`; a legacy v1 record produces a migration notice on the
      entry screen instead of being silently imported.

## Known gaps (deferred, not blocking)
- This pass used a scripted browser, not an actual screen reader (VoiceOver/
  NVDA/JAWS) or a physical switch device. A manual pass with at least one
  screen reader is recommended before wide release.
- Color contrast ratios for the monochrome graphite palette have not been
  run through an automated contrast checker; the high-contrast mode exists
  as a mitigation but the standard palette's exact ratios are unverified.
- The frame modal's focus trap is intentionally minimal (it only has one
  focusable control, the close button); if a future version adds more
  controls inside the modal, the trap logic will need to cycle between them
  rather than always refocusing the close button.
- No automated axe-core / Lighthouse accessibility audit has been run in
  this session; the checks above are manual/scripted only.
