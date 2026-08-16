import type { NextFunction, Request, Response } from "express";
import validateUserId from "../../lib/validateUserId.js";
import weekDateRange from "../../lib/weekDateRange.js";

// Database Call Promises
import trainingPlanFetchPromise from "../../lib/dashboardDbPromises/trainingPlanFetchPromise.js";
import weeklyAdherencePromise from "../../lib/dashboardDbPromises/weeklyAdherencePromise.js";
import analyticsDayWiseRepsAndWeightsPromise from "../../lib/dashboardDbPromises/analyticsDayWiseRepsAndWeightsPromise.js";
import analyticsMuscleWiseRepsPromise from "../../lib/dashboardDbPromises/analyticsMuscleWiseRepsPromise.js";
import topExercisesGroupedByFrequencyPromise from "../../lib/dashboardDbPromises/topExercisesGroupedByFrequencyPromise.js";
import recentExercisesTeaserPromise from "../../lib/dashboardDbPromises/recentExercisesTeaserPromise.js";

// Refinery Functions
import trainingPlanIterable from "../../lib/dashboardFetchedDataRefine/trainingPlanIterable.js";
import type TrainingPlanInterface from "../../lib/interface/dashboardTrainingPlanInterface.js";
import dayWiseRepsAndWeightsIterable from "../../lib/dashboardFetchedDataRefine/dayWiseRepsAndWeightsIterable.js";
import type DayWiseRepsAndWeightsInterface from "../../lib/interface/dashboardDayWiseRepsAndWeightsInterface.js";
import muscleWiseRepsIterable from "../../lib/dashboardFetchedDataRefine/muscleWiseRepsIterable.js";
import type MuscleWiseRepsInterface from "../../lib/interface/dashboardMuscleWiseRepsInterface.js";
import topExercisesIterable from "../../lib/dashboardFetchedDataRefine/topExercisesIterable.js";
import type TopExercisesFrequencyGroupedInterface from "../../lib/interface/dashboardTopExercisesInterface.js";

const fetchDashboardAnalyticsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = validateUserId(req);
  const { weekStartDate, weekEndDate } = weekDateRange();

  try {
    const [
      trainingPlan,
      weeklyAdherence,
      analyticsDayWiseRepsAndWeights,
      analyticsMuscleWiseReps,
      topExercisesGroupedByFrequency,
      recentExercisesTeaser,
    ] = await Promise.all([
      // Fetching User's Training Plan from Profile Info
      trainingPlanFetchPromise(user),

      // Weekly Adherence Count
      weeklyAdherencePromise(user, weekStartDate, weekEndDate),

      // Reps Count and Weight Lifted Analytics Per Day
      analyticsDayWiseRepsAndWeightsPromise(user, weekStartDate, weekEndDate),

      // Total Reps Grouped by Primary Muscles
      analyticsMuscleWiseRepsPromise(user, weekStartDate, weekEndDate),

      // Top Exercises based on Occurance Frequency
      topExercisesGroupedByFrequencyPromise(user, weekStartDate, weekEndDate),

      // Recent (at most) Three Exercises
      recentExercisesTeaserPromise(user, weekStartDate, weekEndDate),
    ]);

    // Weekly Total Reps and Weight Lifted - Looped via Day-Wise Array
    const totalWeeklyReps = analyticsDayWiseRepsAndWeights.reduce(
      (total, value) => (total += value.totalReps),
      0,
    );
    const totalWeeklyWeightLifted = analyticsDayWiseRepsAndWeights.reduce(
      (total, value) => (total += value.totalWeightLifted),
      0,
    );

    // Refined Iterable Data Structure - To Be Sent Directly to Frontend
    const trainingPlanRefined = trainingPlanIterable(
      trainingPlan as TrainingPlanInterface,
    );

    const { repCountDayWiseRefined, weightLiftedDayWiseRefined } =
      dayWiseRepsAndWeightsIterable(
        analyticsDayWiseRepsAndWeights as DayWiseRepsAndWeightsInterface[],
      );

    const repCountMuscleWiseRefined = muscleWiseRepsIterable(
      analyticsMuscleWiseReps as MuscleWiseRepsInterface[],
    );

    const topExercisesRefined = topExercisesIterable(
      topExercisesGroupedByFrequency as TopExercisesFrequencyGroupedInterface[],
    );

    res.status(200).json({
      status: "success",
      message: "Dashboard Analytics Fetched Successfully.",
      data: {
        trainingPlanRefined,
        weeklyAdherence,
        repCountDayWiseRefined,
        weightLiftedDayWiseRefined,
        repCountMuscleWiseRefined,
        totalWeeklyReps,
        totalWeeklyWeightLifted,
        recentExercisesTeaser,
        topExercisesRefined,
      },
    });
  } catch (error) {
    console.error("Dashboard Analytics Fetching Error: ", error);
    next(error);
  }
};

export default fetchDashboardAnalyticsController;
