# Votely

Votely is a multi-election voting platform built on the MERN stack (MongoDB, Express, React, Node.js). It's designed to let an organization run several elections at once — each with its own candidates — and let voters browse elections, cast votes, and view results.

> **Status:** Active development. The frontend scaffold (routing, layout, navbar, theming, modals) is in place. The backend (Express API, MongoDB models, error handling) has a working voter registration flow; most other controllers are still placeholders, and authentication/voting logic is not yet wired up.

## Tech Stack

**Frontend**
- React 19
- React Router 7
- Redux Toolkit + React-Redux
- Vite 8
- react-icons
- Plain CSS with custom properties (no UI framework)

**Backend**
- Node.js / Express 5
- MongoDB with Mongoose
- bcryptjs (password hashing)
- cors
- dotenv
- nodemon (dev)

## Project Structure

```
mern-voting-app/
├── backend/
│   └── src/
│       ├── controllers/   # Voter, election, candidate logic
│       ├── models/        # Mongoose schemas (Voter, Election, Candidate)
│       ├── routes/        # API route definitions
│       ├── middleware/    # 404 + centralized error handler
│       ├── lib/           # MongoDB connection
│       ├── utils/         # HttpError class
│       └── index.js       # Express server entry point
└── frontend/
    ├── src/
    │   ├── components/    # Shared UI (Navbar, modals, cards)
    │   ├── pages/         # Route-level views
    │   ├── store/         # Redux slices (ui, vote)
    │   ├── data/           # Mock data for development
    │   └── assets/        # Images, icons, logo
    ├── public/
    └── vite.config.js
```

## Data Models

**Voter**
- `fullName`, `email` (unique), `password` (bcrypt-hashed)
- `votedElections` — refs to `Election`
- `isAdmin` — auto-set `true` if `email` matches `ADMIN_EMAIL`

**Election**
- `title`, `description`, `thumbnail`
- `candidates` — refs to `Candidate`
- `voters` — refs to `Voter`

**Candidate**
- `fullName`, `image`, `motto`, `voteCount`
- `electionId` — ref to `Election`

## API Endpoints

**Voters**
| Method | Path | Description |
|---|---|---|
| POST | `/api/voters/register` | Register a voter (validates fields, hashes password, auto-grants admin via `ADMIN_EMAIL`) |
| POST | `/api/voters/login` | Log in a voter *(placeholder)* |
| GET | `/api/voters/:id` | Get a voter by ID *(placeholder, protected)* |

**Elections**
| Method | Path | Description |
|---|---|---|
| POST | `/api/elections` | Create an election *(placeholder, admin)* |
| GET | `/api/all-elections` | List all elections *(placeholder)* |
| GET | `/api/elections/:id` | Get an election by ID *(placeholder)* |
| PATCH | `/api/elections/:id` | Update an election *(placeholder, admin)* |
| DELETE | `/api/elections/:id` | Delete an election *(placeholder, admin)* |
| GET | `/api/elections/:id/candidates` | List candidates for an election *(placeholder)* |
| GET | `/api/elections/:id/voters` | List voters for an election *(placeholder)* |

**Candidates**
| Method | Path | Description |
|---|---|---|
| POST | `/api/candidates` | Create a candidate *(placeholder, admin)* |
| GET | `/api/candidates` | List all candidates *(placeholder, admin)* |
| GET | `/api/candidates/:id` | Get a candidate by ID *(placeholder, admin)* |
| PATCH | `/api/candidates/:id` | Update a candidate *(placeholder, admin)* |
| DELETE | `/api/candidates/:id` | Delete a candidate *(placeholder, admin)* |

Errors are returned as `{ message, stack }` via a centralized Express error middleware, using an `HttpError` class to attach HTTP status codes to thrown errors.

## Features

### Implemented
- Responsive layout with a fixed navbar and mobile hamburger menu
- Light/dark theme toggle (UI only — persistence not yet wired up)
- Client-side routing for the core app flow:
  - `/` — Login
  - `/register` — Register
  - `/elections` — Browse elections (admin add/update/delete modals)
  - `/elections/:id` — Election details
  - `/elections/:id/candidates` — Candidates for an election, with vote confirmation modal
  - `/results` — Voting results
  - `/congrats` — Post-vote confirmation
  - `/logout` — Logout
  - 404 page with auto-redirect
- Express server with CORS, MongoDB connection, and centralized error handling
- Mongoose models for Voter, Election, and Candidate with relationships
- Voter registration: field validation, duplicate-email check, password length/match checks, bcrypt hashing, admin auto-detection

### Planned / In Progress
- JWT authentication and protected-route middleware (routes are marked protected but no auth check exists yet)
- Voter login
- Election + candidate CRUD logic (currently placeholder responses)
- Casting and recording votes, with safeguards against duplicate voting
- Live/aggregated results per election
- Persist theme preference

## Getting Started

### Prerequisites
- Node.js 18+
- npm
- A MongoDB connection string

### Backend

```bash
cd backend
npm install
npm run dev     # starts the server with nodemon
```

Create a `backend/.env` file with:

```
PORT=5000
FRONTEND_URL=http://localhost:5173
MONGO_URI=<your MongoDB connection string>
ADMIN_EMAIL=<email to auto-grant admin on registration>
NODE_ENV=development
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app will be available at the local URL Vite prints (typically `http://localhost:5173`).

Other scripts:

```bash
npm run build     # Production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Roadmap

- [x] Scaffold Express server and connect to MongoDB
- [x] Define Mongoose models: Voter, Election, Candidate
- [x] Voter registration with validation and password hashing
- [ ] Implement auth (login, JWT, protected routes)
- [ ] Wire up election + candidate CRUD
- [ ] Implement voting flow with duplicate-vote prevention
- [ ] Implement results aggregation and display
- [ ] Persist theme preference
- [ ] Add tests and CI

## License

Not yet specified.
