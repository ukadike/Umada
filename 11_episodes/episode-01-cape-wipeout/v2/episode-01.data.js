/* UMADA — Episode One v2 — Cape Wipeout, Part One
   Data layer. Scene objects only — no rendering, no state mutation here.
   Canon spellings: Friedmandorstrop (locked, 00_governance/CANON_STATUS.md,
   2026-07-17, superseding the retired "Friedmandostorp"/"Friedmandestorp").
   Terminology: Luabi is the in-world device; Omoluabi is the real-world
   research bridge (Field Notes only — see FIELD_NOTE below). */

/* ============ FRAMES ============
   role: "art" (real image present) | "placeholder" (AWAITING FRAGMENT —
   no artifact physically present in the repository; index entry only). */
const EP01_V2_FRAMES = {
  "EP01-V2-F01": {id:"EP01-V2-F01", role:"art", src:"assets/ep01-v2-f01-balcony-king.png", w:1672, h:941, phase:"Prologue", title:"Tisetan balcony — Lion king in cybernetic wheelchair",
    alt:"The Lion king, older and grey-dreadlocked, sits in an ornate cybernetic wheelchair bearing a lion-crest medallion, flanked by two cybernetic attendants, on a balcony overlooking Tisetan's lit towers at night.", use:"Opens the episode; establishes the King and the city he governs."},
  "EP01-V2-F02": {id:"EP01-V2-F02", role:"placeholder", phase:"Prologue", title:"Wife enters — “It is time”",
    alt:"The king's wife steps onto the balcony behind him.", use:"Closes the prologue and cues the transition to Council."},
  "EP01-V2-F03": {id:"EP01-V2-F03", role:"art", src:"assets/ep01-v2-f03-council-chamber.png", w:379, h:201, phase:"Council Era", title:"Circular council chamber",
    alt:"Council representatives gather in a circular chamber, communicating through speech, Nago, prosthetic gesture, and tactile devices, to dispute leadership of Umada and Tisetan.", use:"Establishes the council dispute over succession and the founding catastrophe."},
  "EP01-V2-F04": {id:"EP01-V2-F04", role:"placeholder", phase:"Council Era", title:"Ada refuses the assignment",
    alt:"Ada, older and historically consequential, stands before the council and refuses the time-travel assignment, turning toward a hooded figure at the chamber's edge.", use:"Fixed canon event: Ada declines and names the Reporter."},
  "EP01-V2-F05": {id:"EP01-V2-F05", role:"art", src:"assets/ep01-v2-f05-dispatch.png", w:365, h:201, phase:"Council Era", title:"Luabi dispatch to the concealed Reporter",
    alt:"A council elder transfers the Luabi device to the hooded Reporter, whose face remains unseen.", use:"Fixed canon event: the device is transferred to the Reporter."},
  "EP01-V2-F06": {id:"EP01-V2-F06", role:"art", src:"assets/ep01-v2-f06-temporal-activation.png", w:336, h:201, phase:"Council Era", title:"Temporal activation",
    alt:"The hooded Reporter activates the Luabi device before a luminous, unstable temporal field.", use:"Fixed canon event: the transition into damaged history begins."},
  "EP01-V2-F07": {id:"EP01-V2-F07", role:"art", src:"assets/ep01-v2-f07-friedmandorstrop-arrival.png", w:408, h:201, phase:"Before the Wipeout", title:"Friedmandorstrop, one hour before",
    alt:"A coastal research settlement near Cape Agulhas, harbor and fog visible, roughly one hour before the Cape Wipeout.", use:"Route-hub establishing shot for the pre-Wipeout investigation."},
  "EP01-V2-F08": {id:"EP01-V2-F08", role:"art", src:"assets/ep01-v2-f08-garden.png", w:379, h:181, phase:"Before the Wipeout", title:"Living laboratory garden",
    alt:"A living laboratory garden divided by water channels, where researchers, civilians, and chimera life share the same civic landscape.", use:"Route B — the Garden."},
  "EP01-V2-F09": {id:"EP01-V2-F09", role:"art", src:"assets/ep01-v2-f09-bread-route.png", w:365, h:181, phase:"Before the Wipeout", title:"Tallai's bread route, with Q and Quartz",
    alt:"Tallai, a visibly nonhuman chimera care specialist in pale layered garments, crosses the settlement with small Q near the walls and massive Quartz following.", use:"Route A — Tallai's bread route."},
  "EP01-V2-F10": {id:"EP01-V2-F10", role:"art", src:"assets/ep01-v2-f10-ada-waits-for-kc.png", w:336, h:181, phase:"Before the Wipeout", title:"Ada arrives and waits for KC",
    alt:"Ada, a field commander, checks the road and the time while waiting for KC at the bread stop.", use:"Route C — Ada."},
  "EP01-V2-F11": {id:"EP01-V2-F11", role:"placeholder", phase:"The Five Ticks", title:"Tick One — leaves turn",
    alt:"A row of leaves in the garden turns its pale underside to the glass before the air reaches them; Q stops.", use:"Tick One, fixed anchor."},
  "EP01-V2-F12": {id:"EP01-V2-F12", role:"placeholder", phase:"The Five Ticks", title:"Tick Two — Tallai stops",
    alt:"Tallai pauses on the familiar street, sensing that one of its ordinary sounds has gone missing.", use:"Tick Two, fixed anchor."},
  "EP01-V2-F13": {id:"EP01-V2-F13", role:"placeholder", phase:"The Five Ticks", title:"Tick Three — the message arrives",
    alt:"Ada checks the road for KC at 08:58 as a facility message arrives on her device instead.", use:"Tick Three, fixed anchor."},
  "EP01-V2-F14": {id:"EP01-V2-F14", role:"art", src:"assets/ep01-v2-f14-tick-four-kia.png", w:408, h:181, phase:"The Five Ticks", title:"Tick Four — the record arrives before the event",
    alt:"Ada reads an official record listing her as killed in action while the local clock still reads 08:58 and her own body remains alive and responsive.", use:"Tick Four, the central BODY/RECORD contradiction."},
  "EP01-V2-F15": {id:"EP01-V2-F15", role:"art", src:"assets/ep01-v2-f15-tick-five-recognition.png", w:379, h:160, phase:"The Five Ticks", title:"Tick Five — recognition",
    alt:"Q's clicking becomes continuous and every device in the record registers that something is approaching, without agreeing on what.", use:"Tick Five, fixed anchor immediately before the blast."},
  "EP01-V2-F16": {id:"EP01-V2-F16", role:"art", src:"assets/ep01-v2-f16-boom.png", w:365, h:160, phase:"The Wipeout", title:"BOOM",
    alt:"A stark title frame marking the Cape Wipeout blast.", use:"The single, unavoidable BOOM."},
  "EP01-V2-F17": {id:"EP01-V2-F17", role:"art", src:"assets/ep01-v2-f17-ada-after-blast.png", w:336, h:160, phase:"Aftermath", title:"Ada after the blast",
    alt:"Ada lies amid the wreckage, injured but responsive, as Tallai reaches her.", use:"Aftermath route — Ada, Body."},
  "EP01-V2-F18": {id:"EP01-V2-F18", role:"placeholder", phase:"Aftermath", title:"Q detects life",
    alt:"Q registers heat, movement, breath, and response at coordinates the official record lists as having no survivor.", use:"Aftermath route — Q, Detection."},
  "EP01-V2-F19": {id:"EP01-V2-F19", role:"art", src:"assets/ep01-v2-f19-quartz-lifts-ada-bear.png", w:408, h:160, phase:"Aftermath", title:"Quartz lifts Ada and the teddy bear",
    alt:"Quartz, massive and gentle, clears debris and lifts a dusty teddy bear from the wreckage before carrying Ada.", use:"Aftermath route — Quartz, Carrier."},
  "EP01-V2-F20": {id:"EP01-V2-F20", role:"art", src:"assets/ep01-v2-f20-tallai-leads-into-smoke.png", w:379, h:156, phase:"Rescue", title:"Tallai leads the rescue into smoke",
    alt:"Tallai, Q, and Quartz carry Ada away from the blast site as smoke closes behind them.", use:"Rescue convergence."},
  "EP01-V2-F21": {id:"EP01-V2-F21", role:"art", src:"assets/ep01-v2-f21-luabi-wind-field.png", w:408, h:156, phase:"Closing", title:"Luabi detects the wind-field shift",
    alt:"The Reporter overlooks the ruined coast as the Luabi device restores one direction before it restores the image: wind, carrying the record onward.", use:"Closing — the bridge to Cindy."}
};
const EP01_V2_FRAME_ROLE_LABEL = {"art":"WITNESS FRAME","placeholder":"AWAITING FRAGMENT"};

/* ============ FIELD NOTE (Luabi → Omoluabi requirement discovery) ============ */
const EP01_V2_FIELD_NOTE = {
  discovery_id: "ep01-imaging-001",
  episode_id: "umada-ep01",
  scene_id: "boom-device-failure",
  trigger_type: "unlock",
  trigger_label: "Open field note",
  trigger_timing: "After the Cape Wipeout blast sequence",
  status: "proposed",
  fiction_layer: {
    device_name: "Luabi",
    narrative_condition: "The Reporter must document a catastrophic event while pressure, debris, low visibility, unstable orientation, damaged sensors, and contradictory official records compromise ordinary capture.",
    operational_problem: "A conventional image may be blurred, compressed, stripped of context, separated from sensor conditions, or dismissed because the scene cannot be reproduced.",
    required_capability: "Luabi must preserve original visual data, capture conditions, synchronized sensor context, uncertainty, and an auditable provenance chain even when image quality fails."
  },
  real_world_layer: {
    system_name: "Omoluabi",
    research_question: "What minimum imaging and provenance specification allows a field capture to remain analytically useful without overstating what the image proves?",
    mvp_requirement: "Provide evidence-grade, offline-first image capture that preserves the original file, capture metadata, device orientation, environmental context, integrity history, and accessible textual interpretation.",
    technical_requirements: [
      "Preserve an untouched original image and any derived or compressed versions separately.",
      "Support lossless or RAW-capable capture where hardware permits.",
      "Record precise timestamp with clock-confidence status.",
      "Record location confidence rather than presenting uncertain coordinates as exact.",
      "Record device orientation and motion through inertial sensor data.",
      "Allow synchronized environmental sensor snapshots.",
      "Support rapid burst capture around anomalous events.",
      "Generate cryptographic hashes and a local chain-of-custody log.",
      "Operate offline and synchronize later without replacing the original evidence.",
      "Expose capture limitations, missing metadata, and processing history."
    ],
    ethical_requirements: [
      "Do not imply that image capture alone proves identity, cause, intent, or classification.",
      "Preserve uncertainty and contradictory evidence.",
      "Provide consent and risk controls when recording people.",
      "Protect sensitive witness location and identity when disclosure creates danger.",
      "Never silently enhance an evidentiary original."
    ],
    accessibility_requirements: [
      "Provide a text-first capture summary.",
      "Support author-written and assisted alt text while preserving the distinction between observation and interpretation.",
      "Make capture, review, and evidence-status controls keyboard and screen-reader accessible.",
      "Provide nonvisual orientation and sensor summaries.",
      "Never require color, sound, motion, or image inspection as the only way to understand evidence status."
    ],
    evidence_requirements: [
      "Preserve the original file.",
      "Preserve provenance and transformation history.",
      "Distinguish observed content from automated inference.",
      "Display confidence and uncertainty.",
      "Allow comparison between image, body, witness, record, environment, and device channels."
    ],
    implementation_notes: [
      "Do not hard-code a megapixel, frame-rate, or sensor-size claim until hardware testing establishes a defensible minimum.",
      "Create a research test matrix for low light, motion, compression, distance, obstruction, weather, and device damage.",
      "Index this discovery in the Speculative Requirements Ledger."
    ]
  },
  display: {
    eyebrow: "LUABI FIELD REQUIREMENT DISCOVERED",
    title: "Image evidence under failure",
    summary: "The fiction reveals a present-day requirement for evidence-grade capture that preserves context, limitations, and provenance.",
    cta_label: "Add to Omoluabi requirements",
    secondary_cta_label: "Return to episode",
    show_in_ledger: true
  }
};

/* ============ RESCUE DOCTRINE ============ */
const EP01_V2_DOCTRINE = [
  {n:1, name:"Extraction", d:"Reach and remove the endangered body.", via:"Tallai — Witness route"},
  {n:2, name:"Stabilization", d:"Preserve life during immediate disruption.", via:"Tallai — Witness route"},
  {n:3, name:"Care", d:"Respond to the person, not merely the injury.", via:"Quartz — Carrier route"},
  {n:4, name:"Analysis", d:"Examine signals without allowing systems to overrule the body.", via:"Q — Detection route"},
  {n:5, name:"Transport", d:"Move without producing further harm.", via:"Quartz — Carrier route"},
  {n:6, name:"Witness", d:"Preserve what happened, including contradictions and uncertainty.", via:"Q — Detection route"}
];

/* ============ PEOPLE (public dossiers) ============ */
const EP01_V2_PEOPLE = [
  {name:"LION KING", copy:"A ruler at the end of his House's term. His body requires extensive cybernetic support; his political authority does not. He believes essential work remains unfinished and understands that this belief may also serve power."},
  {name:"ADA", copy:"A field commander who survives Cape Wipeout after being officially recorded as killed. In the Council Era, she refuses the time-travel assignment and directs the council toward the Reporter."},
  {name:"TALLAI", copy:"A visibly nonhuman chimera care specialist known along the Friedmandorstrop bread route. Tallai finds Ada alive and orders extraction."},
  {name:"Q", copy:"A small insect-like chimera whose sensory response detects danger and bodily survival before official systems do."},
  {name:"QUARTZ", copy:"A massive, gentle protector who clears debris and carries Ada from the blast site, along with a dusty teddy bear recovered from the wreckage."},
  {name:"THE REPORTER", copy:"A concealed witness selected to carry Luabi into damaged history. The Reporter's identity remains unknown."},
  {name:"KC", copy:"Ada's partner, expected at the bread stop at 09:00. Ada asks for KC after the blast. Episode One does not resolve the answer."}
];

/* ============ SCENES ============
   Each phase is an ordered list of beats. A beat may carry optional
   evidence `channels` (label -> paragraph array) and, at fixed anchors,
   a `choices` block. Nothing here mutates state; state.js consumes this
   read-only data. */

const EP01_V2_SCENES = {

  /* ---- BALCONY (prologue) ---- */
  balcony: {
    label: "PROLOGUE — THE KING ABOVE TISETAN",
    beats: [
      {id:"balcony-1", frameId:"EP01-V2-F01",
        narrative:[
          "Tisetan had learned to glow without pretending the darkness was gone.",
          "From the private balcony, the Lion king could see the work of several lifetimes: laboratories lit through the night, schools built around many kinds of bodies, transit lines threading old districts to new towers, Nago signals passing silently between hands, walls, glass, and light.",
          "His body had narrowed. His reach had not.",
          "Behind him, two cybernetic attendants waited with the patience of people who knew the difference between assistance and interruption."
        ]},
      {id:"balcony-2", frameId:"EP01-V2-F02",
        narrative:[
          "His wife came to the balcony.",
          "“It is time,” she said."
        ]}
    ],
    channels:{
      CITY:["The capital is presented as an achievement, but not a neutral one. Every tower below carries an argument about who built the future and who has the right to govern it."],
      BODY:["The chair supports movement, pressure, communication, memory prompts, and emergency care. It does not make the king less formidable. It makes visible the infrastructure required for him to remain in public life."],
      HOUSE:["The Lion House has held power long enough for continuity to resemble entitlement. The transition is due. The unfinished work is real. So is the danger of using unfinished work to delay succession."]
    },
    ledgerNote:"CONTEXT EXAMINED: CITY / BODY / HOUSE",
    next:{label:"GO WITH THEM TO THE COUNCIL", to:"council"}
  },

  /* ---- COUNCIL ---- */
  council: {
    label: "SCENE ONE — THE COUNCIL CHAMBER",
    beats: [
      {id:"council-1", frameId:"EP01-V2-F03",
        narrative:[
          "The chamber had been designed so that no single voice occupied its center.",
          "That had never prevented power from trying.",
          "The Lion king entered late enough for everyone to understand that the delay was deliberate and early enough for no one to accuse him of fear.",
          "Some members spoke. Some signed. One delegate pressed a sequence into the tactile rail and waited while the chamber translated it into light. A Jaguar representative watched without appearing to watch.",
          "The question before them was described as transition.",
          "It was also inheritance.",
          "It was also control.",
          "It was also the unfinished work of a civilization that still did not agree on what had created it."
        ]},
      {id:"council-2",
        narrative:[
          "The Lion House argued that essential work remained incomplete.",
          "Others argued that power always discovers one more essential task when its time is ending.",
          "Beneath the succession question sat an older disagreement: the founding catastrophe itself.",
          "Cape Wipeout.",
          "The event everyone cited.",
          "The event no surviving record described the same way."
        ]}
    ],
    channels:{
      "PUBLIC ARGUMENT":["The official issue is whether the present transition may be delayed, altered, or conditioned."],
      "PRIVATE STAKES":["The king's family is not united by ambition so much as by different understandings of duty, safety, independence, and control."],
      "MISSING HISTORY":["The oldest records of Cape Wipeout contain impossible timestamps, erased witnesses, damaged imagery, and bodies classified before they were found."]
    },
    next:{label:"OPEN THE SEALED RECORD", to:"refusal"}
  },

  /* ---- REFUSAL ---- */
  refusal: {
    label: "SCENE TWO — ADA REFUSES",
    beats: [
      {id:"refusal-1", frameId:"EP01-V2-F04",
        narrative:[
          "Ada had already survived becoming evidence.",
          "She would not become proof on command.",
          "The council asked her to cross the damaged line of time and return to the hour that had divided her life.",
          "She refused.",
          "No one in the chamber mistook refusal for weakness.",
          "Ada looked toward the hooded figure standing beyond the central light.",
          "“Send the Reporter,” she said.",
          "The figure did not step forward.",
          "The chamber turned toward them anyway."
        ]}
    ],
    channels:{
      ADA:["Her body carries later reconstruction, age, memory, and the consequences of survival. The exact condition of her reconstruction should be shown with restraint, not as spectacle."],
      "COUNCIL RECORD":["ASSIGNMENT REQUESTED: ADA","STATUS: DECLINED","ALTERNATE WITNESS: REPORTER","FACE RECORD: WITHHELD / UNAVAILABLE"],
      REPORTER:["The Reporter's face cannot be recovered from the record. Every surviving angle conceals it."]
    },
    next:{label:"WITNESS THE DISPATCH", to:"dispatch"}
  },

  /* ---- DISPATCH ---- */
  dispatch: {
    label: "SCENE THREE — THE DISPATCH",
    beats: [
      {id:"dispatch-1", frameId:"EP01-V2-F05",
        narrative:[
          "The device was placed between them.",
          "Luabi did not promise truth.",
          "It promised that what was witnessed would not be reduced to a single channel.",
          "Body.",
          "Record.",
          "Witness.",
          "Environment.",
          "Device.",
          "Five ways to be wrong.",
          "Five ways to notice that authority had been wrong first."
        ]}
    ],
    directives:["OBSERVE","REMEMBER","RETURN"],
    directiveDelayed:"DO NOT CORRECT THE PAST",
    closingLine:"The Reporter accepts the device.",
    next:{label:"ACTIVATE LUABI", to:"transition"}
  },

  /* ---- TEMPORAL_TRANSITION ---- */
  transition: {
    label: "SCENE FOUR — TEMPORAL TRANSITION",
    beats: [
      {id:"transition-1", frameId:"EP01-V2-F06",
        narrative:[
          "The chamber did not disappear.",
          "It lost agreement with itself.",
          "Light separated from surface.",
          "Sound arrived before movement.",
          "The king's balcony appeared inside the council wall. A child's hand-sign crossed a sky that had not yet been built. Salt entered the air.",
          "Luabi searched for a stable horizon.",
          "It found March 19, 2226."
        ]}
    ],
    deviceBlock:["LOCATION CONFIDENCE: PARTIAL","TIME CONFIDENCE: HIGH","IMAGE INTEGRITY: DEGRADED","PROVENANCE CHAIN: ACTIVE"],
    next:{label:"ENTER FRIEDMANDORSTROP", to:"arrival"}
  },

  /* ---- FRIEDMANDORSTROP_ARRIVAL ---- */
  arrival: {
    label: "SCENE FIVE — ONE HOUR BEFORE",
    beats: [
      {id:"arrival-1", frameId:"EP01-V2-F07",
        narrative:[
          "One hour before the Cape Wipeout, nobody called it the Cape Wipeout.",
          "It was morning.",
          "Wind moved down from the mountains and found the harbor.",
          "Bread was being carried.",
          "Sensors were being checked.",
          "Children crossed between buildings built for research and buildings built because research had become a town.",
          "The laboratories did not sit outside ordinary life.",
          "Ordinary life had grown around them."
        ]}
    ],
    displayBlock:["MARCH 19, 2226","FRIEDMANDORSTROP","NEAR CAPE AGULHAS","APPROX. 08:00"],
    next:{label:"BEGIN THE PRE-WIPEOUT INVESTIGATION", to:"hub-pre"}
  }
};

/* ============ PRE-WIPEOUT INVESTIGATION HUB + ROUTES ============ */
const EP01_V2_PRE_ROUTES = {
  tallai:{
    key:"tallai", title:"FOLLOW TALLAI’S BREAD ROUTE", meta:"Witness evidence · environmental signal", frameId:"EP01-V2-F09", witness:"Tallai",
    narrative:[
      "Tallai crossed the settlement by memory as much as sight.",
      "Fresh bread came from the same door each morning. The smell gave the street an edge, then a direction, then a place in time.",
      "Q moved near the walls and under the railings, insect-small beside Tallai, pausing at vibrations no one else had named.",
      "Quartz followed with the patient scale of something built—or born—to carry more than anyone should have to lift.",
      "The route was ordinary.",
      "That was why Tallai noticed when the wind stopped behaving ordinarily."
    ],
    channels:{
      TALLAI:["Pale layered garments, veil, and care clothing move in the wind. Tallai is visibly nonhuman, calm, and attentive—not a generic human figure in robes."],
      Q:["Q clicks once, then again. The second signal does not match the street."],
      ENVIRONMENT:["Wind direction changes without a corresponding change in the visible weather system."]
    },
    ledgerLines:["WITNESS FOLLOWED: TALLAI","SIGNAL NOTED: ABNORMAL WIND RESPONSE"]
  },
  garden:{
    key:"garden", title:"ENTER THE GARDEN", meta:"Environmental evidence · research infrastructure", frameId:"EP01-V2-F08", witness:"Q",
    narrative:[
      "The garden was not decorative.",
      "It was a living laboratory large enough to contain competing ideas of life.",
      "Water channels divided experimental soil. Plants from different climates shared controlled edges. Researchers moved between instruments and living things. Civilians used the paths because the garden had become part of the town.",
      "Some systems measured growth.",
      "Some measured adaptation.",
      "Some had been built to observe beings that the official reports still called specimens.",
      "In one section, leaves turned before the wind reached them."
    ],
    channels:{
      LIFE:["The garden contains more than plants: habitats, small organisms, care stations, public paths, and traces of coexistence."],
      RESEARCH:["The institution records the garden through categories that do not fully describe the relationships inside it."],
      ENVIRONMENT:["A sensor flags motion without an agreed source. Q's signal arrives moments later."]
    },
    ledgerLines:["LOCATION EXAMINED: LIVING LABORATORY GARDEN"],
    contradiction:"SENSOR EVENT LOGGED / NO OFFICIAL ALERT ISSUED"
  },
  ada:{
    key:"ada", title:"FIND ADA", meta:"Body evidence · baseline record", frameId:"EP01-V2-F10", witness:"Ada",
    narrative:[
      "Ada arrived early.",
      "Eight o'clock was too early for the meeting and exactly right for the bread.",
      "She was a field commander here, but Friedmandorstrop had taught rank to live beside routine. She greeted the people who recognized her, checked the road, checked the facility, checked the time.",
      "KC was due at nine.",
      "Ada sent a message that did not require an answer:",
      "I'm here."
    ],
    channels:{
      BODY:["Ada is uninjured, alert, mobile, and operating normally."],
      ROUTINE:["Her actions establish a verifiable baseline immediately before the official record declares her dead."],
      KC:["KC is expected at 09:00. Episode One does not state that KC is already dead, and does not resolve KC's later fate."]
    },
    ledgerLines:["BODY BASELINE RECORDED: ADA ALIVE BEFORE BLAST"]
  }
};

/* ============ THE FIVE TICKS ============ */
const EP01_V2_TICKS = [
  {id:"tick-1", label:"TICK ONE — THE GARDEN MOVES FIRST", frameId:"EP01-V2-F11",
    narrative:["A row of leaves turns its pale underside to the glass.","The air has not reached them yet.","Q stops."],
    evidence:{ENVIRONMENT:["The wind gauge shows no change. The leaves have already moved."], Q:["Q's posture shifts before any instrument registers a cause."]}},
  {id:"tick-2", label:"TICK TWO — TALLAI STOPS", frameId:"EP01-V2-F12",
    narrative:["Tallai's bread remains warm through the wrapping.","The familiar street has lost one of its sounds.","Tallai turns toward the laboratory."],
    evidence:{WITNESS:["Tallai has crossed this route enough mornings to notice absence, not just presence."], "AMBIENT RECORD":["A sound the street normally carries is missing. No mandatory audio is required to understand this — the absence is the evidence."]}},
  {id:"tick-3", label:"TICK THREE — ADA WAITS", frameId:"EP01-V2-F13",
    narrative:["08:58.","Ada checks the road for KC.","A facility message arrives instead."],
    action:{label:"OPEN THE MESSAGE"}}
];

const EP01_V2_TICK_FOUR = {
  id:"tick-4", label:"TICK FOUR — THE RECORD ARRIVES BEFORE THE EVENT", frameId:"EP01-V2-F14",
  recordBlock:["FIELD COMMANDER ADA","STATUS: KIA","TIME OF DEATH: 09:00","RECORD STATUS: FILED"],
  narrative:[
    "The local clock still reads 08:58.",
    "Ada reads the message twice.",
    "She touches her own throat.",
    "Pulse.",
    "Breath.",
    "Warm skin.",
    "“Is this me?” she says."
  ],
  channels:{
    BODY:["Responsive. Breathing. Standing. Self-aware. No blast injuries observed."],
    RECORD:["KILLED IN ACTION. FILED. DISTRIBUTED. TREAT AS AUTHORITATIVE."]
  },
  preservePrompt:"What should Luabi preserve?",
  preserveChoices:[
    {key:"body", label:"PRESERVE THE BODY AGAINST THE RECORD", trust:"body-over-record"},
    {key:"record", label:"PRESERVE THE RECORD AGAINST THE BODY", trust:"record-over-body"},
    {key:"contradiction", label:"PRESERVE THE CONTRADICTION WITHOUT RESOLVING IT", trust:"contradiction-preserved", recommended:true}
  ],
  preserveNote:"Any of the three choices preserves history and continues the record. The third option — preserving the contradiction without resolving it — is the interpretive stance this record recommends, but your decision is recorded as given, not corrected.",
  ledgerContradiction:"OFFICIAL KIA RECORD / LIVING RESPONSIVE BODY",
  next:{label:"TICK FIVE", to:"tick-5"}
};

const EP01_V2_TICK_FIVE = {
  id:"tick-5", label:"TICK FIVE — RECOGNITION", frameId:"EP01-V2-F15",
  narrative:[
    "Ada looks up.",
    "Q's clicking becomes continuous.",
    "Tallai drops the bread.",
    "Luabi loses the horizon.",
    "For one second, every device in the record agrees that something is coming.",
    "No device agrees on what."
  ],
  displayBlock:["FIXED HISTORY APPROACHING","THIS EVENT CANNOT BE ALTERED"],
  next:{label:"WITNESS THE BLAST", to:"boom"}
};

/* ============ BOOM ============ */
const EP01_V2_BOOM = {
  id:"boom", label:"FIXED ANCHOR — CAPE WIPEOUT", frameId:"EP01-V2-F16",
  contentNote:"Content note: the next scene depicts a sudden, high-impact blast. A no-flash text-first version is used automatically when reduced motion is preferred.",
  narrative:[
    "White.",
    "Not light.",
    "Pressure.",
    "Glass becomes weather.",
    "The garden folds into dust.",
    "The harbor disappears behind the inside of the air.",
    "Luabi records eleven frames and trusts none of them.",
    "The Reporter is thrown beyond the edge of the image."
  ],
  deviceBlock:["IMAGE INTEGRITY: CRITICAL FAILURE","ORIENTATION: LOST","ENVIRONMENTAL CHANNEL: OVERLOAD","BODY CHANNELS: MULTIPLE / UNRESOLVED","PROVENANCE CHAIN: ACTIVE"],
  fieldNoteNotice:"FIELD REQUIREMENT DISCOVERED — AVAILABLE AFTER THE SCENE",
  next:{label:"THE RECORD REASSEMBLES", to:"hub-aftermath"}
};

/* ============ AFTERMATH INVESTIGATION ============ */
const EP01_V2_AFTERMATH_ROUTES = {
  "ada-body":{
    key:"ada-body", title:"ADA — BODY", meta:"Body evidence · unresolved status", frameId:"EP01-V2-F17", witness:"Ada",
    narrative:[
      "Ada wakes inside a record that still says she is dead.",
      "Pain arrives before location.",
      "Her body no longer answers as one thing.",
      "She tries to say KC's name.",
      "Dust enters her mouth.",
      "One hand moves.",
      "The record does not update."
    ],
    channels:{
      BODY:["Responsive movement. Interrupted speech. Severe injury. Survival status unresolved but present."],
      RECORD:["STATUS: KIA. NO REVISION FILED."]
    },
    contradiction:"THE RECORD REMAINS DEAD. THE BODY REMAINS ALIVE."
  },
  "tallai-witness":{
    key:"tallai-witness", title:"TALLAI — WITNESS", meta:"Care decision · rescue authority", frameId:null, witness:"Tallai",
    narrative:[
      "Tallai moves toward the place where the bread fell.",
      "The route is gone.",
      "The smell remains.",
      "Care begins with orientation: where is the body? What is still moving? What can be reached? What must be carried first?",
      "Tallai identifies life and orders extraction."
    ],
    doctrineUnlock:[1,2]
  },
  "q-detection":{
    key:"q-detection", title:"Q — DETECTION", meta:"Detection signal · record contradicted", frameId:"EP01-V2-F18", witness:"Q",
    narrative:[
      "Q reaches Ada before the official rescue systems do.",
      "The record identifies no survivor at the coordinates.",
      "Q registers heat, movement, breath, and response.",
      "Q clicks against the metal until Tallai turns."
    ],
    channels:{
      RECORD:["NO SURVIVOR LISTED AT THESE COORDINATES."],
      BODY:["Heat. Movement. Breath. Response."],
      "Q SIGNAL":["Detection precedes explanation."]
    },
    contradiction:"NO SURVIVOR IN RECORD / SURVIVOR DETECTED IN BODY",
    doctrineUnlock:[4,6]
  },
  "quartz-carrier":{
    key:"quartz-carrier", title:"QUARTZ — CARRIER", meta:"Rescue path · recovered object", frameId:"EP01-V2-F19", witness:"Quartz",
    narrative:[
      "Quartz enters through debris that will not support a smaller body.",
      "Near Ada, half-covered in dust, lies a child's teddy bear.",
      "Quartz lifts the bear first only long enough to clear it from the shattered edge.",
      "Then Quartz lifts Ada.",
      "Both are carried out of the place the record has already closed."
    ],
    doctrineUnlock:[3,5]
  },
  "luabi-device":{
    key:"luabi-device", title:"LUABI — DEVICE", meta:"Device evidence · capture under failure", frameId:null, witness:"The Reporter",
    narrative:[
      "Luabi cannot produce a clean image.",
      "It can preserve failure.",
      "Blur.",
      "Pressure.",
      "Orientation loss.",
      "Corrupted depth.",
      "A body signal where the official location file says there is none.",
      "The Reporter's hand enters one frame.",
      "The face does not."
    ],
    note:"This route explains why imperfect evidence must not be discarded, and why the limits of the capture itself require provenance."
  }
};

/* ============ RESCUE CONVERGENCE ============ */
const EP01_V2_RESCUE = {
  id:"rescue", label:"RESCUE CONVERGENCE", frameId:"EP01-V2-F20",
  narrative:[
    "Q finds the life signal.",
    "Tallai names the action.",
    "Quartz makes the action possible.",
    "Ada tries again to ask for KC.",
    "No answer is preserved.",
    "Tallai begins stabilization while they move.",
    "The destination is not shown clearly in the surviving fragment.",
    "Smoke closes behind them."
  ],
  destinationNote:"DESTINATION WITHHELD — VERIFIED FRAGMENT NOT YET RECOVERED",
  closingLine:"The first system to correct the record was not military.\nIt was care.",
  next:{label:"CONTINUE", to:"closing"}
};

/* ============ CLOSING — THE WIND TAKES THE RECORD ============ */
const EP01_V2_CLOSING = {
  id:"closing", label:"CLOSING — THE WIND TAKES THE RECORD", frameId:"EP01-V2-F21",
  narrative:[
    "Behind the rescue, the Cape continues to break.",
    "Debris enters the water.",
    "Damaged research material enters the water.",
    "Infection enters the water.",
    "Luabi restores one direction before it restores the image.",
    "Wind.",
    "The Reporter does not choose the next destination.",
    "The record begins to move."
  ],
  displayBlock:["WIND FIELD CHANGE DETECTED","ROUTE COMPULSION: ACTIVE","NEXT RECORD: CINDY"],
  finalLine:["The record said Ada died.","Ada lived long enough to refuse becoming the record again."],
  next:{label:"FIRST READING COMPLETE", action:"complete-first-reading"}
};

/* ============ UNRESOLVED (development-facing only; never shown in Story Mode) ============ */
const EP01_V2_UNRESOLVED = [
  "Rescue destination — withheld by design; not yet a repository fragment.",
  "KC's fate at the moment of Cape Wipeout — canon says “separated,” not confirmed killed; Episode One does not resolve this.",
  "Whether Quartz has locked pronouns — kept ungendered pending canon decision.",
  "Tallai / Talla — both forms attested; Episode Two+ should confirm a single preferred form.",
  "Ada's torn military record name variant (“Adanna K.” / “Kassey”) — not surfaced in Episode One; tracked in 01_canon/OPEN_QUESTIONS.md."
];
