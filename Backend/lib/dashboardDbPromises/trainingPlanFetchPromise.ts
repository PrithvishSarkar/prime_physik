import ProfileModel from "../../models/profileModel.js";
import mongoose from "mongoose";

const trainingPlanPromise = (user: mongoose.Types.ObjectId) => {
  return ProfileModel.findOne({ user }).select({
    _id: 0,
    workoutFrequency: 1,
    fitnessGoal: 1,
    experienceLevel: 1,
  });
};

export default trainingPlanPromise;
