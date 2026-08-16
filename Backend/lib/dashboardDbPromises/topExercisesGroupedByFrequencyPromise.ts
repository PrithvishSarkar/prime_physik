import mongoose from "mongoose";
import WorkoutLogModel from "../../models/workoutLogModel.js";
import { exerciseCollectionName } from "../../models/exerciseModel.js";

const topExercisesGroupedByFrequencyPromise = (
  user: mongoose.Types.ObjectId,
  weekStartDate: Date,
  weekEndDate: Date,
) => {
  return WorkoutLogModel.aggregate<{
    _id: string;
    totalReps: number;
    totalWeightLifted: number;
    frequency: number;
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
    {
      $lookup: {
        from: exerciseCollectionName,
        localField: "exercises.exercise",
        foreignField: "_id",
        as: "exerciseInfo",
      },
    },
    {
      $unwind: "$exerciseInfo",
    },
    {
      $unwind: "$exercises.sets",
    },
    {
      $group: {
        _id: "$exerciseInfo.name",
        totalReps: { $sum: "$exercises.sets.reps" },
        totalWeightLifted: { $sum: "$exercises.sets.weight" },
        frequency: { $sum: 1 },
      },
    },
    {
      $sort: { frequency: -1, totalReps: -1 },
    },
    {
      $limit: 3,
    },
  ]);
};

export default topExercisesGroupedByFrequencyPromise;
