import type ApiCallResponseInterface from "./apiCallResponse";
import type { ExerciseInterface } from "./exerciseLibrarySliceState";

export interface WorkoutInterface {
  _id: string;
  day: 1 | 2 | 3 | 4 | 5 | 6;
  exercises: ExerciseInterface[];
}

export interface DataInterface {
  goal: "muscle_building" | "fat_loss" | "strength_gain" | "general_fitness";
  frequency: 3 | 4 | 5 | 6;
  level: "beginner" | "intermediate" | "advanced";
  workouts: WorkoutInterface[];
}

export default interface WorkoutPlanFetchDataResponseInterface extends ApiCallResponseInterface {
  data?: DataInterface;
}
