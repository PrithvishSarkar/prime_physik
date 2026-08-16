import type { NextFunction, Request, Response } from "express";
import UserProfile from "../models/profileModel.js";
import validateUserId from "../lib/validateUserId.js";
import validateUserRole from "../lib/validateUserRole.js";

const onboardingLayer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validate User's ID.
    const userId = validateUserId(req);
    const userRole = validateUserRole(req);

    // Fetch Onboarding Status.
    const onboardingStatus = await UserProfile.findOne({ user: userId })
      .select({ isOnboarded: 1, _id: 0 })
      .lean();

    // Restricting User's Access.
    if (
      userRole === "user" &&
      (!onboardingStatus || (onboardingStatus && !onboardingStatus.isOnboarded))
    ) {
      res
        .status(403)
        .json({ status: "failure", message: "Onboarding Not Completed." });
      return;
    }

    // Allowing User's Access.
    next();
  } catch (error) {
    next(error);
  }
};

export default onboardingLayer;
