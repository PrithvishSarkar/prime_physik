import type { Request, Response, NextFunction } from "express";
import UserWorkoutLog from "../../models/workoutLogModel.js";
import validateUserId from "../../lib/validateUserId.js";
import type RequestBodyType from "../../lib/interface/workoutLogEditInterface.js";
import stringToObjectId from "../../lib/stringToObjectId.js";
import todayDateRange from "../../lib/todayDateRange.js";

const addEditWorkoutLogController = async (
  req: Request<{}, {}, RequestBodyType>,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Validating User's ID.
    const userId = validateUserId(req);

    // Accepting Request Body.
    const reqBody: RequestBodyType = req.body;

    // Exercise ID: String -> Mongoose ObjectId.
    const exerciseId = stringToObjectId(reqBody.exercise);

    // Refined & Validated Request Body.
    const updatedExercise = { exercise: exerciseId, sets: reqBody.sets };

    // Date Range Calculations.
    const { todayStart, todayEnd } = todayDateRange();

    // Adding or Updating User's Workout Log.
    const workoutLog = await UserWorkoutLog.findOneAndUpdate(
      { user: userId, date: { $gte: todayStart, $lte: todayEnd } },
      {
        $setOnInsert: { user: userId, date: new Date() },
        $push: { exercises: updatedExercise },
      },
      { upsert: true, new: true },
    )
      .populate("exercises.exercise", "name primaryMuscle -_id")
      .lean();

    // Sending Exercises Array to Client Side.
    res.status(200).json({
      status: "success",
      message: "Exercise Updated Sucessfully.",
      data: workoutLog.exercises,
    });
  } catch (error) {
    next(error);
  }
};

export default addEditWorkoutLogController;
