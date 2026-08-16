import type { NextFunction, Request, Response } from "express";
import Exercises from "../../models/exerciseModel.js";
import CustomError from "../../customError.js";
import exerciseGrouping from "../../lib/exerciseGrouping.js";

const fetchExerciseListController = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const exerciseList = await Exercises.find({})
      .select({ __v: 0, createdAt: 0, updatedAt: 0, numericUID: 0 })
      .lean();
    if (!exerciseList) throw new CustomError("Exercise List Not Found.", 500);

    const exerciseGroupList = exerciseGrouping(exerciseList);

    res.status(200).json({
      status: "success",
      message: "Exercise List Fetched Successfully.",
      data: exerciseGroupList,
    });
  } catch (error) {
    next(error);
  }
};

export default fetchExerciseListController;
