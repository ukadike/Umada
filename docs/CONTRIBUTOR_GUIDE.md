# Contributor Guide

This guide is for anyone doing production work on UMADA — writing, art, accessibility,
website, or research. It points into the canon engine and governance rules rather than
restating them; read those documents, not just this summary, before contributing.

## Start here

1. `CLAUDE.md` — the steward's role and operating rules.
2. `00_governance/NO_FABRICATION_RULE.md` — the one rule everything else follows from:
   never invent canon. Unknowns become `OPEN QUESTION`, `AWAITING FRAGMENT`, or one tiny
   question.
3. `00_governance/CANON_STATUS.md` — locked spellings and decisions. Check before using
   any name, place, or term you haven't seen there.
4. `docs/canon/GOVERNANCE.md` — how this `/docs` layer relates to the canon engine.

## Contributing a fragment

A fragment is any raw input that might contain recoverable canon — voice note, dream,
sketch, image, video, prompt, observation, research, dialogue. Follow
`00_governance/FRAGMENT_WORKFLOW.md`: capture verbatim in `13_fragments/`, extract
implied canon separately, propose a status, route it to its target file, ask one tiny
question if blocked, and record the result. Never silently overwrite existing canon —
log a conflict in `01_canon/OPEN_QUESTIONS.md` instead.

## Contributing as a fan

Fans contribute **signal, not automatic canon**, through the Faraday Box
(`16_fanbase/FANBASE_FARADAY_BOX.md`), which receives audience signal, protects canon,
filters harm, preserves traces, and returns prompts. See `18_fan_archive/FAN_ARCHIVE.md`
for how contributions and development history are preserved.

## Accessibility expectations for every contribution

UMADA's development process — not just its output — assumes:

- Blind and low-vision contributors.
- Keyboard-only contributors (no mouse-only or hover-only review step).
- Screen-reader users.
- Caption and transcript requirements for any video or audio fragment.
- Documentation itself stays accessible: plain-language summaries alongside dense or
  archival text, no meaning conveyed by color alone.

Full baseline: `00_governance/ACCESSIBILITY_BASELINE.md`. If you can't verify a
contribution against this baseline yourself, say so explicitly rather than asserting it
passes.

## Naming and status discipline

- Use only spellings locked in `00_governance/CANON_STATUS.md`.
- Tag every new fact with a status: LOCKED / PROBABLE / EMERGING / OPEN QUESTION /
  RETIRED / AWAITING FRAGMENT.
- If you reference an artifact that isn't physically in the repository yet, create an
  index stub tagged `AWAITING FRAGMENT` — do not describe, summarize, or infer its
  contents.
