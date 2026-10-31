# PrimePhysik

> A full-stack workout planning, logging, and tracking system built to help users follow a personalized training plan, record their workouts, and visualize their training performance.

**PrimePhysik** is an MVP (Version 1) designed around the complete workout journey: registration, personalized onboarding, workout planning, exercise logging, workout history, and performance analytics.

---

## ✨ Features

### 🔐 Authentication & Authorization

- User registration and login
- JWT-based authentication
- Password hashing with Bcrypt
- Cookie-based request handling
- Role-Based Access Control (RBAC)
- Protected routes are highly guarded
- API-driven authorization checks
- Centralized error handling
- Security middleware with Helmet
- CORS configuration
- Auth-aware navigation
- Guest and authenticated user separation

PrimePhysik heavily guards its application pages. Unauthenticated users cannot access protected functionality, while authenticated users cannot navigate back to authentication pages through URL manipulation alone.

---

## 🏋️ Personalized Workout Planning

After registration, a user is required to complete onboarding before accessing the rest of the application.

The onboarding process collects:

- Age
- Gender
- Height
- Weight
- Workout frequency
- Fitness goal
- Experience level

Based on the user's workout frequency, fitness goal, and experience level, **PrimePhysik** provides a predefined workout plan organized day-wise.

Users can expand each workout day to explore the exercises included in their plan.

---

## 💪 Exercise Library

The Exercises page is available to both guests and authenticated users.

Exercises are grouped by **primary target muscle** and presented through expandable accordion sections.

Each exercise provides:

- Primary target muscle
- Required equipment
- Exercise information
- Instructions for performing the exercise

Authenticated users additionally receive a **Log Workout** action that takes them directly to workout logging with the selected exercise pre-populated.

Guest users can explore the exercise library but cannot log workouts.

---

## 📝 Workout Logging

PrimePhysik provides a set-based workout logging experience.

A user can:

1. Select an exercise.
2. Enter the weight used.
3. Enter the number of reps.
4. Add the set.
5. Add additional sets as needed.
6. Finish the exercise to submit the completed exercise.

When an exercise is finished, the workout is persisted through an API request and immediately becomes available in the **Today's Session** section.

The Today's Session data is fetched from the database through the backend API rather than relying solely on client-side state.

---

## 📚 Workout History

The History page provides a complete record of previously logged workouts.

Workouts are:

- Grouped by date
- Ordered from newest to oldest
- Displayed using expandable accordions

PrimePhysik also provides an empty state when a user has not logged any workouts, encouraging them to begin training and recording their progress.

---

## 📊 Performance Dashboard

After accumulating workout data, users can view their performance through the Dashboard.

The dashboard includes analytics such as:

- Weekly adherence
- Training plan
- Total weekly reps
- Total weekly weight lifted
- Rep count analytics
- Weight lifted analytics
- Reps by muscle group
- Recent exercises
- Top exercises

Dashboard data is calculated through MongoDB aggregation pipelines, allowing workout information to be fetched and processed efficiently on the backend.

An empty state is displayed when there is insufficient recent workout data.

---

## 👤 Profile Management

Users can update their profile as their physical characteristics and training preferences change.

The profile supports changes to information such as:

- Weight
- Workout frequency
- Fitness goal
- Experience level

This allows the user's training configuration to evolve as their fitness journey progresses.

---

## 🔒 Password Requirements

When registering or resetting a password, users must follow these rules:

- Minimum **8 characters** without spaces
- Must contain **uppercase** and **lowercase** letters
- Must contain at least **one number**
- Must contain at least **one special character**

---

## 🧭 Application Pages

### Guest Users

- Landing Page
- Exercises Page
- Login / Register Page
- Not Found Page

### Authenticated Users

- Landing Page
- Exercises Page
- Profile Page
- Dashboard Page
- My Plan Page
- Log Workout Page
- History Page
- Onboarding Page
- Not Found Page

The onboarding page is specifically restricted to registered users who have not completed their onboarding process.

---

## 🔄 User Flow

The typical PrimePhysik user journey looks like this:

```text
Landing Page
      │
      ▼
Register
      │
      ▼
Account Created
      │
      ▼
Onboarding
      │
      ├── Personal Information
      ├── Workout Frequency
      ├── Fitness Goal
      └── Experience Level
      │
      ▼
Personalized Workout Plan
      │
      ▼
Exercise Details
      │
      ▼
Log Workout
      │
      ├── Add Sets
      ├── Enter Weight
      └── Enter Reps
      │
      ▼
Today's Session
      │
      ▼
Workout History
      │
      ▼
Performance Dashboard
```

The application's route protection and backend authorization work together so that a user cannot bypass required application states simply by manually modifying URLs.

---

## 🛠️ Tech Stack & Dependencies

### Frontend

| Technology / Package | Version | Purpose |
| --- | --- | --- |
| **React** | `^19.2.0` | UI Library |
| **React DOM** | `^19.2.0` | DOM Renderer for React |
| **Vite** | `^7.2.4` | Build tool |
| **TypeScript** | `~5.9.3` | Type safety |
| **React Router** | `^7.11.0` | Client-side routing |
| **Redux Toolkit** | `^2.11.2` | State management |
| **React-Redux** | `^9.2.0` | React bindings for Redux |
| **Tailwind CSS** | `^4.1.18` | Utility-first CSS framework |
| **@tailwindcss/vite** | `^4.1.18` | Vite plugin for Tailwind CSS v4 |
| **Radix UI components** | `^1.3.3+` | Accessible primitive UI components |
| **Lucide React** | `^0.563.0` | Icon set |
| **Recharts** | `^3.8.1` | Analytics and performance charts |
| **Sonner** | `^2.0.7` | Toast notification library |
| **Next-Themes** | `^0.4.6` | Theme management |

> The frontend also uses dynamic imports with Suspense-based loaders and network loaders to improve the application's loading experience.

### Backend

| Technology / Package | Version | Purpose |
| --- | --- | --- |
| **Node.js** | `>=24.0.0` | JavaScript Runtime |
| **Express.js** | `^5.2.1` | Web framework |
| **TypeScript** | `^5.9.3` | Type safety |
| **Mongoose** | `^9.1.1` | MongoDB ODM |
| **jsonwebtoken (JWT)** | `^9.0.3` | Authentication tokens |
| **bcryptjs** | `^3.0.3` | Password hashing |
| **cookie-parser** | `^1.4.7` | Cookie handling middleware |
| **CORS** | `^2.8.5` | Cross-Origin Resource Sharing |
| **Helmet** | `^8.1.0` | HTTP Security Headers |
| **dotenv** | `^17.2.3` | Environment variable management |
| **tsx** | `^4.21.0` | TypeScript Execution & Live reload watcher |

> Use MongoDB Atlas for NoSQL Database.

## 🏗️ Architecture

PrimePhysik follows an MVC-oriented backend architecture.

```text
React + Vite Frontend
        │
        │ HTTP / API Requests
        ▼
Express.js API
        │
        ├── Authentication
        ├── Authorization
        ├── Data Manipulation
        ├── Validation
        └── Error Handling
        │
        ▼
Mongoose ODM
        │
        ▼
MongoDB Atlas
```

> The backend handles authentication, authorization, workout operations, user data, and analytical queries. MongoDB aggregation pipelines are used for dashboard-oriented calculations.

## 🔒 Route & Access Protection

Security and application state are enforced at multiple levels.

For example:

```text
Guest
  ├── Landing
  ├── Exercises
  └── Login / Register

Authenticated + Not Onboarded
  └── Onboarding

Authenticated + Onboarded
  ├── Dashboard
  ├── My Plan
  ├── Log Workout
  ├── History
  ├── Profile
  └── Exercises
```

> The frontend uses API responses to determine authentication and onboarding state, while protected API resources are guarded by backend authentication and authorization mechanisms.

## 🌐 API Overview

Protected routes require valid JWT cookie sessions.

| Method | Endpoint | Description |
| --- | --- | --- |
| **POST** | `/auth/register` | Register new user |
| **POST** | `/auth/login` | Login existing user |
| **POST** | `/auth/logout` | Logout (clears auth cookie) |
| **GET** | `/auth/name-email` | Fetch user's basic details (name and email) |
| **GET** | `/auth/verify-user` | Verify user authenticity & onboarding status |
| **GET** | `/users/me` | Fetch logged-in user profile details |
| **PUT** | `/users/me/:id` | Update user profile details |
| **GET** | `/exercises` | Get exercise library |
| **GET** | `/plans` | Get personalized workout plan |
| **GET** | `/logs` | Get today's workout logs |
| **POST** | `/logs` | Log a new exercise |
| **GET** | `/logs/history` | Get complete workout history |
| **GET** | `/dashboard` | Fetch performance analytics & dashboard metrics |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v24 or higher recommended)
- **npm** (v10 or higher recommended)
- **MongoDB** database (MongoDB Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/PrithvishSarkar/prime_physik.git
cd PrimePhysik
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` directory:

```env
DB_CONNECTION_STRING=<your_mongodb_connection_string>
JWT_SECRET_KEY=<your_secret_key>
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

Run the backend development server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../Frontend
npm install
```

Create a `.env` file in the `Frontend` directory:

```env
VITE_BACKEND_URL=http://localhost:4000/api/v1
VITE_LOGIN_PATH=/auth/login
VITE_REGISTER_PATH=/auth/register
VITE_LOGOUT_PATH=/auth/logout
VITE_USER_BASIC_DETAILS_PATH=/auth/name-email
VITE_VERIFY_USER_AUTHENTICITY=/auth/verify-user
VITE_USER_PROFILE_PATH=/users/me
VITE_EXERCISES_PATH=/exercises
VITE_WORKOUT_PLAN_PATH=/plans
VITE_LOG_WORKOUT_PATH=/logs
VITE_WORKOUT_HISTORY_PATH=/logs/history
VITE_DASHBOARD_PATH=/dashboard
```

Run the frontend development server:

```bash
npm run dev
```

> The application will be available at `http://localhost:5173`.

---

## 🚢 Deployment

### Backend → Render

1. Create a new **Web Service** on Render.
2. Connect the GitHub repository.
3. Set the root directory to `Backend`.
4. Add all environment variables from the Backend's `.env` configuration
5. Set Build Command: `npm install --include=dev && npm run build`
6. Set Start Command: `npm start`

### Frontend → Vercel

1. Import the GitHub repository on Vercel
2. Set the root directory to `Frontend`
3. Framework Preset: **Vite**
4. Add all environment variables listed in the Frotend's `.env` configuration
5. Click **Deploy**

> **Note:** After deployment, update `FRONTEND_URL` on Render's Environment Variables and `VITE_BACKEND_URL` on Vercel's Environment Variables.

---

## 📈 Data & Analytics

One of the key architectural aspects of PrimePhysik is its use of MongoDB aggregation pipelines for analytics.

Instead of retrieving all workout records and calculating every metric on the client, dashboard-related data is aggregated directly on the database side.

```text
Weekly Adherence
  │
  ├── Weekly Reps
  ├── Weekly Weight
  ├── Rep Trends
  ├── Weight Trends
  ├── Muscle Group Distribution
  ├── Recent Exercises
  └── Top Exercises
```

This approach keeps analytics processing close to the data layer while allowing the React frontend to focus primarily on high-performance visualization.

---

## 🎨 UI & UX

PrimePhysik uses **ShadCN UI** and **Tailwind CSS** as the foundation of its interface.

The application makes extensive use of:

- Accordions for workouts and exercise history
- Modals for exercise information
- Cards for exercise metadata
- Empty states for situations where no workout data exists
- Loading states and Suspense loaders
- Network-aware loading experiences
- Data visualizations powered by **Recharts**

Empty states are deliberately used throughout the application to guide users toward meaningful next actions instead of presenting blank screens.

---

## ⭐ Final Note

PrimePhysik is built around a simple idea:

> Plan your training. Log your work. Track your progress.

From the first registration through months of workout history and performance analytics, the application brings planning, execution, and progress tracking into one cohesive experience.
