# UMADA Geometry Language v0.1

**Canon status:** LOCKED  
**System status:** EXECUTABLE REFERENCE  
**Date locked:** 2026-09-22

## Core proposition

UMADA geometry is not decorative. It is a shared computational grammar for architecture, civic systems, Ether infrastructure, memory, access, and state change.

The canonical primitives are:

| Geometry | Civic meaning | Computational analogue |
|---|---|---|
| Circle | witness, gathering, continuity | shared state |
| Spiral | memory, archive, healing | persistent memory |
| Radial Field | Ether distribution, observatory, routes | distributed network |
| Concentric Rings | governance, layered access, protected knowledge | permission layers |
| Axis + Threshold | authority, decision, transition | state transition |

## Canon rule

> **Ether follows civic geometry.**

Geometry does not create Ether. Geometry establishes coupling, routing, storage, access, and stewardship conditions for a pre-existing field.

## Symbolic grammar

The geometry sequence can function as an executable symbolic sentence.

```text
SPIRAL → CIRCLE → RADIAL
```

means:

```text
retrieve memory
→ bring it into public witness
→ distribute it through the network
```

Likewise:

```text
RADIAL → RINGS → THRESHOLD
```

means:

```text
receive information
→ determine authorized access
→ permit or reject transition
```

This allows architecture, Luabi interfaces, Nago communication, Ether infrastructure, and civic governance to share one grammar.

## Reference data model

```js
const UMADA = {
  geometries: {
    circle: {
      meaning: ["witness", "gathering", "continuity"],
      function: "civic-center",
      computationalRole: "shared_state"
    },
    spiral: {
      meaning: ["memory", "archive", "healing"],
      function: "archive",
      computationalRole: "persistent_memory"
    },
    radial: {
      meaning: ["ether-distribution", "observatory", "routes"],
      function: "network",
      computationalRole: "distributed_network"
    },
    rings: {
      meaning: ["governance", "layered-access", "protected-knowledge"],
      function: "access",
      computationalRole: "permission_layers"
    },
    threshold: {
      meaning: ["authority", "decision", "transition"],
      function: "gate",
      computationalRole: "state_transition"
    }
  }
};
```

## District schema

```js
const district = {
  type: "eco-civic-district",
  center: {
    geometry: "circle",
    purpose: "witness-plaza"
  },
  rings: [
    { radius: 120, access: "public" },
    { radius: 200, access: "civic" },
    { radius: 280, access: "custodial" },
    { radius: 360, access: "sanctum" }
  ],
  etherNodes: [
    { angle: 0, radius: 300 },
    { angle: 60, radius: 300 },
    { angle: 120, radius: 300 },
    { angle: 180, radius: 300 },
    { angle: 240, radius: 300 },
    { angle: 300, radius: 300 }
  ],
  archive: {
    geometry: "spiral",
    angle: 210,
    radius: 320
  },
  gates: [
    { axis: "north", type: "ceremonial-entry" },
    { axis: "south", type: "threshold-of-return" }
  ],
  infrastructure: {
    water: true,
    farms: true,
    clinics: true,
    schools: true,
    ramps: true,
    cooling: true
  }
};
```

## Access rule

```js
function accessLevel(distanceFromCenter) {
  if (distanceFromCenter < 120) return "witness";
  if (distanceFromCenter < 200) return "public";
  if (distanceFromCenter < 280) return "council";
  if (distanceFromCenter < 360) return "custodial";
  return "outside";
}
```

The ring is therefore simultaneously a visible civic form and a machine-readable permission boundary.

## Ether routing

```js
function etherFlow(t, radius, angle) {
  const distance = (t % 1) * radius;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance
  };
}
```

The canonical computational principle is:

```text
EtherFlow = Geometry × Purpose × Access
```

This is a design rule, not a real-world physics equation.

## Civic distribution rule

```js
function distributeEther(node, destination) {
  const permission = destination.accessLevel;
  const civicNeed = destination.energyNeed;
  const available = node.availableEther;

  return Math.min(
    available,
    civicNeed * accessMultiplier(permission)
  );
}
```

The important canon implication is that Ether distribution is governed by civic purpose and stewardship rather than simple ownership.

## System layers

```text
VISUAL SYSTEM
circle
spiral
rings
radial lines
axes

        ↓

CITY SYSTEM
plaza
archive
wards
routes
gates

        ↓

COMPUTATIONAL SYSTEM
shared state
persistent memory
permissions
network
state transition
```

## Relationship to Luabi and Nago

The geometry language is a possible shared substrate for:

- **Luabi:** machine interpretation of civic state, memory, routes, thresholds, and authorized transitions.
- **Nago:** symbolic and tactile encoding of commands, locations, access states, and remembered relationships.
- **Architecture:** the visible spatial expression of the same grammar.
- **Ether infrastructure:** the routing and stewardship layer.
- **Governance:** permission, witness, decision, and transition logic.

This does not mean every Nago sign is automatically one of the five geometries. It establishes a reusable system that Nago and Luabi can reference.

## Reality boundary

UMADA Geometry Language is speculative worldbuilding and executable design fiction. Its software can generate layouts and simulate rules, but the software is not evidence that real-world geometry manipulates an undiscovered Ether field.

## Reference implementation

- Browser demo: `sections/geometry-language.html`
- Runtime: `assets/js/umada-geometry-language.js`
- Visual source: `sections/ancient-geometry-system.html`
- Ether model: `08_technology/ETHER_POWER_COUPLING_MODEL.md`
