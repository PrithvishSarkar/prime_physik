import mongoose from "mongoose";
import CustomError from "../customError.js";
import UserProfile from "../models/profileModel.js";

const fetchUserTrainingData = async (userId: mongoose.Types.ObjectId) => {
  const data = await UserProfile.findOne({ user: userId })
    .select({
      fitnessGoal: 1,
      experienceLevel: 1,
      workoutFrequency: 1,
      _id: 0,
    })
    .lean();

  // Onboarding Done -> Profile Not Found -> Server Error.
  if (!data)
    throw new CustomError("Plan Fetching Failed: Profile Not Found.", 404);

  return data;
};

export default fetchUserTrainingData;
