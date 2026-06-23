# Changelog

This changelog is generated from `git log`, not drafted from memory — every entry below
traces to a real commit. It groups the repository's 35 commits (as of 2026-06-23) into
two phases. The split is the build's natural seam, not an external scheme: commits 1–15
(`c97e237` → `edfff45`) are the structural build-out — governance, canon, the public
site, the `/docs` layer, and root-README polish — before any individual character's
canon went deep. Commits 16–35 are per-character fragment work (Ada, then Kassey, then a
pass back over Tallai/Q/Quartz). Note for anyone citing "the 15-commit foundation"
elsewhere: that phrase refers to this commits-1–15 span specifically, not the repository's
full history, which is 35 commits and growing.

## Character canon work (commits 16–35)

- `ea4cf59` Resolve Talla vs Tallai spelling — converge on Tallai (Kemi, 2026-06-23)
- `5b383ad` Add `schemas/` and `prompts/` folders; scaffold Episode 01 facts
- `af93eb3` Add Q and Quartz character dossiers, route status across index files
- `035a7a3` Retract two AI-rendering misreads: Tallai's "C.A.R.F." patch and the
  base-camp signage
- `f32f58f` Lock four more reference images: Ada's wasteland/Cape Agulhas/base-camp
  shots, plus Tallai's rescue reference confirming she is a chimera
- `c1afc0c` Lock Ada's reference portrait and route its canon through the fragment
  workflow
- `a1bc1d3` Add Ada's nationality and build; log art-direction comp as internal note
- `305ae20` Lock Ada's trait under pressure: cold and methodical, not loud
- `41527f1` Sync the JSON open-question mirrors with resolved Kassey canon
- `567cdd0` Scrub the "Care Shooter" credit descriptor from canon at creator's
  direction
- `b23511d` Give Ada a uniform: military, "medium brass" (mid-ranking officer)
- `b1e8201` Give Ada a first feature: long hair, slicked-back ponytail, mangled in
  the blast
- `80f5327` Log the next tiny question on Ada's dossier (her face, first feature)
- `8143f04` Mark Kassey's whereabouts during the rescue as deliberately undecided
- `f1acdfa` Reveal: Ada and Kassey were MIC operatives sent to execute the blast
- `067a0b5` Confirm Ada's heart pendant is a solid charm, not a locket
- `c1c2eaf` Describe Ada's necklace: simple silver chain, small heart pendant
- `b9dd07e` Add Kassey as a character: Ada's lover; resolve open question #24
- `4860091` Merge KC with Kassey per Kemi; keep Kassey-vs-Ada question open
- `d6783b5` Lock Ada's necklace from KC; open KC's identity as a question

## Foundation (commits 1–15)

- `edfff45` Start Ada's character dossier, open fields routed through tiny questions
- `a0904cf` Use a golden-ratio banner crop of the Nago plate as the README hero
- `07edb1b` Add all-rights-reserved LICENSE and link it from the README badge row
- `56c5c83` Give root README a hero treatment for the GitHub landing page
- `69c2381` Point root README at the new `/docs` production-bible layer
- `c452853` Generate 50 production-bible issues across 10 categories
- `d37c9ec` Add `/docs` production-bible layer, additive to the canon engine
- `5cc327b` Add stub asset directories for maps, concept art, storyboards, reference
- `04aa14c` Log Aisha, Nayla, Adeola as pending-confirmation open question, not canon
- `20e1dcf` Fix self-contradictory Friedmandostorp note; lock Jackal Peoples spelling
- `c9b7857` Add fan/visitor-facing `PUBLIC_README.md`, link it from `README.md`
- `6357856` Phase C: recover animatic on-screen captions, route new canon
- `576bca3` Phase B: build the public site
- `361f2a7` Phase A — Spine: governance, canon, and structured data
- `c97e237` Initial commit

## Conventions

- Status changes (LOCKED / RETIRED / OPEN QUESTION transitions) are tracked at the fact
  level in `00_governance/CANON_STATUS.md` and `01_canon/OPEN_QUESTIONS.md`, not
  re-derived here — this file is a build log, not a second canon ledger.
- This file is additive: append new entries to the most recent phase, or open a new phase
  heading when the work shifts to a clearly different kind of build activity (the same
  judgment call used to draw the line at commit 15).
