# Next Steps

A prioritized, concrete read of `docs/production/ROADMAP.md`'s "What comes next"
section. Every item below already exists as an open question or issue elsewhere in the
repo — this file orders them, it doesn't add new ones. Re-derive nothing from here;
follow the linked source for full detail.

## Blocking Episode 1

Episode 1 is deliberately unwritten until these resolve (per
`00_governance/NO_FABRICATION_RULE.md` — generated from recovered canon, not guessed
at):

1. **Character dossiers.** Tallai's, Q's, and Quartz's open fields (physical
   description, personality, voice, relationships, arc) are still `AWAITING Kemi` — see
   `02_characters/TALLAI_DOSSIER.md`, `02_characters/Q_DOSSIER.md`,
   `02_characters/QUARTZ_DOSSIER.md`. Ada's dossier is furthest along but still has open
   threads (`01_canon/OPEN_QUESTIONS.md` #30, #31).
2. **Naming/canon-structure decisions Kemi needs to confirm** (`01_canon/OPEN_QUESTIONS.md`
   #1–#3): Memory vs Witness split, Environment family contents, motif-five fate.
3. **Frame-narrative gaps** (`01_canon/OPEN_QUESTIONS.md` #9–#12): the Umada/Tisetan
   council dispute, the Tisetan/Umada relationship, what the Omoluabi device is, what
   ADA-1 is.

## Important, not blocking

- **Tooling gaps**, each already filed as an issue:
  - `ISSUE-041` — JSON schema validator for `data/*.json` (manual validation only exists
    today; see `00_governance/REPO_HEALTH_CHECKLIST.md` §1).
  - `ISSUE-042` — audit `sections/*.html` pages against their `data/*.json` sources.
  - `ISSUE-045` — broken-link / cross-reference checker across the repo.
- **Accessibility work** still open (`ISSUE-021` through `ISSUE-025`): the animatic's
  audio transcript, a screen-reader label audit for Nago signs, a keyboard-navigation
  audit of the public site, a color-only-meaning audit, and a plain-language pass over
  archival documents.
- **Visual development**: the vector/CSS shape spec for the five Visual Grammar
  primitives (`ISSUE-026`), and reconciling the seven dropped Proto-Nago marks
  (`ISSUE-027`).

## Background — as fragments arrive

- Six referenced visual boards and the remaining character reference images are
  `AWAITING FRAGMENT` (`01_canon/VISUAL_CANON_REGISTRY.md`).
- Timeline/world-mechanics open questions with no urgency attached yet (Breach
  mechanism, Chimeran Flu origin, Angel Dust naming, Dead Glass, S-Vector,
  Atlantis's relationship to the main timeline — `01_canon/OPEN_QUESTIONS.md` #13–#20).
- The six Era 15 factions (Lion Kingdom, Jackal Peoples, Phoenix Rising, Black Stars,
  Cybernetic Houses, Pure Human Communities) are named only, no further detail
  (`01_canon/OPEN_QUESTIONS.md` #21).

## How to work an item off this list

Per `00_governance/TINY_QUESTIONS_PROTOCOL.md`: draft as far as the engine allows, then
ask Kemi one tiny question at a time when a draft genuinely can't proceed. Resolutions
get recorded in `00_governance/CANON_STATUS.md` (facts) or close out the matching entry
in `01_canon/OPEN_QUESTIONS.md` and `docs/project-management/issues/` (process items),
never just edited in place and forgotten.
