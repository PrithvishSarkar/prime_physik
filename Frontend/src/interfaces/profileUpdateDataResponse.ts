import type BaseInterface from "@/interfaces/apiCallResponse";
import type DataInterface from "./onboardingAndProfileBaseData";

export default interface ProfileUpdateDataResponseInterface extends BaseInterface {
  data?: DataInterface;
}
