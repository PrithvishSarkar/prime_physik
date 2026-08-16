import mongoose from "mongoose";
import { exerciseModelName } from "./exerciseModel.js";

const planSchema = new mongoose.Schema(
  {
    goal: {
      type: String,
      required: true,
      enum: ["muscle_building", "fat_loss", "strength_gain", "general_fitness"],
      index: true,
    },
    level: {
      type: String,
      required: true,
      enum: ["beginner", "intermediate", "advanced"],
      index: true,
    },
    frequency: {
      type: Number,
      required: true,
      enum: [3, 4, 5, 6],
      index: true,
    },
    workouts: [
      {
        day: { type: Number, required: true },
        exercises: [{ type: mongoose.Types.ObjectId, required: true, ref: exerciseModelName }],
      },
    ],
  },
  {
    timestamps: true,
  },
);

// Ensures exactly ONE plan per (goal + level + frequency) combination.
planSchema.index({ goal: 1, level: 1, frequency: 1 }, { unique: true });

export const planModelName = "Plan";
export const planCollectionName = "prime_physik_plans";
export default mongoose.model(planModelName, planSchema, planCollectionName);