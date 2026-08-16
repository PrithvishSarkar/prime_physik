import type ApiCallResponseInterface from "@/interfaces/apiCallResponse";
import type { AppDispatch } from "@/reduxToolkit/store";
import { setName, setEmail } from "@/reduxToolkit/slices/onboardingFormSlice";
import { toast } from "sonner";

interface DataInterface {
  name: string;
  email: string;
}

interface ResponseInterface extends ApiCallResponseInterface {
  data?: DataInterface;
}

const onboardingFetchNameEmailGetApiCall = async (dispatch: AppDispatch) => {
  try {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const USER_BASIC_DETAILS_PATH = import.meta.env
      .VITE_USER_BASIC_DETAILS_PATH;
    const API_URL = BACKEND_URL + USER_BASIC_DETAILS_PATH;

    const response: ResponseInterface = await (
      await fetch(API_URL, { method: "GET", credentials: "include" })
    ).json();

    if (response.status === "failure" || !response.data) {
      toast.error(response.message);
      window.location.reload();
      return;
    }

    toast.success(response.message);
    dispatch(setName(response.data.name));
    dispatch(setEmail(response.data.email));
  } catch (error) {
    console.error(error);
    toast.error("User Data Fetching Error.");
    window.location.reload();
  }
};

export default onboardingFetchNameEmailGetApiCall;
