import React, { type SetStateAction } from "react";

// Redux Toolkit
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { useSelector, useDispatch } from "react-redux";
import { deleteSet } from "@/reduxToolkit/slices/logWorkoutSlice";

// Lucide React Icons
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface PropInterface {
  omitWeight: boolean;
  setCountSet: React.Dispatch<SetStateAction<number>>;
}

const LogWorkoutCurrentSets = ({ omitWeight, setCountSet }: PropInterface) => {
  const state = useSelector((state: RootState) => state.logWorkoutSliceReducer);
  const dispatch: AppDispatch = useDispatch();

  return (
    <section>
      <small className="font-medium text-muted-foreground">Sets Logged:</small>
      <ul className="space-y-2 mt-1 mb-6">
        {state.sets.map((set, index) => (
          <li
            key={index}
            className="p-3 bg-primary/5 rounded-lg flex justify-between items-center"
          >
            <span className="flex items-center gap-4">
              <Badge className="font-bold text-sm text-secondary bg-[#12d393]">
                {index + 1}
              </Badge>
              {!omitWeight && (
                <span className="font-medium">{`${set.weight}kg`}</span>
              )}
              {!omitWeight && <span>x</span>}
              <span className="font-medium">{set.reps}reps</span>
            </span>
            <span className="text-destructive p-2 rounded-lg hover:bg-destructive/10">
              <Button
                asChild
                size="icon-xs"
                onClick={() => {
                  dispatch(deleteSet(Number(index)));
                  setCountSet((value) => value - 1);
                }}
              >
                <Trash2 />
              </Button>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LogWorkoutCurrentSets;
