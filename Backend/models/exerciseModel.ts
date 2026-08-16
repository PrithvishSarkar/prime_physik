import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    exerciseType: {
      type: String,
      index: true,
      required: true,
      enum: ["resistance", "cardio"],
      default: "resistance",
    },
    // primaryMuscle is null for cardio exercises
    primaryMuscle: {
      type: String,
      index: true,
      enum: ["arms", "back", "chest", "core", "legs", "shoulders", null],
      default: null,
    },
    // secondaryMuscles is empty for cardio exercises
    secondaryMuscles: [
      {
        type: String,
        enum: [
          "biceps",
          "triceps",
          "forearms",
          "front-delts",
          "lateral-delts",
          "rear-delts",
          "lats",
          "upper-back",
          "lower-back",
          "quads",
          "hamstrings",
          "glutes",
          "calves",
          "abs",
          "obliques",
        ],
        default: [],
      },
    ],
    equipments: [
      {
        type: String,
        index: true,
        required: true,
        enum: [
          "barbell",
          "bench",
          "bodyweight",
          "cable",
          "dumbbell",
          "ez-bar",
          "jump-rope",
          "kettlebell",
          "machine",
          "medicine-ball",
          "pull-up-bar",
          "resistance-band",
          "stability-ball",
        ],
      },
    ],
    preparation: { type: String, required: true, trim: true },
    instructions: [{ type: String, required: true, trim: true }],
    thumbnailUrl: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export const exerciseModelName = "Exercise";
export const exerciseCollectionName = "prime_physik_exercises";

export default mongoose.model(
  exerciseModelName,
  exerciseSchema,
  exerciseCollectionName,
);
