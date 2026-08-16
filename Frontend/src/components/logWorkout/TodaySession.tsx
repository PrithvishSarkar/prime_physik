import React from "react";
import logWorkoutFetchSessionGetApiCall from "@/services/logWorkoutFetchSession";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { Card, CardContent } from "@/components/ui/card";
import type { FetchLogWorkoutDataObjectInterface } from "@/interfaces/logWorkoutTodaySessionResponse";
import { Badge } from "@/components/ui/badge";
import NoExerciseLogged from "../NoExerciseLogged";

interface PropInterface {
  workoutDetails: FetchLogWorkoutDataObjectInterface;
}

const TodaySessionCard = ({ workoutDetails }: PropInterface) => {
  return (
    <Card className="bg-[#14181f]">
      <CardContent className="flex items-center justify-between">
        {/* Main Content */}
        <section className="">
          <p className="font-semibold">{workoutDetails.exercise.name}</p>
          <p className="space-x-2 text-sm text-muted-foreground">
            <span>{workoutDetails.exercise.primaryMuscle}</span>
            <i className="inline-block w-2 h-2 rounded-full bg-primary"></i>
            <span>{`${workoutDetails.sets.length} sets`}</span>
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {workoutDetails.sets.map((set, index) => (
              <Badge
                key={index}
                className="bg-primary/5"
              >{`${set.weight}kg x ${set.reps}`}</Badge>
            ))}
          </div>
        </section>

        {/* Total Reps and Volume */}
        <section className="text-right">
          <p className="text-[#12d393] font-semibold">
            {`${workoutDetails.sets.reduce(
              (total, current) => (total += current.reps),
              0,
            )} reps`}
          </p>
          <p className="text-sm text-muted-foreground">
            {`Volume: ${workoutDetails.sets.reduce(
              (total, current) => (total += current.reps * current.weight),
              0,
            )} kg`}
          </p>
        </section>
      </CardContent>
    </Card>
  );
};

const LogWorkoutTodaySession = () => {
  const dispatch: AppDispatch = useDispatch();

  const state = useSelector(
    (state: RootState) => state.logWorkoutTodaySessionSliceReducer,
  );

  React.useEffect(() => {
    !state.length && logWorkoutFetchSessionGetApiCall(dispatch);
  }, []);

  if (!state.length) return <NoExerciseLogged />;

  return (
    <main className="mt-6">
      <p className="font-bold text-lg mb-4">Today's Workout</p>
      <div className="space-y-3">
        {!!state.length &&
          state.map((item, index) => (
            <TodaySessionCard key={index} workoutDetails={item} />
          ))}
      </div>
    </main>
  );
};

export default LogWorkoutTodaySession;
