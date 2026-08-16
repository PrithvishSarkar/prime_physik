import React from "react";
import type { ExerciseInterface } from "@/interfaces/exerciseLibrarySliceState";

// Redux Toolkit
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { useDispatch, useSelector } from "react-redux";

// API Call Functions
import exerciseFetchDataGetApiCall from "@/services/exerciseFetchData";

// Page Components
import SearchBox from "@/components/logWorkout/SearchBox";
import SetDetails from "@/components/logWorkout/SetDetails";
import TodaySession from "@/components/logWorkout/TodaySession";
import SpinningLoader from "@/components/SpinningLoader";

const LogWorkoutPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const exerciseGroup = useSelector(
    (state: RootState) => state.exerciseListSliceReducer.exerciseGroup,
  );

  // Populating Exercise Groups Array
  React.useEffect(() => {
    !exerciseGroup.length && exerciseFetchDataGetApiCall(dispatch);
  }, []);

  // Exercise Group Simplified List
  const [exerciseList, setExerciseList] = React.useState<ExerciseInterface[]>(
    [],
  );

  // Extracting Only Exercises From Exercise Group
  React.useEffect(() => {
    exerciseGroup.forEach((group) =>
      setExerciseList((prev) => [...prev, ...group.exercises]),
    );
  }, [exerciseGroup]);

  const exercise = useSelector(
    (state: RootState) => state.logWorkoutSliceReducer.exercise,
  );

  // Only One Search Result Exercise Details
  const [exerciseDetails, setExerciseDetails] = React.useState<
    ExerciseInterface | undefined
  >(undefined);

  // Filtering Exercise Details By Search Result
  React.useEffect(() => {
    setExerciseDetails(
      exerciseList.filter((detail) => detail._id === exercise)[0],
    );
  }, [exercise]);

  if (!exerciseGroup.length) return <SpinningLoader size={24} />;

  return (
    <main className="py-8 mx-41.25">
      {/* Introduction */}
      <section className="space-y-1 mb-8">
        <p role="page-name" className="text-3xl font-bold">
          Log Workout
        </p>
        <p role="date" className="text-muted-foreground">
          {new Date().toDateString()}
        </p>
      </section>

      {/* Select Exercise */}
      <SearchBox />

      {/* Exercise Details Form */}
      {exerciseDetails && (
        <SetDetails
          exerciseDetails={exerciseDetails}
          setExerciseDetails={setExerciseDetails}
        />
      )}

      {/* Today's Exercise List */}
      <TodaySession />
    </main>
  );
};

export default LogWorkoutPage;
