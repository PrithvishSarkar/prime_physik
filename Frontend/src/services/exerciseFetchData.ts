import { toast } from "sonner";
import { setExerciseGroup } from "@/reduxToolkit/slices/exerciseLibrarySlice";
import type { AppDispatch } from "@/reduxToolkit/store";
import type ResponseInterface from "@/interfaces/exerciseLibraryFetchDataResponse";

const exerciseFetchDataGetApiCall = async (dispatch: AppDispatch) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const EXERCISES_PATH = import.meta.env.VITE_EXERCISES_PATH;
  const API_URL = BACKEND_URL + EXERCISES_PATH;

  try {
    const response: ResponseInterface = await (
      await fetch(API_URL, { method: "GET", credentials: "include" })
    ).json();

    if (response.status === "failure") {
      toast.error(response.message);
      return;
    }

    toast.success(response.message);

    dispatch(setExerciseGroup(response.data));
  } catch (error) {
    console.error(error);
  }
};

export default exerciseFetchDataGetApiCall;
