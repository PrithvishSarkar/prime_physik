import type { DataObjectInterface } from "@/interfaces/workoutHistorySliceState";
import type StateInterface from "@/interfaces/workoutHistorySliceState";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: StateInterface = {
  workoutHistory: [],
  totalPages: 0,
};

const workoutHistorySlice = createSlice({
  name: "workoutHistorySlice",
  initialState,
  reducers: {
    setTotalPages: (state: StateInterface, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    setWorkoutHistory: (
      state: StateInterface,
      action: PayloadAction<DataObjectInterface[]>,
    ) => {
      state.workoutHistory = action.payload;
    },
  },
});

export const { setTotalPages, setWorkoutHistory } = workoutHistorySlice.actions;

export default workoutHistorySlice.reducer;
