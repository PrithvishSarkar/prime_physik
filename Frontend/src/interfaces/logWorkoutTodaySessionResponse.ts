import type ApiCallResponseInterface from "./apiCallResponse";
import type { SetInterface } from "./logWorkoutSliceState";

export interface FetchLogWorkoutDataObjectInterface {
  exercise: {
    name: string;
    primaryMuscle: string;
  };
  sets: SetInterface[];
}

export default interface LogWorkoutTodaySessionResponseInterface extends ApiCallResponseInterface {
  data?: FetchLogWorkoutDataObjectInterface[];
}
