export type PrimaryMuscleType =
  | "arms"
  | "back"
  | "chest"
  | "core"
  | "legs"
  | "shoulders"
  | null;

type SecondaryMusclesType = (
  | "biceps"
  | "triceps"
  | "forearms"
  | "front-delts"
  | "lateral-delts"
  | "rear-delts"
  | "lats"
  | "upper-back"
  | "lower-back"
  | "quads"
  | "hamstrings"
  | "glutes"
  | "calves"
  | "abs"
  | "obliques"
)[];

type EquipmentsType = (
  | "barbell"
  | "bench"
  | "bodyweight"
  | "cable"
  | "dumbbell"
  | "ez-bar"
  | "jump-rope"
  | "kettlebell"
  | "machine"
  | "medicine-ball"
  | "pull-up-bar"
  | "resistance-band"
  | "stability-ball"
)[];

export interface ExerciseListObjectType {
  name: string;
  exerciseType: "resistance" | "cardio";
  primaryMuscle?: PrimaryMuscleType;
  secondaryMuscles?: SecondaryMusclesType;
  equipments: EquipmentsType;
  preparation: string;
  instructions: string[];
  thumbnailUrl: string;
}

export interface ExerciseGroupObjectType {
  muscle: PrimaryMuscleType;
  exercises: ExerciseListObjectType[];
}
