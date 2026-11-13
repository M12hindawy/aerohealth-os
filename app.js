/**
 * AeroHealth OS - Autonomous Astronaut Health & Telemetry System
 * Author: Hindawy (Engineering Student Researcher)
 * Team: Nexora by Hindawy (VitalOrbit)
 * NASA Space Apps Cairo 2026
 */

// Embedded NASA Empirical & HRP Standard Measures Data
const NASA_HRP_DATA = {
  crew: [
    { id: "ASTRO-01", name: "Sarah Vance", role: "Commander & Pilot", age: 39, blood: "O+", vo2: 52.4, radiationCumul: 94.2, streak: 14, xp: 420, level: 4 },
    { id: "ASTRO-02", name: "Alex Chen", role: "Flight Engineer", age: 34, blood: "A+", vo2: 55.1, radiationCumul: 88.6, streak: 12, xp: 310, level: 3 },
    { id: "ASTRO-03", name: "Dr. Maya Patel", role: "Science Officer / MD", age: 42, blood: "B+", vo2: 49.8, radiationCumul: 91.0, streak: 15, xp: 480, level: 4 }
  ],
  environments: {
    iss_leo: { name: "ISS (Low Earth Orbit)", latency: "0.2s", comms: "Real-time Ground Comms", radBase: 0.52, autonomous: false },
    lunar_gateway: { name: "Lunar Gateway (Artemis)", latency: "1.3s", comms: "Near Real-time Comms", radBase: 1.25, autonomous: false },
    mars_transit: { name: "Mars Deep Space Transit", latency: "21m 00s", comms: "Autonomous Edge CDS", radBase: 1.84, autonomous: true }
  },
  organs: {
    brain: {
      title: "Neuro-Cognitive & Sleep Architecture",
      badge: "OPTIMAL",
      badgeClass: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      icon: "fa-solid fa-brain text-cyan-400",
      why: "Microgravity and isolated environments disrupt circadian pacemakers, causing sleep fragmentation and cognitive decline.",
      hazard: "Hazard 2: Isolation & Confinement (High cognitive load & psychological stress).",
      metric: "PVT Reaction Speed: 228 ms (Nominal Alertness)",
      actionText: "Run 3-Min PVT Alertness Test",
      actionType: "pvt",
      frisenGrade: 0,
      rnflUm: 92
    },
    eyes: {
      title: "Neuro-Ocular System (SANS)",
      badge: "MONITOR",
      badgeClass: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      icon: "fa-solid fa-eye text-amber-400",
      why: "Microgravity cephalic fluid shift elevates intracranial pressure, causing optic disc edema, globe flattening, and hyperopic vision shift.",
      hazard: "Hazard 4: Altered Gravity Fields (Headward fluid redistribution).",
      metric: "Intraocular Pressure: 18.4 mmHg | Optic Sheath: 5.4 mm",
      actionText: "Run Ocular Ultrasound Scan",
      actionType: "tonometry",
      frisenGrade: 1,
      rnflUm: 118
    },
    heart: {
      title: "Cardiovascular & Fluid Dynamics",
      badge: "NOMINAL",
      badgeClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      icon: "fa-solid fa-heart-pulse text-red-400",
      why: "In 0G, blood shifts upward. The heart remodels with left ventricular mass decrease, risking post-landing orthostatic intolerance.",
      hazard: "Hazard 4: Altered Gravity Fields (Cardiovascular deconditioning).",
      metric: "Stroke Volume: 78 mL | Cardiac Output: 5.7 L/min",
      actionText: "Run 12-Lead Electrocardiogram",
      actionType: "ecg",
      frisenGrade: 0,
      rnflUm: 90
    },
    lungs: {
      title: "Pulmonary & Cabin Atmosphere",
      badge: "OPTIMAL",
      badgeClass: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      icon: "fa-solid fa-lungs text-cyan-400",
      why: "Microgravity alters ventilation-perfusion matching. Cabin CO2 accumulation causes headaches and acidosis.",
      hazard: "Hazard 5: Hostile Closed Environment (Cabin CO2 2.8 mmHg, O2 21.1%).",
      metric: "Ventilation Rate: 14 breaths/min | SpO2: 98.5%",
      actionText: "Recalibrate Cabin CO2 Scrubber",
      actionType: "scrubber",
      frisenGrade: 0,
      rnflUm: 90
    },
    spine: {
      title: "Musculoskeletal: Spinal Column",
      badge: "OBSERVED",
      badgeClass: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      icon: "fa-solid fa-bone text-purple-400",
      why: "Intervertebral discs expand without gravity, elongating spine by ~5-7 cm (~2 inches), predisposing to disc herniation.",
      hazard: "Hazard 4: Altered Gravity (Zero-G Spinal Elongation).",
      metric: "Spinal Length: +4.8 cm over Earth Baseline",
      actionText: "Prescribe Spinal Flexion Routine",
      actionType: "spine",
      frisenGrade: 0,
      rnflUm: 90
    },
    muscles: {
      title: "Musculoskeletal: Bone & Calves",
      badge: "ACTIVE",
      badgeClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      icon: "fa-solid fa-dumbbell text-emerald-400",
      why: "Absence of ground reaction forces leads to 1.2% monthly bone mineral loss and calf muscle fiber atrophy.",
      hazard: "Hazard 4: Altered Gravity Fields (Bone resorption & muscular wasting).",
      metric: "ARED Resistance Load: 120 kg completed today",
      actionText: "Log ARED Squat/Deadlift Session",
      actionType: "ared",
      frisenGrade: 0,
      rnflUm: 90
    }
  },
  quests: [
    { id: "q1", title: "ARED Resistive Heavy Squats", category: "Musculoskeletal", duration: "45 min", xp: 150, completed: true },
    { id: "q2", title: "T2 Treadmill Cardiovascular Cardio", category: "Cardiovascular", duration: "30 min", xp: 100, completed: true },
    { id: "q3", title: "Chibis Lower Body Negative Pressure (LBNP)", category: "Neuro-Ocular (SANS)", duration: "20 min", xp: 80, completed: false },
    { id: "q4", title: "PVT-B Cognitive Vigilance Test", category: "Behavioral Health", duration: "3 min", xp: 50, completed: true },
    { id: "q5", title: "750ml Electrolyte Loading Pack", category: "Hydration", duration: "5 min", xp: 40, completed: false }
  ]
};

// Global Application State
let activeCrewIndex = 0;
let activeEnvironment = "mars_transit";
let activeScenario = "nominal";
let activeOrganKey = "eyes";
let currentDataSource = "simulation";
let ecgChartInstance = null;
let trendChartInstance = null;
let currentQuests = JSON.parse(JSON.stringify(NASA_HRP_DATA.quests));

// PVT Test Interactive Engine State
let pvtState = "idle"; // idle | waiting | active | result
let pvtStartTime = 0;
let pvtInterval = null;
let pvtTimeout = null;

// Mission Elapsed Time Timer
function initMissionClock() {
  let seconds = 19;
  let minutes = 42;
  let hours = 8;
  let days = 142;

  setInterval(() => {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
        if (hours >= 24) {
          hours = 0;
          days++;
        }
      }
    }
    const pad = (n) => String(n).padStart(2, '0');
    const clockEl = document.getElementById("met-clock");
    if (clockEl) {
      clockEl.innerText = `MET ${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
    }
  }, 1000);
}

// -------------------------------------------------------------------
// INTERACTIVE NASA PVT-B REACTION TIME TEST (Unique Feature for Judges)
// -------------------------------------------------------------------
function handlePvtClick() {
  const box = document.getElementById("pvt-box");
  const promptEl = document.getElementById("pvt-prompt");
  const counterEl = document.getElementById("pvt-counter");
  const resultEl = document.getElementById("pvt-result");
  const scoreText = document.getElementById("pvt-score-text");
  const evalText = document.getElementById("pvt-eval-text");

  if (pvtState === "idle" || pvtState === "result") {
    // Start Test: Wait for flash
    pvtState = "waiting";
    promptEl.classList.remove("hidden");
    counterEl.classList.add("hidden");
    resultEl.classList.add("hidden");
    promptEl.innerHTML = `
      <span class="text-amber-400 text-sm font-bold block animate-pulse">
        <i class="fa-solid fa-hourglass-half mr-1"></i> WAIT FOR RED FLASH... DO NOT CLICK!
      </span>
      <span class="text-slate-500 text-[10px]">Testing Psychomotor Attention Threshold</span>
    `;
    box.className = "h-24 w-full rounded-xl bg-slate-950 border-2 border-amber-500/50 flex flex-col items-center justify-center cursor-pointer transition select-none";

    // Random delay between 1.8s and 4.2s
    const delay = Math.floor(Math.random() * 2400) + 1800;
    pvtTimeout = setTimeout(() => {
      if (pvtState === "waiting") {
        pvtState = "active";
        pvtStartTime = performance.now();
        promptEl.classList.add("hidden");
        counterEl.classList.remove("hidden");
        box.className = "h-24 w-full rounded-xl bg-red-950/70 border-2 border-red-500 flex flex-col items-center justify-center cursor-pointer transition select-none shadow-[0_0_20px_rgba(239,68,68,0.5)]";

        pvtInterval = setInterval(() => {
          const elapsed = Math.floor(performance.now() - pvtStartTime);
          counterEl.innerText = `${elapsed} ms`;
        }, 10);
      }
    }, delay);

  } else if (pvtState === "waiting") {
    // False Start! Clicked too early
    clearTimeout(pvtTimeout);
    pvtState = "idle";
    promptEl.classList.remove("hidden");
    counterEl.classList.add("hidden");
    promptEl.innerHTML = `
      <span class="text-red-400 text-sm font-bold block"><i class="fa-solid fa-triangle-exclamation mr-1"></i> FALSE START! Clicked too early.</span>
      <span class="text-slate-400 text-[10px]">Click again to restart test</span>
    `;
    box.className = "h-24 w-full rounded-xl bg-slate-950 border border-red-500/60 flex flex-col items-center justify-center cursor-pointer transition select-none";

  } else if (pvtState === "active") {
    // Success! Measured Reaction Time
    clearInterval(pvtInterval);
    const reactionTime = Math.floor(performance.now() - pvtStartTime);
    pvtState = "result";
    counterEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreText.innerText = `${reactionTime} ms`;

    // Clinical Evaluation against NASA HRP Guidelines
    if (reactionTime < 250) {
      scoreText.className = "text-emerald-400 font-mono text-xl font-bold block";
      evalText.innerText = "Optimal Alertness · 0 Lapses (Flight Surgeon Clearance OK)";
      evalText.className = "text-[10px] text-emerald-400 font-medium";
      addExperience(50, "Optimal Cognitive Vigilance");
    } else if (reactionTime <= 380) {
      scoreText.className = "text-amber-400 font-mono text-xl font-bold block";
      evalText.innerText = "Nominal Baseline · Mild Circadian Slump (Acceptable)";
      evalText.className = "text-[10px] text-amber-400 font-medium";
      addExperience(30, "Completed Cognitive Test");
    } else {
      scoreText.className = "text-red-400 font-mono text-xl font-bold block animate-pulse";
      evalText.innerText = "ATTENTIONAL LAPSE DETECTED (>380ms) · Enforce 2h Sleep Opportunity";
      evalText.className = "text-[10px] text-red-400 font-bold";
    }

    box.className = "h-24 w-full rounded-xl bg-slate-950 border-2 border-cyan-500/60 flex flex-col items-center justify-center cursor-pointer transition select-none";
  }
}

// -------------------------------------------------------------------
// NASA EMPIRICAL DATASETS SWITCHER (Twins Study / Curiosity / SANS)
// -------------------------------------------------------------------
function switchDataSource(sourceKey) {
  currentDataSource = sourceKey;
  const banner = document.getElementById("empirical-data-banner");
  const ebAccession = document.getElementById("eb-accession");
  const ebTitle = document.getElementById("eb-title");
  const ebSummary = document.getElementById("eb-summary");

  const btnSim = document.getElementById("btn-ds-sim");
  const btnTwins = document.getElementById("btn-ds-twins");
  const btnCuriosity = document.getElementById("btn-ds-curiosity");
  const btnSans = document.getElementById("btn-ds-sans");

  // Reset button classes
  [btnSim, btnTwins, btnCuriosity, btnSans].forEach(btn => {
    btn.className = "px-2.5 py-1 rounded text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition";
  });

  const hrVal = document.getElementById("hr-value");
  const bpVal = document.getElementById("bp-value");
  const radVal = document.getElementById("rad-value");
  const radStatus = document.getElementById("rad-status");
  const tempVal = document.getElementById("temp-value");
  const readinessVal = document.getElementById("readiness-value");

  if (sourceKey === "simulation") {
    btnSim.className = "px-2.5 py-1 rounded text-xs font-bold bg-cyan-600 text-slate-950 transition";
    banner.classList.add("hidden");
    simulateScenario('nominal');
    return;
  }

  banner.classList.remove("hidden");

  if (sourceKey === "twins") {
    btnTwins.className = "px-2.5 py-1 rounded text-xs font-bold bg-cyan-600 text-slate-950 transition";
    ebAccession.innerText = "NASA OSDR-379 / Science 2019";
    ebTitle.innerText = "NASA Twins Study (Scott Kelly 340-Day Flight vs. Mark Kelly Ground Control)";
    ebSummary.innerText = "Empirical biomedical findings: +24% carotid artery thickening, telomere dynamics, +38 µm RNFL optic disc swelling, and -11.8% post-flight cognitive speed decrease.";
    
    hrVal.innerText = "78";
    bpVal.innerText = "128/84";
    radVal.innerText = "0.48";
    radStatus.innerText = "ISS Cumulative: 146.3 mSv";
    tempVal.innerText = "37.3";
    readinessVal.innerText = "88";
    selectOrgan('eyes');

  } else if (sourceKey === "curiosity") {
    btnCuriosity.className = "px-2.5 py-1 rounded text-xs font-bold bg-cyan-600 text-slate-950 transition";
    ebAccession.innerText = "MSL RAD PDS Archive / Science 2013";
    ebTitle.innerText = "Mars Science Laboratory RAD Deep Space Cruise Measurements";
    ebSummary.innerText = "Empirical interplanetary cruise dataset: Average GCR dose 1.84 ± 0.30 mSv/day across 253 days, totaling 466 mSv roundtrip (66.2% of career cancer limit).";

    radVal.innerText = "1.84";
    radStatus.innerText = "Curiosity GCR Cruise Baseline";
    readinessVal.innerText = "92";
    selectOrgan('muscles');

  } else if (sourceKey === "sans_study") {
    btnSans.className = "px-2.5 py-1 rounded text-xs font-bold bg-cyan-600 text-slate-950 transition";
    ebAccession.innerText = "NASA HRP SANS Task Force";
    ebTitle.innerText = "Long-Duration Spaceflight Neuro-Ocular Clinical Cohort";
    ebSummary.innerText = "Clinical findings across ISS long-duration crew: 70% demonstrate cephalic fluid shift, Frisén Grade 1-2 papilledema, and average hyperopic refractive shift of +0.75 Diopters.";

    simulateScenario('sans');
    selectOrgan('eyes');
  }
}

// -------------------------------------------------------------------
// INITIALIZE CHARTS (Chart.js Engine)
// -------------------------------------------------------------------
function initCharts() {
  const ecgCtx = document.getElementById("ecgChart").getContext("2d");
  const ecgPoints = [];
  const ecgLabels = [];
  const baselinePattern = [0, 0, 0.1, 0.15, 0.05, 0, -0.15, 1.2, -0.4, 0, 0.25, 0.3, 0.1, 0];
  
  for (let i = 0; i < 60; i++) {
    ecgLabels.push("");
    ecgPoints.push(baselinePattern[i % baselinePattern.length] + (Math.random() * 0.05 - 0.025));
  }

  ecgChartInstance = new Chart(ecgCtx, {
    type: 'line',
    data: {
      labels: ecgLabels,
      datasets: [{
        label: 'Lead II ECG (mV)',
        data: ecgPoints,
        borderColor: '#38bdf8',
        borderWidth: 1.8,
        tension: 0.3,
        pointRadius: 0,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      scales: {
        x: { display: false },
        y: {
          min: -0.6,
          max: 1.5,
          grid: { color: 'rgba(56, 189, 248, 0.1)' },
          ticks: { color: '#64748b', font: { size: 9 } }
        }
      },
      plugins: { legend: { display: false } }
    }
  });

  // Dynamic ECG Heartbeat streaming
  let patternIdx = 0;
  setInterval(() => {
    let nextVal = baselinePattern[patternIdx % baselinePattern.length] + (Math.random() * 0.04 - 0.02);
    
    if (activeScenario === "arrhythmia" && Math.random() < 0.2) {
      nextVal = (Math.random() * 1.4) - 0.5;
    }

    ecgPoints.shift();
    ecgPoints.push(nextVal);
    ecgChartInstance.update('none');
    patternIdx++;
  }, 100);

  // 2. Longitudinal Trend Chart (Radiation vs Sleep)
  const trendCtx = document.getElementById("trendChart").getContext("2d");
  trendChartInstance = new Chart(trendCtx, {
    type: 'bar',
    data: {
      labels: ['Sol 136', 'Sol 137', 'Sol 138', 'Sol 139', 'Sol 140', 'Sol 141', 'Sol 142 (Today)'],
      datasets: [
        {
          type: 'line',
          label: 'Sleep / Alertness Score (%)',
          data: [92, 90, 88, 91, 86, 94, 95],
          borderColor: '#10b981',
          backgroundColor: 'transparent',
          borderWidth: 2,
          yAxisID: 'y1',
          tension: 0.3,
          pointRadius: 3
        },
        {
          type: 'bar',
          label: 'Radiation Dose (mSv/d)',
          data: [1.82, 1.85, 1.88, 1.80, 1.95, 1.83, 1.84],
          backgroundColor: 'rgba(168, 85, 247, 0.4)',
          borderColor: '#a855f7',
          borderWidth: 1,
          yAxisID: 'y',
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#94a3b8', font: { size: 10 } }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: { display: true, text: 'Radiation (mSv)', color: '#c084fc', font: { size: 10 } },
          min: 0,
          max: 6,
          grid: { color: 'rgba(168, 85, 247, 0.1)' },
          ticks: { color: '#c084fc', font: { size: 9 } }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: { display: true, text: 'Alertness (%)', color: '#34d399', font: { size: 10 } },
          min: 60,
          max: 100,
          grid: { drawOnChartArea: false },
          ticks: { color: '#34d399', font: { size: 9 } }
        }
      },
      plugins: {
        legend: { labels: { color: '#cbd5e1', font: { size: 10 }, boxWidth: 12 } }
      }
    }
  });
}

// -------------------------------------------------------------------
// SELECT AND DISPLAY ORGAN ON BODY MAP
// -------------------------------------------------------------------
function selectOrgan(organKey) {
  activeOrganKey = organKey;
  const organ = NASA_HRP_DATA.organs[organKey];
  if (!organ) return;

  document.querySelectorAll('.body-hotspot').forEach(el => {
    el.classList.remove('stroke-white', 'stroke-2');
  });
  const activeNode = document.getElementById(`node-${organKey}`);
  if (activeNode) {
    activeNode.setAttribute('stroke', '#ffffff');
    activeNode.setAttribute('stroke-width', '3');
  }

  document.getElementById("detail-organ-title").innerHTML = `<i class="${organ.icon}"></i> ${organ.title}`;
  const badgeEl = document.getElementById("detail-organ-badge");
  badgeEl.innerText = organ.badge;
  badgeEl.className = `px-2 py-0.5 rounded text-[10px] font-bold ${organ.badgeClass}`;

  document.getElementById("detail-why").innerHTML = `<strong class="text-cyan-400">Why Exam Needed:</strong> ${organ.why}`;
  document.getElementById("detail-hazards").innerHTML = `<strong class="text-slate-200">Spaceflight Hazard:</strong> ${organ.hazard}`;
  document.getElementById("detail-metric").innerText = organ.metric;
  document.getElementById("detail-action-btn").innerText = organ.actionText;

  // Update Frisén scale bar
  const frisenGradeEl = document.getElementById("frisen-grade");
  const frisenBar = document.getElementById("frisen-bar");
  if (frisenGradeEl && frisenBar) {
    if (organKey === "eyes") {
      frisenGradeEl.innerText = "Grade 1 (Very Early Swelling · 118µm)";
      frisenBar.style.width = "35%";
      frisenBar.className = "bg-gradient-to-r from-emerald-400 to-amber-400 h-1.5";
    } else {
      frisenGradeEl.innerText = "Grade 0 (Normal Optic Disc · 90µm)";
      frisenBar.style.width = "10%";
      frisenBar.className = "bg-emerald-400 h-1.5";
    }
  }
}

// Execute Interactive Clinical Action
function executeOrganAction() {
  const organ = NASA_HRP_DATA.organs[activeOrganKey];
  if (!organ) return;

  const btn = document.getElementById("detail-action-btn");
  const origText = btn.innerText;
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> Running Diagnostic...`;
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 mr-1"></i> Completed & Logged`;
    addExperience(30, `Completed ${organ.title} assessment`);

    setTimeout(() => {
      btn.innerText = origText;
      btn.disabled = false;
    }, 2000);
  }, 1200);
}

// -------------------------------------------------------------------
// SCENARIO ANOMALY SIMULATOR (Judges Testbed)
// -------------------------------------------------------------------
function simulateScenario(scenario) {
  activeScenario = scenario;
  const hrVal = document.getElementById("hr-value");
  const hrStatus = document.getElementById("hr-status");
  const bpVal = document.getElementById("bp-value");
  const radVal = document.getElementById("rad-value");
  const radStatus = document.getElementById("rad-status");
  const readinessVal = document.getElementById("readiness-value");
  const readinessBadge = document.getElementById("readiness-badge");
  
  const triageBadge = document.getElementById("ai-triage-badge");
  const triageTitle = document.getElementById("triage-title");
  const triageDesc = document.getElementById("triage-description");
  const triageSteps = document.getElementById("triage-steps");

  const frisenGradeEl = document.getElementById("frisen-grade");
  const frisenBar = document.getElementById("frisen-bar");

  if (scenario === 'nominal') {
    hrVal.innerText = "74";
    hrStatus.innerText = "Sinus Rhythm (Nominal)";
    hrStatus.className = "text-[10px] text-emerald-400";
    bpVal.innerText = "118/76";
    radVal.innerText = "1.84";
    radStatus.innerText = "MSL RAD Baseline (Safe)";
    readinessVal.innerText = "96";
    readinessVal.className = "text-xl font-bold font-mono text-emerald-400";
    readinessBadge.innerText = "GREEN · Mission Capable";
    readinessBadge.className = "text-[10px] text-emerald-400 font-semibold";

    triageBadge.innerText = "NOMINAL";
    triageBadge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    triageTitle.innerText = "Standard Maintenance Protocol";
    triageDesc.innerText = "All physiological parameters are within NASA HRP nominal operating bounds. Fluid shift adaptation is proceeding nominally.";
    triageSteps.innerHTML = `
      <li>Complete scheduled 45 min ARED loading exercise.</li>
      <li>Consume 750ml electrolyte fluid packet before 16:00 UTC.</li>
      <li>Maintain sleep schedule at 22:00 UTC (8h target).</li>
    `;
    selectOrgan('eyes');
  } 
  else if (scenario === 'sans') {
    // SANS Syndrome / Cephalic fluid shift
    hrVal.innerText = "82";
    bpVal.innerText = "138/88";
    readinessVal.innerText = "78";
    readinessVal.className = "text-xl font-bold font-mono text-amber-400";
    readinessBadge.innerText = "YELLOW · SANS Advisory";
    readinessBadge.className = "text-[10px] text-amber-400 font-semibold";

    triageBadge.innerText = "CAUTION: SANS ELEVATION";
    triageBadge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30";
    triageTitle.innerText = "Cephalic Fluid Pressure Alert";
    triageDesc.innerText = "Microgravity cephalic fluid redistribution has induced elevated Intraocular Pressure (25.8 mmHg) and Frisén Grade 2 optic disc swelling.";
    triageSteps.innerHTML = `
      <li class="text-amber-300">Initiate 25-min Chibis Lower Body Negative Pressure (LBNP) session (-35 mmHg).</li>
      <li>Perform Fundoscopy / Optical Coherence Tomography (OCT) scan.</li>
      <li>Switch to hyperopic vision-correction glasses (+0.75 D) for EVA tasks.</li>
    `;
    if (frisenGradeEl && frisenBar) {
      frisenGradeEl.innerText = "Grade 2 (Early Papilledema · 138µm)";
      frisenBar.style.width = "55%";
      frisenBar.className = "bg-amber-400 h-1.5";
    }
    selectOrgan('eyes');
  } 
  else if (scenario === 'radiation_flare') {
    // Solar Particle Event (SPE) Flare
    radVal.innerText = "18.4";
    radStatus.innerText = "SPE ALERT: Solar Storm Active!";
    radStatus.className = "text-[10px] text-red-400 font-bold animate-pulse";
    readinessVal.innerText = "64";
    readinessVal.className = "text-xl font-bold font-mono text-red-400";
    readinessBadge.innerText = "RED · Radiation Alert";
    readinessBadge.className = "text-[10px] text-red-400 font-semibold";

    triageBadge.innerText = "CRITICAL: RADIATION SPIKE";
    triageBadge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse";
    triageTitle.innerText = "Solar Particle Event (SPE) Triage";
    triageDesc.innerText = "External radiation sensors detect G4 Solar Proton Event exceeding safe threshold (18.4 mSv/day). Immediate radiation shielding protocol mandatory.";
    triageSteps.innerHTML = `
      <li class="text-red-300 font-bold">ALL CREW: Retreat immediately to Storm Shelter (Water Wall / Orion Hab Core).</li>
      <li class="text-red-300">Administer prophylactic radioprotectant antioxidant oral regimen.</li>
      <li>Halt all EVAs and unshielded rover operations until solar flux normalizes.</li>
    `;
  } 
  else if (scenario === 'arrhythmia') {
    // Acute Fatigue & Arrhythmia (PVCs)
    hrVal.innerText = "108";
    hrStatus.innerText = "Premature Ventricular Contractions (PVC)";
    hrStatus.className = "text-[10px] text-red-400 font-bold";
    bpVal.innerText = "102/65";
    readinessVal.innerText = "71";
    readinessVal.className = "text-xl font-bold font-mono text-amber-400";
    readinessBadge.innerText = "YELLOW · Cardiac Deconditioning";
    readinessBadge.className = "text-[10px] text-amber-400 font-semibold";

    triageBadge.innerText = "WARNING: CARDIAC IRREGULARITY";
    triageBadge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30";
    triageTitle.innerText = "Arrhythmia & Sleep Debt Detected";
    triageDesc.innerText = "Continuous Lead II ECG telemetry identifies runs of ventricular ectopy paired with 3-night cumulative sleep debt (total 11.2 hours).";
    triageSteps.innerHTML = `
      <li class="text-amber-300">Restructure mission task schedule: Enforce 2-hour immediate sleep opportunity.</li>
      <li>Serum potassium and magnesium supplementation (oral electrolyte vial).</li>
      <li>Continuously log continuous 12-lead Holter monitoring for 24 hours.</li>
    `;
    selectOrgan('heart');
  }
}

// -------------------------------------------------------------------
// GAMIFICATION ENGINE (NASA Quests, XP & Streaks)
// -------------------------------------------------------------------
function renderQuests() {
  const container = document.getElementById("quests-container");
  if (!container) return;

  container.innerHTML = currentQuests.map((q, idx) => `
    <div class="p-2 rounded bg-slate-900/90 border ${q.completed ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-slate-800'} flex items-center justify-between gap-2 transition">
      <div class="flex items-center gap-2.5">
        <input type="checkbox" id="quest-${q.id}" ${q.completed ? 'checked' : ''} onchange="toggleQuest(${idx})" class="w-4 h-4 rounded text-cyan-500 bg-slate-800 border-slate-600 focus:ring-cyan-500 focus:ring-1 cursor-pointer">
        <div>
          <label for="quest-${q.id}" class="cursor-pointer ${q.completed ? 'line-through text-slate-400' : 'text-slate-200 font-medium'} text-[11px] block">
            ${q.title}
          </label>
          <span class="text-[9px] text-slate-400 block">${q.category} · ${q.duration}</span>
        </div>
      </div>
      <span class="font-mono text-[10px] font-bold ${q.completed ? 'text-emerald-400' : 'text-cyan-400'}">+${q.xp} XP</span>
    </div>
  `).join("");
}

function toggleQuest(index) {
  currentQuests[index].completed = !currentQuests[index].completed;
  if (currentQuests[index].completed) {
    addExperience(currentQuests[index].xp, `Completed: ${currentQuests[index].title}`);
  }
  renderQuests();
}

function addExperience(xpGained, reason) {
  const crew = NASA_HRP_DATA.crew[activeCrewIndex];
  crew.xp += xpGained;
  
  if (crew.xp >= 500) {
    crew.xp -= 500;
    crew.level += 1;
    alert(`🎉 MISSION LEVEL UP! Astronaut ${crew.name} reached Rank Level ${crew.level}!\nAwarded "Deep Space Resilience" Badge.`);
  }

  const xpText = document.getElementById("xp-text");
  const xpBar = document.getElementById("xp-bar");
  const rankEl = document.getElementById("crew-rank");

  if (xpText) xpText.innerText = `${crew.xp} / 500 XP`;
  if (xpBar) xpBar.style.width = `${(crew.xp / 500) * 100}%`;
  if (rankEl) rankEl.innerText = `Mars Pioneer (Lv. ${crew.level})`;
}

// -------------------------------------------------------------------
// EXPORT HL7 FHIR TELEMETRY PACKET
// -------------------------------------------------------------------
function exportTelemetryPacket() {
  const crew = NASA_HRP_DATA.crew[activeCrewIndex];
  const env = NASA_HRP_DATA.environments[activeEnvironment];
  
  const fhirTelemetryPacket = {
    resourceType: "Bundle",
    id: `nasa-hrp-packet-${Date.now()}`,
    timestamp: new Date().toISOString(),
    team: "Nexora by Hindawy (VitalOrbit) - Student Innovation - NASA Space Apps Cairo 2026",
    mission: {
      environment: env.name,
      latency: env.latency,
      missionSol: 142,
      activeDataSource: currentDataSource
    },
    subject: {
      reference: `Astronaut/${crew.id}`,
      name: crew.name,
      role: crew.role,
      bloodType: crew.blood
    },
    vitals: {
      heartRate_BPM: document.getElementById("hr-value").innerText,
      bloodPressure_mmHg: document.getElementById("bp-value").innerText,
      spo2_percent: document.getElementById("spo2-value").innerText,
      coreTemp_C: document.getElementById("temp-value").innerText,
      dailyRadiation_mSv: document.getElementById("rad-value").innerText,
      cumulativeRadiation_mSv: crew.radiationCumul,
      missionReadinessIndex: document.getElementById("readiness-value").innerText
    },
    clinicalTriageStatus: {
      alertLevel: document.getElementById("ai-triage-badge").innerText.trim(),
      diagnosis: document.getElementById("triage-title").innerText,
      countermeasuresPrescribed: document.getElementById("triage-description").innerText
    },
    standardsCitation: [
      "NASA HRP-47065 Standard Measures Protocol",
      "NASA Life Sciences Data Archive (LSDA-000109)",
      "NASA Twins Study (OSDR-379)",
      "MSL Curiosity RAD Cruise Dataset (Science 2013)",
      "TRISH Deep Space Health Informatics (HERMES FHIR Specification)"
    ]
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(fhirTelemetryPacket, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `Nexora_Astronaut_Telemetry_${crew.id}_Sol142.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// Research Modal controls
function openResearchModal() {
  document.getElementById("research-modal").classList.remove("hidden");
}
function closeResearchModal() {
  document.getElementById("research-modal").classList.add("hidden");
}

// Initial Boot
document.addEventListener("DOMContentLoaded", () => {
  initMissionClock();
  initCharts();
  renderQuests();
  selectOrgan("eyes");
});
