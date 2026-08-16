import React, { type SetStateAction } from "react";
import { toast } from "sonner";
import type StateInterface from "@/interfaces/onboardingFormSliceState";
import type ApiCallResponseInterface from "@/interfaces/apiCallResponse";
import type { NavigateFunction } from "react-router";

const onboardingSaveInfoPostApiCall = async (
  details: StateInterface,
  navigate: NavigateFunction,
  setIsLoading: React.Dispatch<SetStateAction<boolean>>
) => {
  const { name, email, ...bodyToBeSent } = details;

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const SAVE_ONBOARDING_INFO_PATH = import.meta.env.VITE_USER_PROFILE_PATH;
  const API_URL = BACKEND_URL + SAVE_ONBOARDING_INFO_PATH;

  setIsLoading(true);

  try {
    const response: ApiCallResponseInterface = await (
      await fetch(API_URL, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyToBeSent),
      })
    ).json();

    if (response.status === "failure") {
      toast.error(response.message);
      setIsLoading(false);
      return;
    }

    toast.success(response.message);
    setIsLoading(false);
    navigate("/plan");
  } catch (error) {
    console.error(error);
    toast.error("Save Information Error.");
    setIsLoading(false);
  }
};

export default onboardingSaveInfoPostApiCall;
