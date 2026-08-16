import React, { type SetStateAction } from "react";
import type StateInterface from "@/interfaces/onboardingFormSliceState";
import type { NavigateFunction } from "react-router";
import validateFilledData from "./validateOnboardingAndProfileFilledData";
import onboardingSaveInfoPostApiCall from "@/services/onboardingSaveInfo";

const onboardingHandleSaveInfo = (
  state: StateInterface,
  navigate: NavigateFunction,
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
) => {
  const { name, email, ...data } = state;
  const {
    age,
    gender,
    height,
    weight,
    workoutFrequency,
    fitnessGoal,
    experienceLevel,
  } = data;
  if (
    !age ||
    !gender ||
    !height ||
    !weight ||
    !workoutFrequency ||
    !fitnessGoal ||
    !experienceLevel
  )
    return;
  
  const isUserFilledDataValid = validateFilledData({
    age,
    gender,
    height,
    weight,
    workoutFrequency,
    fitnessGoal,
    experienceLevel,
  });

  if (!isUserFilledDataValid) return;

  onboardingSaveInfoPostApiCall(state, navigate, setIsLoading);
};

export default onboardingHandleSaveInfo;
