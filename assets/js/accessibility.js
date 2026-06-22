// UMADA accessibility interactions — reduced-motion handling and video safety,
// per 00_governance/ACCESSIBILITY_BASELINE.md.

(function (global) {
  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function enforceVideoSafety(root) {
    (root || document).querySelectorAll("video").forEach((video) => {
      video.removeAttribute("autoplay");
      video.setAttribute("controls", "");
      video.setAttribute("preload", "none");
      if (prefersReducedMotion()) video.pause();
    });
  }

  document.addEventListener("DOMContentLoaded", () => enforceVideoSafety(document));

  global.Umada = Object.assign(global.Umada || {}, { prefersReducedMotion, enforceVideoSafety });
})(window);
