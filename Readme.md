# 🚀 API Data Viewer (Flask)

[![Python](https://img.shields.io/badge/Python-3.13-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-3.1-000?logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![Deploy](https://img.shields.io/badge/Deploy-Render-46E3B7?logo=render&logoColor=white)](https://render.com)
[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa&logoColor=white)](#-pwa-install)

A tiny, fast web app to fetch any API URL and visualize the JSON response in clean, responsive cards. Built with Flask + Vanilla HTML/CSS and enhanced with basic PWA support.

- 🌐 Live Demo: [api-url-fetcher-1-5ms4.onrender.com](https://api-url-fetcher-1-5ms4.onrender.com)
- 📦 Repository: [vansh-frontend/API-URL-Fetcher](https://github.com/vansh-frontend/API-URL-Fetcher)

---

## ✨ Features
- 🎯 Paste any API URL and fetch JSON instantly
- 🧩 Smart rendering for objects, arrays, and simple values
- 📱 Responsive, clean UI with subtle interactions
- ⚡ Deployed with Gunicorn on Render
- 📲 PWA-ready: Install on your device and work offline for the app shell

---

## 🖥️ Try It in Seconds
1. Open the live app: [api-url-fetcher-1-5ms4.onrender.com](https://api-url-fetcher-1-5ms4.onrender.com)
2. Paste an API endpoint (e.g., `https://jsonplaceholder.typicode.com/todos/1`)
3. Hit "Fetch Data" and browse the result cards

> Tip: Works best with JSON APIs that permit CORS for public access.

---

## 🛠️ Local Development
```bash
# 1) Clone
git clone https://github.com/vansh-frontend/API-URL-Fetcher
cd API-URL-Fetcher

# 2) (Optional) Create a virtual environment
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
# source venv/bin/activate

# 3) Install dependencies
pip install -r requirements.txt

# 4) Run the app
python app.py
# open http://127.0.0.1:5000
```

---

## 🚀 Deploy
This repo ships with a `Procfile` compatible with Render.

- Build command: `pip install -r requirements.txt`
- Start command (via Procfile): `gunicorn app:app --bind 0.0.0.0:$PORT`

If you deploy elsewhere (Railway, Fly.io, etc.), reuse the same start command.

---

## 📲 PWA Install
This app includes a manifest and service worker so you can install it as a web app.

- Android (Chrome): open the live app → menu → "Add to Home screen"
- Desktop (Chrome/Edge): click the install icon in the address bar
- iOS (Safari): Share → "Add to Home Screen"

> The app shell (styles, icon, basic JS) is cached for quick loads. API requests use a network-first strategy.

---

## 🧰 Tech Stack
- Backend: Flask
- Frontend: HTML + CSS (responsive + minimal JS)
- Server: Gunicorn (for production)
- PWA: `manifest.webmanifest` + `sw.js`

---

## 📂 Project Structure
```text
API-URL-Fetcher/
├─ app.py                  # Flask routes and server
├─ requirements.txt        # Dependencies
├─ Procfile                # Start command for Render
├─ static/
│  ├─ style.css
│  ├─ responsive.css
│  ├─ script.js            # Registers service worker
│  ├─ img/
│  │  └─ gear.png          # App icon
│  ├─ manifest.webmanifest # PWA manifest
│  └─ sw.js                # Service worker
└─ templates/
   └─ index.html           # Main UI
```

---

## 💡 Notes
- Some APIs require CORS headers; calls may fail if the remote server blocks cross-origin requests.
- For best install experience, consider adding 512×512 and 256×256 icons in addition to the included icon.

---

## 🔗 Links
- Live: [api-url-fetcher-1-5ms4.onrender.com](https://api-url-fetcher-1-5ms4.onrender.com)
- Repo: [vansh-frontend/API-URL-Fetcher](https://github.com/vansh-frontend/API-URL-Fetcher)
