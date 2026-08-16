import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type StateInterface from "@/interfaces/profileDetailsSliceState";

const initialState: StateInterface = {
  profileId: "",
  name: "",
  email: "",
  age: undefined,
  gender: undefined,
  height: undefined,
  weight: undefined,
  BMI: undefined,
  workoutFrequency: undefined,
  fitnessGoal: undefined,
  experienceLevel: undefined,
  editProfile: false,
};

const profileDetailsSlice = createSlice({
  name: "profileDetailsSlice",
  initialState,
  reducers: {
    setProfileId: (state: StateInterface, action: PayloadAction<string>) => {
      state.profileId = action.payload;
    },
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
      action: PayloadAction<"male" | "female" | "others">,
    ) => {
      state.gender = action.payload;
    },
    setHeight: (state: StateInterface, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    setWeight: (state: StateInterface, action: PayloadAction<number>) => {
      state.weight = action.payload;
    },
    setBMI: (state: StateInterface, action: PayloadAction<number>) => {
      state.BMI = action.payload;
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
    setEditProfile: (state: StateInterface) => {
      state.editProfile = !state.editProfile;
    },
  },
});

export const {
  setProfileId,
  setName,
  setEmail,
  setAge,
  setGender,
  setHeight,
  setWeight,
  setBMI,
  setWorkoutFrequency,
  setFitnessGoal,
  setExperienceLevel,
  setEditProfile,
} = profileDetailsSlice.actions;

export default profileDetailsSlice.reducer;
