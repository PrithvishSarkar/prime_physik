import type { Request, Response, NextFunction } from "express";
import UserWorkoutLog from "../../models/workoutLogModel.js";
import validateUserId from "../../lib/validateUserId.js";
import todayDateRange from "../../lib/todayDateRange.js";

const fetchWorkoutLogController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validating User's ID.
    const userId = validateUserId(req);

    // Date Range Calculations.
    const { todayStart, todayEnd } = todayDateRange();

    // Fetching Workout Information (if it exists).
    const workoutInfo = await UserWorkoutLog.findOne({
      user: userId,
      date: { $gte: todayStart, $lte: todayEnd },
    })
      .select({ exercises: 1, _id: 0 })
      .populate("exercises.exercise", "name primaryMuscle -_id")
      .lean();

    // Centralized Error Handling.
    if (!workoutInfo) {
      res.status(200).json({
        status: "success",
        message: "No Exercise Logged Today.",
        data: [],
      });
      return;
    }

    // Sending Exercises Array to Client Side.
    res.status(200).json({
      status: "success",
      message: "Exercises Fetched Successfully.",
      data: workoutInfo.exercises,
    });
  } catch (error) {
    next(error);
  }
};

export default fetchWorkoutLogController;
