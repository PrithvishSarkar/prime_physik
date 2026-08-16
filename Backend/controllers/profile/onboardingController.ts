import type { NextFunction, Request, Response } from "express";
import validateUserId from "../../lib/validateUserId.js";
import validateOnboardingInput from "../../lib/validateOnboardingInput.js";
import UserProfile from "../../models/profileModel.js";
import CustomError from "../../customError.js";
import type RequestBodyType from "../../lib/interface/profileInterface.js";

const onboardingController = async (
  req: Request<{}, {}, RequestBodyType>,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validating User's ID.
    const id = validateUserId(req);

    // Validating User's Input.
    const validatedUserInput = validateOnboardingInput(req.body);

    // User Existence Check.
    const existingUser = await UserProfile.findOne({ user: id }).lean();
    if (existingUser)
      throw new CustomError("Onboarding Already Completed.", 409);

    // Populating Database.
    await UserProfile.create({
      user: id,
      ...validatedUserInput,
      isOnboarded: true,
    });
    res
      .status(201)
      .json({ status: "success", message: "Onboarding Completed Successful." });
  } catch (error) {
    next(error);
  }
};

export default onboardingController;
