import React from "react";
import type { ExerciseInterface } from "@/interfaces/exerciseLibrarySliceState";

// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/reduxToolkit/store";

// ShadCN Components
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import logWorkoutFinishExercisePostApiCall from "@/services/logWorkoutFinishExercise";
import LogWorkoutSetDetailsHeader from "./SetDetailsHeader";
import LogWorkoutSetDetailsForm from "./LoggingForm";
import LogWorkoutCurrentSets from "./CurrentSets";
import { Separator } from "../ui/separator";

interface PropInterface {
  exerciseDetails: ExerciseInterface;
  setExerciseDetails: React.Dispatch<
    React.SetStateAction<ExerciseInterface | undefined>
  >;
}

const LogWorkoutSetDetails = ({
  exerciseDetails,
  setExerciseDetails,
}: PropInterface) => {
  const dispatch: AppDispatch = useDispatch();

  const state = useSelector((state: RootState) => state.logWorkoutSliceReducer);

  const [countSet, setCountSet] = React.useState<number>(1);

  return (
    <Card className="bg-[#14181f]">
      <CardHeader>
        <LogWorkoutSetDetailsHeader
          exerciseDetails={exerciseDetails}
          setExerciseDetails={setExerciseDetails}
          dispatch={dispatch}
        />
        <Separator />
      </CardHeader>
      <CardContent>
        {/* Display Sets */}
        {countSet > 1 && (
          <LogWorkoutCurrentSets
            omitWeight={
              exerciseDetails.exerciseType === "cardio" ||
              exerciseDetails.equipments.includes("bodyweight")
            }
            setCountSet={setCountSet}
          />
        )}

        {/* Workout Details Form */}
        <LogWorkoutSetDetailsForm
          isWeightDisabled={
            exerciseDetails.exerciseType === "cardio" ||
            exerciseDetails.equipments.includes("bodyweight")
          }
          setCountSet={setCountSet}
          dispatch={dispatch}
        />

        {/* Current Set Count */}
        <div
          role="set-reps"
          className="text-muted-foreground text-sm text-center mb-4"
        >{`Set ${countSet}`}</div>

        {/* Finish Exercise Button */}
        <Button
          onClick={() =>
            logWorkoutFinishExercisePostApiCall(
              state,
              setExerciseDetails,
              dispatch,
            )
          }
          disabled={countSet === 1}
          className="ring-offset-background w-full py-3 text-lg bg-[#f45925] inline-flex gap-2 justify-center items-center hover:bg-[#f45925e6] hover:shadow-[0_0_20px_#f4592566]"
        >
          <Check />
          <span>Finish Exercise</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default LogWorkoutSetDetails;
