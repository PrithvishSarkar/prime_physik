export interface TrainingPlanInterface {
  label: "Goal" | "Experience" | "Frequency";
  value: string | number;
}

type WeekDayType = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export interface RepCountDayWiseInterface {
  day: WeekDayType;
  totalReps: number;
}

export interface WeightLiftedDayWiseInterface {
  day: WeekDayType;
  totalWeight: number;
}

type MuscleType =
  | "arms"
  | "chest"
  | "back"
  | "core"
  | "legs"
  | "shoulders"
  | "mixed";

export interface RepCountMuscleWiseInterface {
  muscle: MuscleType;
  totalReps: number;
}

export interface RecentExercisesInterface {
  date: Date;
  name: string;
  sets: { weight: number; reps: number }[];
}

export interface TopExercisesInterface {
  name: string;
  totalReps: number;
  totalWeightLifted: number;
}

export default interface StateInterface {
  weeklyAdherence: number | undefined;
  trainingPlan: TrainingPlanInterface[];
  totalWeeklyReps: number | undefined;
  totalWeeklyWeightLifted: number | undefined;
  repCountDayWise: RepCountDayWiseInterface[];
  weightLiftedDayWise: WeightLiftedDayWiseInterface[];
  repCountMuscleWise: RepCountMuscleWiseInterface[];
  recentExercises: RecentExercisesInterface[];
  topExercises: TopExercisesInterface[];
}
