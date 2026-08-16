export default interface TrainingPlanInterface {
  workoutFrequency: number;
  fitnessGoal:
    | "muscle_building"
    | "fat_loss"
    | "strength_training"
    | "general_fitness";
  experienceLevel: "beginner" | "intermediate" | "advanced";
}
