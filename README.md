# 🚀 AeroHealth OS — Autonomous Astronaut Health & Telemetry System

[![NASA Space Apps Challenge 2026](https://img.shields.io/badge/NASA%20Space%20Apps-Cairo%202026-blue.svg)](https://www.spaceappschallenge.org)
[![Challenge](https://img.shields.io/badge/Challenge-Astronaut%20Health%20Monitoring-orange.svg)](https://www.spaceappschallenge.org/2026/challenges/health-monitoring-software/)
[![Team](https://img.shields.io/badge/Team-Nexora%20by%20Hindawy-cyan.svg)](#)
[![Status](https://img.shields.io/badge/Deployment-Ready-emerald.svg)](#)
[![Data Standard](https://img.shields.io/badge/Standard-NASA%20HRP%20%7C%20HL7%20FHIR-purple.svg)](#)

> **Team Name:** Nexora by Hindawy *(Registered in Cairo Local Portal as: VitalOrbit)*  
> **Challenge:** Create Health Monitoring Software for Astronauts on Space Missions  
> **Category:** Virtual Participation · Cairo, Egypt  

---

## 🛰️ Project Overview
On long-duration deep space exploration missions (e.g., NASA Artemis Lunar Base and crewed missions to Mars), communication latency with Earth reaches up to **22 minutes each way**. Astronauts cannot rely on real-time telemedicine from ground flight surgeons during acute medical emergencies or progressive physiological deconditioning.

**AeroHealth OS** is a lightweight, zero-dependency, offline-first health monitoring cockpit designed specifically for astronauts. Grounded in the **NASA Human Research Program (HRP)** guidelines and the **Five Hazards of Human Spaceflight (RIDGE)**, AeroHealth OS provides real-time telemetry, an interactive organ-by-organ body map, autonomous clinical triage decision support, and a gamified countermeasure routine system.

---

## 🌟 Key Features

### 1. 🧍 Interactive Anatomical Assessment (NASA Primary Requirement)
* **Zero-G Silhouette Hotspot Map:** Clickable anatomical nodes for the Head/Eyes (SANS), Heart (fluid shift & arrhythmias), Lungs (SpO2 & cabin atmosphere), Spine (Zero-G elongation), and Musculoskeletal (ARED load tracking).
* **Non-Physician Explanations:** Formatted into clear answers:
  * *Why this exam is needed?*
  * *How spaceflight hazards affect this organ?*
  * *What action is required?*
* **Interactive Diagnostics:** Trigger live simulated ocular tonometry, 12-lead ECG, or cabin scrubber checks.

### 2. ⚡ Real-Time Continuous Telemetry & Streaming Charts
* **Continuous Lead II ECG Waveform:** 250 Hz simulated live waveform displaying authentic P-Q-R-S-T complexes and detecting premature ventricular contractions (PVCs).
* **Longitudinal Trends:** 7-sol historical telemetry tracking cumulative space radiation dose (mSv) against safety thresholds alongside sleep quality architecture.

### 3. 🧠 Autonomous Clinical Decision Support (Offline CDS)
* **Tri-Color Triage:** Real-time physiological classification (Green Nominal / Yellow Caution / Red Critical).
* **Deterministic NASA HRP Rule Engine:** Translates complex telemetry anomalies into actionable, step-by-step countermeasure protocols.
* **Judges Testbed Scenario Simulator:** One-click simulation of SANS fluid shifts, Solar Particle Event (SPE) radiation storms, and acute cardiac fatigue.

### 4. 🎮 Daily Gamification & Countermeasure Hub
* **Daily Quests:** Resistive squats on ARED, T2 treadmill cardio, Chibis LBNP chamber, PVT-B cognitive reaction tests, and electrolyte fluid packs.
* **XP & Mission Streaks:** Progress from *Orbit Pioneer* to *Mars Voyager*, awarding badges to counteract behavioral monotony and psychological isolation.

### 5. 🪐 Multi-Environment Adaptability
* Toggle seamlessly between:
  * **ISS (Low Earth Orbit):** 0.2s Earth comms delay, standard LEO radiation.
  * **Lunar Gateway / Artemis Base:** 1.3s delay, regolith particulate alerts.
  * **Mars Deep Space Transit:** 21-minute delay with automatic **Autonomous Edge CDS** activation.

### 6. 📄 Deep-Space FHIR Telemetry Export
* Implements the **TRISH HERMES** platform architecture, allowing crew to export full telemetry packages as standardized **HL7 FHIR JSON** for asynchronous downlink to Earth ground control.

---

## 🔬 Grounded in NASA Open Data & Standards
AeroHealth OS is built directly on validated space medicine research:
* **NASA Human Research Program (HRP-47065):** Standard Measures Protocol.
* **NASA Life Sciences Data Archive (LSDA):** Longitudinal astronaut physiological flight records.
* **NASA Human Research Roadmap (HRR):** Evidence-based risk mitigation strategies.
* **The 5 Hazards of Spaceflight (RIDGE):** Radiation, Isolation, Distance, Gravity, Environment.
* **TRISH (Translational Research Institute for Space Health):** Deep-space health informatics guidelines.

---

## 🚀 How to Run the Application

AeroHealth OS requires **no installations or complex configurations**:

1. Clone or download this repository.
2. Double-click `index.html` to open the software in any modern web browser (Chrome, Edge, Firefox, Safari).
3. To view the **7-Slide Pitch Deck**, open `SLIDES.html`.
4. To read the complete scientific proposal, review `PROPOSAL.md`.

---

## 📁 Repository Structure
```
├── index.html                   # Main AeroHealth OS Mission Control Software
├── styles.css                   # Aerospace Dark HUD & Glassmorphism Styling
├── app.js                       # Telemetry Engine, SVG Hotspot Logic, AI Triage
├── SLIDES.html                  # Official 7-Slide Interactive Pitch Deck (Print-to-PDF ready)
├── PROPOSAL.md                  # Comprehensive 10-Section Scientific Proposal Document
└── data/
    └── nasa_hrp_standards.json  # NASA HRP Physiological Baselines & Hazard Profiles
```

---

## 👥 Team Nexora by Hindawy
* **Team Name:** Nexora by Hindawy *(Registered as VitalOrbit in Cairo Portal)*
* **Event:** NASA Space Apps Cairo 2026 (Virtual Participation)
* **License:** MIT License — Open Science & Space Exploration.
