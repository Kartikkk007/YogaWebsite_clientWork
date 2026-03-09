# 🧘 Mansi Sharma — Yoga & Wellness Website

A full-stack MERN yoga advertising and management website with real-time schedule updates via Socket.io.

---

## 📁 Project Structure

```
yoga-website/
├── backend/
│   ├── models/
│   │   └── Schedule.js          # Mongoose schema for yoga schedules
│   ├── routes/
│   │   └── scheduleRoutes.js    # CRUD API + Socket.io broadcasting
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── server.js                # Express + Socket.io server
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── admin/
    │   │   │   └── AdminScheduleManager.jsx   # Admin CRUD interface
    │   │   ├── sections/
    │   │   │   ├── HeroSection.jsx
    │   │   │   ├── AboutSection.jsx
    │   │   │   ├── ProgramsSection.jsx
    │   │   │   ├── ScheduleSection.jsx        # Real-time schedule display
    │   │   │   ├── TestimonialsSection.jsx
    │   │   │   └── ContactSection.jsx
    │   │   └── ui/
    │   │       ├── Navbar.jsx
    │   │       └── Footer.jsx
    │   ├── hooks/
    │   │   └── useSchedule.js    # Socket.io + API hook
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   └── AdminPage.jsx
    │   ├── utils/
    │   │   ├── api.js            # Axios instance
    │   │   └── socket.js         # Socket.io client
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .env
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    └── vite.config.js
```

---

## ⚙️ Prerequisites

- **Node.js** v18 or above
- **MongoDB** running locally on `mongodb://localhost:27017` (or a MongoDB Atlas URI)

---

## 🚀 Setup Instructions

### 1. Clone / download the project

### 2. Install Backend Dependencies

```bash
cd yoga-website/backend
npm install
```

### 3. Configure Backend Environment

Edit `backend/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/yoga-website
CLIENT_URL=http://localhost:5173
```

> To use MongoDB Atlas, replace MONGO_URI with your Atlas connection string.

### 4. Start the Backend

```bash
# Development (with auto-restart)
npm run dev

# Production
npm start
```

The backend will start on **http://localhost:5000**

### 5. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 6. Start the Frontend

```bash
npm run dev
```

The frontend will start on **http://localhost:5173**

---

## 🌱 Seed Default Schedule

On first run, the database is empty. Seed a default 7-day schedule by:

**Option A** — Visit the admin panel and click "⚡ Load Default Schedule"

**Option B** — API call:
```bash
curl -X POST http://localhost:5000/api/schedules/seed/default
```

---

## 🔗 Routes

| URL | Description |
|-----|-------------|
| `http://localhost:5173/` | Main public website |
| `http://localhost:5173/admin` | Admin dashboard |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/schedules` | Get all schedules |
| GET | `/api/schedules/:day` | Get schedule for a day |
| POST | `/api/schedules` | Create/replace a day's schedule |
| PUT | `/api/schedules/:day/class/:classId` | Update a specific class |
| DELETE | `/api/schedules/:day/class/:classId` | Delete a specific class |
| DELETE | `/api/schedules/:day` | Delete an entire day's schedule |
| POST | `/api/schedules/seed/default` | Seed with default data |

---

## 🛠️ Customisation

### Update Mansi's Contact Details

In `frontend/src/components/sections/ContactSection.jsx`:
```js
const WHATSAPP_NUMBER = '919999999999' // Replace with real number (no + sign)
const EMAIL = 'mansi@yoga.com'         // Replace with real email
```

Same numbers appear in `ScheduleSection.jsx` — update those too.

### Add Mansi's Photo

In `HeroSection.jsx`, replace the placeholder `<div>` with:
```jsx
<img src="/mansi-photo.jpg" alt="Mansi Sharma" className="w-full h-full object-cover" />
```
Place the image in `frontend/public/`.

---

## ⚡ Real-time Architecture

```
Admin Panel → POST/PUT/DELETE → Express API → MongoDB
                                     ↓
                              Socket.io broadcasts
                              'scheduleUpdated' event
                                     ↓
                         All connected visitors update
                         their schedule instantly
```

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite, Tailwind CSS |
| Routing | React Router DOM v6 |
| Real-time | Socket.io (client + server) |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| HTTP client | Axios |
| Security | bcryptjs, CORS |
