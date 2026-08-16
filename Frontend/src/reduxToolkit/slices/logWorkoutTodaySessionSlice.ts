import type { FetchLogWorkoutDataObjectInterface } from "@/interfaces/logWorkoutTodaySessionResponse";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: FetchLogWorkoutDataObjectInterface[] = [];

const logWorkoutTodaySessionSlice = createSlice({
  name: "logWorkoutTodaySessionSlice",
  initialState,
  reducers: {
    setTodaySession: (
      _state: FetchLogWorkoutDataObjectInterface[],
      action: PayloadAction<FetchLogWorkoutDataObjectInterface[]>,
    ) => {
      return action.payload;
    },
  },
});

export const { setTodaySession } = logWorkoutTodaySessionSlice.actions;

export default logWorkoutTodaySessionSlice.reducer;
