import mongoose from "mongoose";
import WorkoutLogModel from "../../models/workoutLogModel.js";
import { exerciseCollectionName } from "../../models/exerciseModel.js";

const musclewiseRepsAnalyticsPromise = (
  user: mongoose.Types.ObjectId,
  weekStartDate: Date,
  weekEndDate: Date,
) => {
  return WorkoutLogModel.aggregate<{
    _id: string;
    totalReps: number;
  }>([
    {
      $match: {
        user,
        date: { $gte: weekStartDate, $lte: weekEndDate },
      },
    },
    {
      $unwind: "$exercises",
    },

    // Collecting Additional Info from Exercise Collection
    {
      $lookup: {
        from: exerciseCollectionName,
        localField: "exercises.exercise",
        foreignField: "_id",
        as: "exerciseInfo",
      },
    },

    // Flattening Lookup Returned Array
    {
      $unwind: "$exerciseInfo",
    },

    // Flattening Sets Array
    {
      $unwind: "$exercises.sets",
    },

    // Calculating Total Reps Grouped by Primary Muscle
    {
      $group: {
        _id: "$exerciseInfo.primaryMuscle",
        totalReps: { $sum: "$exercises.sets.reps" },
      },
    },

    // Sorting according to Primary Muscle
    {
      $sort: { _id: 1 },
    },
  ]);
};

export default musclewiseRepsAnalyticsPromise;
