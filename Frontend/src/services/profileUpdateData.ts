import React, { type SetStateAction } from "react";
import type StateInterface from "@/interfaces/profileDetailsSliceState";
import type ProfileUpdateDataResponseInterface from "@/interfaces/profileUpdateDataResponse";
import type { AppDispatch } from "@/reduxToolkit/store";
import {
  setAge,
  setGender,
  setHeight,
  setWeight,
  setWorkoutFrequency,
  setFitnessGoal,
  setExperienceLevel,
  setEditProfile
} from "@/reduxToolkit/slices/profileDetailsSlice";
import { toast } from "sonner";

const profileUpdateDataPutApiCall = async (
  dispatch: AppDispatch,
  state: StateInterface,
  setIsLoading: React.Dispatch<SetStateAction<boolean>>,
) => {
  // Preparing Appropriate Body To Send
  const bodyToBeSent = {
    age: state.age,
    gender: state.gender,
    height: state.height,
    weight: state.weight,
    workoutFrequency: state.workoutFrequency,
    fitnessGoal: state.fitnessGoal,
    experienceLevel: state.experienceLevel,
  };

  // Backend API Call URL
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const PROFILE_PATH = import.meta.env.VITE_USER_PROFILE_PATH;
  const API_URL = BACKEND_URL + PROFILE_PATH + "/" + state.profileId;

  setIsLoading(true);

  // Calling Update Profile API
  try {
    const response: ProfileUpdateDataResponseInterface = await (
      await fetch(API_URL, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyToBeSent),
      })
    ).json();

    // Error Handling
    if (response.status === "failure" || !response.data) {
      toast.error(response.message);
      setIsLoading(false);
      return;
    }

    toast.success(response.message);

    const {
      age,
      gender,
      height,
      weight,
      workoutFrequency,
      fitnessGoal,
      experienceLevel,
    } = response.data;

    // Updating State
    dispatch(setAge(age));
    dispatch(setGender(gender));
    dispatch(setHeight(height));
    dispatch(setWeight(weight));
    dispatch(setWorkoutFrequency(workoutFrequency));
    dispatch(setFitnessGoal(fitnessGoal));
    dispatch(setExperienceLevel(experienceLevel));
    dispatch(setEditProfile());
  } catch (error) {
    toast.error("Error Editing Profile.");
    setIsLoading(false);
    console.error(error);
  }

  setIsLoading(false);
};

export default profileUpdateDataPutApiCall;
