# Project Architecture - CRUD JSON

A full-stack CRUD application with React frontend and Express/Node.js backend using a JSON file as the database.

---

## Architecture Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CLIENT (React)                                │
│                                                                         │
│  ┌──────────────┐    ┌──────────────────┐    ┌────────────────────┐    │
│  │  FormInput    │    │      App.js      │    │      Table         │    │
│  │  (component)  │◄──►│   (Parent)       │◄──►│  (component)       │    │
│  │               │    │                  │    │                    │    │
│  │ - name input  │    │ - state: details │    │ - displays users   │    │
│  │ - age input   │    │ - state: users   │    │ - Edit button      │    │
│  │ - email input │    │ - state: editIdx │    │ - Delete button    │    │
│  │ - Submit/Upd  │    │                  │    │                    │    │
│  └───────┬───────┘    └────────┬─────────┘    └────────┬───────────┘    │
│          │                     │                       │                │
│          │    Props passed     │      Props passed      │                │
│          ◄───── down ─────────►◄─────── down ──────────►                │
│                                 │                                       │
│                          HTTP Requests (axios)                          │
│                   GET /users  |  POST /users                            │
│                  PATCH /users/:id | DELETE /users/:id                   │
└──────────────────────────────┬──────────────────────────────────────────┘
                               │
                               │  CORS (localhost:3002 → localhost:8000)
                               │
┌──────────────────────────────▼──────────────────────────────────────────┐
│                          SERVER (Express)                               │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │                       index.js                                   │   │
│  │                                                                  │   │
│  │  GET    /users      →  Read all users                            │   │
│  │  POST   /users      →  Create user (auto-increment id)          │   │
│  │  PATCH  /users/:id  →  Update user by id                        │   │
│  │  DELETE /users/:id  →  Delete user by id                        │   │
│  │                                                                  │   │
│  │  All mutations persist to samples.json via fs.writeFile          │   │
│  └──────────────────────────────┬───────────────────────────────────┘   │
│                                  │                                      │
└──────────────────────────────────┼──────────────────────────────────────┘
                                   │
                                   ▼
                         ┌─────────────────┐
                         │   samples.json   │
                         │  (File DB)       │
                         │                  │
                         │  [{id, name,     │
                         │    age, email}]   │
                         └─────────────────┘
```

---

## Component Tree & Data Flow

```
App.js
 ├── state: details {name, age, email, id}
 ├── state: users []
 ├── state: editIndex (null | id)
 │
 ├── FormInput
 │     props: details, handleChange, handleSubmit, editIndex
 │     role: renders form inputs & submit button
 │
 └── Table
       props: users, handleDelete, handleEdit
       role: renders table with user data & action buttons
```

### Data Flow

1. **App mounts** → `useEffect` calls `getAllUsers()` → axios GET `/users` → populates `users` state
2. **Create** → Form submit → axios POST `/users` → append response to `users` state
3. **Update** → Click Edit (Table) → populate form → Submit → axios PATCH `/users/:id` → update `users` state
4. **Delete** → Click Delete (Table) → axios DELETE `/users/:id` → filter out from `users` state

---

## File Connections

| File | Connects To | How |
|------|-------------|-----|
| `App.js` | `FormInput.js` | Imports and passes `details`, `handleChange`, `handleSubmit`, `editIndex` as props |
| `App.js` | `Table.js` | Imports and passes `users`, `handleDelete`, `handleEdit` as props |
| `App.js` | `server/index.js` | HTTP via axios (GET, POST, PATCH, DELETE) |
| `App.js` | `App.css` | Imports styles |
| `index.js` (react) | `App.js` | ReactDOM renders App into DOM |
| `server/index.js` | `samples.json` | Uses `require()` to load, `fs.writeFile` to persist |
