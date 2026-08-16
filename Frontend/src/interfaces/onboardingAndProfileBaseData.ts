export default interface OnboardingAndProfileBaseDataInterface {
  age: number;
  gender: "male" | "female" | "others";
  height: number;
  weight: number;
  workoutFrequency: 3 | 4 | 5 | 6;
  fitnessGoal:
    | "muscle_building"
    | "fat_loss"
    | "strength_gain"
    | "general_fitness";
  experienceLevel: "beginner" | "intermediate" | "advanced";
}
