# Claude Code Directive — Publish UMADA Episode 1 Draft 1

**Release:** UMADA — Cape Wipeout, Pt. 1: An Omoluabi Witness Record
**Label:** Episode 1 Draft 1 · Public Prototype v0.1
**Repo:** github.com/ukadike/Umada (respect the repo's CLAUDE.md steward rules)
**Publication brief:** `05_CLAUDE/CLAUDE_PUBLISH_DRAFT1.md` (authoritative; this directive is the execution wrapper)

## Status: launch fixes ALREADY APPLIED
The prototype in `03_PROTOTYPE/episode-cape-wipeout-pt1-interactive.html` already includes:
- required public title, subtitle, introduction, and non-blocking v0.1 notice;
- corrected footer provenance ("UNATTESTED MATERIAL IS MARKED DRAFT OR AWAITING FRAGMENT");
- Friedmandorstrop spelling throughout; Tallai-only; KC-only; Quartz ungendered;
- no "reconstruction protocol" conflation; Reporter's face never shown;
- full interactive system (Council anchor, route hub, rescue signal hub, Tick Four contradiction, unavoidable BOOM, rescue decision, witness ledger, Archive Mode, UX Docs).
Do NOT redesign, flatten, or re-apply fixes. Do not modify story text, canon strings, or the choice architecture.

## Tasks
1. Copy this entire `UMADA_EP01_DRAFT1/` directory into the repo at `episodes/ep01/`. Preserve the folder structure exactly — the HTML depends on `../01_FRAMES/` and `../00_BOARD/`. Never publish the HTML alone.
2. Link the episode from the site: add an entry to `sections/episode-releases.html` (and `index.html` if episodes surface there) pointing to `episodes/ep01/03_PROTOTYPE/episode-cape-wipeout-pt1-interactive.html`, using the title and subtitle above and the short description from `README.md`. Match existing site markup conventions; framework-free static HTML only.
3. Verify before commit:
   - all 16 frames + full board load from the published paths (no 404s);
   - image modal opens/closes (Escape, focus return);
   - the story completes start → witness ledger; Archive unlocks after;
   - no console errors;
   - no local-filesystem dependencies.
4. Commit with message: `Publish Episode 1 Draft 1 · Public Prototype v0.1 — Cape Wipeout, Pt. 1 (Omoluabi Witness Record)`. Push. Confirm GitHub Pages deploy.
5. After deploy, verify the live URL renders on desktop and mobile widths and complete the two remaining checklist boxes in `05_CLAUDE/CLAUDE_PUBLISH_DRAFT1.md`.
6. Return: public URL, commit hash, deploy status, and the deferred-to-v0.2 list from `README.md`.

## Out of scope for this commit
- Global spelling migration of `data/*.json` (old place spelling) — HOLD unless separately instructed; do not "helpfully" rename mid-publish.
- Anything on the v0.2 deferred list in `README.md`.
- Any change to locked canon: Friedmandorstrop; Tallai; KC; Reporter faceless; Q detects; Quartz carries, ungendered; Ada adult Nigerian field commander; audience investigates history, never rewrites it.

## If something fails
Fix only what blocks launch (story fails, images disappear, users trapped). Log everything else as a v0.2 issue. When uncertain about canon, stop and ask — never invent.
