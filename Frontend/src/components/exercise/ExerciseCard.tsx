import type { ExerciseInterface } from "@/interfaces/exerciseLibrarySliceState";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import {
  setIsModalOpen,
  setExerciseDetail,
} from "@/reduxToolkit/slices/exerciseDetailModalSlice";

interface PropInterface {
  exercise: ExerciseInterface;
}

const ExerciseCard = ({ exercise }: PropInterface) => {
  const dispatch: AppDispatch = useDispatch();
  const isAuthentic = useSelector(
    (state: RootState) => state.userAuthenticitySliceReducer.isAuthentic,
  );

  return (
    <Card className="bg-background">
      <CardContent className="flex items-start gap-3">
        <section>
          <img
            src={exercise.thumbnailUrl}
            alt="exercise image"
            height={40}
            width={40}
          />
        </section>
        
        <section className="grow space-y-2">
          {/* Exercise Name */}
          <div className="text-sm font-semibold">{exercise.name}</div>

          {/* Target Muscles */}
          <div className="flex flex-wrap gap-1">
            {exercise.secondaryMuscles.map((secondaryMuscle, index) => (
              <Badge
                key={index}
                className="text-xs px-2 py-1 border border-border font-semibold bg-secondary"
              >
                {secondaryMuscle}
              </Badge>
            ))}
          </div>

          {/* Required Equipments */}
          <div className="flex flex-wrap gap-1">
            {exercise.equipments.map((equipment, index) => (
              <Badge
                key={index}
                className="text-xs px-2 py-1 border border-border font-semibold"
              >
                {equipment}
              </Badge>
            ))}
          </div>
        </section>

        {isAuthentic && (
          <section>
            <Button
              onClick={() => {
                dispatch(setIsModalOpen(true));
                dispatch(setExerciseDetail(exercise));
              }}
              className="text-muted-foreground p-2 hover:bg-[#12d3931a] hover:text-[#12d393]"
            >
              <Info />
            </Button>
          </section>
        )}
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
