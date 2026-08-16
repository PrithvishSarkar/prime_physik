import type { SetInterface } from "./logWorkoutSliceState";

export interface WorkoutHistoryExerciseInterface {
  exercise: {
    name: string;
    secondaryMuscles: string[];
    thumbnailUrl: string;
  };
  sets: SetInterface[];
}

export interface DataObjectInterface {
  date: Date;
  exercises: WorkoutHistoryExerciseInterface[];
}

export default interface StateInterface {
  workoutHistory: DataObjectInterface[];
  totalPages: number;
}
