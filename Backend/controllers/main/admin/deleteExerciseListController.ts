import mongoose from "mongoose";
import type { NextFunction, Request, Response } from "express";
import Exercise from "../../../models/exerciseModel.js";
import CustomError from "../../../customError.js";

const adminDeleteExerciseListController = async (
  req: Request<{ id: string }, {}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validating Exercise ID.
    const { id: exerciseId } = req.params;
    if (!exerciseId || !mongoose.Types.ObjectId.isValid(exerciseId))
      throw new CustomError("Invalid Exercise ID.", 400);

    // Deleting Exercise.
    const exercise = await Exercise.findByIdAndDelete(exerciseId);
    if (!exercise) throw new CustomError("Exercise Not Found.", 404);

    res
      .status(200)
      .json({ status: "success", message: "Exercise Deleted Successfully." });
  } catch (error) {
    next(error);
  }
};

export default adminDeleteExerciseListController;
