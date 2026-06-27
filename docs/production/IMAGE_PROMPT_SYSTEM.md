# Image Prompt System

Status: PROBABLE (reusable tooling; not yet exercised on an approved artifact)

A reusable template for generating UMADA reference/concept images, so prompts stay
consistent with locked canon instead of being rebuilt from scratch each time. This
adapts the master prompt template and per-character consistency blocks from the
2026-06-27 production-pipeline fragment
(`13_fragments/2026-06-27_studio_pipeline_package.md`), corrected for the locked
settlement spelling and tied to the repo's actual canon sources instead of
free-floating descriptions.

Any image produced from this template is a **draft artifact**, not canon, until it
passes `00_governance/CANON_APPROVAL_CHECKLIST.md`.

## Master prompt template

```text
Create a [medium/shot type] for UMADA.

Scene ID: [SCENE_ID]
Location: [LOCATION — must be a locked location, e.g. Friedmandostorp; see
  00_governance/CANON_STATUS.md]
Time: [TIME]
Characters: [CHARACTERS — pull facts from data/characters.json; do not invent traits
  not present there]
Canon moment: [CANON_BEAT — must trace to a LOCKED or PROBABLE anchor in
  00_governance/CANON_STATUS.md or docs/production/STORYBOARD_READINESS_MAP.md]

Visual style:
[See "Visual layer" note below — pick presentation-layer or diegetic-layer style,
  never both.]

Camera:
[CAMERA ANGLE / LENS / MOTION]

Composition:
[FOREGROUND / MIDGROUND / BACKGROUND]

Continuity requirements:
[CHARACTER DESIGN RULES — see Character Consistency Blocks below]
[WARDROBE]
[OBJECTS]
[ENVIRONMENT]

Mood:
[MOTION / EMOTION]

Avoid:
[See Avoid list below.]
```

## Visual layer note (open tension, not yet resolved)

`00_governance/VISUAL_LAYER_RULES.md` locks two distinct visual layers: a monochrome
graphite **presentation/archive layer**, and a colorful, weather-rich **diegetic/world
layer** ("colorful where canon supports it... never Arctic"). The 2026-06-27 fragment's
proposed "Base Style" (charcoal, graphite, ink wash, mostly grayscale/ash/stone/muted
coastal browns) reads much closer to the locked presentation layer than to the locked
colorful diegetic layer. This template does not resolve that tension — pick the layer
the image actually belongs to per `VISUAL_LAYER_RULES.md`, rather than defaulting to
the fragment's grayscale base style for diegetic/world content. Flagged for Kemi to
confirm whether a desaturated documentary look is an intentional refinement of the
diegetic layer or simply describes presentation-layer material.

## Avoid list

From the 2026-06-27 fragment, consistent with `VISUAL_LAYER_RULES.md` and
`01_canon/NAGO_NO_GENERIC_GLYPHS_RULE.md`:

- Glossy futuristic/sci-fi design, neon cyberpunk
- Generic Afrofuturism tropes
- Overdesigned armor, generic fantasy armor
- Horror-monster chimera design (chimeras are care infrastructure, not monsters — see
  `00_governance/CANON_STATUS.md`'s Locked civilizational anchors)
- Explosion/disaster spectacle as entertainment
- Arctic/ice/snow/glacier/Nordic framing of any kind (permanently retired, see
  `VISUAL_LAYER_RULES.md`)
- Generic decorative glyphs standing in for real Nago signs

## Character consistency blocks

These cite `data/characters.json` for locked facts; the descriptive language below is
EMERGING, sourced to the single 2026-06-27 fragment, and should be treated as a
starting point pending Kemi's confirmation — not as settled design.

**Ada / Adanna Venter** — Black woman, field commander/scapegoat, survivor of Cape
Wipeout, first total cybernetic reconstruction case. EMERGING descriptor: "elegant
strong features, Iman-like presence, expressive face, grounded survivor energy, no
glamour pose, no superhero styling." In early Cape Wipeout scenes: injured, dusty,
human, vulnerable, alive.

**Tallai / Talla** — chimera care specialist, survivor of Cape Wipeout, first to
discover/rescue Ada. EMERGING descriptor: "tall nonhuman chimera care-being, veiled or
wrapped silhouette, lab-coat or practical cloth layers, gentle posture, elongated but
not monstrous"; communicates through hands, head-tilt, stillness, protective attention.

**Q** — scout/sensing role ("Q detects"), survivor of Cape Wipeout. EMERGING
descriptor: "small intelligent chimera, insect-like yet more humanoid than monstrous,
expressive eyes, delicate articulated limbs, agile posture, curious analytical
energy"; communicates through clicking and gesture, often perched observing.

**Quartz** — load-bearer/rescue anchor role ("Quartz carries"), survivor of Cape
Wipeout. EMERGING descriptor: "massive gentle protector chimera, Snuffleupagus-like
emotional presence without copying any existing character, large soft form,
protective posture, ancient animal intelligence, calm power, never horror-coded."

## Provenance

Adapted 2026-06-27 from `13_fragments/2026-06-27_studio_pipeline_package.md`, corrected
from that fragment's "Friedmandestorp" typo to the locked **Friedmandostorp** spelling.
This is process/tooling, not canon — see `00_governance/CANON_STATUS.md` and
`docs/canon/GOVERNANCE.md` for the actual source-of-truth hierarchy this template must
defer to.
