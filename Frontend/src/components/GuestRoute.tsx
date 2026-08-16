import { Suspense } from "react";
import type { RootState } from "@/reduxToolkit/store";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";
import SpinningLoader from "./SpinningLoader";

const GuestRoute = () => {
  const { isLoading, isAuthentic } = useSelector(
    (state: RootState) => state.userAuthenticitySliceReducer,
  );

  if (isLoading) return <SpinningLoader size={24} />;

  return isAuthentic ? (
    <Navigate to="/plan" replace />
  ) : (
    <Suspense fallback={<SpinningLoader size={24} />}>
      <Outlet />
    </Suspense>
  );
};

export default GuestRoute;
