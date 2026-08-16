import type { WorkoutHistoryExerciseInterface } from "@/interfaces/workoutHistorySliceState";

const totalSets = (exercises: WorkoutHistoryExerciseInterface[]) => {
  return exercises.reduce(
    (sets, exerciseItem) =>
      (sets += exerciseItem.sets.reduce(
        (total, current) => (total += current.reps),
        0,
      )),
    0,
  );
};

export default totalSets;
