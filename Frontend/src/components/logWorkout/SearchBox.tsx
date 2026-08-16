import React from "react";

// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { setExercise, reset as logWorkoutReset } from "@/reduxToolkit/slices/logWorkoutSlice";
import { reset as exerciseDetailsReset } from "@/reduxToolkit/slices/exerciseDetailModalSlice";

// ShadCN Components
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/select";

const LogWorkoutSearchBox = () => {
  const dispatch: AppDispatch = useDispatch();

  const state = useSelector(
    (state: RootState) => state.exerciseListSliceReducer,
  );

  const exercise = useSelector(
    (state: RootState) => state.logWorkoutSliceReducer.exercise,
  );

  // Updates Exercise Value using Exercise Detail Modal if Redirected
  const modalState = useSelector(
    (state: RootState) => state.exerciseDetailModalSliceReducer,
  );
  React.useEffect(() => {
    modalState.exerciseDetail &&
      dispatch(setExercise(modalState.exerciseDetail._id));
    
    return () => {
      dispatch(logWorkoutReset());
      dispatch(exerciseDetailsReset());
    }
  }, []);

  return (
    <Select
      value={exercise ?? ""}
      onValueChange={(val) => dispatch(setExercise(val))}
    >
      <SelectTrigger className="px-4 py-2 bg-background w-full mb-6">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {state.exerciseGroup.map((group, index) => {
          const groupLength = state.exerciseGroup.length;
          return (
            <React.Fragment key={index}>
              <SelectGroup>
                <SelectLabel>{group.muscle.toUpperCase()}</SelectLabel>
                {group.exercises.map((exercise, idx) => (
                  <SelectItem key={idx} value={exercise._id}>
                    <div className="flex flex-col items-start">
                      <div className="text-[#12d393] font-medium">
                        {exercise.name}
                      </div>
                      <div className="flex gap-2">
                        {exercise.secondaryMuscles.map((muscle, indx) => {
                          const secondaryMusclesLength =
                            exercise.secondaryMuscles.length;
                          return (
                            <div
                              key={indx}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <div className="capitalize">{muscle}</div>
                              {indx < secondaryMusclesLength - 1 && (
                                <div className="w-1 h-1 rounded-full bg-primary" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
              {index < groupLength - 1 && <SelectSeparator />}
            </React.Fragment>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default LogWorkoutSearchBox;
