# Portfolio – Sivasuriyan Raja

A full-stack portfolio website built with React + TypeScript (Vite) for the frontend and Node.js + Express + MongoDB for the backend.

---

## Tech Stack

| Layer      | Technology                                   |
|------------|----------------------------------------------|
| Frontend   | React 18, TypeScript, Vite, Tailwind CSS v4, Framer Motion, Lucide React |
| Backend    | Node.js, Express.js, TypeScript              |
| Database   | MongoDB Atlas (via Mongoose)                 |
| Validation | Zod                                          |
| Deployment | Vercel (frontend) · Render (backend)         |

---

## Project Structure

```
portfolio/
├── frontend/   # React Vite SPA
└── backend/    # Express API server
```

---

## Getting Started

### Prerequisites
- Node.js >= 18
- A MongoDB Atlas cluster (or local MongoDB)

### 1. Clone & Install

```bash
cd frontend && npm install
cd ../backend && npm install
```

### 2. Configure Environment Variables

**Backend**
```bash
cd backend
cp .env.example .env
# Edit .env: add your MONGODB_URI and ADMIN_SECRET
```

**Frontend**
```bash
cd frontend
# Edit .env: set VITE_API_URL to your backend URL (default: http://localhost:5000)
```

### 3. Run Development Servers

Open two terminals:

```bash
# Terminal 1 – Backend
cd backend
npm run dev

# Terminal 2 – Frontend
cd frontend
npm run dev
```

Visit: http://localhost:5173

---

## Production Build

```bash
# Frontend
cd frontend && npm run build

# Backend
cd backend && npm run build && npm start
```

---

## Admin Dashboard

Navigate to `/admin` and enter your `ADMIN_SECRET` to log in.

**Features:**
- Add / Edit / Delete projects
- View and manage contact messages (mark as read/replied)

---

## API Routes

| Method | Route                       | Auth     | Description            |
|--------|-----------------------------|----------|------------------------|
| GET    | /api/health                 | Public   | Health check           |
| GET    | /api/projects               | Public   | List all projects      |
| GET    | /api/projects/:slug         | Public   | Single project         |
| POST   | /api/contact                | Public   | Submit contact form    |
| POST   | /api/admin/login            | —        | Admin login            |
| GET    | /api/admin/projects         | Admin    | All projects (admin)   |
| POST   | /api/admin/projects         | Admin    | Create project         |
| PUT    | /api/admin/projects/:id     | Admin    | Update project         |
| DELETE | /api/admin/projects/:id     | Admin    | Delete project         |
| GET    | /api/admin/messages         | Admin    | View messages          |
| PUT    | /api/admin/messages/:id     | Admin    | Update message status  |
| DELETE | /api/admin/messages/:id     | Admin    | Delete message         |

---

## Deployment

### Frontend → Vercel
1. Push `frontend/` to GitHub.
2. Import the repo in Vercel, set **root directory** to `frontend`.
3. Add `VITE_API_URL` environment variable pointing to your Render backend URL.

### Backend → Render
1. Push `backend/` to GitHub.
2. Create a new **Web Service** in Render, set **root directory** to `backend`.
3. Build command: `npm install && npm run build`
4. Start command: `npm start`
5. Add environment variables: `MONGODB_URI`, `ADMIN_SECRET`, `NODE_ENV=production`, `PORT=10000`.

---

## Contact

GitHub: [github.com/SivasuriyanRaja](https://github.com/SivasuriyanRaja)
