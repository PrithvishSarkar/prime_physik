import type { NextFunction, Request, Response } from "express";
import UserProfile from "../../models/profileModel.js";
import validateUserId from "../../lib/validateUserId.js";
import CustomError from "../../customError.js";

const profileFetchController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = validateUserId(req);
    const profile = await UserProfile.findOne({ user: userId })
      .select({ __v: 0, createdAt: 0, updatedAt: 0, isOnboarded: 0 })
      .populate("user", "name email")
      .lean();
    if (!profile) throw new CustomError("Profile Not Found.", 404);

    res.status(200).json({
      status: "success",
      message: "Profile Fetched Successfully.",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

export default profileFetchController;
