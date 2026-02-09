# 🏎️ Project: Velocity Portfolio

[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Supabase%20%7C%20Python-orange?style=for-the-badge)](https://github.com/yourusername/portfolio)
[![Status](https://img.shields.io/badge/Status-In%20Development-green?style=for-the-badge)]()

A high-performance personal portfolio inspired by the **Lando Norris** aesthetic. Built for speed, fueled by data, and designed with a "Bento Box" grid layout.

## 🏁 The Vision
The goal of this project is to blend Formula 1 aesthetics with modern web development. It’s not just a portfolio; it’s a telemetry dashboard for my career.

* **Frontend:** Ultra-fast React/Next.js interface with Tailwind CSS.
* **Backend:** Real-time data management via Supabase.
* **Automation:** Python scripts to sync GitHub activity and project stats.

---

## 🛠️ Tech Telemetry

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Engine** | JavaScript (React) | Driving the UI and smooth animations. |
| **Fuel** | Supabase | Handling the database and image storage. |
| **Pit Crew** | Python | Automation scripts for data syncing. |
| **Aero** | Tailwind CSS | Sleek, high-contrast "Papaya/Neon" styling. |

---

## 🚀 Key Features

* **Bento Grid Layout:** A modular design inspired by premium driver landing pages.
* **Live Telemetry:** A "Stats" section powered by a Python script that pulls real-time GitHub data into Supabase.
* **Dynamic Projects:** Add new projects to your database via a custom CLI tool (Python) and watch them appear instantly on the site.
* **Glassmorphism Effects:** Sleek card designs with neon borders and high-speed hover states.

---

## 🔧 Installation & Setup

### 1. The Backend (Supabase)
1. Create a project at [supabase.com](https://supabase.com).
2. Run the SQL schema found in `/database/schema.sql` to set up your `projects` table.

### 2. The Pit Crew (Python)
```bash
cd scripts
pip install -r requirements.txt
# Run the sync script
python sync_stats.py