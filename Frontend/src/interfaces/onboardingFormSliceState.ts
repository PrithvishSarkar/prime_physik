export default interface StateInterface {
  name: string;
  email: string;
  age: number | undefined;
  gender: "male" | "female" | "others" | undefined;
  height: number | undefined;
  weight: number | undefined;
  workoutFrequency: 3 | 4 | 5 | 6 | undefined;
  fitnessGoal:
    | "muscle_building"
    | "fat_loss"
    | "strength_gain"
    | "general_fitness"
    | undefined;
  experienceLevel: "beginner" | "intermediate" | "advanced" | undefined;
}
