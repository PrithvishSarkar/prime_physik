import React from "react";
import type { ExerciseInterface } from "@/interfaces/exerciseLibrarySliceState";
import type StateInterface from "@/interfaces/logWorkoutSliceState";
import type { AppDispatch } from "@/reduxToolkit/store";
import { reset } from "@/reduxToolkit/slices/logWorkoutSlice";
import { toast } from "sonner";
import { setTodaySession } from "@/reduxToolkit/slices/logWorkoutTodaySessionSlice";
import type ResponseInterface from "@/interfaces/logWorkoutTodaySessionResponse";

const logWorkoutFinishExercisePostApiCall = async (
  state: StateInterface,
  setExerciseDetails: React.Dispatch<
    React.SetStateAction<ExerciseInterface | undefined>
  >,
  dispatch: AppDispatch,
) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const LOG_WORKOUT_PATH = import.meta.env.VITE_LOG_WORKOUT_PATH;
  const API_URL = BACKEND_URL + LOG_WORKOUT_PATH;
  
  try {
    const response: ResponseInterface = await (
      await fetch(API_URL, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      })
    ).json();

    if (response.status === "failure" || !response.data) {
      toast.error(response.message);
      return;
    }

    toast.success(response.message);
    setExerciseDetails(undefined);
    dispatch(reset());
    dispatch(setTodaySession(response.data));
  } catch (error) {
    console.error(error);
    toast.error("Workout Logging Error.");
  }
};

export default logWorkoutFinishExercisePostApiCall;
