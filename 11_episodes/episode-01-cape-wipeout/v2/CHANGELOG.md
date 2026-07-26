# Episode One v2 — Changelog

## Narrative

- Full rebuild of the audience-facing story layer around the newer UMADA
  canon: opens with the Lion king above Tisetan (new prologue, previously
  absent), moves through an expanded Council chamber scene, an explicit
  Ada-refuses beat with dialogue, a dedicated Dispatch scene with the
  OBSERVE / REMEMBER / RETURN / DO NOT CORRECT THE PAST directives, and a
  Temporal Transition scene with its own device-confidence readout.
- The five ticks are now five separate, individually titled scenes (v1
  compressed them into three generic tick beats plus Tick Four/Five). Tick
  Three now stages the facility message arriving before Tick Four reveals
  its contents, matching the spec's "do not reveal the KIA record until the
  user continues."
- Tick Four's BODY/RECORD contradiction now *requires* both channels to be
  opened, in either order, before Luabi's three-way preserve choice appears
  (v1 allowed the choice with only one channel opened).
- The rescue sequence is now a five-route aftermath hub (Ada—Body,
  Tallai—Witness, Q—Detection, Quartz—Carrier, Luabi—Device) replacing v1's
  six-signal hub of the same idea; the destination is explicitly withheld in
  the rescue-convergence copy rather than left as an open production note in
  the story text itself.
- New closing scene: "the wind takes the record," ending on the
  WIND FIELD CHANGE DETECTED / NEXT RECORD: CINDY device readout and the
  final line "The record said Ada died. Ada lived long enough to refuse
  becoming the record again." v1 ended at the witness ledger with no
  Episode Two bridge.
- The public episode title changed from *"An Omoluabi Witness Record"* to
  *"A Luabi Witness Record"* — Luabi is the in-world device; Omoluabi is the
  present-day research system and now appears only in the Field Notes tab
  (see Terminology, below).

## Terminology

- **Luabi**, not **Omoluabi**, is used throughout the in-world story text,
  device readouts, and the entry screen. Omoluabi is confined to the new
  Field Notes tab's real-world research bridge.
- **Friedmandorstrop** is used consistently (locked spelling per
  `00_governance/CANON_STATUS.md`).
- **KC** is used consistently; **Tallai** is used consistently (not "Talla");
  **Quartz** is never gendered.
- "First total reconstruction protocol" language is gone; the rescue copy
  now reads "Tallai begins stabilization while they move."
- The assignment record now reads "ASSIGNMENT REQUESTED: ADA," not the
  abbreviated "A."

## Interaction

- Navigation is simplified to the six public sections named in the brief:
  STORY, WITNESS LEDGER, ARCHIVE, PEOPLE, FIELD NOTES, ACCESS. v1's UX-DOCS
  and DOCTRINE tabs are retired from the public nav; the Rescue Doctrine is
  still revealed through the aftermath routes and is described inline in
  `episode-01.data.js` for anyone assembling a future dedicated view of it.
  Development-only information moved behind `?mode=development`, never
  exposed in the normal reading flow (v1 exposed asset paths and canon-flag
  notes directly in the UX-DOCS tab).
- The interface now visibly distinguishes `FIXED HISTORY` from
  `AVAILABLE EVIDENCE` from `YOUR INTERPRETATION` via a status-tag row on
  every scene, which v1 did not have.
- Archive Mode now requires an explicit "ADD THIS FRAGMENT TO MY WITNESS
  LEDGER" action before a fragment counts as part of the ledger; opening a
  fragment's evidence channel marks it "examined" but a separate action is
  needed to add it to the ledger proper. v1 treated rendering + first view
  as sufficient.
- A dedicated Field Notes tab holds the `ep01-imaging-001` Luabi→Omoluabi
  requirement discovery, unlocked (not opened) at the BOOM scene, with a
  real local-state update and JSON download on "Add to Omoluabi
  requirements" rather than a fake "saved" message.

## Accessibility

- Added a Linear Transcript Mode (Access tab) that presents the full fixed
  narrative as one continuous, non-interactive read — v1 had no equivalent.
- Added a Reduced Motion toggle independent of the OS `prefers-reduced-motion`
  setting; the BOOM scene's flash animation and the entry screen's tick delay
  both honor it.
- Added a content note ahead of the BOOM scene identifying it as a sudden,
  high-impact visual moment.
- Tab list now supports ArrowLeft/ArrowRight/Home/End per the WAI-ARIA tabs
  pattern (v1's tabs were click/click-only).
- The frame modal now traps Tab focus on its single control and restores
  focus to the triggering element on close (v1 had Escape + click-outside
  but no explicit trap).
- Visual tokens now use the repository's locked archive palette (`paper
  #efece2`, `ink #1a1a1a`, `line #d0cdc6`, `muted #6f6f6f`; Helvetica Neue /
  Georgia / Courier Prime) per the top-level `CLAUDE.md`, replacing v1's ad
  hoc palette (`#e9e6df` / `#16161a` / Georgia / Courier New).

## Technical

- Split into `episode-01.data.js` / `episode-01.state.js` /
  `episode-01.render.js` / `episode-01.css`, matching the required
  data/state/render/style separation. v1 was a single 576-line HTML file
  with inline `<style>` and `<script>`.
- New versioned storage key `umada-ep01-v2`. A v1 record under the old
  `umada-ep01` key triggers a migration notice on the entry screen instead
  of being imported, because the story structure changed underneath it.
- Rendering functions are strictly pure; all state mutation happens inside
  the single delegated click handler in `episode-01.render.js`, via action
  methods exported from `episode-01.state.js` (`EP01V2.*`). No render
  function calls an action method.
- `v1` is fully preserved, unmodified, at `../v1-archive/` (and the original
  publish location, `episodes/ep01/`, was left untouched).
- No `/mnt/data` paths anywhere in the new code.
- Missing frame art renders as a styled placeholder card (id, title, alt
  text, "AWAITING FRAGMENT" tag) — never a broken image icon, never a
  fabricated file path. See `FRAME_MANIFEST.md`.
