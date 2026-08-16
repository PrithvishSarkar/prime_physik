import mongoose from "mongoose";
import WorkoutLogModel from "../../models/workoutLogModel.js";
import { exerciseCollectionName } from "../../models/exerciseModel.js";

const recentExercisesTeaserPromise = (
  user: mongoose.Types.ObjectId,
  weekStartDate: Date,
  weekEndDate: Date,
) => {
  return WorkoutLogModel.aggregate([
    {
      $match: {
        user,
        date: { $gte: weekStartDate, $lte: weekEndDate },
      },
    },

    // Sorting Date in Chronologically Descending Order
    {
      $sort: { date: -1 },
    },

    // Flattening Exercises Array
    {
      $unwind: "$exercises",
    },

    // Left Joining with Exercise Collection
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

    // Projection Specifies Required Fields - acts like `select` statement
    {
      $project: {
        _id: 0,
        date: 1,
        name: "$exerciseInfo.name",
        sets: "$exercises.sets",
      },
    },
    {
      $limit: 3,
    },
  ]);
};

export default recentExercisesTeaserPromise;
