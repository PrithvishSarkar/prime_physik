import CustomError from "../../customError.js";
import validateUserId from "../../lib/validateUserId.js";
import ProfileModel from "../../models/profileModel.js";
import type { NextFunction, Request, Response } from "express";

const checkOnboardingStatusController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = validateUserId(req);

  try {
    const onboardingStatus = await ProfileModel.findOne({ user })
      .select({ isOnboarded: 1, _id: 0 })
      .lean();

    if (!onboardingStatus)
      throw new CustomError("Onboarding Status Not Found.", 404);

    res.status(200).json({
      status: "success",
      message: "User Verified and Onboarding Status Checked.",
      data: { isAuthentic: true, isOnboarded: onboardingStatus.isOnboarded },
    });
  } catch (error) {
    console.error("Checking Onboarding Status Error: ", error);
    next(error);
  }
};

export default checkOnboardingStatusController;
