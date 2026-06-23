# Repo Health Checklist

A periodic audit checklist for the canon engine — run this before any public release,
after any batch of fragment intake, or whenever something feels like it might have
drifted. It checks structural and cross-file consistency only; it never adjudicates
canon content itself (that's `00_governance/CANON_STATUS.md` and Kemi's call).

## 1. Data integrity

- [ ] Every file in `data/*.json` parses as valid JSON.
- [ ] Every file in `data/*.json` validates against its schema in `schemas/` (see
  `schemas/README.md`). A schema failure means the *shape* changed, not the canon —
  fix the shape or update the schema, never silently widen `additionalProperties` to
  make an error disappear.
- [ ] No `data/*.json` file contradicts `00_governance/CANON_STATUS.md` on a locked
  spelling or fact. If one does, that's a contradiction to log in
  `01_canon/OPEN_QUESTIONS.md` per `docs/canon/GOVERNANCE.md`, not a silent overwrite.

## 2. Build-phase status

- [ ] `index.html`'s "Build status" table, `README.md`'s "Build status" section, and
  `docs/production/ROADMAP.md` agree on which phase is complete, in progress, or
  pending. `README.md` is authoritative if they drift — `ROADMAP.md` says so
  explicitly; `index.html` does not yet say so in text, only in practice.
- [ ] The `build_phase` shield badge in `README.md` matches the phase marked "in
  progress" in the same file's Build status section.

## 3. Cross-reference integrity

- [ ] Every `[text](path)` link inside `00_governance/`, `01_canon/`, `docs/`, and the
  numbered `0X_` directories resolves to a file that exists. (Tracked as open work:
  `docs/project-management/issues/ISSUE-045.md`, no automated checker exists yet.)
  Manual spot-check is acceptable until that issue is resolved.
- [ ] Every `sections/*.html` page's `data/*.json` source reference actually matches a
  file in `data/`. (Tracked: `ISSUE-042`.)
- [ ] Every artifact referenced as `AWAITING FRAGMENT` is, in fact, still absent from
  the repository — if it has since arrived, the index entry needs to convert to a real
  entry, not stay stubbed.

## 4. Naming and status discipline

- [ ] No retired spelling (e.g. "Talla", "Friedmandestorp", "Jackal Tribes") appears
  outside of an explicit "RETIRED — do not use" note or a verbatim quote/transcript.
- [ ] Every fact added since the last audit carries one of: LOCKED / PROBABLE /
  EMERGING / OPEN QUESTION / RETIRED / AWAITING FRAGMENT.
- [ ] Every name proposed in new material that isn't already in `data/characters.json`
  or `00_governance/CANON_STATUS.md` is logged as `OPEN QUESTION`, not merged into
  locked canon on its own authority.

## 5. Accessibility baseline

- [ ] No status or fact is conveyed by color alone on any `sections/*.html` page (status
  tags carry both color and text — verify the text is still there, not just the swatch).
- [ ] Any new image or video asset has alt text / a plain-language description, or is
  logged as a gap against `00_governance/ACCESSIBILITY_BASELINE.md` rather than shipped
  without one.
- [ ] Reduced-motion behavior is unaffected by recent CSS/JS changes (`ISSUE-044`
  tracks the full site-wide audit; this is a spot-check, not a substitute for it).

## 6. JSON formatting

- [ ] Every `data/*.json` file is valid UTF-8, 2-space indented, and has a single
  trailing newline. Short, flat string arrays (status legends, family lists) may stay
  inline on one line rather than being force-expanded — that's the established style in
  this repo (see `data/canon.json`, `data/timeline.json`), not a defect to "fix" by
  re-running a generic formatter over everything.

## After the audit

Record anything this checklist surfaced as one of:

- A fix made directly (if it's purely structural — a broken link, invalid JSON, a stale
  status table) — note it in `CHANGELOG.md`.
- An `OPEN QUESTION` in `01_canon/OPEN_QUESTIONS.md` (if it touches canon content).
- A new or updated issue in `docs/project-management/issues/` (if it's a process/tooling
  gap bigger than a one-line fix).

Never leave a finding undocumented just because it was inconvenient to fix immediately.
