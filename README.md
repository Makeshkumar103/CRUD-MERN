# CRUD JSON

A full-stack CRUD application with React frontend and Express/Node.js backend, using a JSON file as the database.

## Project Structure

```
CRUD-JSON/
├── react/              # React frontend (CRA + Tailwind)
│   └── src/
│       ├── App.js              # Parent component (state, API calls)
│       ├── component/
│       │   ├── FormInput.js    # Input form for create/update
│       │   └── Table.js        # User list with edit/delete
│       └── public/index.html
│
├── server/             # Express backend
│   ├── index.js        # API routes (GET, POST, PATCH, DELETE)
│   └── samples.json    # File-based database
│
└── ARCHITECTURE.md     # Flow diagram & component connections
```

## Prerequisites

- Node.js >= 18
- npm

## Getting Started

### 1. Start the Server

```bash
cd server
npm install
node index.js
```

Server runs on `http://localhost:8000`

### 2. Start the React Client

```bash
cd react
npm install
npm start
```

Client runs on `http://localhost:3002` (configured via CORS)

## API Endpoints

| Method | Endpoint         | Description      |
|--------|------------------|------------------|
| GET    | `/users`         | Fetch all users  |
| POST   | `/users`         | Create a user    |
| PATCH  | `/users/:id`     | Update a user    |
| DELETE | `/users/:id`     | Delete a user    |

## Tech Stack

- **Frontend:** React 19, Axios, Tailwind CSS
- **Backend:** Express 5, CORS
- **Database:** JSON file (`samples.json`)
