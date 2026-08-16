import type ApiCallResponseInterface from "./apiCallResponse";
import type {
  RecentExercisesInterface,
  RepCountDayWiseInterface,
  RepCountMuscleWiseInterface,
  TopExercisesInterface,
  TrainingPlanInterface,
  WeightLiftedDayWiseInterface,
} from "./dashboardSliceState";

export interface DataInterface {
  weeklyAdherence: number;
  trainingPlanRefined: TrainingPlanInterface[];
  totalWeeklyReps: number;
  totalWeeklyWeightLifted: number;
  repCountDayWiseRefined: RepCountDayWiseInterface[];
  weightLiftedDayWiseRefined: WeightLiftedDayWiseInterface[];
  repCountMuscleWiseRefined: RepCountMuscleWiseInterface[];
  recentExercisesTeaser: RecentExercisesInterface[];
  topExercisesRefined: TopExercisesInterface[];
}

export default interface DashboardFetchDataResponseInterface extends ApiCallResponseInterface {
  data?: DataInterface;
}
