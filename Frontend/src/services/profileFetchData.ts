import { toast } from "sonner";
import type ProfileFetchDataResponseInterface from "@/interfaces/profileFetchDataResponse";
import type { AppDispatch } from "@/reduxToolkit/store";
import {
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
} from "@/reduxToolkit/slices/profileDetailsSlice";
import calculateBMI from "@/lib/calculateBMI";

const profileFetchDataGetApiCall = async (dispatch: AppDispatch) => {
  // Backend API Call URL
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const PROFILE_PATH = import.meta.env.VITE_USER_PROFILE_PATH;
  const API_URL = BACKEND_URL + PROFILE_PATH;

  // Calling Fetch API
  try {
    const response: ProfileFetchDataResponseInterface = await (
      await fetch(API_URL, { method: "GET", credentials: "include" })
    ).json();

    // Error Handling
    if (response.status === "failure" || !response.data) {
      toast.error(response.message);
      return;
    }

    toast.success(response.message);

    // Updating State
    dispatch(setProfileId(response.data._id));
    dispatch(setName(response.data.user.name));
    dispatch(setEmail(response.data.user.email));
    dispatch(setAge(response.data.age));
    dispatch(setGender(response.data.gender));
    dispatch(setHeight(response.data.height));
    dispatch(setWeight(response.data.weight));
    dispatch(setBMI(calculateBMI(response.data.height, response.data.weight)));
    dispatch(setWorkoutFrequency(response.data.workoutFrequency));
    dispatch(setFitnessGoal(response.data.fitnessGoal));
    dispatch(setExperienceLevel(response.data.experienceLevel));
  } catch (error) {
    toast.error("Profile Data Fetching Error.");
    console.error(error);
  }
};

export default profileFetchDataGetApiCall;