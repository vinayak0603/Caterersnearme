# CaterEase — Caterer Discovery Platform

> **Assignment submission for [caterersnearme](https://caterersnearme.com)**

A full-stack web application that allows users to discover, search, and filter catering services. Built with a **Node.js/Express** REST API backend, a **React (Vite)** client, and a **Next.js 16 App Router** frontend — all powered by **MongoDB**.

---

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Backend Setup](#2-backend-setup)
  - [3. React Client Setup (Vite)](#3-react-client-setup-vite)
  - [4. Next.js Frontend Setup](#4-nextjs-frontend-setup)
- [Environment Variables](#environment-variables)
- [Database Seeding](#database-seeding)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)

---

## Live Demo

| Service     | URL                                               |
|-------------|---------------------------------------------------|
| Frontend App| `https://caterersnearme-frontend.vercel.app`      |
| Backend API | `https://caterersnearme-beryl.vercel.app/api`     |

---

## Project Visuals

### Wireframe
![CaterEase Wireframe](./frontend/public/wireframe.png)

### Demo Video
[Click here to watch the Demo Video](./frontend/public/demo-video.mp4)

---

## Features

- 🔍 **Search** caterers by name (real-time, client-side)
- 💲 **Filter** by maximum price per plate
- 🃏 **Card-based UI** showing name, location, price, rating, cuisine tags, and image
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- ⚡ **Next.js App Router** with Server Components and Client Components
- 🔗 **Open Graph & Twitter Card** metadata for rich social link previews
- 🧠 **JSON-LD structured data** (Schema.org) for SEO
- 🌱 **Database seeding** script with sample caterers
- ✅ **Input validation** on the backend using `express-validator`
- 🌐 **CORS-enabled** API ready for cross-origin frontend consumption

---

## Tech Stack

### Backend
| Technology       | Purpose                     |
|------------------|-----------------------------|
| Node.js          | Runtime environment         |
| Express.js v5    | REST API framework          |
| MongoDB          | NoSQL database              |
| Mongoose         | ODM for MongoDB             |
| express-validator| Request validation          |
| dotenv           | Environment variable loading|
| cors             | Cross-Origin Resource Sharing|
| nodemon          | Dev server auto-restart     |

### React Client (Vite)
| Technology    | Purpose                        |
|---------------|--------------------------------|
| React 18      | UI library                     |
| Vite          | Build tool & dev server        |
| Axios         | HTTP client for API calls      |
| Tailwind CSS  | Utility-first CSS framework    |
| lucide-react  | Icon library                   |
| React Router  | Client-side routing            |

### Next.js Frontend
| Technology      | Purpose                              |
|-----------------|--------------------------------------|
| Next.js 16      | Full-stack React framework           |
| React 19        | UI library                           |
| Tailwind CSS v4 | Utility-first CSS framework          |
| Axios           | HTTP client for API calls            |
| lucide-react    | Icon library                         |
| App Router      | File-based routing with Server/Client Components |

---

## Project Structure

```
CaterEase/
│
├── backend/                    # Express.js REST API
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js           # MongoDB connection setup
│   │   ├── controllers/
│   │   │   └── catererController.js  # Route handler logic
│   │   ├── models/
│   │   │   └── catererModel.js # Mongoose schema & model
│   │   └── routes/
│   │       └── catererRoutes.js # Express routes + validation
│   ├── seed.js                 # Database seeding script
│   ├── server.js               # App entry point
│   ├── vercel.json             # Vercel deployment config
│   └── package.json
│
├── client/                     # React + Vite frontend
│   └── src/
│       ├── components/
│       │   ├── CatererCard.jsx # Individual caterer card
│       │   ├── FilterBar.jsx   # Top filter/search bar  
│       │   └── FilterSidebar.jsx # Left sidebar filter
│       ├── pages/
│       │   └── CaterersPage.jsx # Main listing page
│       ├── services/
│       │   └── api.js          # Axios API service
│       └── App.jsx             # Root component with routing
│
└── frontend/                   # Next.js 16 App Router frontend
    └── src/
        ├── app/
        │   ├── layout.js       # Root layout with navbar
        │   ├── page.js         # Home page (/) with CTA
        │   ├── globals.css     # Global CSS + Tailwind import
        │   └── caterers/
        │       └── page.js     # /caterers route
        ├── components/
        │   ├── CaterersPage.jsx # Main caterers listing (Client)
        │   ├── CatererCard.jsx  # Caterer card (Client)
        │   └── FilterSidebar.jsx # Price filter sidebar (Client)
        └── services/
            └── api.js          # Axios API service
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or above
- [npm](https://npmjs.com/) v9 or above
- A [MongoDB Atlas](https://mongodb.com/cloud/atlas) account (free tier works) or a local MongoDB instance

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/caterer-assignment.git
cd caterer-assignment
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/catererDB
PORT=5000
NODE_ENV=development
```

Start the development server:

```bash
npm run dev
```

The API will be running at **`http://localhost:5000`**.

Test it:
```bash
curl http://localhost:5000/api/caterers
```

---

### 3. React Client Setup (Vite)

```bash
cd ../client
npm install
npm run dev
```

The React app will be running at **`http://localhost:5173`**.

> Make sure the backend is running at `http://localhost:5000` before using the client.

---

### 4. Next.js Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

The Next.js app will be running at **`http://localhost:3000`**.

| Route        | Description                           |
|--------------|---------------------------------------|
| `/`          | Home page with "View Caterers" CTA    |
| `/caterers`  | Browse and filter all caterers        |

---

## Environment Variables

### Backend (`backend/.env`)

| Variable    | Required | Description                         | Example                                              |
|-------------|----------|-------------------------------------|------------------------------------------------------|
| `MONGO_URI` | ✅ Yes   | MongoDB connection string           | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `PORT`      | ❌ No    | Server port (defaults to `5000`)    | `5000`                                               |
| `NODE_ENV`  | ❌ No    | Environment mode                    | `development` or `production`                        |

### Next.js Frontend (`frontend/.env.local`)

| Variable               | Required | Description                          | Example                    |
|------------------------|----------|--------------------------------------|----------------------------|
| `NEXT_PUBLIC_SITE_URL` | ❌ No    | Absolute URL used in OG/JSON-LD meta | `https://your-domain.com`  |

---

## Database Seeding

The project includes a seed script that populates the database with 6 sample caterers across different Indian cities.

```bash
cd backend
node seed.js
```

**Sample caterers included:**

| Name              | Location              | Price/Plate | Cuisines                      | Rating |
|-------------------|-----------------------|-------------|-------------------------------|--------|
| Elite Gourmet     | Delhi, NCR            | ₹800        | Continental, Mexican          | 4.8    |
| Budget Bites      | Bangalore, Karnataka  | ₹250        | South Indian, Street Food     | 4.0    |
| Oceanic Flavors   | Goa                   | ₹650        | Seafood, Goan                 | 4.2    |
| Royal Feast       | Pune, Maharashtra     | ₹600        | Continental, Italian          | 4.5    |
| Flavors of India  | Jaipur, Rajasthan     | ₹550        | Mughlai, North Indian         | 4.5    |
| Spice Route       | Hyderabad, Telangana  | ₹450        | Hyderabadi, Mughlai           | 4.6    |

> ⚠️ **Warning:** Running `seed.js` will **delete all existing caterers** and replace them with the sample data.

---

## API Reference

The full API documentation is available in [`API_DOCUMENTATION.md`](./API_DOCUMENTATION.md).

### Quick Reference

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/caterers`       | Get all caterers         |
| GET    | `/api/caterers?name=` | Filter caterers by name  |
| GET    | `/api/caterers?maxPrice=` | Filter by max price  |
| POST   | `/api/caterers`       | Create a new caterer     |
| GET    | `/api/caterers/:id`   | Get a caterer by ID      |

---

## Deployment

### Backend — Vercel

The backend includes a `vercel.json` configuration:

```bash
cd backend
vercel --prod
```

Set environment variables in the Vercel dashboard:
- `MONGO_URI`
- `NODE_ENV=production`

### Next.js Frontend — Vercel

```bash
cd frontend
vercel --prod
```

Set environment variables:
- `NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app`

### React Client (Vite) — Vercel / Netlify

```bash
cd client
npm run build
# Deploy the dist/ folder
```

---

## Scripts

### Backend

| Command         | Description                   |
|-----------------|-------------------------------|
| `npm run dev`   | Start dev server with nodemon |
| `npm start`     | Start production server       |
| `node seed.js`  | Seed the database             |

### React Client

| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start Vite dev server    |
| `npm run build` | Build for production     |
| `npm run preview` | Preview production build |

### Next.js Frontend

| Command         | Description                    |
|-----------------|--------------------------------|
| `npm run dev`   | Start Next.js dev server       |
| `npm run build` | Build for production           |
| `npm start`     | Start production server        |

---

## Design System

The application uses a consistent dark premium theme:

| Token        | Value                                      |
|--------------|--------------------------------------------|
| Background   | `#00153d` (Deep Navy Blue)                 |
| Card BG      | `#ffffff` (White)                          |
| Accent       | `#e2b157` (Premium Gold)                   |
| Sidebar BG   | `#1a2b6d` (Royal Blue)                     |
| Fonts        | System font-sans (Tailwind default)        |

---

*Built with ❤️ as an assignment submission for **caterersnearme**.*
