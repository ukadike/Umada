# Fragment Workflow

A fragment is any raw input — voice note, dream, sketch, image, video, prompt,
observation, research, dialogue — that might contain recoverable canon. This is how a
fragment becomes (or doesn't become) canon, without anything being invented along the way.

## Steps

1. **Capture.** Record the fragment using `13_fragments/TEMPLATE.md`. The raw content is
   transcribed verbatim and never edited, even if it's messy, partial, or contradictory.
2. **Extract.** Pull out anything the fragment implies about characters, locations,
   factions, species, technologies, symbols/signs, accessibility concepts, emotional
   memory, visual language, episode opportunities, or fanbase opportunities. Extraction
   is separate from the raw content — the raw content is never overwritten.
3. **Propose status.** Assign a proposed canon status (LOCKED / PROBABLE / EMERGING /
   OPEN QUESTION / RETIRED) and a confidence note. Nothing is marked LOCKED on the
   strength of a single fragment unless the fragment is itself a realized artifact (e.g.
   a finished plate or animatic) that the master prompt already treats as source of truth.
4. **Route.** File the extracted canon into its target file(s) — a `0X_` numbered
   directory, a `data/*.json` entry, or a section page — citing the fragment as
   provenance. If the fragment conflicts with existing canon, do not silently overwrite;
   log the conflict in `01_canon/OPEN_QUESTIONS.md` and flag it for Kemi.
5. **Ask, if blocked.** If the fragment can't be filed without inventing a missing piece,
   ask one tiny question per `TINY_QUESTIONS_PROTOCOL.md` instead of guessing.
6. **Record.** Update `00_governance/CANON_STATUS.md` for anything that newly becomes
   LOCKED, and `01_canon/OPEN_QUESTIONS.md` for anything still open.
7. **Archive.** The fragment itself stays in `13_fragments/` permanently — fragments are
   never deleted, even after their canon has been extracted and routed elsewhere. This
   preserves the development history the Fan Archive draws on.

## Artifacts not yet received

If a fragment is referenced (by a script note, a dossier mention, a registry entry) but
not physically delivered, it does not enter this workflow yet. It gets an
`AWAITING FRAGMENT` index stub instead (see `NO_FABRICATION_RULE.md`) until it arrives.
