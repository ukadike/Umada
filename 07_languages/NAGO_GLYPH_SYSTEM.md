# Nago Glyph System v1

Status: EMERGING / PROTOTYPE

## Two axes — read first

Nago is organized on two distinct axes. Do not merge them.

- **Function families (public signage axis)** — what a sign is *for*. Seven families,
  from the realized plate: Survival, Care, Signal, Movement, Civic, Memory, Environment.
  See `NAGO_SYMBOLOGY_BIBLE.md`. This axis governs signage, wayfinding, and the
  website's Language & Signage section.
- **Glyph/motif families (narrative axis)** — the visual-narrative motifs below.
  Five families: Wound, Relay, Archive, Storm, Visitor. Used for title cards, dossier
  boards, the Visual Archive, and brand iconography — NOT as public signage categories.

In data, carry `function_family` (the seven) as the primary grouping key and a
separate motif field for the five. The public Visual Grammar (Circle, Open Circle,
Broken Circle, Three Rings, Hand+Ring, on the Golden Rectangle) lives on the plate
and is the buildable primitive set.

## Design Direction

The Nago glyph system should feel:

- ancient but not fake-ancient
- practical, not ornamental
- tactile, not only visual
- geometric, not generic fantasy
- accessible, not secretive
- born from need, not decoration

## Five Motif Families (narrative axis)

### 1. Wound
Broken circle, fracture, scar, split line.
Meanings: danger, breach, loss, false record, damage, warning.

### 2. Relay
Double line, nested ring, repeated arc.
Meanings: signal, communication, hand relay, return message, tower.

### 3. Archive
Circle, dot, frame, tablet, witness mark.
Meanings: memory, record, testimony, preserved fragment, canon.

### 4. Storm
Wave, spiral, pressure contour, concentric disturbance.
Meanings: Cindy, storm, viral spread, atmospheric signal, carrier event.

### 5. Visitor
Threshold, crossing mark, half-mask, obscured dot.
Meanings: time traveler, observer, hidden witness, arrival, not from here.

## Provisional Rule

Every glyph should work in black and white, raised relief, low resolution, and screen-reader text.

See `data/nago_symbology.json` for the structured form of these two axes.
