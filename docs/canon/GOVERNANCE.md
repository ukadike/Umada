# Canon Governance

`/docs` is a production-bible layer added alongside the existing canon engine
(`00_governance/`, `01_canon/`, `data/*.json`, the numbered `0X_` topic directories). It
does not replace, duplicate, or re-decide anything that engine already governs. Where
this file and the canon engine appear to disagree, **the canon engine wins** — that is
the same rule the engine applies to itself (see `00_governance/CANON_STATUS.md`,
line 1).

## Source of truth policy

Authority, in descending order:

1. **Realized plates and artifacts** — `assets/img/PLATE_NAGO_SYMBOLOGY_OF_UMADA.png`,
   `assets/img/PLATE_PROTO_NAGO.png`, `assets/video/UMADA_Friedmandostorp_Rescue_Animatic.mp4`.
   Where a written document disagrees with a plate, the plate wins
   (`00_governance/NO_FABRICATION_RULE.md`).
2. **`00_governance/CANON_STATUS.md`** — the single ledger of locked spellings and
   decisions, kept so they cannot drift or be reintroduced as variants.
3. **`01_canon/`** — seed canon, the civilizational ledger, founding myths, the visual
   canon registry, and `OPEN_QUESTIONS.md`.
4. **`data/*.json`** — the structured form the site and tooling read from; kept in sync
   with 1–3.
5. **`/docs`** (this layer) — production-bible prose for people, not the site or
   tooling, that points back into 1–4 rather than restating them. Treat every fact
   reproduced from the engine in this layer as a citation, not a re-derivation.

## Contradiction tracking

If a document anywhere in the repository (including this layer) states something that
conflicts with `00_governance/CANON_STATUS.md` or a realized plate:

1. Do not silently overwrite either side.
2. Log the conflict in `01_canon/OPEN_QUESTIONS.md`.
3. Resolve by confirming with Kemi (one tiny question,
   `00_governance/TINY_QUESTIONS_PROTOCOL.md`) or by re-checking the plate.
4. Record the resolution in `00_governance/CANON_STATUS.md`, including the retired
   variant, so it cannot be reintroduced. See the Friedmandostorp/Friedmandestorp and
   Jackal Peoples/Jackal Tribes entries for the pattern.

## Retcon process

UMADA has not yet retired a locked fact outright (only spelling variants and a dropped
Arctic framing — see `00_governance/CANON_STATUS.md`). If a genuine retcon is ever
needed:

1. State the proposed change and what it would overwrite.
2. Confirm explicitly with Kemi before touching any LOCKED entry — never retcon on
   inference alone.
3. Move the old fact to a `RETIRED` entry in `00_governance/CANON_STATUS.md` rather than
   deleting it, so the audit trail survives.
4. Update every `data/*.json` and `0X_` document that cited the old fact in the same
   change set — a retcon is not done until every dependent file agrees.

## Naming conventions

- Canonical spellings live only in `00_governance/CANON_STATUS.md`. Every other
  document defers to it rather than carrying its own copy of "the" spelling.
- A name with two attested forms (e.g. Tallai / Talla) stays written as both forms,
  joined by `/`, until Kemi confirms a single preferred form — never silently pick one.
- A name proposed in new material that doesn't exist anywhere in the engine (e.g. Aisha,
  Nayla, Adeola — see `01_canon/OPEN_QUESTIONS.md` #28) is logged `OPEN QUESTION` /
  pending confirmation, never merged into locked canon on its own authority.

## Timeline management

The canonical timeline is the 17-era arc (Era 0 — Ancient Memory, through Era 16 —
Umada) in `01_canon/CIVILIZATIONAL_LEDGER.md`, structured in `data/timeline.json` and
`data/civilizational_ledger.json`. `docs/world/history/TIMELINE.md` in this layer is a
production-facing read of that same ledger — it does not add eras, dates, or sequencing
the ledger doesn't already have.

## Versioning system

This repository has no numbered canon-version scheme yet; status tags
(LOCKED / PROBABLE / EMERGING / OPEN QUESTION / RETIRED / AWAITING FRAGMENT) carry that
function today. `[CANON REVIEW REQUIRED]` — a numbered versioning scheme has not been
defined; raised here rather than invented.

## Canon review workflow

1. A fragment or brief arrives (see `00_governance/FRAGMENT_WORKFLOW.md`).
2. It is checked against `00_governance/CANON_STATUS.md` and the realized plates before
   anything is filed.
3. Anything that matches existing locked canon is filed with a citation back to it.
4. Anything new is tagged `OPEN QUESTION` or `AWAITING FRAGMENT` and logged in
   `01_canon/OPEN_QUESTIONS.md` — never marked `LOCKED` on a single, unconfirmed source.
5. Kemi confirms or changes open items; only then does status change.

## Markers used throughout `/docs`

- `[TBD]` — a value this document needs but the canon engine doesn't have yet, and no
  fragment exists to supply it.
- `[CANON REVIEW REQUIRED]` — a place where this layer noticed a possible gap or
  structural decision the canon engine hasn't ruled on; raised, not resolved, here.

Neither marker is a license to guess — both route back to
`00_governance/NO_FABRICATION_RULE.md` and `01_canon/OPEN_QUESTIONS.md`.
