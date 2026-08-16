import React from "react";

import SpinningLoader from "@/components/SpinningLoader";
import NoExerciseLogged from "@/components/NoExerciseLogged";
import WeeklyAdherence from "@/components/dashboard/WeeklyAdherence";
import UserTrainingPlan from "@/components/dashboard/UserTrainingPlan";
import TotalWeeklyReps from "@/components/dashboard/TotalWeeklyReps";
import TotalWeeklyWeights from "@/components/dashboard/TotalWeeklyWeights";
import RepCountDayWise from "@/components/dashboard/RepCountDayWise";
import WeightLiftedDayWise from "@/components/dashboard/WeightLiftedDayWise";
import RepCountMuscleWise from "@/components/dashboard/RepCountMuscleWise";
import RecentExercises from "@/components/dashboard/RecentExercises";
import MostFrequentExercises from "@/components/dashboard/MostFrequentExercises";
import dashboardFetchDataGetApiCall from "@/services/dashboardFetchData";

import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { useDispatch, useSelector } from "react-redux";

const DashboardPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const {isDataPresent, weeklyAdherence} = useSelector(
    (state: RootState) => state.dashboardSliceReducer,
  );

  React.useEffect(() => {
    !isDataPresent && dashboardFetchDataGetApiCall(dispatch);
  }, []);

  if (!isDataPresent) return <SpinningLoader size={24} />

  if (weeklyAdherence === 0) return <NoExerciseLogged />;

  return (
    <main className="p-8">
      {/* Heading */}
      <section className="space-y-1 mb-8">
        <p className="text-3xl font-bold">Dashboard</p>
        <p className="text-muted-foreground">Your weekly fitness overview</p>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-12">
        {/* Number of days exercises were done as per the schedule */}
        <WeeklyAdherence />

        {/* User-Specific Training Plan -> Goal | Experience | Frequency */}
        <UserTrainingPlan />

        {/* Total Repetitions in Previous Week */}
        <TotalWeeklyReps />

        {/* Total Weights Lifted in Previous Week */}
        <TotalWeeklyWeights />

        {/* Day-Wise Previous Week Reps Count */}
        <RepCountDayWise />

        {/* Day-Wise Previous Week Weights Lifted */}
        <WeightLiftedDayWise />

        {/* Muscle-Wise Previous Week Rep Count */}
        <RepCountMuscleWise />

        {/* At Most Three Recent Exercises from Previous Week */}
        <RecentExercises />

        {/* At Most Three Most Performed Exercises from Previous Week */}
        <MostFrequentExercises />
      </section>
    </main>
  );
};

export default DashboardPage;
