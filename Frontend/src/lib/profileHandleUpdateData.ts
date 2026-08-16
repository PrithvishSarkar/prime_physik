import React, { type SetStateAction } from "react";
import type StateInterface from "@/interfaces/profileDetailsSliceState";
import validateFilledData from "./validateOnboardingAndProfileFilledData";
import profileUpdateDataPutApiCall from "@/services/profileUpdateData";
import type { AppDispatch } from "@/reduxToolkit/store";

const profileHandleUpdateData = (
  dispatch: AppDispatch,
  state: StateInterface,
  setIsLoading: React.Dispatch<SetStateAction<boolean>>,
) => {
  const {
    age,
    gender,
    height,
    weight,
    workoutFrequency,
    fitnessGoal,
    experienceLevel,
  } = state;
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
  validateFilledData({
    age,
    gender,
    height,
    weight,
    workoutFrequency,
    fitnessGoal,
    experienceLevel,
  });
  profileUpdateDataPutApiCall(dispatch, state, setIsLoading);
};

export default profileHandleUpdateData;
