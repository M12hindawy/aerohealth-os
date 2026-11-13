# NASA Space Apps Challenge 2026 — Student Innovation Project Proposal

**Project Title:** AeroHealth OS — Autonomous Astronaut Health & Telemetry System  
**Challenge:** Create Health Monitoring Software for Astronauts on Space Missions  
**Lead Author:** Hindawy (Biomedical & Software Engineering Student Researcher)  
**Team Name:** Nexora by Hindawy *(Registered in Cairo Local Portal as: VitalOrbit)*  
**Location:** Cairo, Egypt (Virtual Participation)  
**Track:** Student Innovation / Space Medicine / AI Decision Support / Open Science  

---

## 1. Student Research Rationale & Hypothesis
As an engineering student fascinated by space exploration, I recognized a critical paradox in human deep-space architecture: **Terrestrial medicine assumes infinite connectivity, immediate clinical specialists, and negligible latency.** 

On human missions to Mars under NASA’s Artemis architecture, communications latency reaches **up to 22 minutes each way**. If an astronaut experiences Spaceflight-Associated Neuro-ocular Syndrome (SANS), acute cardiac arrhythmias, or a Solar Particle Event (SPE), **mission control on Earth cannot deliver real-time intervention**.

### The Student Engineering Hypothesis:
> *"Can a lightweight, offline-first software system combine empirical NASA physiological datasets, deterministic clinical decision trees, and behavioral gamification to grant non-physician astronauts autonomous flight surgeon capabilities at the edge?"*

**AeroHealth OS** is the tangible answer to that question.

---

## 2. Empirical Grounding in Real NASA Open Data
Rather than relying on generic synthetic mockups, AeroHealth OS directly integrates and references validated NASA Open Data archives:

1. **NASA Twins Study (NASA OSDR-379 / Science 2019):**
   * Incorporates empirical metrics from Scott Kelly’s 340-day ISS mission versus ground control twin Mark Kelly.
   * Models the **+24.0% carotid artery intima-media thickness** increase, telomere dynamics, and **+38 µm Retinal Nerve Fiber Layer (RNFL)** swelling.
2. **MSL Curiosity Radiation Assessment Detector (RAD - Science 2013):**
   * Uses real interplanetary cruise telemetry recording an average Galactic Cosmic Ray (GCR) dose rate of **$1.84 \pm 0.30 \text{ mSv/day}$**.
   * Integrates the official NASA Risk of Exposure-Induced Death (REID) linear-no-threshold cancer model ($REID = 1 - e^{-\sum \lambda_i D_i}$).
3. **NASA HRP SANS Clinical Guidelines & Frisén Papilledema Scale:**
   * Calibrates optic nerve sheath diameter (ONSD) and optical coherence tomography (OCT) metrics against documented NASA astronaut cohorts where 70% demonstrate cephalic fluid shift symptoms.

---

## 3. Core Software Modules & Student Innovations

### A. Playable NASA Psychomotor Vigilance Test (PVT-B)
Astronauts on the ISS routinely perform the 3-minute PVT test to detect neuro-behavioral lapses. AeroHealth OS features a **fully interactive, playable PVT reaction test engine**:
* Measures millisecond reaction time ($ms$) upon sudden visual stimuli.
* Categorizes performance: Optimal ($<250 \text{ ms}$), Baseline ($250-380 \text{ ms}$), and Attentional Lapses ($>380 \text{ ms}$).
* Automatically adjusts crew work-rest cycles and prescribes mandatory sleep windows when lapses are detected.

### B. Interactive Zero-G Anatomical Map
* Vector SVG silhouette with clickable physiological hotspots.
* Translates complex telemetry into clear answers to NASA's core challenge questions:
  * *Why is this exam needed?*
  * *How do spaceflight hazards affect this organ?*
  * *What action must the crew take right now?*

### C. Offline-First Autonomous Clinical Decision Support (CDS)
* Deterministic Green / Yellow / Red triage logic executing entirely client-side.
* Includes a **Judges Stress-Testbed** allowing instant simulation of SANS fluid shifts, Solar Particle Events, and cardiac arrhythmias.

### D. Multi-Environment Latency Architecture
* Dynamic reconfiguration between **ISS (LEO · 0.2s delay)**, **Lunar Gateway (1.3s delay)**, and **Mars Transit (21m delay)**, triggering autonomous edge protocols when Earth uplinks are degraded.

### E. Gamified Routine & Countermeasure Adherence
* Fights isolation-induced lethargy by transforming grueling 2.5-hour daily countermeasure exercises (ARED squats, T2 treadmill, Chibis Lower Body Negative Pressure) into rewarding quests with XP, levels, and consecutive-day streaks.

### F. Deep-Space HL7 FHIR Telemetry Standard
* Conforms to TRISH (Translational Research Institute for Space Health) HERMES architecture. Generates valid HL7 FHIR v4 Observation JSON packages for asynchronous Earth downlink.

---

## 4. Technical Feasibility & Architecture
* **Stack:** Zero-dependency vanilla HTML5, modern CSS3/Tailwind, Canvas vector graphics, and Chart.js streaming telemetry.
* **Footprint:** Entire platform runs in under 2 megabytes, executable in any browser terminal without cloud server dependencies or external API bottlenecks.
* **Deployment:** Production-ready and deployable to GitHub Pages, Netlify, or local spacecraft intranet in seconds.

---

## 5. What Makes This Student Project Stand Out
1. **Scientific Authenticity:** Not a generic fitness app; every threshold is derived from NASA Human Research Program protocols (HRP-47065).
2. **Judge Interactivity:** Judges can literally play the NASA PVT test, inject solar flares, and download real FHIR telemetry packets.
3. **Student Perspective:** Demonstrates genuine scientific curiosity, self-directed learning of aerospace medicine, and elegant engineering execution.

---

## 6. Deliverables Checklist
- [x] Working Web Application: [`index.html`](file:///C:/Users/lenovo/OneDrive/Desktop/nexora_health_os/index.html)
- [x] Official 7-Slide Pitch Deck: [`SLIDES.html`](file:///C:/Users/lenovo/OneDrive/Desktop/nexora_health_os/SLIDES.html)
- [x] Full Scientific Proposal: [`PROPOSAL.md`](file:///C:/Users/lenovo/OneDrive/Desktop/nexora_health_os/PROPOSAL.md)
- [x] NASA Datasets & Standards: [`data/nasa_hrp_standards.json`](file:///C:/Users/lenovo/OneDrive/Desktop/nexora_health_os/data/nasa_hrp_standards.json)
- [x] GitHub Repository Documentation: [`README.md`](file:///C:/Users/lenovo/OneDrive/Desktop/nexora_health_os/README.md)
