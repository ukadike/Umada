# No-Fabrication Rule

Never invent canon.

This applies to every department: characters, places, factions, species, technology,
timelines, language/signage, episodes, and visuals.

## What to do with an unknown

- If a fact is plausible but unconfirmed: tag it `OPEN QUESTION` and log it in
  `01_canon/OPEN_QUESTIONS.md`.
- If the gap can only be closed by Kemi, and a draft genuinely cannot proceed without it:
  ask **one tiny question**, per `TINY_QUESTIONS_PROTOCOL.md`. Draft first.
- If an artifact (board, dossier, image, recording) is referenced but not physically
  present in the repository: create an **index stub only**, tagged `AWAITING FRAGMENT`.

## The AWAITING FRAGMENT rule

For any artifact not physically present:

- Create an entry with: artifact id, expected filename, where it is referenced from, and
  status `AWAITING FRAGMENT`.
- Do **not** describe, summarize, paraphrase, or infer its contents.
- Do **not** generate a placeholder image, mock text, or sample dialogue standing in for it.
- When the fragment arrives, route it through `FRAGMENT_WORKFLOW.md` and update the stub
  to its real status.

## Plates over prose

The realized plates in `assets/img/` (currently `PLATE_NAGO_SYMBOLOGY_OF_UMADA.png` and
`PLATE_PROTO_NAGO.png`) are the visual source of truth. Reading detail off a plate that
is physically present is not fabrication — it is transcription. Where a written document
and a present plate disagree, correct the document to match the plate and record the
correction in `00_governance/CANON_STATUS.md`.

## Poetry is canon, verbatim

Poetry and first lines are a first-class canon source. Preserve original lines verbatim.
Extract any canon facts they imply into a separate canon entry — never edit the poetry
itself to make the extraction cleaner.
