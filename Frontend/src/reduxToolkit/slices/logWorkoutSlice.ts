import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type StateInterface from "@/interfaces/logWorkoutSliceState";
import type { SetInterface } from "@/interfaces/logWorkoutSliceState";

const initialState: StateInterface = {
  exercise: undefined,
  sets: [],
};

const logWorkoutSlice = createSlice({
  name: "logWorkoutSlice",
  initialState,
  reducers: {
    setExercise: (
      state: StateInterface,
      action: PayloadAction<string | undefined>,
    ) => {
      state.exercise = action.payload;
    },
    setSets: (state: StateInterface, action: PayloadAction<SetInterface>) => {
      state.sets.push(action.payload);
    },
    deleteSet: (state: StateInterface, action: PayloadAction<number>) => {
      state.sets = state.sets.filter((_, index) => index !== action.payload);
    },
    reset: (state: StateInterface) => {
      state.exercise = undefined;
      state.sets = [];
    },
  },
});

export const { setExercise, setSets, deleteSet, reset } = logWorkoutSlice.actions;

export default logWorkoutSlice.reducer;
