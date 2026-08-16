import React from "react";
import { Routes, Route } from "react-router";
import { Toaster } from "@/components/ui/sonner";

// Page Wrapper Imports
const Layout = React.lazy(() => import("./components/layout/Layout"));
const GuestRoute = React.lazy(() => import("./components/GuestRoute"));
const ProtectedRoute = React.lazy(() => import("./components/ProtectedRoute"));

// Pages Imports
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const OnboardingPage = React.lazy(() => import("./pages/OnboardingPage"));
const ProfilePage = React.lazy(() => import("./pages/ProfilePage"));
const ExercisesPage = React.lazy(() => import("./pages/ExercisesPage"));
const WorkoutPlanPage = React.lazy(() => import("./pages/WorkoutPlanPage"));
const LogWorkoutPage = React.lazy(() => import("./pages/LogWorkoutPage"));
const WorkoutHistoryPage = React.lazy(
  () => import("./pages/WorkoutHistoryPage"),
);
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

// Miscellaneous Imports
import verifyUserAuthenticityGetApiCall from "./services/userAuthenticity";
import type { AppDispatch } from "./reduxToolkit/store";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    verifyUserAuthenticityGetApiCall(dispatch);
  }, []);

  return (
    <>
      <Routes>
        {/* COMMON ROUTES FOR BOTH AUTHENTICATED AND UNAUTHENTICATED USERS */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
        </Route>

        {/* ROUTES FOR UNAUTHENTICATED USERS ONLY */}
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* ROUTES FOR AUTHENTICATED USERS ONLY */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/plan" element={<WorkoutPlanPage />} />
            <Route path="/log" element={<LogWorkoutPage />} />
            <Route path="/history/:page" element={<WorkoutHistoryPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Route>

        {/* ROUTE IF PATH MATCH NOT FOUND  */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
