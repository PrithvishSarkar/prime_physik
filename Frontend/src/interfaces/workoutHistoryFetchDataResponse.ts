import type BaseInterface from "./apiCallResponse";
import type { DataObjectInterface } from "./workoutHistorySliceState";

export default interface WorkoutHistoryFetchDataResponseInterface extends BaseInterface {
  data?: DataObjectInterface[];
  totalPages?: number;
}
