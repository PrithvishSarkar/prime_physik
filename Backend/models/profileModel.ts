import mongoose from "mongoose";
import { authModelName } from "./authModel.js";

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: authModelName,
      required: true,
      unique: true,
      index: true,
    },
    age: {
      type: Number,
      required: true,
      min: 15,
      max: 80,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "others"],
    },
    // Height is in centimeters.
    height: { type: Number, required: true, min: 150, max: 220 },
    // Weight is in kilograms.
    weight: { type: Number, required: true, min: 40, max: 200 },
    workoutFrequency: {
      type: Number,
      required: true,
      enum: [3, 4, 5, 6],
    },
    fitnessGoal: {
      type: String,
      required: true,
      enum: ["muscle_building", "fat_loss", "strength_gain", "general_fitness"],
    },
    experienceLevel: {
      type: String,
      required: true,
      enum: ["beginner", "intermediate", "advanced"],
    },
    isOnboarded: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const profileModelName = "UserProfile";
export const profileCollectionName = "prime_physik_users_profile";

export default mongoose.model(
  profileModelName,
  profileSchema,
  profileCollectionName
);
