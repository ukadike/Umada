/* UMADA — Episode One v2 — Cape Wipeout, Part One
   State layer. Owns the state machine, the witness ledger, and persistence.
   No DOM access here — render.js reads this module's state and calls its
   action functions; it never mutates state directly, and pure render
   functions never call these actions themselves (Technical Correction #1). */

const EP01_V2_STORAGE_KEY = "umada-ep01-v2";
const EP01_V2_LEGACY_KEY = "umada-ep01"; /* v1's key — read-only, never imported */
const EP01_V2_PREF_PREFIX = "umada-ep01-pref-";

const EP01_V2_DEFAULT_STATE = {
  anchor: "balcony",
  beatIdx: 0,
  chan: {},                    /* {sceneOrBeatId: activeChannelKey|null} */
  contextExamined: [],         /* ["CITY","BODY","HOUSE", ...] across balcony/council/refusal */

  preRoute: null,
  preRoutesVisited: [],
  preRoutesDone: [],

  tickIdx: 0,
  tickEvidenceOpened: {},      /* {tickId: [keys]} */
  tick3MessageOpened: false,
  tick4Choice: null,

  aftermathRoute: null,
  aftermathRoutesVisited: [],
  aftermathRoutesDone: [],

  doctrineUnlocked: [],
  contradictionsFound: [],
  unresolvedQuestions: [],
  trustDecisions: [],
  witnessesFollowed: [],
  channelsOpened: [],
  framesSeen: [],

  fieldNoteUnlocked: false,
  fieldNoteAddedToRequirements: false,

  firstReadingComplete: false,

  archiveLedgerAdditions: [],  /* fragment ids explicitly added in Archive Mode */
  archiveExamined: []          /* fragment ids explicitly examined in Archive Mode */
};

let EP01_V2_STATE = structuredClone(EP01_V2_DEFAULT_STATE);
let EP01_V2_MIGRATION_NOTICE = null;

function ep01v2Load() {
  try {
    const saved = localStorage.getItem(EP01_V2_STORAGE_KEY);
    if (saved) {
      window.__ep01v2Saved = JSON.parse(saved);
    }
  } catch (e) { /* storage unavailable; proceed with defaults */ }
  try {
    if (!localStorage.getItem(EP01_V2_STORAGE_KEY) && localStorage.getItem(EP01_V2_LEGACY_KEY)) {
      EP01_V2_MIGRATION_NOTICE = "A previous Episode One investigation was found. Because the story structure has changed, it has been preserved as a v1 archive rather than imported into this reading.";
    }
  } catch (e) { /* ignore */ }
}
function ep01v2Persist() {
  try { localStorage.setItem(EP01_V2_STORAGE_KEY, JSON.stringify(EP01_V2_STATE)); } catch (e) { /* ignore */ }
}
function ep01v2Pref(key, value) {
  try {
    if (value === undefined) localStorage.removeItem(EP01_V2_PREF_PREFIX + key);
    else localStorage.setItem(EP01_V2_PREF_PREFIX + key, value);
  } catch (e) { /* ignore */ }
}
function ep01v2GetPref(key) {
  try { return localStorage.getItem(EP01_V2_PREF_PREFIX + key); } catch (e) { return null; }
}

/* ---- generic ledger helpers (only ever called from action functions) ---- */
function ep01v2AddUnique(arrKey, value) {
  if (value && !EP01_V2_STATE[arrKey].includes(value)) { EP01_V2_STATE[arrKey].push(value); return true; }
  return false;
}
function ep01v2MarkFrameSeen(frameId) { if (frameId) ep01v2AddUnique("framesSeen", frameId); }
function ep01v2FoundContradiction(text) { if (text) ep01v2AddUnique("contradictionsFound", text); }
function ep01v2UnlockDoctrine(nums) {
  (nums || []).forEach(n => ep01v2AddUnique("doctrineUnlocked", n));
}

/* ============ ACTIONS ============ */
const EP01V2 = {

  state: () => EP01_V2_STATE,
  migrationNotice: () => EP01_V2_MIGRATION_NOTICE,

  beginNewInvestigation() {
    EP01_V2_STATE = structuredClone(EP01_V2_DEFAULT_STATE);
    ep01v2Persist();
  },
  resumeInvestigation() {
    if (window.__ep01v2Saved) {
      EP01_V2_STATE = Object.assign(structuredClone(EP01_V2_DEFAULT_STATE), window.__ep01v2Saved);
    }
  },
  restartEpisode() {
    EP01_V2_STATE = structuredClone(EP01_V2_DEFAULT_STATE);
    ep01v2Persist();
  },
  clearWitnessLedger() {
    ["contradictionsFound","unresolvedQuestions","trustDecisions","witnessesFollowed",
     "channelsOpened","framesSeen","archiveLedgerAdditions","archiveExamined","contextExamined"]
      .forEach(k => { EP01_V2_STATE[k] = []; });
    ep01v2Persist();
  },

  /* ---- sequential-beat phases: balcony / council / refusal / dispatch / transition / arrival ---- */
  advanceBeat(phaseKey, beats) {
    const beat = beats[EP01_V2_STATE.beatIdx];
    if (beat) { ep01v2MarkFrameSeen(beat.frameId); }
    EP01_V2_STATE.beatIdx++;
  },
  gotoAnchor(anchor) {
    EP01_V2_STATE.anchor = anchor;
    EP01_V2_STATE.beatIdx = 0;
  },
  openChannel(sceneId, channelKey, currentlyActive) {
    const next = currentlyActive === channelKey ? null : channelKey;
    EP01_V2_STATE.chan[sceneId] = next;
    if (next) {
      ep01v2AddUnique("channelsOpened", channelKey);
      ep01v2AddUnique("contextExamined", sceneId + ":" + channelKey);
    }
  },

  /* ---- pre-wipeout hub ---- */
  selectPreRoute(key) {
    EP01_V2_STATE.preRoute = key;
    EP01_V2_STATE.anchor = "route-pre";
    ep01v2AddUnique("preRoutesVisited", key);
  },
  completePreRoute(route) {
    ep01v2AddUnique("preRoutesDone", route.key);
    ep01v2AddUnique("witnessesFollowed", route.witness);
    (route.ledgerLines || []).forEach(() => {});
    if (route.contradiction) ep01v2FoundContradiction(route.contradiction);
    ep01v2MarkFrameSeen(route.frameId);
    EP01_V2_STATE.anchor = "hub-pre";
  },
  returnToPreHub() { EP01_V2_STATE.anchor = "hub-pre"; EP01_V2_STATE.preRoute = null; },
  convergeToTicks() { EP01_V2_STATE.anchor = "ticks"; EP01_V2_STATE.tickIdx = 0; },

  /* ---- five ticks ---- */
  openTickEvidence(tickId, key) {
    const list = EP01_V2_STATE.tickEvidenceOpened[tickId] || [];
    if (!list.includes(key)) list.push(key);
    EP01_V2_STATE.tickEvidenceOpened[tickId] = list;
    ep01v2AddUnique("channelsOpened", key);
  },
  tickNext(tick) {
    ep01v2MarkFrameSeen(tick.frameId);
    EP01_V2_STATE.tickIdx++;
  },
  openMessage() { EP01_V2_STATE.tick3MessageOpened = true; },
  gotoTickFour() { EP01_V2_STATE.anchor = "tick4"; ep01v2MarkFrameSeen("EP01-V2-F14"); },
  tickFourChannel(key, active) { this.openChannel("tick-4", key, active); },
  tickFourPreserve(choice) {
    EP01_V2_STATE.tick4Choice = choice.key;
    ep01v2AddUnique("trustDecisions", choice.trust);
    ep01v2FoundContradiction(EP01_V2_TICK_FOUR.ledgerContradiction);
  },
  gotoTickFive() { EP01_V2_STATE.anchor = "tick5"; ep01v2MarkFrameSeen("EP01-V2-F15"); },
  gotoBoom() {
    EP01_V2_STATE.anchor = "boom";
    ep01v2MarkFrameSeen("EP01-V2-F16");
    EP01_V2_STATE.fieldNoteUnlocked = true;
  },

  /* ---- aftermath hub ---- */
  gotoAftermathHub() { EP01_V2_STATE.anchor = "hub-aftermath"; },
  selectAftermathRoute(key) {
    EP01_V2_STATE.aftermathRoute = key;
    EP01_V2_STATE.anchor = "route-aftermath";
    ep01v2AddUnique("aftermathRoutesVisited", key);
  },
  completeAftermathRoute(route) {
    ep01v2AddUnique("aftermathRoutesDone", route.key);
    ep01v2AddUnique("witnessesFollowed", route.witness);
    if (route.contradiction) ep01v2FoundContradiction(route.contradiction);
    if (route.doctrineUnlock) ep01v2UnlockDoctrine(route.doctrineUnlock);
    if (route.key === "ada-body") ep01v2AddUnique("unresolvedQuestions", "Location and status of KC");
    ep01v2MarkFrameSeen(route.frameId);
    EP01_V2_STATE.anchor = "hub-aftermath";
  },
  returnToAftermathHub() { EP01_V2_STATE.anchor = "hub-aftermath"; EP01_V2_STATE.aftermathRoute = null; },

  gotoRescue() { EP01_V2_STATE.anchor = "rescue"; ep01v2MarkFrameSeen("EP01-V2-F20"); },
  gotoClosing() { EP01_V2_STATE.anchor = "closing"; ep01v2MarkFrameSeen("EP01-V2-F21"); },
  completeFirstReading() {
    EP01_V2_STATE.firstReadingComplete = true;
    EP01_V2_STATE.anchor = "complete";
    ep01v2UnlockDoctrine([6]);
  },

  /* ---- field note ---- */
  addFieldNoteToRequirements() { EP01_V2_STATE.fieldNoteAddedToRequirements = true; },

  /* ---- archive mode (state-neutral except explicit examine/add actions) ---- */
  archiveExamine(fragId) { ep01v2AddUnique("archiveExamined", fragId); },
  archiveAddToLedger(fragId) {
    ep01v2AddUnique("archiveExamined", fragId);
    ep01v2AddUnique("archiveLedgerAdditions", fragId);
  }
};

function ep01v2LedgerData() {
  const S = EP01_V2_STATE;
  const preRouteTitles = { tallai: EP01_V2_PRE_ROUTES.tallai.title, garden: EP01_V2_PRE_ROUTES.garden.title, ada: EP01_V2_PRE_ROUTES.ada.title };
  const aftRouteTitles = {};
  Object.keys(EP01_V2_AFTERMATH_ROUTES).forEach(k => { aftRouteTitles[k] = EP01_V2_AFTERMATH_ROUTES[k].title; });
  const unseenPre = Object.keys(EP01_V2_PRE_ROUTES).filter(k => !S.preRoutesDone.includes(k)).map(k => preRouteTitles[k]);
  const unseenAft = Object.keys(EP01_V2_AFTERMATH_ROUTES).filter(k => !S.aftermathRoutesDone.includes(k)).map(k => aftRouteTitles[k]);
  return {
    contextExamined: S.contextExamined,
    preRoutesExamined: S.preRoutesDone.map(k => preRouteTitles[k]),
    aftermathRoutesExamined: S.aftermathRoutesDone.map(k => aftRouteTitles[k]),
    witnesses: S.witnessesFollowed,
    channelsOpened: S.channelsOpened,
    contradictions: S.contradictionsFound,
    trust: S.trustDecisions,
    unresolved: S.unresolvedQuestions,
    doctrine: S.doctrineUnlocked.slice().sort((a,b)=>a-b).map(n => EP01_V2_DOCTRINE.find(d => d.n === n).name),
    framesWitnessed: S.framesSeen.length,
    framesTotal: Object.keys(EP01_V2_FRAMES).length,
    unexamined: [...unseenPre, ...unseenAft],
    archiveAdditions: S.archiveLedgerAdditions
  };
}
