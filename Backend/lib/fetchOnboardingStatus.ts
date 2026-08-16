import ProfileModel from "../models/profileModel.js";
import CustomError from "../customError.js";

const fetchOnboardingStatus = async (user: string) => {
  const onboardingStatus = await ProfileModel.findOne({ user })
    .select({ isOnboarded: 1, _id: 0 })
    .lean();

  if (!onboardingStatus)
    throw new CustomError("Onboarding Status Not Found.", 404);

  return onboardingStatus.isOnboarded;
};

export default fetchOnboardingStatus;
