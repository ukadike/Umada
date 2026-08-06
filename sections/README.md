The public-facing HTML sections, sharing the chrome from `../index.html` (persistent
global navigation, breadcrumbs, footer with the canon-status legend). Static prose is
sourced verbatim/near-verbatim from `01_canon/` and the other numbered topic
directories; anything data-driven is rendered at runtime from `../data/*.json` via
`../assets/js/data-loader.js` — never hard-coded, so the page can never drift from the
underlying canon record.

start-here, world, foundational-strata, civilizational-ledger, timeline, characters,
places, kingdoms-factions, language-signage, nago-symbology, visuals, visual-archive,
visual-canon, atlas, episode-releases, research-archive, creator-archive, participate,
faraday-box, fan-explorer, fan-archive, accessibility, archive.

`world`, `visuals`, `participate`, and `archive` are directory/orientation pages —
they link to existing pages and do not add new canon.

## Navigation

Every page's global navigation, breadcrumbs, local (section) navigation, and
previous/next links are generated from a single source of truth, `../data/navigation.json`,
by `../scripts/sync_navigation.py`. See `../docs/NAVIGATION.md` for the full
architecture and how to run the generator and link checker after editing a page or
adding a new one.
