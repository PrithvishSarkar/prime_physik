import React from "react";
import { useParams } from "react-router";
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { useDispatch, useSelector } from "react-redux";
import workoutHistoryFetchDataGetApiCall from "@/services/workoutHistoryFetchData";
import MainContent from "@/components/history/MainContent";
import HistoryPagination from "@/components/history/HistoryPagination";
import SpinningLoader from "@/components/SpinningLoader";

const WorkoutHistoryPage = () => {
  const { page } = useParams<string>();

  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    if (!page) return;
    workoutHistoryFetchDataGetApiCall(parseInt(page), dispatch);
  }, []);

  React.useEffect(() => {
    if (!page) return;
    workoutHistoryFetchDataGetApiCall(parseInt(page), dispatch);
  }, [page]);

  const totalPages = useSelector(
    (state: RootState) => state.workoutHistorySliceReducer.totalPages,
  );
  if (!totalPages) return <SpinningLoader size={24} />

  return (
    <main className="mx-41.25 py-8">
      <p className="text-3xl font-bold">Workout History</p>
      <p className="text-muted-foreground mt-1 mb-8">
        Review your past workouts and track progress
      </p>

      {/* History Data */}
      <MainContent />

      {/* Pagination */}
      {page && <HistoryPagination page={page} />}
    </main>
  );
};

export default WorkoutHistoryPage;
