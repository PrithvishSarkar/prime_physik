import type { ExerciseInterface } from "./exerciseLibrarySliceState";

export default interface StateInterface {
  isModalOpen: boolean;
  exerciseDetail: ExerciseInterface | undefined;
}
