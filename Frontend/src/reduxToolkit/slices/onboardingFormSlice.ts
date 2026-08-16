import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type StateInterface from "@/interfaces/onboardingFormSliceState";

const initialState: StateInterface = {
  name: "",
  email: "",
  age: undefined,
  gender: undefined,
  height: undefined,
  weight: undefined,
  workoutFrequency: undefined,
  fitnessGoal: undefined,
  experienceLevel: undefined,
};

const onboardingFormSlice = createSlice({
  name: "onboardingFormSlice",
  initialState,
  reducers: {
    setName: (state: StateInterface, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state: StateInterface, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setAge: (state: StateInterface, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setGender: (
      state: StateInterface,
      action: PayloadAction<"male" | "female" | "others" | undefined>,
    ) => {
      state.gender = action.payload;
    },
    setHeight: (state: StateInterface, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    setWeight: (state: StateInterface, action: PayloadAction<number>) => {
      state.weight = action.payload;
    },
    setWorkoutFrequency: (
      state: StateInterface,
      action: PayloadAction<3 | 4 | 5 | 6>,
    ) => {
      state.workoutFrequency = action.payload;
    },
    setFitnessGoal: (
      state: StateInterface,
      action: PayloadAction<
        "muscle_building" | "fat_loss" | "strength_gain" | "general_fitness"
      >,
    ) => {
      state.fitnessGoal = action.payload;
    },
    setExperienceLevel: (
      state: StateInterface,
      action: PayloadAction<"beginner" | "intermediate" | "advanced">,
    ) => {
      state.experienceLevel = action.payload;
    },
    reset: (state: StateInterface) => {
      state.name = "";
      state.email = "";
      state.age = undefined;
      state.gender = undefined;
      state.height = undefined;
      state.weight = undefined;
      state.workoutFrequency = undefined;
      state.fitnessGoal = undefined;
      state.experienceLevel = undefined;
    },
  },
});

export const {
  setName,
  setEmail,
  setAge,
  setGender,
  setHeight,
  setWeight,
  setWorkoutFrequency,
  setFitnessGoal,
  setExperienceLevel,
  reset,
} = onboardingFormSlice.actions;

export default onboardingFormSlice.reducer;
