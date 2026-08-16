import type { WorkoutInterface } from "./workoutPlanFetchData";

export default interface StateInterface {
  goal:
    | "muscle_building"
    | "fat_loss"
    | "strength_gain"
    | "general_fitness"
    | undefined;
  frequency: 3 | 4 | 5 | 6 | undefined;
  level: "beginner" | "intermediate" | "advanced" | undefined;
  workouts: WorkoutInterface[] | undefined;
}
