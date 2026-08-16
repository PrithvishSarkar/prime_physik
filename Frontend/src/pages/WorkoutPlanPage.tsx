import React from "react";
import Overview from "@/components/plan/Overview";
import Schedule from "@/components/plan/Schedule";
import DetailModal from "@/components/exercise/DetailModal";
import workoutPlanFetchDataGetApiCall from "@/services/workoutPlanFetchData";
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalOpen } from "@/reduxToolkit/slices/exerciseDetailModalSlice";
import SpinningLoader from "@/components/SpinningLoader";

const WorkoutPlanPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(
    (state: RootState) => state.workoutPlanSliceReducer,
  );

  React.useEffect(() => {
    if (!state.goal && !state.frequency && !state.level && !state.workouts)
      workoutPlanFetchDataGetApiCall(dispatch);

    return () => {
      dispatch(setIsModalOpen(false));
    };
  }, []);

  if (!state.goal && !state.frequency && !state.level && !state.workouts)
    return <SpinningLoader size={24} />;
  
  return (
    <>
      <main className="p-8">
        {/* Introduction */}
        <section role="introduction-container" className="mb-4">
          <div role="title" className="text-3xl font-bold">
            Your Workout Plan
          </div>
          <div role="description" className="text-muted-foreground">
            Personalized {state.frequency}-day split for{" "}
            {state.goal
              ?.split("_")
              .map((text) => text[0].toUpperCase() + text.slice(1))
              .join(" ")}
          </div>
        </section>

        {/* Workout Plan Overview */}
        <Overview state={state} />

        {/* Main Workout Plan Content */}
        <Schedule />
      </main>
      <DetailModal />
    </>
  );
};

export default WorkoutPlanPage;
