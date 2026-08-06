# Navigation architecture

UMADA's public site is framework-free static HTML. Every page carries four
complementary navigation layers, all usable with no JavaScript:

1. **Persistent global navigation** — Home, Start Here, World, Visuals, Episodes,
   Participate, Archive, plus a standalone Accessibility utility link. Visible in
   the header of every page, no disclosure widget required.
2. **Breadcrumb navigation** — `UMADA / <Section> / <Page>`, immediately inside
   `<main id="main">`.
3. **Visible local (section) navigation** — the sibling pages of the section
   currently being read, always visible, below the breadcrumb.
4. **Previous/next navigation** — sequences through a section's pages, near the
   end of `<main>`.

The old model — one collapsed `<details>` menu holding all 20 sections — is gone
from ordinary reading. The complete index still exists, as a normal page:
`sections/archive.html`.

## Single source of truth

`data/navigation.json` is the only place the site's information architecture is
defined: the seven global destinations, the Accessibility utility link, and every
navigation group (Start Here, World, Visuals, Episodes, Participate, Accessibility,
Archive) with its member pages, labels, and order. A group's first page is its
*landing* page — the page that global nav item resolves to, and the page whose
breadcrumb collapses to just the group label instead of `Group / Page`.

Groups with a single page (Start Here, Accessibility, Archive) get global nav and
breadcrumbs only — there is no local nav or previous/next when there is no sibling
to navigate to.

## Generating the markup

`scripts/sync_navigation.py` reads `data/navigation.json` and fills four kinds of
explicitly delimited regions inside `index.html` and every `sections/*.html` file:

```html
<!-- BEGIN GENERATED: GLOBAL NAV -->  ... <!-- END GENERATED: GLOBAL NAV -->
<!-- BEGIN GENERATED: BREADCRUMBS --> ... <!-- END GENERATED: BREADCRUMBS -->
<!-- BEGIN GENERATED: LOCAL NAV -->   ... <!-- END GENERATED: LOCAL NAV -->
<!-- BEGIN GENERATED: PAGE SEQUENCE --> ... <!-- END GENERATED: PAGE SEQUENCE -->
```

It never touches anything outside a marker pair, and never regenerates a whole
document — replacement is restricted to the explicit marker pairs already present
in a file. A page only carries the marker pairs relevant to its role (the homepage
has no breadcrumbs; single-page groups have no local nav or page sequence). The
script fails loudly, and does not write anything, if:

- a public HTML page in `sections/` isn't mapped in `data/navigation.json`,
- a page configured in `data/navigation.json` doesn't exist on disk,
- a marker pair a page's role requires is missing, or
- a marker pair appears more than once in a file.

Run it after editing `data/navigation.json` or adding/renaming a page:

```bash
python scripts/sync_navigation.py
```

The generated HTML is committed — the deployed GitHub Pages site never runs Python.
Running the script twice in a row makes no further changes (`--check` exits 1 if
anything is out of sync, for CI):

```bash
python scripts/sync_navigation.py --check
```

## Validating links and structure

`scripts/check_site_links.py` is a separate, standard-library-only pass over the
same public pages. It checks for broken local `href`/`src` targets, duplicate
`id` attributes, exactly one `<main id="main">` per page, the required navigation
landmarks, local nav on every multi-page group, and no duplicate
`aria-current="page"` within one navigation landmark.

```bash
python scripts/check_site_links.py
```

## Adding a new public page

1. Add the page's file and label to the right group (or a new group) in
   `data/navigation.json`.
2. Create `sections/<file>.html` with the standard head/header/footer boilerplate
   (copy an existing page in the same group) and empty marker pairs for
   `GLOBAL NAV`, `BREADCRUMBS`, and — if the group has more than one page —
   `LOCAL NAV` and `PAGE SEQUENCE`.
3. Run `python scripts/sync_navigation.py` to fill the markers.
4. Run `python scripts/check_site_links.py` to confirm nothing is broken.
