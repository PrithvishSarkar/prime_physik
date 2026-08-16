import mongoose from "mongoose";
import type { Request, Response, NextFunction } from "express";
import Exercise from "../../../models/exerciseModel.js";
import type RequestBodyType from "../../../lib/interface/editExerciseInterface.js";
import validateEditExerciseInput from "../../../lib/validateEditExerciseInput.js";
import CustomError from "../../../customError.js";

const adminEditExerciseListController = async (
  req: Request<{ id: string }, {}, RequestBodyType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: exerciseId } = req.params;
    if (!exerciseId || !mongoose.Types.ObjectId.isValid(exerciseId))
      throw new CustomError("Invalid Exercise ID.", 400);

    // Validating Admin's Input.
    const validatedValue = validateEditExerciseInput(req.body);
    if (!Object.keys(validatedValue).length)
      throw new CustomError("Invalid Fields.", 400);

    // Updating Exercise Data.
    const exercise = await Exercise.findByIdAndUpdate(
      exerciseId,
      { $set: validatedValue },
      { new: true, runValidators: true, lean: true }
    );
    if (!exercise) throw new CustomError("Exercise Not Found.", 404);

    res.status(200).json({
      status: "success",
      message: "Exercise Updated Successfully.",
      data: exercise,
    });
  } catch (error) {
    next(error);
  }
};

export default adminEditExerciseListController;
