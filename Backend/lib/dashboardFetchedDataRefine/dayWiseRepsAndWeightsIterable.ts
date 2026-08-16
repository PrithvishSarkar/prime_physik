import type DayWiseRepsAndWeightsInterface from "../interface/dashboardDayWiseRepsAndWeightsInterface.js";

type DaysInAWeekType = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
const daysInAWeek: DaysInAWeekType[] = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

const dayWiseRepsAndWeightsIterable = (
  analyticsDayWiseRepsAndWeights: DayWiseRepsAndWeightsInterface[],
) => {
  const repCountDayWiseRefined = [] as {
    day: DaysInAWeekType;
    totalReps: number;
  }[];
  const weightLiftedDayWiseRefined = [] as {
    day: DaysInAWeekType;
    totalWeight: number;
  }[];

  if (analyticsDayWiseRepsAndWeights.length === 0)
    return { repCountDayWiseRefined, weightLiftedDayWiseRefined };

  analyticsDayWiseRepsAndWeights.forEach((item) => {
    const day = daysInAWeek[item._id.getDay()] as DaysInAWeekType;
    repCountDayWiseRefined.push({ day, totalReps: item.totalReps });
    weightLiftedDayWiseRefined.push({
      day,
      totalWeight: item.totalWeightLifted,
    });
  });

  return { repCountDayWiseRefined, weightLiftedDayWiseRefined };
};

export default dayWiseRepsAndWeightsIterable;
