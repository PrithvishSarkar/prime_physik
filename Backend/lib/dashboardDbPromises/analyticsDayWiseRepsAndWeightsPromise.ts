import mongoose from "mongoose";
import WorkoutLogModel from "../../models/workoutLogModel.js";

const daywiseRepsAndWeightLiftedAnalyticsPromise = (
  user: mongoose.Types.ObjectId,
  weekStartDate: Date,
  weekEndDate: Date
) => {
  return WorkoutLogModel.aggregate<{
    _id: Date;
    totalReps: number;
    totalWeightLifted: number;
  }>([
    // Filtering by User's ID and Date Range
    {
      $match: {
        user,
        date: { $gte: weekStartDate, $lte: weekEndDate },
      },
    },

    // Flattening Exercises Array
    {
      $unwind: "$exercises",
    },

    // Flattening Sets Array for each Exercise
    {
      $unwind: "$exercises.sets",
    },

    // Calculating Total Reps and Total Weight Lifted grouped by Date
    {
      $group: {
        _id: "$date", // The `_id` is the label for grouping
        totalReps: { $sum: "$exercises.sets.reps" },
        totalWeightLifted: { $sum: "$exercises.sets.weight" },
      },
    },

    // Sorting Array in ascending order of Date
    {
      $sort: { _id: 1 },
    },
  ]);
};

export default daywiseRepsAndWeightLiftedAnalyticsPromise;
