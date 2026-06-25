# Zerodha Clone - Full Stack Trading Platform

[![Frontend Deploy](https://img.shields.io/badge/Frontend-Vercel-blue?logo=vercel&logoColor=white)](https://zerodha-clone-frontend-flax.vercel.app/)
[![Dashboard Deploy](https://img.shields.io/badge/Dashboard-Vercel-orange?logo=vercel&logoColor=white)](https://zerodha-clone-dashboard-gray.vercel.app/)
[![Backend Deploy](https://img.shields.io/badge/Backend-Render%2FNode-brightgreen?logo=node.js&logoColor=white)](https://github.com/YashPawar1775/Zerodha-Clone)

A beautiful, high-fidelity Zerodha clone comprising a marketing homepage, an interactive trading dashboard (Kite Terminal), and a secure REST API backend.

---

## 🔗 Live Deployments

*   **Marketing & Sign-up Landing Page (Frontend):** [https://zerodha-clone-frontend-flax.vercel.app/](https://zerodha-clone-frontend-flax.vercel.app/)
*   **Trading Terminal Dashboard (Kite):** [https://zerodha-clone-dashboard-gray.vercel.app/](https://zerodha-clone-dashboard-gray.vercel.app/)

---

## 🛠️ Tech Stack & Architecture

The project is structured as a monorepo consisting of three main modules:

### 1. Backend (`/backend`)
*   **Core:** Node.js, Express.js
*   **Database:** MongoDB via Mongoose ODM
*   **Authentication:** JWT (JSON Web Tokens), Cookie-Parser, BcryptJS, Passport
*   **Deployment:** Configured with CORS for multi-domain routing

### 2. Marketing Frontend (`/frontend`)
*   **Core:** React.js, React-Router-DOM (v7)
*   **Aesthetics:** Modern, clean vanilla CSS replicating the official Zerodha design language. Fully responsive with smooth transitions.
*   **Key Modules:** About, Products, Pricing, Support, Signup portals.

### 3. Trading Dashboard (`/dashboard`)
*   **Core:** React.js, React-Router-DOM (v6)
*   **UI Components:** Material-UI (MUI Icons)
*   **Charts & Visuals:** Chart.js, React-Chartjs-2 (Doughnut & Bar charts for asset allocation and summaries)
*   **Context API:** Global context for state coordination across WatchList, buy/sell triggers, and order books.

---

## 📁 Repository Structure

```
Zerodha-Clone/
├── backend/              # Express API Server
│   ├── middleware/       # JWT token verification & security
│   ├── model/            # MongoDB Schemas (Holdings, Positions, Orders, Users)
│   ├── schemas/          # Schema configurations
│   └── index.js          # REST API endpoints & DB connections
│
├── frontend/             # Marketing & landing pages
│   ├── public/           # Static assets
│   └── src/
│       └── landing_page/ # Components (Navbar, Footer, Home, Pricing, Support, Signup)
│
└── dashboard/            # Interactive trading interface (Kite)
    ├── public/           # Static assets
    └── src/
        └── components/   # Terminal components (WatchList, Orders, Holdings, Positions, Funds)
```

---

## ✨ Features

*   **Interactive Landing Page:** True-to-life replicas of the Zerodha Home, About, Pricing, Products, and Support web pages.
*   **Real-time Stock Search & Watchlist:** Dynamic stock searching with instant quote viewing, charts, and Quick Buy/Sell triggers.
*   **Order Placement Terminal:** Buy and Sell order execution panels supporting limit/market transactions. Executes order logging and updates holding quantities instantly.
*   **Holdings & Positions Trackers:** Tracks equity holdings, average purchase price, current market value, and real-time Profit & Loss (P&L).
*   **Asset Allocation Charting:** Dynamic, interactive doughnut charts visualizing your portfolio's current asset distribution.
*   **User Session Authentication:** Secure client-side sign-up and login integrations powered by salted password hashing and secure HTTP cookies.

---

## ⚙️ Local Setup and Installation

Follow the steps below to run the complete stack on your local machine:

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18.x or above recommended)
*   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or a local MongoDB instance running)

### Step 1: Clone the Repository
```bash
git clone https://github.com/YashPawar1775/Zerodha-Clone.git
cd Zerodha-Clone
```

### Step 2: Configure the Backend Environment
Create a `.env` file in the `/backend` directory:
```env
PORT=8080
MONGO_URL=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret_key
```

### Step 3: Start the Backend Server
```bash
cd backend
npm install
npm start
```
The REST API server will run at `http://localhost:8080`.

### Step 4: Start the Marketing Frontend
Open a new terminal window:
```bash
cd frontend
npm install
npm start
```
The marketing website will open at `http://localhost:3000`.

### Step 5: Start the Trading Dashboard
Open another terminal window:
```bash
cd dashboard
npm install
npm start
```
The trading dashboard will launch at `http://localhost:3001` (or your next open port).

---

## 🎨 License
Distributed under the ISC License. See `backend/package.json` for details.
