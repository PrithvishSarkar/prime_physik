import { toast } from "sonner";
import type { AppDispatch } from "@/reduxToolkit/store";
import {
  setIsLoading,
  setIsAuthentic,
  setIsOnboarded,
} from "@/reduxToolkit/slices/userAuthenticitySlice";
import type UserAuthenticityFetchDataResponseInterface from "@/interfaces/userAuthenticityFetchDataResponse";

const verifyUserAuthenticityGetApiCall = async (dispatch: AppDispatch) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const VERIFY_USER_AUTHENTICITY_PATH = import.meta.env
    .VITE_VERIFY_USER_AUTHENTICITY;
  const API_CALL_URL = BACKEND_URL + VERIFY_USER_AUTHENTICITY_PATH;

  try {
    const response: UserAuthenticityFetchDataResponseInterface = await (
      await fetch(API_CALL_URL, { method: "GET", credentials: "include" })
    ).json();

    if (response.status === "failure" || !response.data) {
      dispatch(setIsLoading(false));
      dispatch(setIsAuthentic(false));
      return;
    }

    dispatch(setIsLoading(false));
    dispatch(setIsAuthentic(response.data.isAuthentic));
    dispatch(setIsOnboarded(response.data.isOnboarded));
  } catch (error) {
    console.log(error);
    dispatch(setIsLoading(false)); // Allows fallback UI when loading is false
    toast.error("User Authenticity Not Known. Please Refresh Page.");
  }
};

export default verifyUserAuthenticityGetApiCall;
