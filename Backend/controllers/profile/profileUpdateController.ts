import mongoose from "mongoose";
import type { Request, Response, NextFunction } from "express";
import validateUserId from "../../lib/validateUserId.js";
import validateUserInput from "../../lib/validateOnboardingInput.js";
import UserProfile from "../../models/profileModel.js";
import type RequestBodyType from "../../lib/interface/profileInterface.js";
import CustomError from "../../customError.js";

const profileUpdateController = async (
  req: Request<{ id: string }, {}, RequestBodyType>,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Validating User's ID.
    const userId = validateUserId(req);

    // Validating Profile ID.
    const profileId: string = req.params.id;
    if (!profileId) throw new CustomError("Profile ID Not Found.", 404);
    if (!mongoose.Types.ObjectId.isValid(profileId))
      throw new CustomError("Invalid Profile ID.", 400);

    // Validating User's Input.
    const validatedInput = validateUserInput(req.body);

    // Updating Profile Information.
    const updatedProfile = await UserProfile.findOneAndUpdate(
      { _id: profileId, user: userId },
      validatedInput,
      { new: true, runValidators: true },
    )
      .select({
        _id: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
        isOnboarded: 0,
        user: 0,
      })
      .lean();

    // Handling No Profile Matched.
    if (!updatedProfile) throw new CustomError("Profile Not Found.", 404);

    res.status(200).json({
      status: "success",
      message: "Profile Updated Successfully.",
      data: updatedProfile,
    });
  } catch (error) {
    next(error);
  }
};

export default profileUpdateController;
