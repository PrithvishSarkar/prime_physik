import type WorkoutHistoryFetchDataResponseInterface from "@/interfaces/workoutHistoryFetchDataResponse";
import {
  setTotalPages,
  setWorkoutHistory,
} from "@/reduxToolkit/slices/workoutHistorySlice";
import type { AppDispatch } from "@/reduxToolkit/store";
import { toast } from "sonner";

const workoutHistoryFetchDataGetApiCall = async (
  page: number,
  dispatch: AppDispatch,
) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const WORKOUT_HISTORY_PATH = import.meta.env.VITE_WORKOUT_HISTORY_PATH;
  const API_CALL_URL = BACKEND_URL + WORKOUT_HISTORY_PATH + "/" + page;

  try {
    const response: WorkoutHistoryFetchDataResponseInterface = await (
      await fetch(API_CALL_URL, { method: "GET", credentials: "include" })
    ).json();

    if (response.status === "failure" || !response.data) {
      toast.error(response.message);
      return;
    }

    toast.success(response.message);

    // Set Backend Data to Workout History - if data available else an Empty Array.
    dispatch(setWorkoutHistory(response.data.length ? response.data : []))

    response.totalPages && dispatch(setTotalPages(response.totalPages));
  } catch (error) {
    console.log(error);
    toast.error("Failed Fetching Workout History.");
  }
};

export default workoutHistoryFetchDataGetApiCall;
