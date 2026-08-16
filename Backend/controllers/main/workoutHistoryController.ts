import type { NextFunction, Request, Response } from "express";
import UserWorkoutLog from "../../models/workoutLogModel.js";
import validateUserId from "../../lib/validateUserId.js";
import CustomError from "../../customError.js";

const workoutHistoryController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Validating Page Number.
    const pageNumber = Number(req.params.id);
    if (Number.isNaN(pageNumber) || pageNumber < 1)
      throw new CustomError("Invalid Page Number.", 400);

    // Validating User's ID.
    const userId = validateUserId(req);

    // Counting Total Documents.
    const totalLoggedWorkouts = await UserWorkoutLog.countDocuments({
      user: userId,
    });

    // Page Related Info.
    const contentLimit: number = 10;
    const offset: number = (pageNumber - 1) * contentLimit;

    // Fetching Paginated History.
    const history = await UserWorkoutLog.find({ user: userId })
      .sort({ date: -1 })
      .skip(offset)
      .limit(contentLimit)
      .select({ date: 1, exercises: 1, _id: 0 })
      .populate("exercises.exercise", "name secondaryMuscles thumbnailUrl -_id")
      .lean();

    if (!history) throw new CustomError("Workout History Not Found.", 404);

    // Sending Paginated History to Client Side.
    res.status(200).json({
      status: "success",
      message: "History Fetched Successfully.",
      data: history,
      totalPages: Math.ceil(totalLoggedWorkouts / contentLimit),
    });
  } catch (error) {
    next(error);
  }
};

export default workoutHistoryController;
