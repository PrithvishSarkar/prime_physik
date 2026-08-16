import type MuscleWiseRepsInterface from "../interface/dashboardMuscleWiseRepsInterface.js";

type MuscleType =
  | "arms"
  | "chest"
  | "back"
  | "core"
  | "legs"
  | "shoulders"
  | "mixed";

const muscleWiseRepsIterable = (
  analyticsMuscleWiseReps: MuscleWiseRepsInterface[],
) => {
  const result = [] as { muscle: MuscleType; totalReps: number }[];

  if (analyticsMuscleWiseReps.length === 0) return result;

  analyticsMuscleWiseReps.forEach((item) => {
    result.push({ muscle: item._id ?? "mixed", totalReps: item.totalReps });
  });

  return result;
};

export default muscleWiseRepsIterable;
