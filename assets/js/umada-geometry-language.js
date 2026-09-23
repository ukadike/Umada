/**
 * UMADA Geometry Language v0.1
 * Canon status: LOCKED
 *
 * Executable reference implementation for the Ancient Geometry System.
 * This is design-fiction software. It does not model established Ether physics.
 */

(function () {
  "use strict";

  const TAU = Math.PI * 2;

  const UMADA = Object.freeze({
    version: "0.1",
    rule: "Ether follows civic geometry.",
    geometries: Object.freeze({
      circle: Object.freeze({
        meaning: ["witness", "gathering", "continuity"],
        function: "civic-center",
        computationalRole: "shared_state"
      }),
      spiral: Object.freeze({
        meaning: ["memory", "archive", "healing"],
        function: "archive",
        computationalRole: "persistent_memory"
      }),
      radial: Object.freeze({
        meaning: ["ether-distribution", "observatory", "routes"],
        function: "network",
        computationalRole: "distributed_network"
      }),
      rings: Object.freeze({
        meaning: ["governance", "layered-access", "protected-knowledge"],
        function: "access",
        computationalRole: "permission_layers"
      }),
      threshold: Object.freeze({
        meaning: ["authority", "decision", "transition"],
        function: "gate",
        computationalRole: "state_transition"
      })
    })
  });

  const DEFAULT_DISTRICT = Object.freeze({
    type: "eco-civic-district",
    center: { geometry: "circle", purpose: "witness-plaza" },
    rings: [
      { radius: 0.18, access: "witness" },
      { radius: 0.31, access: "public" },
      { radius: 0.43, access: "council" },
      { radius: 0.55, access: "custodial" },
      { radius: 0.68, access: "sanctum" }
    ],
    radialRoutes: 12,
    etherNodes: 6,
    archive: { geometry: "spiral", angle: 210, radius: 0.58 },
    gates: [
      { axis: "north", type: "ceremonial-entry" },
      { axis: "south", type: "threshold-of-return" }
    ]
  });

  function accessLevel(normalizedDistance) {
    if (normalizedDistance < 0.18) return "witness";
    if (normalizedDistance < 0.31) return "public";
    if (normalizedDistance < 0.43) return "council";
    if (normalizedDistance < 0.55) return "custodial";
    if (normalizedDistance < 0.68) return "sanctum";
    return "outside";
  }

  function permissionWeight(level) {
    return ({
      witness: 1,
      public: 1,
      council: 0.85,
      custodial: 0.65,
      sanctum: 0.45,
      outside: 0
    })[level] ?? 0;
  }

  function distributeEther(node, destination) {
    const available = Math.max(0, Number(node.availableEther) || 0);
    const need = Math.max(0, Number(destination.energyNeed) || 0);
    return Math.min(
      available,
      need * permissionWeight(destination.accessLevel)
    );
  }

  function interpretSequence(sequence) {
    const roles = {
      SPIRAL: "retrieve memory",
      CIRCLE: "bring into public witness",
      RADIAL: "distribute through the network",
      RINGS: "determine authorized access",
      THRESHOLD: "permit or reject transition"
    };

    return sequence
      .map(token => String(token).trim().toUpperCase())
      .map(token => roles[token] || "unknown operation");
  }

  function pointAt(cx, cy, radius, angle) {
    return {
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius
    };
  }

  function drawCircle(ctx, cx, cy, radius) {
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, TAU);
    ctx.stroke();
  }

  function drawRings(ctx, cx, cy, baseRadius, rings) {
    rings.forEach(ring => {
      drawCircle(ctx, cx, cy, baseRadius * ring.radius);
    });
  }

  function drawRadialField(ctx, cx, cy, radius, count) {
    for (let i = 0; i < count; i += 1) {
      const angle = -Math.PI / 2 + (TAU * i) / count;
      const p = pointAt(cx, cy, radius, angle);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
  }

  function drawEtherNodes(ctx, cx, cy, radius, count) {
    for (let i = 0; i < count; i += 1) {
      const angle = -Math.PI / 2 + (TAU * i) / count;
      const p = pointAt(cx, cy, radius, angle);

      ctx.beginPath();
      ctx.arc(p.x, p.y, 10, 0, TAU);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(p.x - 6, p.y);
      ctx.lineTo(p.x + 6, p.y);
      ctx.moveTo(p.x, p.y - 6);
      ctx.lineTo(p.x, p.y + 6);
      ctx.stroke();
    }
  }

  function drawSpiral(ctx, cx, cy, maxRadius, turns = 3.5) {
    ctx.beginPath();
    const steps = 180;
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      const angle = turns * TAU * t;
      const radius = maxRadius * t;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  function drawThreshold(ctx, cx, cy, radius) {
    const gateHalf = radius * 0.12;
    ctx.beginPath();
    ctx.moveTo(cx, cy - radius);
    ctx.lineTo(cx, cy + radius);
    ctx.stroke();

    [cy - radius, cy + radius].forEach(y => {
      ctx.strokeRect(cx - gateHalf, y - gateHalf / 2, gateHalf * 2, gateHalf);
    });
  }

  function drawWitnessCenter(ctx, cx, cy, radius) {
    drawCircle(ctx, cx, cy, radius);
    ctx.beginPath();
    ctx.arc(cx, cy, 4, 0, TAU);
    ctx.fill();
  }

  function etherPosition(progress, cx, cy, radius, angle) {
    const distance = (progress % 1) * radius;
    return pointAt(cx, cy, distance, angle);
  }

  function drawDistrict(canvas, options = {}) {
    if (!canvas || !canvas.getContext) return null;

    const ctx = canvas.getContext("2d");
    const district = options.district || DEFAULT_DISTRICT;
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) * 0.43;

    ctx.clearRect(0, 0, width, height);
    ctx.save();

    ctx.lineWidth = 1.4;
    ctx.strokeStyle = options.stroke || "#20201d";
    ctx.fillStyle = options.stroke || "#20201d";

    drawRings(ctx, cx, cy, radius, district.rings);
    drawRadialField(ctx, cx, cy, radius * 0.72, district.radialRoutes);
    drawEtherNodes(ctx, cx, cy, radius * 0.60, district.etherNodes);
    drawThreshold(ctx, cx, cy, radius * 0.78);
    drawWitnessCenter(ctx, cx, cy, radius * 0.12);

    const archiveAngle = (district.archive.angle * Math.PI) / 180;
    const archiveCenter = pointAt(
      cx,
      cy,
      radius * district.archive.radius,
      archiveAngle
    );
    drawSpiral(ctx, archiveCenter.x, archiveCenter.y, radius * 0.12);

    if (typeof options.progress === "number") {
      for (let i = 0; i < district.radialRoutes; i += 1) {
        const angle = -Math.PI / 2 + (TAU * i) / district.radialRoutes;
        const p = etherPosition(
          (options.progress + i / district.radialRoutes) % 1,
          cx,
          cy,
          radius * 0.72,
          angle
        );
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3.2, 0, TAU);
        ctx.fill();
      }
    }

    ctx.restore();

    return {
      center: { x: cx, y: cy },
      radius,
      district
    };
  }

  function animateDistrict(canvas, options = {}) {
    let frame = 0;
    let running = true;

    function tick() {
      if (!running) return;
      drawDistrict(canvas, {
        ...options,
        progress: (frame % 240) / 240
      });
      frame += 1;
      window.requestAnimationFrame(tick);
    }

    window.requestAnimationFrame(tick);

    return {
      stop() { running = false; }
    };
  }

  window.UmadaGeometry = Object.freeze({
    UMADA,
    DEFAULT_DISTRICT,
    accessLevel,
    permissionWeight,
    distributeEther,
    interpretSequence,
    drawDistrict,
    animateDistrict
  });
})();
