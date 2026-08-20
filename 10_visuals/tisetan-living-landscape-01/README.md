# Tisetan: Living Landscape 01

**Status:** active prototype  
**System:** UMADA / experience layer  
**Medium:** p5.js interactive environment

## Purpose

This is the first living-world surface for Tisetan. It is not a decorative animation or a separate demo. It is an explorable atmospheric layer connecting the existing UMADA website, canon data, ledger, Episode 1 material, and future spatial/AR work.

## Visitor path

**Enter UMADA → Enter Tisetan → explore → encounter evidence → open ledger → Cape Wipeout / Episode 1**

## Interaction model

1. Enter the world from the UMADA public site.
2. Move through or inspect a living Tisetan landscape.
3. Encounter marked places, civic signals, objects, and environmental traces.
4. Inspect an encounter to surface a ledger record rather than an omniscient exposition dump.
5. Continue toward Episode 1 / Cape Wipeout.

## World-building rules

- Canon before spectacle.
- Accessibility is part of the world system, not an overlay.
- Environmental motion should communicate state and history.
- Information appears through encounters, records, signals, testimony, and artifacts.
- The world may contain uncertainty; the interface must distinguish known, inferred, disputed, and unknown information.
- Do not overwrite established visual canon without an explicit canon revision.
- Consume existing structured UMADA data wherever practical rather than duplicating lore inside the sketch.

## v0.1 build target

Create a browser-based p5.js scene with:

- atmospheric depth and environmental motion;
- a navigable or inspectable field;
- at least three meaningful encounter points;
- pointer/touch and keyboard interaction;
- reduced-motion behavior;
- textual descriptions for meaningful visual states;
- a semantic HTML ledger panel capable of receiving structured UMADA data;
- an explicit path onward to Episode 1.

## Architecture

p5.js owns the living visual field. Semantic HTML owns navigation, text, controls, ledger information, and accessibility. The canvas must not become the only way to understand or operate the experience.

## Future spatial layer

Encounter points are conceived as spatial anchors. A later AR implementation can express the same objects, signs, locations, or phenomena in physical space without inventing a second UMADA ontology.

## Definition of done

A visitor can enter Tisetan, perceive that the environment is alive, navigate without a mouse, discover three meaningful world encounters, open their ledger information, understand how to proceed to Episode 1, and use the experience with reduced motion enabled.
