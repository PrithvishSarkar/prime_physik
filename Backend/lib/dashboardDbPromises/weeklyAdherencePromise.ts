import mongoose from "mongoose";
import WorkoutLogModel from "../../models/workoutLogModel.js";

const weeklyAdherencePromise = (
  user: mongoose.Types.ObjectId,
  weekStartDate: Date,
  weekEndDate: Date,
) => {
  return WorkoutLogModel.countDocuments({
    user,
    date: { $gte: weekStartDate, $lte: weekEndDate },
  });
};

export default weeklyAdherencePromise;
