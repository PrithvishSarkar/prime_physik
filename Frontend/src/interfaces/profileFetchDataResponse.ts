import type ApiCallResponseInterface from "./apiCallResponse";
import type OnboardingAndProfileBaseDataInterface from "./onboardingAndProfileBaseData";

interface UserInterface {
  _id: string;
  name: string;
  email: string;
}

interface DataInterface extends OnboardingAndProfileBaseDataInterface {
  _id: string;
  user: UserInterface;
}

export default interface ProfileFetchDataResponseInterface extends ApiCallResponseInterface {
  data?: DataInterface;
}
