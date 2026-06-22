// UMADA data loader — fetches data/*.json and builds DOM from it.
// No fabrication here: every renderer only displays fields present in the JSON.

(function (global) {
  async function loadJSON(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
    return res.json();
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (value === undefined || value === null) continue;
      if (key === "text") node.textContent = value;
      else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2), value);
      else node.setAttribute(key, value);
    }
    for (const child of [].concat(children || [])) {
      if (child === undefined || child === null || child === "") continue;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    }
    return node;
  }

  function statusTag(status) {
    if (!status) return null;
    return el("span", { class: "status-tag", "data-status": status, text: status });
  }

  function list(items) {
    if (!items || !items.length) return null;
    return el("ul", {}, items.map((item) => el("li", { text: item })));
  }

  function renderError(container, path) {
    container.appendChild(
      el("p", { class: "placeholder-block" },
        `Could not load ${path}. If you opened this file directly from disk, serve the site over http(s) (e.g. "python3 -m http.server") so the browser allows fetch() to read data/*.json.`)
    );
  }

  global.Umada = { loadJSON, el, statusTag, list, renderError };
})(window);
