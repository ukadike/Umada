# UMADA — Episode One v2: Cape Wipeout, Part One

**A Luabi Witness Record.**

This is the cinematic rebuild of Episode One's audience-facing story layer,
built on top of the working interaction engine, evidence architecture,
accessibility foundation, and witness-ledger model proven in
[v1](../v1-archive/README.md). The episode begins in the Council Era, roughly
two hundred years after Cape Wipeout, and travels backward into the event
whose meaning is being contested.

> The record says Ada died. Her body says she lived. Care acts before
> authority corrects itself.

## Entry point

Open `index.html`. It depends on the sibling `assets/` folder — publish this
whole `v2/` directory, not the HTML alone.

## Structure

```text
v2/
├── index.html                  entry shell + tablist + panel + frame modal
├── episode-01.data.js          scene data — no state, no rendering
├── episode-01.state.js         state machine + witness ledger + persistence
├── episode-01.render.js        pure rendering + a single delegated event handler
├── episode-01.css              monochrome graphite archive styles (locked tokens)
├── assets/                     14 realized frame images carried forward from v1
├── exports/ep01-imaging-001.json   static copy of the Field Notes discovery object
├── FRAME_MANIFEST.md           all 21 v2 frame slots, sourced or AWAITING FRAGMENT
├── CHANGELOG.md                what changed from v1 and why
├── accessibility-checklist.md  tested accessibility results
└── README.md                   this file
```

## Public navigation

`STORY` · `WITNESS LEDGER` · `ARCHIVE` · `PEOPLE` · `FIELD NOTES` · `ACCESS`

Development-only information (frame-manifest status, unresolved canon,
migration state) is available at `index.html?mode=development` and never
appears in the public reading flow.

## Reader role

> You are entering a witness record carried by the Reporter. You may choose
> what to examine, decide what you trust provisionally, and preserve
> contradictions. You may not rewrite what occurred.

## Interaction law

Choices are epistemic, not godlike: what to examine, which channel to open,
whose signal to follow, whether to preserve a contradiction, what to trust
provisionally. The audience cannot prevent the blast, save or abandon Ada,
change who performs the rescue, or reveal the Reporter. The interface marks
`FIXED HISTORY` versus `AVAILABLE EVIDENCE` versus `YOUR INTERPRETATION` so
the distinction is never ambiguous.

## Storage

Progress is stored under the versioned key `umada-ep01-v2`, separate from
v1's `umada-ep01`. If a v1 record is found in the same browser, the entry
screen shows a migration notice — it is never silently imported, because the
story structure changed. See `CHANGELOG.md`.

## Terminology

- **Luabi** is the in-world device and witnessing system. **Omoluabi** is the
  present-day research bridge and appears only in the Field Notes tab.
- **Friedmandorstrop** is the locked settlement spelling
  (`00_governance/CANON_STATUS.md`, 2026-07-17).
- The Reporter's face is never shown, in the interactive text or in any
  frame's alt text.

## What v2 does not do

It does not resolve KC's fate, the rescue destination, or the Reporter's
identity, and it does not invent visual canon for the seven `AWAITING
FRAGMENT` frame slots (see `FRAME_MANIFEST.md`) — those render as styled
text placeholders, never a broken image icon or a fabricated asset path.
