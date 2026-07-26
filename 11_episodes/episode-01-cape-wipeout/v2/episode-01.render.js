/* UMADA — Episode One v2 — Cape Wipeout, Part One
   Render layer. Rendering functions are pure: they read EP01_V2_STATE and
   the data layer and return/assign HTML. They never call EP01V2 action
   methods. All state mutation happens in the event handlers below, after
   which the active tab is re-rendered. (Technical Correction #1 & #21.2) */

(function () {
  "use strict";

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const nl2p = arr => (arr || []).map(p => `<p>${esc(p)}</p>`).join("");

  const DEV_MODE = new URLSearchParams(location.search).get("mode") === "development";

  let panel, live, liveTimer;
  function say(msg) {
    if (!live) return;
    clearTimeout(liveTimer);
    live.textContent = "";
    liveTimer = setTimeout(() => { live.textContent = msg; }, 40);
  }

  function prefersReducedMotion() {
    const pref = ep01v2GetPref("motion");
    if (pref === "reduced") return true;
    if (pref === "standard") return false;
    return matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* ============ FRAME RENDERING ============ */
  function frameFig(frameId, captionOverride) {
    const f = EP01_V2_FRAMES[frameId];
    if (!f) return "";
    if (f.role === "art") {
      return `<figure class="story-frame" data-frame-id="${f.id}">
        <button class="frame-expand" data-expand="${f.id}" aria-label="Enlarge image: ${esc(f.alt)}">
          <img src="${f.src}" alt="${esc(f.alt)}" width="${f.w}" height="${f.h}" loading="lazy">
        </button>
        <figcaption><span class="frame-role">${esc(EP01_V2_FRAME_ROLE_LABEL[f.role])} — ${esc(f.phase).toUpperCase()}</span><span>${esc(captionOverride || f.title)}</span></figcaption>
      </figure>`;
    }
    return `<div class="frame-placeholder" data-frame-id="${f.id}">
      <span class="fp-id">${esc(EP01_V2_FRAME_ROLE_LABEL[f.role])} — ${f.id}</span>
      <strong>${esc(f.title)}</strong><br>${esc(f.alt)}
    </div>`;
  }

  function statusRow(tags) {
    if (!tags || !tags.length) return "";
    return `<div class="status-row">${tags.map(t => `<span class="${t.fixed ? "fixed" : ""}">${esc(t.label)}</span>`).join("")}</div>`;
  }

  /* ============ CHANNELS ============ */
  function renderChannels(sceneId, channelsObj, onAttrName) {
    if (!channelsObj) return "";
    const keys = Object.keys(channelsObj);
    const active = EP01_V2_STATE.chan[sceneId] || null;
    let out = `<div class="channels" role="group" aria-label="Evidence channels">
      ${keys.map(k => `<button data-${onAttrName}="${sceneId}::${k}" aria-pressed="${active === k}">${esc(k)}</button>`).join("")}
    </div>`;
    if (active && channelsObj[active]) {
      out += `<div class="channel-out">${nl2p(channelsObj[active])}</div>`;
    }
    return out;
  }

  /* ============ SEQUENTIAL PHASES (balcony / council / refusal) ============ */
  function renderSequentialPhase(phaseKey) {
    const data = EP01_V2_SCENES[phaseKey];
    let h = `<h2 class="phase-label">${esc(data.label)}</h2>`;
    h += statusRow([{ label: "FIXED HISTORY", fixed: true }]);
    const shown = data.beats.slice(0, EP01_V2_STATE.beatIdx);
    shown.forEach(b => {
      h += `<article class="beat" tabindex="-1" id="beat-${b.id}">${frameFig(b.frameId)}<div class="btext">${nl2p(b.narrative)}</div></article>`;
    });
    if (EP01_V2_STATE.beatIdx < data.beats.length) {
      const nextBeat = data.beats[EP01_V2_STATE.beatIdx];
      h += `<button class="next-btn" data-phase-advance="${phaseKey}">▸ CONTINUE</button>`;
    } else {
      if (data.channels) {
        h += `<div class="hub"><h2>EXAMINE BEFORE CONTINUING (OPTIONAL)</h2>${renderChannels(phaseKey, data.channels, "scene-chan")}</div>`;
      }
      h += `<button class="next-btn" data-phase-continue="${phaseKey}">▸ ${esc(data.next.label)}</button>`;
    }
    return h;
  }

  /* ============ DISPATCH ============ */
  function renderDispatch() {
    const data = EP01_V2_SCENES.dispatch;
    let h = `<h2 class="phase-label">${esc(data.label)}</h2>`;
    h += statusRow([{ label: "FIXED HISTORY", fixed: true }]);
    h += `<article class="beat" tabindex="-1" id="beat-dispatch-1">${frameFig(data.beats[0].frameId)}<div class="btext">${nl2p(data.beats[0].narrative)}</div>
    <div class="device-block">${data.directives.map(esc).join("<br>")}<br><span style="opacity:.001">.</span><br>${esc(data.directiveDelayed)}</div>
    <p class="note-line">${esc(data.closingLine)}</p></article>`;
    h += `<button class="next-btn" data-phase-continue="dispatch">▸ ${esc(data.next.label)}</button>`;
    return h;
  }

  /* ============ TRANSITION ============ */
  function renderTransition() {
    const data = EP01_V2_SCENES.transition;
    let h = `<h2 class="phase-label">${esc(data.label)}</h2>`;
    h += statusRow([{ label: "FIXED HISTORY", fixed: true }]);
    h += `<article class="beat" tabindex="-1" id="beat-transition-1">${frameFig(data.beats[0].frameId)}<div class="btext">${nl2p(data.beats[0].narrative)}</div>
    <div class="device-block">${data.deviceBlock.map(esc).join("<br>")}</div></article>`;
    h += `<button class="next-btn" data-phase-continue="transition">▸ ${esc(data.next.label)}</button>`;
    return h;
  }

  /* ============ ARRIVAL ============ */
  function renderArrival() {
    const data = EP01_V2_SCENES.arrival;
    let h = `<h2 class="phase-label">${esc(data.label)}</h2>`;
    h += statusRow([{ label: "FIXED HISTORY", fixed: true }]);
    h += `<article class="beat" tabindex="-1" id="beat-arrival-1">${frameFig(data.beats[0].frameId)}<div class="btext">${nl2p(data.beats[0].narrative)}</div>
    <div class="device-block">${data.displayBlock.map(esc).join("<br>")}</div></article>`;
    h += `<button class="next-btn" data-phase-continue="arrival">▸ ${esc(data.next.label)}</button>`;
    return h;
  }

  /* ============ PRE-WIPEOUT HUB + ROUTES ============ */
  function renderPreHub() {
    let h = `<h2 class="phase-label">INTERACTIVE FIELD — FRIEDMANDORSTROP, BEFORE</h2>`;
    h += statusRow([{ label: "AVAILABLE EVIDENCE" }]);
    h += `<div class="hub"><h2>CHOOSE A ROUTE — ORDER IS YOURS TO SET</h2>
    <p class="hub-help">You may complete one route before the story begins converging. The others remain available briefly.</p>
    <div class="route-cards">`;
    Object.values(EP01_V2_PRE_ROUTES).forEach(r => {
      const done = EP01_V2_STATE.preRoutesDone.includes(r.key);
      const started = EP01_V2_STATE.preRoutesVisited.includes(r.key);
      const f = EP01_V2_FRAMES[r.frameId];
      h += `<button class="route-card" data-pre-route="${r.key}" data-done="${done ? 1 : 0}">
        ${f && f.role === "art" ? `<img class="rc-thumb" src="${f.src}" alt="" width="${f.w}" height="${f.h}" loading="lazy">` : ""}
        <span class="rc-title">${esc(r.title)}</span>
        <span class="rc-meta">${esc(r.meta)}</span>
        <span class="rc-status">STATUS: ${done ? "EXAMINED" : started ? "PARTIAL" : "UNSEEN"}</span></button>`;
    });
    h += `</div>`;
    if (EP01_V2_STATE.preRoutesDone.length >= 1) {
      h += `<button class="next-btn" data-converge-ticks="1">▸ LET THE COUNTDOWN CONVERGE — THE FIVE TICKS</button>`;
    }
    h += `</div>`;
    return h;
  }
  function renderPreRoute() {
    const r = EP01_V2_PRE_ROUTES[EP01_V2_STATE.preRoute];
    let h = `<h2 class="phase-label">${esc(r.title)}</h2>`;
    h += statusRow([{ label: "AVAILABLE EVIDENCE" }]);
    h += `<article class="beat" tabindex="-1" id="beat-pre-${r.key}">${frameFig(r.frameId)}<div class="btext">${nl2p(r.narrative)}</div>
    ${renderChannels(r.key, r.channels, "pre-chan")}</article>`;
    if (!EP01_V2_STATE.preRoutesDone.includes(r.key)) {
      h += `<button class="next-btn" data-pre-complete="${r.key}">▸ FINISH THIS ROUTE</button>`;
    }
    h += `<button class="next-btn" data-pre-return="1">▸ RETURN TO THE ROUTE HUB</button>`;
    return h;
  }

  /* ============ FIVE TICKS ============ */
  function renderTicks() {
    let h = `<h2 class="phase-label">FIXED ANCHOR — THE FIVE TICKS</h2>`;
    h += statusRow([{ label: "FIXED HISTORY", fixed: true }]);
    const shownCount = Math.min(EP01_V2_STATE.tickIdx, 2);
    EP01_V2_TICKS.slice(0, shownCount + 1).slice(0, EP01_V2_STATE.tickIdx).forEach(t => {
      h += renderTickBeat(t, true);
    });
    if (EP01_V2_STATE.tickIdx < 2) {
      const t = EP01_V2_TICKS[EP01_V2_STATE.tickIdx];
      h += renderTickBeat(t, false);
      h += `<button class="next-btn" data-tick-next="1">▸ ${esc(EP01_V2_TICKS[EP01_V2_STATE.tickIdx + 1] ? EP01_V2_TICKS[EP01_V2_STATE.tickIdx + 1].label : "CONTINUE")}</button>`;
    } else if (EP01_V2_STATE.tickIdx === 2) {
      const t = EP01_V2_TICKS[2];
      h += renderTickBeat(t, false, true);
    } else {
      h += `<button class="next-btn" data-goto-tick4="1">▸ TICK FOUR</button>`;
    }
    return h;
  }
  function renderTickBeat(t, past, isTickThree) {
    let h = `<article class="beat" tabindex="-1" id="beat-${t.id}"><p class="eyebrow">TICK.</p><h3>${esc(t.label)}</h3>${frameFig(t.frameId)}<div class="btext">${nl2p(t.narrative)}</div>`;
    if (t.evidence) h += renderChannels(t.id, t.evidence, "tick-ev");
    if (t.action) {
      if (!EP01_V2_STATE.tick3MessageOpened) {
        h += `<button class="choice-btn" data-open-message="1">${esc(t.action.label)}</button>`;
      } else {
        h += `<div class="record-line">A facility message has arrived. Continue to Tick Four to read it.</div>
        <button class="next-btn" data-goto-tick4="1">▸ TICK FOUR</button>`;
      }
    }
    h += `</article>`;
    return h;
  }

  function renderTickFour() {
    const d = EP01_V2_TICK_FOUR;
    let h = `<h2 class="phase-label">FIXED ANCHOR — ${esc(d.label)}</h2>`;
    h += statusRow([{ label: "FIXED HISTORY", fixed: true }, { label: "YOUR INTERPRETATION" }]);
    const active = EP01_V2_STATE.chan["tick-4"] || null;
    h += `<article class="beat record-active" tabindex="-1" id="beat-tick-4">${frameFig(d.frameId)}
    <div class="record-line">${d.recordBlock.map(esc).join("<br>")}</div>
    <div class="btext" style="margin-top:12px">${nl2p(d.narrative)}</div>
    ${renderChannels("tick-4", d.channels, "t4-chan")}</article>`;
    const opened = new Set(); ["BODY", "RECORD"].forEach(k => { if ((EP01_V2_STATE.channelsOpened || []).includes(k)) opened.add(k); });
    const bothOpened = opened.has("BODY") && opened.has("RECORD");
    if (!d.frameId) {}
    if (!EP01_V2_STATE.tick4Choice) {
      if (bothOpened) {
        h += `<div class="hub"><h2>${esc(d.preservePrompt)}</h2>`;
        d.preserveChoices.forEach(c => {
          h += `<button class="choice-btn" data-tick4-preserve="${c.key}"${c.recommended ? " data-recommended" : ""}>${esc(c.label)}</button>`;
        });
        h += `<p class="hub-help">${esc(d.preserveNote)}</p></div>`;
      } else {
        h += `<div class="gapline">Examine BODY and RECORD above, in either order, before Luabi can be asked what to preserve.</div>`;
      }
    } else {
      const c = d.preserveChoices.find(x => x.key === EP01_V2_STATE.tick4Choice);
      h += `<article class="beat" tabindex="-1" id="t4out"><h3>${esc(c.label)}</h3>
      <div class="contradiction">⚑ CONTRADICTION PRESERVED — ${esc(d.ledgerContradiction)}</div></article>
      <button class="next-btn" data-phase-continue="tick4">▸ ${esc(d.next.label)}</button>`;
    }
    return h;
  }

  function renderTickFive() {
    const d = EP01_V2_TICK_FIVE;
    let h = `<h2 class="phase-label">FIXED ANCHOR — ${esc(d.label)}</h2>`;
    h += statusRow([{ label: "FIXED HISTORY", fixed: true }]);
    h += `<article class="beat" tabindex="-1" id="beat-tick-5">${frameFig(d.frameId)}<div class="btext">${nl2p(d.narrative)}</div>
    <div class="device-block">${d.displayBlock.map(esc).join("<br>")}</div></article>`;
    h += `<button class="next-btn fixed-history" data-phase-continue="tick5">▸ ${esc(d.next.label)}</button>`;
    return h;
  }

  /* ============ BOOM ============ */
  function renderBoom() {
    const d = EP01_V2_BOOM;
    let h = `<h2 class="phase-label">${esc(d.label)}</h2>`;
    h += statusRow([{ label: "FIXED HISTORY", fixed: true }]);
    h += `<div class="content-note">${esc(d.contentNote)}</div>`;
    const flashClass = prefersReducedMotion() ? "" : " boom-flash";
    h += `<article class="beat boom-card${flashClass}" tabindex="-1" id="beat-boom"><h2>BOOM</h2>${frameFig(d.frameId)}
    <div class="btext">${nl2p(d.narrative)}</div>
    <div class="device-block">${d.deviceBlock.map(esc).join("<br>")}</div></article>`;
    if (!EP01_V2_STATE.fieldNoteUnlocked) {
      h += `<div class="discovery-note">${esc(d.fieldNoteNotice)}</div>`;
    } else {
      h += `<div class="discovery-note">FIELD NOTE UNLOCKED — see the Field Notes tab when you are ready. It will not interrupt this reading.</div>`;
    }
    h += `<button class="next-btn" data-phase-continue="boom">▸ ${esc(d.next.label)}</button>`;
    return h;
  }

  /* ============ AFTERMATH HUB + ROUTES ============ */
  function renderAftermathHub() {
    let h = `<h2 class="phase-label">INTERACTIVE FIELD — AFTERMATH</h2>`;
    h += statusRow([{ label: "AVAILABLE EVIDENCE" }]);
    h += `<div class="hub"><h2>THE INTERFACE REASSEMBLES SLOWLY. WHICH SIGNAL DO YOU EXAMINE FIRST?</h2>
    <div class="route-cards">`;
    Object.values(EP01_V2_AFTERMATH_ROUTES).forEach(r => {
      const done = EP01_V2_STATE.aftermathRoutesDone.includes(r.key);
      const started = EP01_V2_STATE.aftermathRoutesVisited.includes(r.key);
      const f = r.frameId ? EP01_V2_FRAMES[r.frameId] : null;
      h += `<button class="route-card" data-aft-route="${r.key}" data-done="${done ? 1 : 0}">
        ${f && f.role === "art" ? `<img class="rc-thumb" src="${f.src}" alt="" width="${f.w}" height="${f.h}" loading="lazy">` : ""}
        <span class="rc-title">${esc(r.title)}</span>
        <span class="rc-meta">${esc(r.meta || "")}</span>
        <span class="rc-status">STATUS: ${done ? "EXAMINED" : started ? "PARTIAL" : "UNSEEN"}</span></button>`;
    });
    h += `</div>`;
    if (EP01_V2_STATE.aftermathRoutesDone.length >= 1) {
      h += `<button class="next-btn" data-goto-rescue="1">▸ CONTINUE — THE RESCUE</button>`;
    }
    h += `</div>`;
    return h;
  }
  function renderAftermathRoute() {
    const r = EP01_V2_AFTERMATH_ROUTES[EP01_V2_STATE.aftermathRoute];
    let h = `<h2 class="phase-label">${esc(r.title)}</h2>`;
    h += statusRow([{ label: "AVAILABLE EVIDENCE" }]);
    h += `<article class="beat" tabindex="-1" id="beat-aft-${r.key}">${frameFig(r.frameId)}<div class="btext">${nl2p(r.narrative)}</div>
    ${renderChannels(r.key, r.channels, "aft-chan")}
    ${r.contradiction ? `<div class="contradiction">⚑ ${esc(r.contradiction)}</div>` : ""}
    ${r.note ? `<p class="note-line">${esc(r.note)}</p>` : ""}</article>`;
    if (!EP01_V2_STATE.aftermathRoutesDone.includes(r.key)) {
      h += `<button class="next-btn" data-aft-complete="${r.key}">▸ FINISH THIS SIGNAL</button>`;
    }
    h += `<button class="next-btn" data-aft-return="1">▸ RETURN TO THE SIGNALS</button>`;
    return h;
  }

  /* ============ RESCUE / CLOSING ============ */
  function renderRescue() {
    const d = EP01_V2_RESCUE;
    let h = `<h2 class="phase-label">${esc(d.label)}</h2>`;
    h += statusRow([{ label: "FIXED HISTORY", fixed: true }]);
    h += `<article class="beat" tabindex="-1" id="beat-rescue">${frameFig(d.frameId)}<div class="btext">${nl2p(d.narrative)}</div>
    <div class="device-block">${esc(d.destinationNote)}</div>
    <p class="note-line" style="font-style:italic;color:var(--ink)">${d.closingLine.split("\n").map(esc).join("<br>")}</p></article>`;
    h += `<button class="next-btn" data-phase-continue="rescue">▸ ${esc(d.next.label)}</button>`;
    return h;
  }
  function renderClosing() {
    const d = EP01_V2_CLOSING;
    let h = `<h2 class="phase-label">${esc(d.label)}</h2>`;
    h += statusRow([{ label: "FIXED HISTORY", fixed: true }]);
    h += `<article class="beat" tabindex="-1" id="beat-closing">${frameFig(d.frameId)}<div class="btext">${nl2p(d.narrative)}</div>
    <div class="device-block">${d.displayBlock.map(esc).join("<br>")}</div></article>`;
    h += `<button class="next-btn fixed-history" data-complete-reading="1">▸ ${esc(d.next.label)}</button>`;
    return h;
  }
  function renderComplete() {
    let h = `<div class="gapline">FIRST READING COMPLETE — WITNESS LEDGER FILED. Archive Mode is now open; the ledger can still be revised there through explicit examination.</div>
    <article class="beat" tabindex="-1" id="beat-final"><div class="btext">${nl2p(EP01_V2_CLOSING.finalLine)}</div></article>`;
    h += renderLedgerBlock();
    return h;
  }

  /* ============ STORY DISPATCH ============ */
  function renderStory() {
    if (EP01_V2_STATE.firstReadingComplete && EP01_V2_STATE.anchor === "complete") { panel.innerHTML = renderComplete(); return; }
    if (ep01v2GetPref("transcript") === "1") { panel.innerHTML = renderTranscript(); return; }
    const a = EP01_V2_STATE.anchor;
    let h = "";
    if (["balcony", "council", "refusal"].includes(a)) h = renderSequentialPhase(a);
    else if (a === "dispatch") h = renderDispatch();
    else if (a === "transition") h = renderTransition();
    else if (a === "arrival") h = renderArrival();
    else if (a === "hub-pre") h = renderPreHub();
    else if (a === "route-pre") h = renderPreRoute();
    else if (a === "ticks") h = renderTicks();
    else if (a === "tick4") h = renderTickFour();
    else if (a === "tick5") h = renderTickFive();
    else if (a === "boom") h = renderBoom();
    else if (a === "hub-aftermath") h = renderAftermathHub();
    else if (a === "route-aftermath") h = renderAftermathRoute();
    else if (a === "rescue") h = renderRescue();
    else if (a === "closing") h = renderClosing();
    else if (a === "complete") h = renderComplete();
    panel.innerHTML = h;
  }

  /* ============ LINEAR TRANSCRIPT (accessibility) ============ */
  function renderTranscript() {
    let h = `<div class="gapline">LINEAR TRANSCRIPT — the fixed narrative of the episode in reading order. Investigative routes and evidence channels are described inline. This view does not change your place in the interactive reading; use Access to turn it off and resume where you left off.</div>`;
    const fixedOrder = [
      ["balcony", EP01_V2_SCENES.balcony], ["council", EP01_V2_SCENES.council], ["refusal", EP01_V2_SCENES.refusal]
    ];
    fixedOrder.forEach(([key, d]) => {
      h += `<h2 class="phase-label">${esc(d.label)}</h2>`;
      d.beats.forEach(b => { h += `<div class="btext">${nl2p(b.narrative)}</div>`; });
      if (d.channels) Object.keys(d.channels).forEach(k => { h += `<p><strong>${esc(k)}:</strong> ${esc(d.channels[k].join(" "))}</p>`; });
    });
    [EP01_V2_SCENES.dispatch, EP01_V2_SCENES.transition, EP01_V2_SCENES.arrival].forEach(d => {
      h += `<h2 class="phase-label">${esc(d.label)}</h2>${nl2p(d.beats[0].narrative)}`;
    });
    h += `<h2 class="phase-label">PRE-WIPEOUT ROUTES</h2>`;
    Object.values(EP01_V2_PRE_ROUTES).forEach(r => { h += `<h3>${esc(r.title)}</h3>${nl2p(r.narrative)}`; });
    h += `<h2 class="phase-label">THE FIVE TICKS</h2>`;
    EP01_V2_TICKS.forEach(t => { h += `<h3>${esc(t.label)}</h3>${nl2p(t.narrative)}`; });
    h += `<h3>${esc(EP01_V2_TICK_FOUR.label)}</h3>${EP01_V2_TICK_FOUR.recordBlock.map(esc).join("<br>")}${nl2p(EP01_V2_TICK_FOUR.narrative)}`;
    h += `<h3>${esc(EP01_V2_TICK_FIVE.label)}</h3>${nl2p(EP01_V2_TICK_FIVE.narrative)}`;
    h += `<h2 class="phase-label">${esc(EP01_V2_BOOM.label)}</h2>${nl2p(EP01_V2_BOOM.narrative)}`;
    h += `<h2 class="phase-label">AFTERMATH ROUTES</h2>`;
    Object.values(EP01_V2_AFTERMATH_ROUTES).forEach(r => { h += `<h3>${esc(r.title)}</h3>${nl2p(r.narrative)}`; });
    h += `<h2 class="phase-label">${esc(EP01_V2_RESCUE.label)}</h2>${nl2p(EP01_V2_RESCUE.narrative)}`;
    h += `<h2 class="phase-label">${esc(EP01_V2_CLOSING.label)}</h2>${nl2p(EP01_V2_CLOSING.narrative)}${nl2p(EP01_V2_CLOSING.finalLine)}`;
    return h;
  }

  /* ============ WITNESS LEDGER ============ */
  function ledgerRow(label, val) {
    const shown = Array.isArray(val) ? (val.length ? val.join(", ") : "—") : (val || "—");
    return `<div class="ledger-row"><span class="lk">${esc(label)}:</span> ${esc(shown)}</div>`;
  }
  function renderLedgerBlock() {
    const L = ep01v2LedgerData();
    let h = `<div class="ledger" role="region" aria-label="Witness ledger"><h2>WITNESS LEDGER — CAPE WIPEOUT, PART ONE</h2>
    ${ledgerRow("Context examined", L.contextExamined)}
    ${ledgerRow("Pre-Wipeout routes examined", L.preRoutesExamined)}
    ${ledgerRow("Aftermath routes examined", L.aftermathRoutesExamined)}
    ${ledgerRow("Witnesses followed", L.witnesses)}
    ${ledgerRow("Evidence channels opened", L.channelsOpened)}
    <div class="ledger-row"><span class="lk">Contradictions preserved:</span> ${L.contradictions.length}</div>
    ${L.contradictions.map(c => `<div class="ledger-row flag">⚑ ${esc(c)}</div>`).join("")}
    ${ledgerRow("Provisional trust decisions", L.trust)}
    ${ledgerRow("Unresolved questions preserved", L.unresolved)}
    ${ledgerRow("Rescue Doctrine revealed", L.doctrine)}
    ${ledgerRow("Archive additions", L.archiveAdditions)}
    <div class="ledger-row"><span class="lk">Frames witnessed:</span> ${L.framesWitnessed} of ${L.framesTotal}</div>
    ${ledgerRow("Not yet examined", L.unexamined)}
    </div>
    <p class="tagline">This record remains incomplete. Another route may reveal evidence you did not witness.</p>`;
    return h;
  }
  function renderLedgerTab() {
    let h = EP01_V2_STATE.firstReadingComplete ? "" : `<div class="gapline">LEDGER IN PROGRESS — it is filed at the end of the first reading and updates as you investigate.</div>`;
    h += renderLedgerBlock();
    h += `<button class="next-btn" data-restart-episode="1">RESTART EPISODE — BEGIN A NEW INVESTIGATION</button>`;
    panel.innerHTML = h;
  }

  /* ============ ARCHIVE ============ */
  let archiveFilters = { witness: null, phase: null, channel: null };
  function allFragmentsForArchive() {
    const out = [];
    ["balcony", "council", "refusal"].forEach(key => {
      const d = EP01_V2_SCENES[key];
      out.push({ id: key, title: d.label, phase: d.label, witness: null, narrative: d.beats.flatMap(b => b.narrative), channels: d.channels, frameId: d.beats[0].frameId });
    });
    [EP01_V2_SCENES.dispatch, EP01_V2_SCENES.transition, EP01_V2_SCENES.arrival].forEach((d, i) => {
      out.push({ id: ["dispatch", "transition", "arrival"][i], title: d.label, phase: d.label, witness: "Reporter", narrative: d.beats[0].narrative, frameId: d.beats[0].frameId });
    });
    Object.values(EP01_V2_PRE_ROUTES).forEach(r => {
      out.push({ id: "pre-" + r.key, title: r.title, phase: "Before the Wipeout", witness: r.witness, narrative: r.narrative, channels: r.channels, frameId: r.frameId });
    });
    EP01_V2_TICKS.forEach(t => out.push({ id: t.id, title: t.label, phase: "The Five Ticks", witness: null, narrative: t.narrative, channels: t.evidence, frameId: t.frameId }));
    out.push({ id: "tick-4", title: EP01_V2_TICK_FOUR.label, phase: "The Five Ticks", witness: "Ada", narrative: EP01_V2_TICK_FOUR.narrative, channels: EP01_V2_TICK_FOUR.channels, frameId: EP01_V2_TICK_FOUR.frameId });
    out.push({ id: "tick-5", title: EP01_V2_TICK_FIVE.label, phase: "The Five Ticks", witness: null, narrative: EP01_V2_TICK_FIVE.narrative, frameId: EP01_V2_TICK_FIVE.frameId });
    out.push({ id: "boom", title: EP01_V2_BOOM.label, phase: "The Wipeout", witness: null, narrative: EP01_V2_BOOM.narrative, frameId: EP01_V2_BOOM.frameId });
    Object.values(EP01_V2_AFTERMATH_ROUTES).forEach(r => {
      out.push({ id: "aft-" + r.key, title: r.title, phase: "Aftermath", witness: r.witness, narrative: r.narrative, channels: r.channels, frameId: r.frameId });
    });
    out.push({ id: "rescue", title: EP01_V2_RESCUE.label, phase: "Rescue", witness: null, narrative: EP01_V2_RESCUE.narrative, frameId: EP01_V2_RESCUE.frameId });
    out.push({ id: "closing", title: EP01_V2_CLOSING.label, phase: "Closing", witness: null, narrative: EP01_V2_CLOSING.narrative, frameId: EP01_V2_CLOSING.frameId });
    return out;
  }
  function renderArchive() {
    if (!EP01_V2_STATE.firstReadingComplete) {
      panel.innerHTML = `<div class="gapline">ARCHIVE MODE — LOCKED. File your first witness ledger in STORY to unlock free examination.</div>`;
      return;
    }
    const frags = allFragmentsForArchive();
    const witnesses = [...new Set(frags.map(f => f.witness).filter(Boolean))];
    const phases = [...new Set(frags.map(f => f.phase))];
    const filterBtns = (group, list, cur) => `<div class="filters" role="group" aria-label="Filter by ${esc(group)}">${list.map(v => `<button data-af="${group}:${esc(v)}" aria-pressed="${cur === v}">${esc(v)}${cur === v ? " ●" : ""}</button>`).join("")}</div>`;
    let h = `<p class="tagline">ARCHIVE MODE — free fragment selection, nonlinear. Visibility here is not the same as examination: open a fragment's evidence or add it to your ledger to record that you examined it.</p>
    ${filterBtns("witness", witnesses, archiveFilters.witness)}
    ${filterBtns("phase", phases, archiveFilters.phase)}`;
    const list = frags.filter(f => (!archiveFilters.witness || f.witness === archiveFilters.witness) && (!archiveFilters.phase || f.phase === archiveFilters.phase));
    if (!list.length) h += `<div class="gapline">NO FRAGMENTS MATCH THESE FILTERS.</div>`;
    list.forEach(f => {
      const examined = EP01_V2_STATE.archiveExamined.includes(f.id);
      const added = EP01_V2_STATE.archiveLedgerAdditions.includes(f.id);
      h += `<article class="beat" tabindex="-1" id="af-${f.id}">${frameFig(f.frameId, f.title)}<h3>${esc(f.title)}</h3><div class="btext">${nl2p(f.narrative)}</div>
      ${renderChannels(f.id, f.channels, "af-chan")}
      <div class="note-line">${examined ? "EXAMINED IN ARCHIVE" : "NOT YET EXAMINED"}</div>
      <button class="add-to-ledger" data-archive-add="${f.id}" data-added="${added ? 1 : 0}">${added ? "ADDED TO WITNESS LEDGER" : "ADD THIS FRAGMENT TO MY WITNESS LEDGER"}</button></article>`;
    });
    panel.innerHTML = h;
  }

  /* ============ PEOPLE ============ */
  function renderPeople() {
    let h = `<p class="tagline">Short audience-facing dossiers. Further figures are held in the Canon Ledger until they act in this episode.</p>`;
    EP01_V2_PEOPLE.forEach(p => {
      const followed = EP01_V2_STATE.witnessesFollowed.some(w => w.toUpperCase() === p.name || w.toUpperCase() === p.name.replace("THE ", ""));
      h += `<div class="person-card"><h3>${esc(p.name)}</h3><p>${esc(p.copy)}</p>${followed ? `<p class="note-line">FOLLOWED DIRECTLY IN YOUR INVESTIGATION</p>` : ""}</div>`;
    });
    panel.innerHTML = h;
  }

  /* ============ FIELD NOTES ============ */
  function renderFieldNotes() {
    if (!EP01_V2_STATE.fieldNoteUnlocked) {
      panel.innerHTML = `<div class="gapline">No field requirement has been discovered yet in this reading. Continue the STORY through the Cape Wipeout blast to unlock it.</div>`;
      return;
    }
    const fn = EP01_V2_FIELD_NOTE;
    let h = `<div class="field-note"><div class="fn-eyebrow">${esc(fn.display.eyebrow)}</div>
    <h2>${esc(fn.display.title)}</h2>
    <p>${esc(fn.display.summary)}</p>
    <p>Inside UMADA, Luabi attempts to document an event under blast pressure, unstable orientation, low visibility, conflicting records, and damaged sensors. In the present, this becomes an Omoluabi research requirement: how should a field device preserve visual evidence so that the image, its limitations, its environmental context, and its provenance remain available for later analysis?</p>
    <details><summary>FICTION LAYER — LUABI</summary>
      <p><strong>Narrative condition:</strong> ${esc(fn.fiction_layer.narrative_condition)}</p>
      <p><strong>Operational problem:</strong> ${esc(fn.fiction_layer.operational_problem)}</p>
      <p><strong>Required capability:</strong> ${esc(fn.fiction_layer.required_capability)}</p>
    </details>
    <details><summary>REAL-WORLD LAYER — OMOLUABI</summary>
      <p><strong>Research question:</strong> ${esc(fn.real_world_layer.research_question)}</p>
      <p><strong>MVP requirement:</strong> ${esc(fn.real_world_layer.mvp_requirement)}</p>
      <p><strong>Technical requirements</strong></p><ul>${fn.real_world_layer.technical_requirements.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      <p><strong>Ethical requirements</strong></p><ul>${fn.real_world_layer.ethical_requirements.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      <p><strong>Accessibility requirements</strong></p><ul>${fn.real_world_layer.accessibility_requirements.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      <p><strong>Evidence requirements</strong></p><ul>${fn.real_world_layer.evidence_requirements.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
    </details>
    <div style="margin-top:16px">
      <button class="add-to-ledger" data-fieldnote-add="1" data-added="${EP01_V2_STATE.fieldNoteAddedToRequirements ? 1 : 0}">${EP01_V2_STATE.fieldNoteAddedToRequirements ? "ADDED TO YOUR LOCAL REQUIREMENTS EXPORT" : esc(fn.display.cta_label)}</button>
      <button class="next-btn" data-fieldnote-return="1" style="margin-top:10px">${esc(fn.display.secondary_cta_label)}</button>
    </div>
    <p class="note-line" style="margin-top:14px">This CTA updates your local reading state and, on request, downloads a JSON copy of this discovery (<code>ep01-imaging-001.json</code>). It does not modify any external backlog.</p>
    </div>`;
    panel.innerHTML = h;
  }

  /* ============ ACCESS ============ */
  function renderAccess() {
    const root = document.documentElement;
    const size = root.dataset.size === "lg";
    const contrast = root.dataset.contrast === "high";
    const motionPref = ep01v2GetPref("motion");
    const reduced = motionPref === "reduced" || (!motionPref && matchMedia("(prefers-reduced-motion: reduce)").matches);
    const transcript = ep01v2GetPref("transcript") === "1";
    let h = `<h2 class="phase-label">ACCESS</h2>
    <div class="access-row"><span>TEXT SIZE</span><button id="accSize" aria-pressed="${size}">${size ? "LARGE ●" : "STANDARD"}</button></div>
    <div class="access-row"><span>HIGH CONTRAST</span><button id="accContrast" aria-pressed="${contrast}">${contrast ? "ON ●" : "OFF"}</button></div>
    <div class="access-row"><span>REDUCED MOTION</span><button id="accMotion" aria-pressed="${reduced}">${reduced ? "ON ●" : "OFF"}</button></div>
    <div class="access-row"><span>LINEAR TRANSCRIPT MODE</span><button id="accTranscript" aria-pressed="${transcript}">${transcript ? "ON ●" : "OFF"}</button></div>
    <div class="access-row"><span>REPLAY INTRO</span><button id="accReplay">REPLAY</button></div>
    <div class="access-row"><span>REVIEW MY PATH</span><button data-goto-ledger="1">OPEN LEDGER</button></div>
    <div class="access-row"><span>RESTART EPISODE</span><button data-restart-episode="1">RESTART</button></div>
    <div class="access-row"><span>CLEAR WITNESS LEDGER</span><button data-clear-ledger="1">CLEAR</button></div>
    <p class="tagline" style="margin-top:20px">Everything here is keyboard operable. New story content receives focus. Unlocks and contradictions are announced through a single live region. No sound, hover, or drag is required. Preferences persist separately from your story progress; clearing the ledger never erases them.</p>`;
    panel.innerHTML = h;
    document.getElementById("accSize").onclick = () => { root.dataset.size = root.dataset.size === "lg" ? "" : "lg"; ep01v2Pref("size", root.dataset.size || undefined); renderAccess(); };
    document.getElementById("accContrast").onclick = () => { root.dataset.contrast = root.dataset.contrast === "high" ? "" : "high"; ep01v2Pref("contrast", root.dataset.contrast || undefined); renderAccess(); };
    document.getElementById("accMotion").onclick = () => { const now = ep01v2GetPref("motion") === "reduced" ? "standard" : "reduced"; ep01v2Pref("motion", now); renderAccess(); };
    document.getElementById("accTranscript").onclick = () => { const now = ep01v2GetPref("transcript") === "1" ? undefined : "1"; ep01v2Pref("transcript", now); renderAccess(); };
    document.getElementById("accReplay").onclick = () => { showEntry(); };
  }

  /* ============ DEV MODE (repository-only, never public nav) ============ */
  function renderDev() {
    let h = `<h2 class="phase-label">DEVELOPMENT MODE</h2>
    <p class="tagline">Repository-only view (?mode=development). Not part of the public reading flow.</p>
    <h3>Frame manifest (${Object.keys(EP01_V2_FRAMES).length} slots)</h3><ul>`;
    Object.values(EP01_V2_FRAMES).forEach(f => { h += `<li>${f.id} — ${esc(EP01_V2_FRAME_ROLE_LABEL[f.role])} — ${esc(f.title)}</li>`; });
    h += `</ul><h3>Unresolved canon (kept outside Story Mode)</h3><ul>${EP01_V2_UNRESOLVED.map(u => `<li>${esc(u)}</li>`).join("")}</ul>
    <h3>Migration</h3><p>${EP01V2.migrationNotice() ? esc(EP01V2.migrationNotice()) : "No legacy v1 record found in this browser."}</p>`;
    panel.innerHTML = h;
  }

  /* ============ TABS ============ */
  const renderers = { story: renderStory, ledger: renderLedgerTab, archive: renderArchive, people: renderPeople, fieldnotes: renderFieldNotes, access: renderAccess, dev: renderDev };
  let currentTab = "story";
  function switchTab(t, skipFocus) {
    currentTab = t;
    document.querySelectorAll("[role=tab]").forEach(x => x.setAttribute("aria-selected", x.dataset.t === t ? "true" : "false"));
    panel.setAttribute("aria-labelledby", "tab-" + t);
    renderers[t]();
    if (!skipFocus) panel.focus();
  }
  function focusLatestBeat() {
    const arts = panel.querySelectorAll("article[tabindex]");
    if (arts.length) arts[arts.length - 1].focus();
  }

  /* ============ FRAME MODAL ============ */
  let modal, fmImg, fmCap, fmClose, lastFocus;
  function openModal(frameId) {
    const f = EP01_V2_FRAMES[frameId];
    if (!f || f.role !== "art") return;
    lastFocus = document.activeElement;
    fmImg.src = f.src; fmImg.alt = f.alt;
    fmCap.textContent = f.id + " — " + f.alt;
    modal.dataset.open = "1";
    fmClose.focus();
  }
  function closeModal() {
    modal.dataset.open = "0"; fmImg.src = "";
    if (lastFocus) lastFocus.focus();
  }

  /* ============ ENTRY SCREEN ============ */
  let entry, entryTickEl, entryEnter, entryResume;
  function runEntryTick() {
    entryTickEl.textContent = "";
    if (prefersReducedMotion()) return;
    setTimeout(() => { entryTickEl.textContent = "tick."; }, 700);
  }
  function showEntry() {
    entry.style.display = "flex";
    if (EP01V2.migrationNotice()) {
      const note = document.getElementById("entryMigrationNote");
      note.textContent = EP01V2.migrationNotice();
      note.hidden = false;
    }
    runEntryTick();
    entryEnter.focus();
  }
  function closeEntry(resume) {
    entry.style.display = "none";
    if (resume && window.__ep01v2Saved) EP01V2.resumeInvestigation();
    else if (!resume) EP01V2.beginNewInvestigation();
    switchTab("story");
  }

  /* ============ EVENT WIRING ============ */
  function wireEvents() {
    document.querySelectorAll("[role=tab]").forEach(t => t.addEventListener("click", () => switchTab(t.dataset.t)));
    document.querySelectorAll("[role=tab]").forEach((t, i, all) => t.addEventListener("keydown", e => {
      let idx = i;
      if (e.key === "ArrowRight") idx = (i + 1) % all.length;
      else if (e.key === "ArrowLeft") idx = (i - 1 + all.length) % all.length;
      else if (e.key === "Home") idx = 0;
      else if (e.key === "End") idx = all.length - 1;
      else return;
      e.preventDefault(); all[idx].focus(); switchTab(all[idx].dataset.t);
    }));

    fmClose.addEventListener("click", closeModal);
    modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", e => {
      if (modal.dataset.open === "1") {
        if (e.key === "Escape") { closeModal(); return; }
        if (e.key === "Tab") { e.preventDefault(); fmClose.focus(); }
      }
    });
    document.addEventListener("click", e => { const x = e.target.closest("[data-expand]"); if (x) openModal(x.dataset.expand); });

    document.addEventListener("click", e => {
      /* generic scene channel (balcony / council / refusal) */
      let el = e.target.closest("[data-scene-chan]");
      if (el) { const [id, k] = el.dataset.sceneChan.split("::"); EP01V2.openChannel(id, k, EP01_V2_STATE.chan[id]); ep01v2Persist(); say(k + " channel."); renderStory(); focusChanBtn(id, k); return; }

      el = e.target.closest("[data-pre-chan]");
      if (el) { const [id, k] = el.dataset.preChan.split("::"); EP01V2.openChannel(id, k, EP01_V2_STATE.chan[id]); ep01v2Persist(); say(k + " channel."); renderStory(); focusChanBtn(id, k); return; }

      el = e.target.closest("[data-aft-chan]");
      if (el) { const [id, k] = el.dataset.aftChan.split("::"); EP01V2.openChannel(id, k, EP01_V2_STATE.chan[id]); ep01v2Persist(); say(k + " channel."); renderStory(); focusChanBtn(id, k); return; }

      el = e.target.closest("[data-af-chan]");
      if (el) { const [id, k] = el.dataset.afChan.split("::"); EP01V2.openChannel(id, k, EP01_V2_STATE.chan[id]); EP01V2.archiveExamine(id); ep01v2Persist(); say(k + " channel."); renderArchive(); return; }

      el = e.target.closest("[data-t4-chan]");
      if (el) { const [id, k] = el.dataset.t4Chan.split("::"); EP01V2.tickFourChannel(k, EP01_V2_STATE.chan[id]); ep01v2Persist(); say(k + " channel."); renderStory(); focusChanBtn(id, k); return; }

      el = e.target.closest("[data-tick-ev]");
      if (el) { const [id, k] = el.dataset.tickEv.split("::"); const tick = EP01_V2_TICKS.find(t => t.id === id); EP01V2.openTickEvidence(id, k); EP01V2.openChannel(id, k, EP01_V2_STATE.chan[id]); ep01v2Persist(); say(k + " noted."); renderStory(); return; }

      el = e.target.closest("[data-phase-advance]");
      if (el) { const key = el.dataset.phaseAdvance; EP01V2.advanceBeat(key, EP01_V2_SCENES[key].beats); ep01v2Persist(); say("Continuing."); renderStory(); focusLatestBeat(); return; }

      el = e.target.closest("[data-phase-continue]");
      if (el) { advancePhase(el.dataset.phaseContinue); return; }

      el = e.target.closest("[data-pre-route]");
      if (el) { EP01V2.selectPreRoute(el.dataset.preRoute); ep01v2Persist(); say(EP01_V2_PRE_ROUTES[el.dataset.preRoute].title + " selected."); renderStory(); panel.focus(); return; }
      el = e.target.closest("[data-pre-complete]");
      if (el) { EP01V2.completePreRoute(EP01_V2_PRE_ROUTES[el.dataset.preComplete]); ep01v2Persist(); say("Route examined."); renderStory(); return; }
      el = e.target.closest("[data-pre-return]");
      if (el) { EP01V2.returnToPreHub(); ep01v2Persist(); renderStory(); return; }
      el = e.target.closest("[data-converge-ticks]");
      if (el) { EP01V2.convergeToTicks(); ep01v2Persist(); say("The five ticks begin."); renderStory(); return; }

      el = e.target.closest("[data-tick-next]");
      if (el) { EP01V2.tickNext(EP01_V2_TICKS[EP01_V2_STATE.tickIdx]); ep01v2Persist(); renderStory(); focusLatestBeat(); return; }
      el = e.target.closest("[data-open-message]");
      if (el) { EP01V2.openMessage(); ep01v2Persist(); say("Message opened."); renderStory(); return; }
      el = e.target.closest("[data-goto-tick4]");
      if (el) { EP01V2.gotoTickFour(); ep01v2Persist(); say("Tick four. Ada sees the premature KIA record."); renderStory(); focusLatestBeat(); return; }
      el = e.target.closest("[data-tick4-preserve]");
      if (el) { const c = EP01_V2_TICK_FOUR.preserveChoices.find(x => x.key === el.dataset.tick4Preserve); EP01V2.tickFourPreserve(c); ep01v2Persist(); say("Contradiction preserved in your witness ledger."); renderStory(); document.getElementById("t4out")?.focus(); return; }

      el = e.target.closest("[data-goto-rescue]");
      if (el) { EP01V2.gotoRescue(); ep01v2Persist(); renderStory(); focusLatestBeat(); return; }
      el = e.target.closest("[data-aft-route]");
      if (el) { EP01V2.selectAftermathRoute(el.dataset.aftRoute); ep01v2Persist(); say(EP01_V2_AFTERMATH_ROUTES[el.dataset.aftRoute].title + " selected."); renderStory(); panel.focus(); return; }
      el = e.target.closest("[data-aft-complete]");
      if (el) { EP01V2.completeAftermathRoute(EP01_V2_AFTERMATH_ROUTES[el.dataset.aftComplete]); ep01v2Persist(); say("Signal followed."); renderStory(); return; }
      el = e.target.closest("[data-aft-return]");
      if (el) { EP01V2.returnToAftermathHub(); ep01v2Persist(); renderStory(); return; }

      el = e.target.closest("[data-complete-reading]");
      if (el) { EP01V2.completeFirstReading(); ep01v2Persist(); say("Witness ledger filed. Archive mode unlocked."); switchTab("ledger"); return; }

      el = e.target.closest("[data-restart-episode]");
      if (el) { if (confirm("Restart the episode and begin a new investigation? Your ledger will be cleared.")) { EP01V2.restartEpisode(); switchTab("story"); } return; }
      el = e.target.closest("[data-clear-ledger]");
      if (el) { if (confirm("Clear the witness ledger? Accessibility preferences are not affected.")) { EP01V2.clearWitnessLedger(); say("Ledger cleared."); renderers[currentTab](); } return; }
      el = e.target.closest("[data-goto-ledger]");
      if (el) { switchTab("ledger"); return; }

      el = e.target.closest("[data-archive-add]");
      if (el) { EP01V2.archiveAddToLedger(el.dataset.archiveAdd); ep01v2Persist(); say("Fragment added to your witness ledger."); renderArchive(); return; }

      el = e.target.closest("[data-fieldnote-add]");
      if (el) { EP01V2.addFieldNoteToRequirements(); ep01v2Persist(); downloadFieldNote(); say("Field requirement added."); renderFieldNotes(); return; }
      el = e.target.closest("[data-fieldnote-return]");
      if (el) { switchTab("story"); return; }
    });
  }
  function focusChanBtn(id, k) {
    const el = panel.querySelector(`[data-scene-chan="${id}::${k}"],[data-pre-chan="${id}::${k}"],[data-aft-chan="${id}::${k}"],[data-t4-chan="${id}::${k}"]`);
    if (el) el.focus();
  }
  function advancePhase(key) {
    const order = { balcony: "council", council: "refusal", refusal: "dispatch", dispatch: "transition", transition: "arrival", arrival: "hub-pre", tick4: "tick5" };
    if (key === "arrival") { EP01V2.gotoAnchor("hub-pre"); ep01v2Persist(); say("Friedmandorstrop. Choose a route."); renderStory(); return; }
    if (key === "tick4") { EP01V2.gotoTickFive(); ep01v2Persist(); renderStory(); focusLatestBeat(); return; }
    if (key === "tick5") { EP01V2.gotoBoom(); ep01v2Persist(); say("The blast."); renderStory(); focusLatestBeat(); return; }
    if (key === "boom") { EP01V2.gotoAftermathHub(); ep01v2Persist(); say("Multiple signals remain active."); renderStory(); return; }
    if (key === "rescue") { EP01V2.gotoClosing(); ep01v2Persist(); renderStory(); focusLatestBeat(); return; }
    const next = order[key];
    if (next) { EP01V2.gotoAnchor(next); ep01v2Persist(); renderStory(); focusLatestBeat(); }
  }

  function downloadFieldNote() {
    try {
      const blob = new Blob([JSON.stringify(EP01_V2_FIELD_NOTE, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "ep01-imaging-001.json";
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (e) { /* download not available in this environment; local state still updated */ }
  }

  /* ============ BOOT ============ */
  function boot() {
    panel = document.getElementById("panel");
    live = document.getElementById("live");
    entry = document.getElementById("entry");
    entryTickEl = document.getElementById("entryTick");
    entryEnter = document.getElementById("entryEnter");
    entryResume = document.getElementById("entryResume");
    modal = document.getElementById("frameModal");
    fmImg = document.getElementById("fmImg");
    fmCap = document.getElementById("fmCap");
    fmClose = document.getElementById("fmClose");

    if (ep01v2GetPref("size")) document.documentElement.dataset.size = ep01v2GetPref("size");
    if (ep01v2GetPref("contrast")) document.documentElement.dataset.contrast = ep01v2GetPref("contrast");

    ep01v2Load();
    if (window.__ep01v2Saved && (window.__ep01v2Saved.framesSeen || []).length) entryResume.hidden = false;

    if (DEV_MODE) {
      const devTab = document.createElement("button");
      devTab.setAttribute("role", "tab"); devTab.setAttribute("aria-selected", "false");
      devTab.id = "tab-dev"; devTab.dataset.t = "dev"; devTab.textContent = "DEV";
      document.querySelector("[role=tablist]").appendChild(devTab);
    }

    wireEvents();
    entryEnter.addEventListener("click", () => closeEntry(false));
    entryResume.addEventListener("click", () => closeEntry(true));

    showEntry();
    switchTab("story", true);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
