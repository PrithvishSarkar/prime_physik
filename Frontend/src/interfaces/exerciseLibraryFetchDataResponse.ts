import type ApiCallResponseInterface from "./apiCallResponse";
import type StateObjectInterface from "./exerciseLibrarySliceState";

export default interface ExerciseLibraryFetchDataResponseInterface extends ApiCallResponseInterface {
  data: StateObjectInterface[];
}
