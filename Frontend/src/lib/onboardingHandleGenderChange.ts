import type { AppDispatch } from "@/reduxToolkit/store";
import { setGender } from "@/reduxToolkit/slices/onboardingFormSlice";

const onboardingHandleGenderChange = (value: string, dispatch: AppDispatch) => {
  switch (value) {
    case "male":
    case "female":
    case "others":
      dispatch(setGender(value));
      break;
    default:
      dispatch(setGender(undefined));
      break;
  }
};

export default onboardingHandleGenderChange;