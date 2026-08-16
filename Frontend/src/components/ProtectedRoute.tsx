import type { RootState } from "@/reduxToolkit/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";
import SpinningLoader from "./SpinningLoader";

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const { isLoading, isAuthentic, isOnboarded } = useSelector(
    (state: RootState) => state.userAuthenticitySliceReducer,
  );

  if (isLoading) return <SpinningLoader size={24} />;

  // Unauthenticated users are redirected to Login Page
  if (!isAuthentic) return <Navigate to="/login" replace />;

  // Authenticated but Unonboarded users are redirected to Onboarding Page
  if (isAuthentic && !isOnboarded && pathname !== "/onboarding")
    return <Navigate to="/onboarding" replace />;

  // Authentic and Onboarded users are inaccessible to Onboarding Page
  if (isAuthentic && isOnboarded && pathname === "/onboarding")
    return <Navigate to="/profile" replace />;

  return <Outlet />;
};

export default ProtectedRoute;
