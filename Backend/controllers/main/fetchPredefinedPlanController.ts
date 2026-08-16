import type { NextFunction, Request, Response } from "express";
import Plan from "../../models/planModel.js";
import validateUserId from "../../lib/validateUserId.js";
import CustomError from "../../customError.js";
import fetchUserTrainingData from "../../lib/fetchUserTrainingData.js";

const fetchPredefinedPlanController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Validating User's ID.
    const userId = validateUserId(req);

    // User's Profile Required Data Fetching.
    const userPreferences = await fetchUserTrainingData(userId);

    // Fetching Plan via User's Preferences Data.
    const recommendedPlan = await Plan.findOne({
      goal: userPreferences.fitnessGoal,
      level: userPreferences.experienceLevel,
      frequency: userPreferences.workoutFrequency,
    })
      .select({
        goal: 1,
        level: 1,
        frequency: 1,
        workouts: 1,
        _id: 0,
      })
      .populate("workouts.exercises", "-__v -createdAt -updatedAt")
      .lean();

    // Error Handling - Rare Error.
    if (!recommendedPlan)
      throw new CustomError("Recommended Plan Not Found.", 404);

    res.status(200).json({
      status: "success",
      message: "Recommended Plan Fetched Successfully.",
      data: recommendedPlan,
    });
  } catch (error) {
    next(error);
  }
};

export default fetchPredefinedPlanController;
