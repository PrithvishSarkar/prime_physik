import { toast } from "sonner";
import type WorkoutPlanFetchDataResponseInterface from "@/interfaces/workoutPlanFetchData";
import type { AppDispatch } from "@/reduxToolkit/store";
import {
  setGoal,
  setFrequency,
  setLevel,
  setWorkouts,
} from "@/reduxToolkit/slices/workoutPlanSlice";

const workoutPlanFetchDataGetApiCall = async (dispatch: AppDispatch) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const WORKOUT_PLAN_PATH = import.meta.env.VITE_WORKOUT_PLAN_PATH;
  const API_URL = BACKEND_URL + WORKOUT_PLAN_PATH;

  try {
    const response: WorkoutPlanFetchDataResponseInterface = await (
      await fetch(API_URL, { method: "GET", credentials: "include" })
    ).json();

    if (response.status === "failure" || !response.data) {
      toast.error(response.message);
      return;
    }

    toast.success(response.message);

    const { goal, level, frequency, workouts } = response.data;

    dispatch(setGoal(goal));
    dispatch(setLevel(level));
    dispatch(setFrequency(frequency));
    dispatch(setWorkouts(workouts));
  } catch (error) {
    console.error(error);
    toast.error("Error Fetching Workout Plan.");
  }
};

export default workoutPlanFetchDataGetApiCall;
