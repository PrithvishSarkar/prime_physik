import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type StateInterface from "@/interfaces/workoutPlanSliceState";
import type { WorkoutInterface } from "@/interfaces/workoutPlanFetchData";

const initialState: StateInterface = {
  goal: undefined,
  frequency: undefined,
  level: undefined,
  workouts: undefined,
};

const workoutPlanSlice = createSlice({
  name: "workoutPlanSlice",
  initialState,
  reducers: {
    setGoal: (
      state: StateInterface,
      action: PayloadAction<
        "muscle_building" | "fat_loss" | "strength_gain" | "general_fitness"
      >,
    ) => {
      state.goal = action.payload;
    },
    setFrequency: (
      state: StateInterface,
      action: PayloadAction<3 | 4 | 5 | 6>,
    ) => {
      state.frequency = action.payload;
    },
    setLevel: (
      state: StateInterface,
      action: PayloadAction<"beginner" | "intermediate" | "advanced">,
    ) => {
      state.level = action.payload;
    },
    setWorkouts: (
      state: StateInterface,
      action: PayloadAction<WorkoutInterface[]>,
    ) => {
      state.workouts = action.payload;
    },
  },
});

export const { setGoal, setFrequency, setLevel, setWorkouts } =
  workoutPlanSlice.actions;

export default workoutPlanSlice.reducer;
