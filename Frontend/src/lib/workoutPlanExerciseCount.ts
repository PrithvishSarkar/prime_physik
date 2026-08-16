import type { WorkoutInterface } from "@/interfaces/workoutPlanFetchData";

const workoutPlanExerciseCount = (workouts: WorkoutInterface[]) => {
  const exerciseCount: number[] = [];

  for (let workout of workouts) {
    exerciseCount.push(workout.exercises.length);
  }

  return exerciseCount;
};

export default workoutPlanExerciseCount;
