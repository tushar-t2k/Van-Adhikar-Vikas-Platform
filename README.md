# 🌳 AI-powered FRA Atlas & WebGIS-based Decision Support System (DSS)

This project develops an **AI-powered Atlas and WebGIS-based Decision Support System (DSS)** for the **integrated monitoring of the Forest Rights Act (FRA) implementation** across selected Indian states — **Madhya Pradesh, Tripura, Odisha, and Telangana**.

## 🔎 Project Overview

The system combines **geospatial analysis, AI/ML techniques, and interactive web-based visualization** to provide policymakers, researchers, and civil society organizations with insights into the progress and challenges of FRA implementation.

Key goals include:

* Monitoring **claims filed, titles distributed, and forest area recognized** under FRA.
* Mapping and visualizing **Community Forest Resource (CFR) boundaries** and associated rights.
* Integrating **remote sensing data** to track forest cover change and encroachment.
* Enabling **decision support** through spatial analytics, dashboards, and AI-driven predictions.

## ✨ Features

* **WebGIS Frontend**: Interactive maps built with Leaflet/OpenLayers for real-time visualization.
* **Spatial Database**: PostGIS/PostgreSQL backend for storing village boundaries, FRA claims, and forest layers.
* **AI/ML Integration**:

  * Image classification on satellite data to detect forest loss/encroachment.
  * Predictive analytics for FRA claim processing and monitoring delays.
  * Semantic search across FRA records using embeddings.
* **Data Sources**:

  * Government open datasets (data.gov.in, FSI, state portals).
  * Remote sensing (Landsat, Sentinel, MODIS).
  * Forest Survey of India shapefiles and village-level boundaries (where available).

## 🛠️ Tech Stack

* **Frontend**: React.js / HTML / CSS / Leaflet
* **Backend**: FastAPI / Flask (Python)
* **Database**: PostgreSQL + PostGIS, SQLite (for local testing)
* **AI/ML**: PyTorch / Scikit-learn / Hugging Face / Google Earth Engine APIs
* **Visualization**: GeoServer / Mapbox / OpenLayers

## 🌍 Impact

This system aims to **bridge the gap between FRA policy and ground realities** by offering a transparent, data-driven tool that helps:

* Policymakers track progress of FRA implementation.
* Researchers analyze socio-ecological impacts of land rights.
* Communities visualize and monitor their recognized forest rights.

## 🚀 Future Scope

* Mobile app integration for field data collection.
* Crowdsourcing feature for communities to update CFR boundaries.
* Real-time satellite monitoring using AI pipelines.

---

📌 *This project is in active development. Contributions, feedback, and collaborations are welcome!*
