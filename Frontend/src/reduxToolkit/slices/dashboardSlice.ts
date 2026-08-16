import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type StateInterface from "@/interfaces/dashboardSliceState";
import type {
  RecentExercisesInterface,
  RepCountDayWiseInterface,
  RepCountMuscleWiseInterface,
  TopExercisesInterface,
  TrainingPlanInterface,
  WeightLiftedDayWiseInterface,
} from "@/interfaces/dashboardSliceState";

const initialState: StateInterface & { isDataPresent: boolean } = {
  isDataPresent: false,
  weeklyAdherence: undefined,
  trainingPlan: [],
  totalWeeklyReps: undefined,
  totalWeeklyWeightLifted: undefined,
  repCountDayWise: [],
  weightLiftedDayWise: [],
  repCountMuscleWise: [],
  recentExercises: [],
  topExercises: [],
};

const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState,
  reducers: {
    setIsDataPresent: (
      state: { isDataPresent: boolean },
      action: PayloadAction<boolean>,
    ) => {
      state.isDataPresent = action.payload;
    },
    setWeeklyAdherence: (
      state: StateInterface,
      action: PayloadAction<number>,
    ) => {
      state.weeklyAdherence = action.payload;
    },
    setTrainingPlan: (
      state: StateInterface,
      action: PayloadAction<TrainingPlanInterface[]>,
    ) => {
      state.trainingPlan = action.payload;
    },
    setTotalWeeklyReps: (
      state: StateInterface,
      action: PayloadAction<number>,
    ) => {
      state.totalWeeklyReps = action.payload;
    },
    setTotalWeeklyWeightLifted: (
      state: StateInterface,
      action: PayloadAction<number>,
    ) => {
      state.totalWeeklyWeightLifted = action.payload;
    },
    setRepCountDayWise: (
      state: StateInterface,
      action: PayloadAction<RepCountDayWiseInterface[]>,
    ) => {
      state.repCountDayWise = action.payload;
    },
    setWeightLiftedDayWise: (
      state: StateInterface,
      action: PayloadAction<WeightLiftedDayWiseInterface[]>,
    ) => {
      state.weightLiftedDayWise = action.payload;
    },
    setRepCountMuscleWise: (
      state: StateInterface,
      action: PayloadAction<RepCountMuscleWiseInterface[]>,
    ) => {
      state.repCountMuscleWise = action.payload;
    },
    setRecentExercises: (
      state: StateInterface,
      action: PayloadAction<RecentExercisesInterface[]>,
    ) => {
      state.recentExercises = action.payload;
    },
    setTopExercises: (
      state: StateInterface,
      action: PayloadAction<TopExercisesInterface[]>,
    ) => {
      state.topExercises = action.payload;
    },
    reset: (state: StateInterface) => {
      state.weeklyAdherence = undefined;
      state.trainingPlan = [];
      state.totalWeeklyReps = undefined;
      state.totalWeeklyWeightLifted = undefined;
      state.repCountDayWise = [];
      state.weightLiftedDayWise = [];
      state.repCountMuscleWise = [];
      state.recentExercises = [];
      state.topExercises = [];
    },
  },
});

export const {
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
  reset,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
