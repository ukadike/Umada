# Episode One v2 — Frame Manifest

21 frame slots. `WITNESS FRAME` slots have a realized image in `assets/`, carried
forward from the v1 frame set where the same moment is depicted. `AWAITING
FRAGMENT` slots have no artifact physically present in the repository; the
engine renders a styled text placeholder (frame id, title, and the alt-text
description below) instead of a broken image icon, and the narrative is fully
usable without the image.

| Frame ID | Status | Title | Source |
|---|---|---|---|
| EP01-V2-F01 | AWAITING FRAGMENT | Tisetan balcony — Lion king in cybernetic wheelchair | new in v2, no v1 equivalent |
| EP01-V2-F02 | AWAITING FRAGMENT | Wife enters — "It is time" | new in v2, no v1 equivalent |
| EP01-V2-F03 | WITNESS FRAME | Circular council chamber | v1 `ep01-frame-01-council-era.png` |
| EP01-V2-F04 | AWAITING FRAGMENT | Ada refuses the assignment | new in v2, no v1 equivalent |
| EP01-V2-F05 | WITNESS FRAME | Luabi dispatch to the concealed Reporter | v1 `ep01-frame-02-dispatch.png` |
| EP01-V2-F06 | WITNESS FRAME | Temporal activation | v1 `ep01-frame-03-activation.png` |
| EP01-V2-F07 | WITNESS FRAME | Friedmandorstrop, one hour before | v1 `ep01-frame-04-arrival-friedmandorstrop.png` |
| EP01-V2-F08 | WITNESS FRAME | Living laboratory garden | v1 `ep01-frame-05-garden-at-lab.png` |
| EP01-V2-F09 | WITNESS FRAME | Tallai's bread route, with Q and Quartz | v1 `ep01-frame-06-going-for-bread.png` |
| EP01-V2-F10 | WITNESS FRAME | Ada arrives and waits for KC | v1 `ep01-frame-07-ada-arrives-early.png` |
| EP01-V2-F11 | AWAITING FRAGMENT | Tick One — leaves turn | new in v2, no v1 equivalent |
| EP01-V2-F12 | AWAITING FRAGMENT | Tick Two — Tallai stops | new in v2, no v1 equivalent |
| EP01-V2-F13 | AWAITING FRAGMENT | Tick Three — the message arrives | new in v2, no v1 equivalent |
| EP01-V2-F14 | WITNESS FRAME | Tick Four — the record arrives before the event | v1 `ep01-frame-08-tick-four-record.png` |
| EP01-V2-F15 | WITNESS FRAME | Tick Five — recognition | v1 `ep01-frame-09-tick-five-recognition.png` |
| EP01-V2-F16 | WITNESS FRAME | BOOM | v1 `ep01-frame-10-boom.png` |
| EP01-V2-F17 | WITNESS FRAME | Ada after the blast | v1 `ep01-frame-11-rescue-begins.png` |
| EP01-V2-F18 | AWAITING FRAGMENT | Q detects life | v1 has no Q-solo frame; nearest v1 asset (`ep01-frame-11-rescue-begins.png`) is already assigned to F17 |
| EP01-V2-F19 | WITNESS FRAME | Quartz lifts Ada and the teddy bear | v1 `ep01-frame-12-quartz-finds-something.png` |
| EP01-V2-F20 | WITNESS FRAME | Tallai leads the rescue into smoke | v1 `ep01-frame-13-to-safety.png` |
| EP01-V2-F21 | WITNESS FRAME | Luabi detects the wind-field shift | v1 `ep01-frame-16-close-part-two-tease.png` |

**14 of 21 slots** carry a realized image; **7** are `AWAITING FRAGMENT`.

## v1 frames not carried forward

`ep01-frame-14-stabilization.png` (depicts an intact care facility) and
`ep01-frame-15-ada-remembers.png` (depicts Ada regaining awareness and asking
for KC in a settled interior) are preserved in `v1-archive/01_FRAMES/` but not
reused in v2. Both stage a specific rescue destination; v2's rescue-convergence
copy explicitly withholds the destination ("DESTINATION WITHHELD — VERIFIED
FRAGMENT NOT YET RECOVERED"), so reusing either image here would visually
assert a decision the narrative deliberately defers. If a destination is later
locked in canon, these two frames are the first candidates to revisit.

## Alt text

Alt text for every frame (both `WITNESS FRAME` and `AWAITING FRAGMENT`) lives
alongside the frame data in `episode-01.data.js` (`EP01_V2_FRAMES`), one
source of truth for both the rendered `<img alt>` and the placeholder card
text, so the two can never drift apart.
