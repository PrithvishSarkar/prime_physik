import { permissibleHeightAndWeight } from "@/components/onboarding/SectionTwo";

const onboardingSectionTwoNextBtnDisabledStatus = (
  height: number | undefined,
  weight: number | undefined,
): boolean => {
  if (height === undefined || weight === undefined) return true;
  if (
    height < permissibleHeightAndWeight.height.minimum ||
    height > permissibleHeightAndWeight.height.maximum ||
    weight < permissibleHeightAndWeight.weight.minimum ||
    weight > permissibleHeightAndWeight.weight.maximum
  )
    return true;
  return false;
};

export default onboardingSectionTwoNextBtnDisabledStatus;
