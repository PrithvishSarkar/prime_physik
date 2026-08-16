import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type StateObjectInterface from "@/interfaces/exerciseLibrarySliceState";

interface StateInterface {
  exerciseGroup: StateObjectInterface[];
  searchExercise: string;
}

const initialState: StateInterface = {
  exerciseGroup: [],
  searchExercise: "",
};

const exerciseListSlice = createSlice({
  name: "exerciseListSlice",
  initialState,
  reducers: {
    setExerciseGroup: (
      state: StateInterface,
      action: PayloadAction<StateObjectInterface[]>,
    ) => {
      state.exerciseGroup = action.payload;
    },
    setSearchExercise: (
      state: StateInterface,
      action: PayloadAction<string>,
    ) => {
      state.searchExercise = action.payload;
    },
  },
});

export const { setExerciseGroup, setSearchExercise } =
  exerciseListSlice.actions;

export default exerciseListSlice.reducer;
