import type StateInterface from "@/interfaces/exerciseDetailModalSliceState";
import type { ExerciseInterface } from "@/interfaces/exerciseLibrarySliceState";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: StateInterface = {
  isModalOpen: false,
  exerciseDetail: undefined,
};

const exerciseDetailModalSlice = createSlice({
  name: "exerciseDetailModalSlice",
  initialState,
  reducers: {
    setIsModalOpen: (state: StateInterface, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setExerciseDetail: (
      state: StateInterface,
      action: PayloadAction<ExerciseInterface | undefined>,
    ) => {
      state.exerciseDetail = action.payload;
    },
    reset: (state: StateInterface) => {
      state.isModalOpen = false;
      state.exerciseDetail = undefined;
    },
  },
});

export const { setIsModalOpen, setExerciseDetail, reset } =
  exerciseDetailModalSlice.actions;

export default exerciseDetailModalSlice.reducer;
