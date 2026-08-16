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
- Guest and legit users seperation

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

## 🛠️ Tech Stack

### Frontend

- **React.js**
- **Vite**
- **TypeScript**
- **ShadCN UI**
- **Tailwind CSS**
- **Redux Toolkit**
- **React Router**
- **Lucide React**
- **Recharts**

The frontend also uses dynamic imports with Suspense-based loaders and network loaders to improve the application's loading experience.

### Backend

- **Node.js**
- **Express.js**
- **TypeScript**
- **JSON Web Token**
- **Bcrypt**
- **Cookie Parser**
- **CORS**
- **Helmet**
- **RBAC Authorization**
- **MVC Architecture**
- **Centralized Error Handling**

### Database

- **MongoDB**
- **Mongoose ODM**
- **CRUD operations**
- **MongoDB Aggregation Pipeline**

---

## 🏗️ Architecture

PrimePhysik follows an MVC-oriented backend architecture.

At a high level:

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

The backend handles authentication, authorization, workout operations, user data, and analytical queries. MongoDB aggregation pipelines are used for dashboard-oriented calculations.

---

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

The frontend uses API responses to determine authentication and onboarding state, while protected API resources are guarded by backend authentication and authorization mechanisms.

---

## 🚀 Getting Started

### Prerequisites

Before running PrimePhysik locally, make sure you have:

- Node.js installed
- NPM or any other Node package manager
- A MongoDB database / MongoDB Atlas cluster

### Installation

Clone the repository:

```bash
git clone https://github.com/PrithvishSarkar/prime_physik.git
cd PrimePhysik
```

Install the frontend dependencies:

```bash
cd Frontend
npm install
```

Install the backend dependencies:

```bash
cd ../Backend
npm install
```

---

## ▶️ Running the Application

### Start the backend

```bash
cd Backend
npm run dev
```

### Start the frontend

```bash
cd Frotend
npm run dev
```

---

## 📈 Data & Analytics

One of the key architectural aspects of PrimePhysik is its use of MongoDB aggregation pipelines for analytics.

Instead of retrieving all workout records and calculating every metric on the client, dashboard-related data can be aggregated on the database side.

This supports metrics including:

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

This approach keeps analytics logic close to the data layer while allowing the frontend to focus primarily on visualization.

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
- Data visualizations powered by Recharts

Empty states are deliberately used throughout the application to guide users toward meaningful next actions instead of presenting blank screens.

## ⭐ Final Note

PrimePhysik is built around a simple idea:

> Plan your training. Log your work. Track your progress.

From the first registration through months of workout history and performance analytics, the application brings planning, execution, and progress tracking into one cohesive experience.
