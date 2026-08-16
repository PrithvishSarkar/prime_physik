import type DashboardFetchDataResponseInterface from "@/interfaces/dashboardFetchDataResponse";
import { toast } from "sonner";
import {
  setIsDataPresent,
  setWeeklyAdherence,
  setTrainingPlan,
  setTotalWeeklyReps,
  setTotalWeeklyWeightLifted,
  setRepCountDayWise,
  setWeightLiftedDayWise,
  setRepCountMuscleWise,
  setRecentExercises,
  setTopExercises,
} from "@/reduxToolkit/slices/dashboardSlice";
import type { AppDispatch } from "@/reduxToolkit/store";

const dashboardFetchDataGetApiCall = async (dispatch: AppDispatch) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const DASHBOARD_PATH = import.meta.env.VITE_DASHBOARD_PATH;
  const API_URL = BACKEND_URL + DASHBOARD_PATH;

  const response: DashboardFetchDataResponseInterface = await (
    await fetch(API_URL, { method: "GET", credentials: "include" })
  ).json();

  if (response.status === "failure" || !response.data) {
    toast.error(response.message);
    dispatch(setIsDataPresent(false));
    return;
  }

  // Destructuring Response Data
  const {
    weeklyAdherence,
    trainingPlanRefined,
    totalWeeklyReps,
    totalWeeklyWeightLifted,
    repCountDayWiseRefined,
    weightLiftedDayWiseRefined,
    repCountMuscleWiseRefined,
    recentExercisesTeaser,
    topExercisesRefined,
  } = response.data;

  // Updating RTK Slice State Variables
  dispatch(setIsDataPresent(true));
  dispatch(setWeeklyAdherence(weeklyAdherence));
  dispatch(setTrainingPlan(trainingPlanRefined));
  dispatch(setTotalWeeklyReps(totalWeeklyReps));
  dispatch(setTotalWeeklyWeightLifted(totalWeeklyWeightLifted));
  dispatch(setRepCountDayWise(repCountDayWiseRefined));
  dispatch(setWeightLiftedDayWise(weightLiftedDayWiseRefined));
  dispatch(setRepCountMuscleWise(repCountMuscleWiseRefined));
  dispatch(setRecentExercises(recentExercisesTeaser));
  dispatch(setTopExercises(topExercisesRefined));
};

export default dashboardFetchDataGetApiCall;
