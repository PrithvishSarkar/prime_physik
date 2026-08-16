import type { NextFunction, Request, Response } from "express";
import Exercise from "../../../models/exerciseModel.js";
import exerciseList from "../../../lib/exerciseList.js";
import CustomError from "../../../customError.js";

const adminSeedExerciseListController = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Checking Exercise List Existence.
    const exists = await Exercise.exists({});
    if (exists)
      throw new CustomError("Unalterable: Exercise List Exists.", 400);

    // Inserting Exercise List.
    await Exercise.insertMany(exerciseList, { ordered: true });
    res.status(201).json({
      status: "success",
      message: "Exercise List Seeded Successfully.",
    });
  } catch (error) {
    next(error);
  }
};

export default adminSeedExerciseListController;
