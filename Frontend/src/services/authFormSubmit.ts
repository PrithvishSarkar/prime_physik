import React, { type SetStateAction } from "react";
import { reset } from "@/reduxToolkit/slices/authFormSlice";
import type { AppDispatch } from "@/reduxToolkit/store";
import { toast } from "sonner";
import type { NavigateFunction } from "react-router";
import { setIsAuthentic, setIsOnboarded } from "@/reduxToolkit/slices/userAuthenticitySlice";
import type AuthFormSubmitResponseInterface from "@/interfaces/authFormSubmitResponse";

const authFormSubmitPostApiCall = async (
  e: React.FormEvent<HTMLFormElement>,
  isRegister: boolean,
  name: string,
  email: string,
  password: string,
  dispatch: AppDispatch,
  navigate: NavigateFunction,
  setIsLoading: React.Dispatch<SetStateAction<boolean>>,
) => {
  e.preventDefault();

  // Environment Variables
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const LOGIN_PATH = import.meta.env.VITE_LOGIN_PATH;
  const REGISTER_PATH = import.meta.env.VITE_REGISTER_PATH;

  // API Call URL
  const API_URL = BACKEND_URL + (isRegister ? REGISTER_PATH : LOGIN_PATH);
  const bodyToSend = isRegister
    ? { name, email, password }
    : { email, password };

  setIsLoading(true);

  // Handling Response
  try {
    const response: AuthFormSubmitResponseInterface = await (
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyToSend),
        credentials: "include",
      })
    ).json();

    if (response.status === "failure" || !response.isAuthentic) {
      dispatch(setIsAuthentic(false));
      dispatch(setIsOnboarded(undefined));
      toast.error(response.message);
      setIsLoading(false);
      return;
    }

    toast.success(response.message);
    dispatch(reset());

    if (!response.isOnboarded) {
      dispatch(setIsAuthentic(response.isAuthentic));
      dispatch(setIsOnboarded(response.isOnboarded));
      navigate("/onboarding");
      return;
    }

    dispatch(setIsAuthentic(response.isAuthentic));
    dispatch(setIsOnboarded(response.isOnboarded));
    navigate("/plan");
  } catch (error) {
    console.error(error);
    toast.error("Error: Form Submission Denied.");
    setIsLoading(false); // Loading is stopped if there's some error in form submission
  }
};

export default authFormSubmitPostApiCall;
