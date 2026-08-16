import React from "react";
import type { ExerciseInterface } from "@/interfaces/exerciseLibrarySliceState";
import type { AppDispatch } from "@/reduxToolkit/store";
import { reset } from "@/reduxToolkit/slices/logWorkoutSlice";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PropInterface {
  exerciseDetails: ExerciseInterface;
  setExerciseDetails: React.Dispatch<
    React.SetStateAction<ExerciseInterface | undefined>
  >;
  dispatch: AppDispatch;
}

const LogWorkoutSetDetailsHeader = ({
  exerciseDetails,
  setExerciseDetails,
  dispatch,
}: PropInterface) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-lg font-bold">{exerciseDetails.name}</div>
        <div className="flex gap-2 justify-start text-sm text-muted-foreground">
          {exerciseDetails.secondaryMuscles.map((muscle, index) => {
            const length = exerciseDetails.secondaryMuscles.length;
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="capitalize">{muscle}</div>
                {index < length - 1 && (
                  <div className="w-1 h-1 rounded-full bg-primary" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-2 rounded-lg text-destructive hover:bg-destructive/10">
        <Button
          asChild
          size="icon-sm"
          onClick={() => {
            setExerciseDetails(undefined);
            dispatch(reset());
          }}
        >
          <X />
        </Button>
      </div>
    </div>
  );
};

export default LogWorkoutSetDetailsHeader;
