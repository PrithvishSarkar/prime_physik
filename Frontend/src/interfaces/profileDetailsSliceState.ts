import type BaseInterface from "@/interfaces/onboardingFormSliceState";

export default interface StateInterface extends BaseInterface {
  profileId: string;
  BMI: number | undefined;
  editProfile: boolean;
}