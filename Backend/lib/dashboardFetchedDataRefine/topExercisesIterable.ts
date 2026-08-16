import type TopExercisesFrequencyGroupedInterface from "../interface/dashboardTopExercisesInterface.js";

const topExercisesIterable = (
  topExercisesGroupedByFrequency: TopExercisesFrequencyGroupedInterface[],
) => {
  const result = [] as {
    name: string;
    totalReps: number;
    totalWeightLifted: number;
  }[];

  if (topExercisesGroupedByFrequency.length === 0) return result;

  topExercisesGroupedByFrequency.forEach((item) => {
    result.push({
      name: item._id,
      totalReps: item.totalReps,
      totalWeightLifted: item.totalWeightLifted,
    });
  });

  return result;
};

export default topExercisesIterable;
