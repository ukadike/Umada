# UMADA_CANON_INDEX.md
## Canon Registry Directive for Claude Code

**Status:** Canonical Development Infrastructure
**Purpose:** Prevent canonical drift, duplicated characters, inconsistent terminology, and accidental rewriting of established UMADA history.

**Integration note:** Delivered by Kemi on 2026-06-25 as `UMADA_CANON_INDEX.md.pdf` and again as the `umada_canon_index_compact_package.zip`. Reproduced here as governance text with one correction: the settlement name below reads **Friedmandostorp**, not "Friedmandestorp" as it appeared in the delivered source — see `00_governance/CANON_STATUS.md` for the spelling lock and `01_canon/OPEN_QUESTIONS.md` for items this directive newly raises against pre-existing locked/EMERGING canon. Nothing already LOCKED elsewhere in the repository has been overwritten to match this file; conflicts are cross-referenced, not silently resolved.

---

## Core Principle

UMADA is a canonical universe, not loose notes.

Every entity exists exactly once. Every chapter, illustration, animation, website, p5.js sketch, interactive prototype, repository, and AI-generated artifact must reference this Canon Index before introducing new information.

Claude Code must not invent duplicate characters, locations, technologies, events, or Houses when a canonical version already exists.

---

## Canon States

Use these labels consistently:

- **Canon** — established fact; protected.
- **Historical Debate** — competing accounts intentionally preserved.
- **Legend** — believed stories that may not be historically verified.
- **Research** — speculative or experimental; keep in `/labs` until approved.

---

## Canon Categories

Every canonical object belongs to one category:

- Characters
- Locations
- Organizations
- Events
- Technologies
- Species
- Languages
- Artifacts
- Political Houses
- Documents

Every object should receive a stable unique ID.

Example ID format:

```yaml
id: character_ada_001
```

---

## Non-Negotiable Naming Rules

Use canonical names exactly.

- **Ada** / **Adanna Venter** — not renamed.
- **KC** — not Casey.
- **Tallai** — not Tala, unless explicitly describing a variant/misspelling.
- **Cindy** — an initiating environmental event, not a character.
- **Cape Wipeout** — the blast/event at the Cape laboratory.
- **Dead Glass** — the post-Cindy material/era of built-environment failure; not the same as Cape Wipeout.
- **UMADA** — Region One / Africa; means "Ó máa dáa" / "It will be well."
- **TISETAN** — capital; means "Ó ti ṣe tán" / "It is done."
- **Nago** — universal civic language.
- **Omoluabi** — observation/documentation device and public-interest system, not the subject of UMADA.

---

## Canonical Characters

### Ada

```yaml
id: character_ada_001
name: Ada
full_name: Adanna Venter
status: Alive in Council Era
species: Human; later extensively cybernetic
role:
  - protagonist
  - survivor of Cape Wipeout
  - first total cybernetic reconstruction case
  - founder/steward of Estate of Memory
relationships:
  KC: partner
  Tallai: rescuer, companion, estate steward
  Reporter: chosen by Ada for time investigation
notes:
  - at epicenter of blast
  - needed total reconstruction
  - refuses political rule
  - refuses to become the time traveler
  - chooses the Reporter
```

### KC

```yaml
id: character_kc_001
name: KC
status: Deceased before/within Council-era memory
species: Human; limited cybernetic assistance
role:
  - Ada's partner
  - Cape operation operative
  - ethical counterpoint to total reconstruction
philosophy:
  - accepts limited restorative cybernetics for mobility
  - refuses full restructuring
  - insists technology serve personhood and choice
```

### Tallai

```yaml
id: character_tallai_001
name: Tallai
status: Deceased before Council Era
species: Chimera
role:
  - first being to discover/rescue Ada after Cape Wipeout
  - later Steward of Ada's Estate
  - caretaker of sanctuary network and memory practices
notes:
  - connected to bread stand origin moment
  - chooses stewardship rather than ownership
  - death profoundly shapes Ada's grief and Estate of Memory
```

### The Reporter / Time Traveler

```yaml
id: character_reporter_001
name: The Reporter
status: Active during opening frame
species: AI-enhanced hybrid human-cybernetic
role:
  - observer
  - time traveler
  - narrator
  - carrier of Omoluabi device
notes:
  - chosen by Ada
  - sent to witness, not change history
  - voice is precise, reflective, historically corrective
```

---

## Canonical Locations

```yaml
- id: location_umada_001
  name: UMADA
  type: Region One / Africa
  meaning: It will be well
  significance: birthplace of post-Dead Glass civilization and key technologies

- id: location_tisetan_001
  name: TISETAN
  type: Capital
  meaning: It is done
  significance: Council meeting place two centuries later

- id: location_friedmandostorp_001
  name: Friedmandostorp
  type: coastal settlement / marketplace
  significance: bread stand, Ada/KC meeting plan, Tallai encounter, ordinary life before Cape Wipeout

- id: location_cape_laboratory_001
  name: Cape Laboratory
  type: chimera/ecological research institute
  significance: target of MIC operation; Cape Wipeout origin

- id: location_estate_memory_001
  name: Estate of Memory
  type: sanctuary, archive, village, living memory system
  significance: Ada's refuge, Tallai's stewardship, Nago and oral tradition preservation
```

---

## Canonical Events

### Quiet Arrival

```yaml
id: event_quiet_arrival_001
name: Quiet Arrival
time: Two years before Cindy
summary: A peaceful interstellar federation arrives on Earth for disclosure. It is not an invasion or infestation. Some visitors remain in remote areas for peaceful living.
```

### Cindy

```yaml
id: event_cindy_001
name: Cindy
type: planetary environmental event
summary: Atmospheric event that spreads strange sediment for days. Its sediment alters material and biological possibilities.
```

### Cape Wipeout

```yaml
id: event_cape_wipeout_001
name: Cape Wipeout
time: planned blast around 9:00 a.m.
summary: MIC strike at Cape laboratory occurs out of sequence/too early. Ada is caught at the epicenter. Tallai later discovers her alive.
```

### Dead Glass Era

```yaml
id: event_dead_glass_era_001
name: Dead Glass Era
summary: After Cindy and Cape Wipeout, the built environment fails. Glass, concrete, electronics, infrastructure, and cities collapse into widespread programmable material residue called Dead Glass.
```

### Great Scientific Retreat

```yaml
id: event_great_scientific_retreat_001
name: Great Scientific Retreat
summary: Public trust in chimeric and advanced labs collapses. Funding disappears. Knowledge survives in distributed communities, hidden archives, oral tradition, and sanctuary networks.
```

---

## Canonical Technologies and Materials

```yaml
- id: tech_omoluabi_001
  name: Omoluabi
  type: observation/documentation device and public-interest intelligence system
  rule: used to witness, document, preserve truth; not a weapon

- id: material_dead_glass_001
  name: Dead Glass
  type: widespread post-collapse programmable material
  rule: common for everyday uses; restricted uses require governance tests

- id: tech_ether_power_001
  name: Ether Power
  type: free-energy-like system accessed through activated/coded memory stones and Dead Glass
  rule: not biological interface based

- id: material_memory_stones_001
  name: Memory Stones
  examples: [Quartz, Coral, regional stones, Dead Glass]
  function: can be activated/coded to receive Ether Power

- id: artifact_memory_tablets_001
  name: Memory Tablets
  function: preserve oral tradition, Nago glyphs, law, education, memory, songs
```

---

## Five Houses

There are exactly five Houses unless explicitly revised.

```yaml
- id: house_lion_001
  name: Lion House
  themes: [continuity, monarchy, governance, stewardship]

- id: house_jaguar_001
  name: Jaguar House
  themes: [adaptability, intelligence, strategy, second successful chimera lineage]

- id: house_cybernetic_001
  name: Cybernetic House
  themes: [accessibility, assistive technology, prosthetics, longevity, restoration]

- id: house_pure_human_001
  name: Pure Human House
  themes: [continuity with pre-Cindy humanity, origin claims, contradiction around cybernetic dependence]

- id: house_s_vector_001
  name: S-Vector House
  themes: [alien federation descendants, ancient knowledge, memory stones, disclosure]
```

---

## Languages and Communication

```yaml
- id: language_nago_001
  name: Nago
  type: universal civic language
  modalities: [spoken, signed, sung, tactile, visual glyphs, carved, programmable]
  origin: began before UMADA; evolved as secret/refuge language for hunted chimeras and allies; became world language
  rule: no modality is secondary; accessibility defines the language

- id: language_hand_relay_001
  name: Hand Relay
  type: signed/gesture form of Nago
  rule: canonical Nago modality; must account for people with limited hand mobility through prosthetics, alternate gestures, tactile, or cybernetic supports
```

---

## Key Timeline

1. **Pre-Cindy Earth** — advanced MIC, cybernetics, chimera research; many failed chimera attempts.
2. **Two years before Cindy** — peaceful alien federation arrives on Earth; some remain in remote areas.
3. **Cindy** — atmospheric event spreads sediment; world does not yet understand consequences.
4. **Cape Operation Morning** — Ada and KC are supposed to meet at Friedmandostorp bread stand before proceeding to Cape lab for 9 a.m. operation. Ada arrives at 8 a.m. for bread. Tallai is also permitted to leave refuge for bread.
5. **Cape Wipeout** — blast occurs too early/out of sequence. Ada is caught at epicenter. Tallai discovers Ada alive.
6. **Immediate aftermath** — Cindy sediment enables cure/stabilization linked to surviving chimera lineages. Lion lineage works; Jaguar lineage later works better.
7. **Great Scientific Retreat** — lab funding and public trust collapse.
8. **Chimera persecution** — sanctuary networks form. Ada's estate becomes a refuge network.
9. **Dead Glass Era** — built environment fails; Dead Glass spreads globally.
10. **Nago evolves** — from secret/refuge communication to universal civic language.
11. **Ether Power discovered** — memory stones and Dead Glass can be coded/activated.
12. **Five Houses emerge** — Lion, Jaguar, Cybernetic, Pure Human, S-Vector.
13. **Ada's Estate of Memory** — Tallai stewards sanctuary; KC lives with limited cybernetics; Tallai and KC eventually die; Ada continues.
14. **Two centuries later** — Council meets in TISETAN to investigate unresolved history. Ada refuses to time travel; chooses Reporter with Omoluabi device.

---

## Claude Code Rules

Claude Code must:

- Read this file before generating chapters or interfaces.
- Preserve canonical names and relationships.
- Use YAML front matter in every Markdown file.
- Keep new ideas in `/labs` unless approved as Canon.
- Treat accessibility as a release blocker.
- Treat Nago as multimodal, semantic, accessible infrastructure.
- Treat UMADA as a living archive, not just a story.

Claude Code must not:

- Rename KC as Casey.
- Rename Tallai as Tala unless noting a variant.
- Treat Cindy as a person.
- Confuse Cape Wipeout with Dead Glass.
- Add new Houses without explicit approval.
- Make Omoluabi a weapon.
- Make Ether Power biological-interface based.
- Treat accessibility as optional or cosmetic.

---

## Standard Markdown Front Matter

Every Markdown file should begin with:

```yaml
---
id: replace_with_unique_id
status: canon | historical_debate | legend | research
characters: []
locations: []
events: []
technologies: []
languages: []
houses: []
accessibility_notes: []
---
```

---

## Guiding Philosophy

UMADA is a living archive.

Memory requires stewardship.

Canonical consistency is a form of stewardship.

The goal is not simply to write stories.

The goal is to preserve a coherent civilization.

Like the Estate of Memory itself,

the archive remembers.
