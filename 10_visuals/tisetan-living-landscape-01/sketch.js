const UMADA_ENCOUNTERS = {
  garden: {
    title: "The Garden",
    status: "LOCKED",
    summary: "Coexistence and care before catastrophe; Tallai explores.",
    note: "Civilizational Ledger — era 4. This record is locked canon.",
    x: 0.23,
    y: 0.62
  },
  "dead-glass": {
    title: "Dead Glass",
    status: "LOCKED / EMERGING",
    summary: "Network, infrastructure, and information collapse.",
    note: "Civilizational Ledger — era 10. Some details remain emerging.",
    x: 0.53,
    y: 0.46
  },
  "cape-wipeout": {
    title: "Cape Wipeout",
    status: "LOCKED",
    summary: "March 19, 2226 near Cape Agulhas; MIC destroys the facility.",
    note: "Civilizational Ledger — era 5. Friedmandostorp is the locked settlement spelling.",
    x: 0.78,
    y: 0.56
  }
};

const encounterOrder = ["garden", "dead-glass", "cape-wipeout"];
let selectedId = null;
let reduceMotion = false;
let drift = 0;
let motes = [];

function setup() {
  const mount = document.getElementById("p5-mount");
  const canvas = createCanvas(Math.max(mount.clientWidth, 320), 560);
  canvas.parent(mount);
  pixelDensity(1);

  for (let i = 0; i < 70; i++) {
    motes.push({
      x: random(width),
      y: random(height * 0.8),
      r: random(0.7, 2.4),
      s: random(0.08, 0.35),
      phase: random(TWO_PI)
    });
  }

  reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motionToggle = document.getElementById("motion-toggle");
  motionToggle.checked = reduceMotion;
  motionToggle.addEventListener("change", (event) => {
    reduceMotion = event.target.checked;
    announce(reduceMotion ? "Reduced motion enabled." : "Landscape motion enabled.");
  });

  document.querySelectorAll("[data-encounter]").forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => openEncounter(button.dataset.encounter, true));
  });
}

function windowResized() {
  const mount = document.getElementById("p5-mount");
  resizeCanvas(Math.max(mount.clientWidth, 320), window.innerWidth < 700 ? 420 : 560);
}

function draw() {
  drawPaperSky();
  drawHorizon();
  drawDistantCity();
  drawInfrastructure();
  drawAtmosphere();
  drawSignals();
  drawForeground();

  if (!reduceMotion) drift += 0.0022;
}

function drawPaperSky() {
  background(24);
  noStroke();
  for (let y = 0; y < height; y += 5) {
    const shade = map(y, 0, height, 44, 14);
    fill(shade);
    rect(0, y, width, 5);
  }

  stroke(90, 55);
  strokeWeight(1);
  for (let i = 0; i < 80; i++) {
    const y = noise(i * 0.13, drift) * height * 0.72;
    const x = (i * 47 + noise(i, drift) * 130) % width;
    line(x, y, x + 18, y + 1);
  }
}

function drawHorizon() {
  noStroke();
  fill(12);
  beginShape();
  vertex(0, height * 0.67);
  for (let x = 0; x <= width; x += 24) {
    const n = noise(x * 0.004, 20 + drift);
    vertex(x, height * 0.6 + n * 50);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  stroke(180, 45);
  line(0, height * 0.66, width, height * 0.66);
}

function drawDistantCity() {
  const baseY = height * 0.64;
  noStroke();
  fill(28);

  const towers = [
    [0.08, 0.12, 0.045],
    [0.15, 0.2, 0.06],
    [0.34, 0.16, 0.05],
    [0.44, 0.25, 0.055],
    [0.61, 0.18, 0.045],
    [0.69, 0.31, 0.04],
    [0.88, 0.17, 0.05]
  ];

  towers.forEach(([xp, hp, wp], idx) => {
    const x = width * xp;
    const h = height * hp;
    const w = width * wp;
    rect(x, baseY - h, w, h);

    stroke(140, 55);
    strokeWeight(1);
    if (idx % 2 === 0) {
      line(x + w * 0.3, baseY - h, x + w * 0.3, baseY);
    }
    noStroke();
  });

  stroke(110, 80);
  strokeWeight(1);
  for (let x = 0; x < width; x += 58) {
    line(x, baseY - 6, x + 22, baseY - 6);
  }
}

function drawInfrastructure() {
  stroke(150, 70);
  strokeWeight(1.3);
  noFill();

  const yA = height * 0.72;
  const yB = height * 0.81;
  bezier(0, yA, width * 0.25, yA - 40, width * 0.58, yB + 10, width, yB - 30);

  stroke(95, 65);
  for (let x = 25; x < width; x += 85) {
    line(x, yA - 12, x + 18, yA + 20);
  }

  stroke(125, 55);
  line(width * 0.52, height * 0.26, width * 0.52, height * 0.65);
  line(width * 0.49, height * 0.28, width * 0.55, height * 0.28);
  line(width * 0.5, height * 0.35, width * 0.54, height * 0.35);
}

function drawAtmosphere() {
  noStroke();
  motes.forEach((mote, i) => {
    const motion = reduceMotion ? 0 : sin(frameCount * mote.s * 0.01 + mote.phase) * 12;
    const x = (mote.x + motion + i * 0.13) % width;
    const y = mote.y + (reduceMotion ? 0 : sin(frameCount * 0.003 + mote.phase) * 7);
    fill(220, 35 + (i % 3) * 12);
    circle(x, y, mote.r);
  });

  stroke(205, 25);
  for (let i = 0; i < 12; i++) {
    const y = height * (0.18 + i * 0.035);
    const offset = reduceMotion ? 0 : sin(drift * 20 + i) * 18;
    line(offset, y, width + offset, y + 8);
  }
}

function drawSignals() {
  Object.entries(UMADA_ENCOUNTERS).forEach(([id, encounter], index) => {
    const x = width * encounter.x;
    const y = height * encounter.y;
    const active = id === selectedId;
    const pulse = reduceMotion ? 0 : sin(frameCount * 0.045 + index) * 4;

    noFill();
    stroke(active ? 245 : 190, active ? 230 : 150);
    strokeWeight(active ? 2.4 : 1.4);
    circle(x, y, 20 + pulse);
    circle(x, y, 38 + pulse * 0.6);

    stroke(215, 110);
    line(x, y + 20, x, height * 0.88);

    noStroke();
    fill(active ? 245 : 205);
    circle(x, y, active ? 8 : 5);

    fill(235);
    textFont("Courier New");
    textSize(12);
    text(`${index + 1}`, x + 13, y - 14);
  });
}

function drawForeground() {
  noStroke();
  fill(8);
  beginShape();
  vertex(0, height * 0.88);
  for (let x = 0; x <= width; x += 30) {
    vertex(x, height * 0.86 + noise(x * 0.01, 60) * 38);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  stroke(85, 60);
  for (let x = 10; x < width; x += 42) {
    const h = 8 + noise(x) * 26;
    line(x, height * 0.92, x - 4, height * 0.92 - h);
  }
}

function mousePressed() {
  const threshold = 34;
  for (const [id, encounter] of Object.entries(UMADA_ENCOUNTERS)) {
    const x = width * encounter.x;
    const y = height * encounter.y;
    if (dist(mouseX, mouseY, x, y) <= threshold) {
      openEncounter(id, false);
      return false;
    }
  }
}

function keyPressed() {
  if (["1", "2", "3"].includes(key)) {
    openEncounter(encounterOrder[Number(key) - 1], true);
    return false;
  }

  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    const currentIndex = Math.max(0, encounterOrder.indexOf(selectedId));
    const delta = keyCode === RIGHT_ARROW ? 1 : -1;
    const next = (currentIndex + delta + encounterOrder.length) % encounterOrder.length;
    openEncounter(encounterOrder[next], true);
    return false;
  }

  if (keyCode === ENTER && selectedId) {
    document.getElementById("ledger-panel").focus();
    return false;
  }
}

function openEncounter(id, focusLedger) {
  const encounter = UMADA_ENCOUNTERS[id];
  if (!encounter) return;

  selectedId = id;
  document.getElementById("ledger-title").textContent = encounter.title;
  const status = document.getElementById("ledger-status");
  status.textContent = encounter.status;
  status.dataset.status = encounter.status;
  document.getElementById("ledger-summary").textContent = encounter.summary;
  document.getElementById("ledger-note").textContent = encounter.note;

  document.querySelectorAll("[data-encounter]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.encounter === id ? "true" : "false");
  });

  announce(`${encounter.title}. ${encounter.status}. ${encounter.summary}`);
  if (focusLedger) document.getElementById("ledger-panel").focus();
}

function announce(message) {
  document.getElementById("landscape-status").textContent = message;
}
