import type ResponseInterface from "@/interfaces/logWorkoutTodaySessionResponse";
import { setTodaySession } from "@/reduxToolkit/slices/logWorkoutTodaySessionSlice";
import type { AppDispatch } from "@/reduxToolkit/store";
import { toast } from "sonner";

const logWorkoutFetchSessionGetApiCall = async (dispatch: AppDispatch) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const LOG_WORKOUT_PATH = import.meta.env.VITE_LOG_WORKOUT_PATH;
  const API_URL = BACKEND_URL + LOG_WORKOUT_PATH;

  try {
    const response: ResponseInterface = await (
      await fetch(API_URL, { method: "GET", credentials: "include" })
    ).json();

    if (response.status === "failure" || !response.data) {
      toast.error(response.message);
      return;
    }

    toast.success(response.message);
    dispatch(setTodaySession(response.data));
  } catch (error) {
    console.error(error);
    toast.error("Today's Session Fetching Data Error.");
  }
};

export default logWorkoutFetchSessionGetApiCall;
