import type { NextFunction, Request, Response } from "express";
import UserAuth from "../../models/authModel.js";
import validateUserId from "../../lib/validateUserId.js";
import CustomError from "../../customError.js";

const fetchDetailsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validating User's ID.
    const userId = validateUserId(req);

    // Fetching User's Name & Email.
    const userInfo = await UserAuth.findById({ _id: userId })
      .select({ name: 1, email: 1, _id: 0 })
      .lean();

    if (!userInfo) throw new CustomError("User Not Found.", 404);

    res
      .status(200)
      .json({
        status: "success",
        message: "Data Fetched Successfully.",
        data: userInfo,
      });
  } catch (error) {
    next(error);
  }
};

export default fetchDetailsController;
