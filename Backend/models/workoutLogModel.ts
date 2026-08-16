import mongoose from "mongoose";
import { authModelName } from "./authModel.js";
import { exerciseModelName } from "./exerciseModel.js";

const SetSchema = new mongoose.Schema(
  {
    weight: { type: Number, required: true, default: 0 },
    reps: { type: Number, required: true, default: 0 },
  },
  { _id: false }
);

const ExerciseSchema = new mongoose.Schema(
  {
    exercise: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: exerciseModelName,
    },
    sets: {
      type: [SetSchema],
      required: true,
    },
  },
  { _id: false }
);

const WorkoutLogSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: authModelName,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    exercises: { type: [ExerciseSchema], required: true },
  },
  { timestamps: true }
);

WorkoutLogSchema.index({ user: 1, date: -1 });

export const workoutModelName = "UserWorkoutLog";
export const workoutCollectionName = "prime_physik_users_workout_log";

export default mongoose.model(
  workoutModelName,
  WorkoutLogSchema,
  workoutCollectionName
);
