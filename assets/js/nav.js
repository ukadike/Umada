// UMADA navigation behavior — current-page marking and skip-link focus.
// Pure progressive enhancement: every nav link is a plain <a> and works with no JS at all.

document.addEventListener("DOMContentLoaded", () => {
  const here = window.location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll(".primary-nav a").forEach((link) => {
    const linkPath = new URL(link.href).pathname.replace(/\/index\.html$/, "/");
    if (linkPath === here) link.setAttribute("aria-current", "page");
  });

  const skipLink = document.querySelector(".skip-link");
  const main = document.getElementById("main");
  if (skipLink && main) {
    skipLink.addEventListener("click", () => {
      main.setAttribute("tabindex", "-1");
      main.focus();
    });
  }

  // SSL canonical global navigation — mobile toggle
  const toggle = document.querySelector(".ssl-header .nav-toggle");
  const globalNav = document.querySelector("#ssl-global-nav");
  if (toggle && globalNav) {
    const mobileQuery = window.matchMedia("(max-width: 720px)");

    const syncNavState = () => {
      if (mobileQuery.matches) {
        globalNav.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      } else {
        globalNav.hidden = false;
        toggle.setAttribute("aria-expanded", "true");
      }
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      globalNav.hidden = isOpen;
    });

    mobileQuery.addEventListener("change", syncNavState);
    syncNavState();
  }
});
