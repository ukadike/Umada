// UMADA navigation behavior.
// The committed HTML contains the complete navigation (global nav, breadcrumbs,
// local nav, previous/next, and the full archive index). JavaScript only verifies
// the active-page state as a progressive enhancement and improves skip-link focus —
// every navigation link works with no JavaScript at all.

document.addEventListener("DOMContentLoaded", () => {
  const normalizePath = (value) => {
    const url = new URL(value, window.location.href);
    return url.pathname
      .replace(/\/index\.html$/, "/")
      .replace(/\/+$/, "/");
  };

  const here = normalizePath(window.location.href);

  document
    .querySelectorAll(
      '.global-nav a:not([aria-current]), ' +
      '.section-nav a:not([aria-current]), ' +
      '.archive-index a:not([aria-current])'
    )
    .forEach((link) => {
      if (normalizePath(link.href) === here) {
        link.setAttribute("aria-current", "page");
      }
    });

  const skipLink = document.querySelector(".skip-link");
  const main = document.getElementById("main");

  if (skipLink && main) {
    skipLink.addEventListener("click", () => {
      main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
    });

    main.addEventListener(
      "blur",
      () => {
        main.removeAttribute("tabindex");
      },
      { once: true }
    );
  }
});
