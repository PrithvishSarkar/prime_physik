import type { NavigateFunction } from "react-router";
import { toast } from "sonner";
import { setIsAuthentic, setIsOnboarded } from "@/reduxToolkit/slices/userAuthenticitySlice";
import type { AppDispatch } from "@/reduxToolkit/store";

const logout = async (navigate: NavigateFunction, dispatch: AppDispatch) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const LOGOUT_PATH = import.meta.env.VITE_LOGOUT_PATH;
  const API_URL = BACKEND_URL + LOGOUT_PATH;

  try {
    await fetch(API_URL, {
      method: "POST",
      credentials: "include",
    });

    toast.success("Logged Out Successfully.");
    dispatch(setIsAuthentic(false));
    dispatch(setIsOnboarded(undefined));
    navigate("/login");
  } catch (error) {
    console.log(error);
    toast.error("Logout Failure.");
  }
};

export default logout;
