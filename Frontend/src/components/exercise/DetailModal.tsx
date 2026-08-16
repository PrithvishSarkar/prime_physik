import {
  setIsModalOpen,
  setExerciseDetail,
} from "@/reduxToolkit/slices/exerciseDetailModalSlice";
import { Badge } from "@/components/ui/badge";
import { Clock, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { useNavigate, type NavigateFunction } from "react-router";

const ExerciseDetailModal = () => {
  const state = useSelector(
    (state: RootState) => state.exerciseDetailModalSliceReducer,
  );
  const dispatch: AppDispatch = useDispatch();

  const navigate: NavigateFunction = useNavigate();

  return (
    <Dialog
      open={state.isModalOpen && !!state.exerciseDetail}
      onOpenChange={(_open) =>
        dispatch(setIsModalOpen(false)) &&
        dispatch(setExerciseDetail(undefined))
      }
    >
      <DialogContent>
        <DialogHeader>
          <section className="flex items-center justify-start gap-3">
            <img
              src={state.exerciseDetail?.thumbnailUrl}
              alt="Thumbnail"
              width={70}
              height={70}
            />
            <span className="flex flex-col gap-1 items-start justify-between">
              <span className="text-3xl font-bold">
                {state.exerciseDetail?.name}
              </span>
              <Badge className="font-semibold text-secondary bg-[#12d393] text-sm">
                {state.exerciseDetail?.primaryMuscle}
              </Badge>
              <span className="space-x-1">
                {state.exerciseDetail &&
                  state.exerciseDetail.secondaryMuscles.map((muscle, index) => (
                    <Badge
                      key={index}
                      className="text-[#12d393] bg-[#12d3931a] font-semibold text-sm"
                    >
                      {muscle}
                    </Badge>
                  ))}
              </span>
              <span className="space-x-1">
                {state.exerciseDetail &&
                  state.exerciseDetail.equipments.map((equipment, index) => (
                    <Badge
                      key={index}
                      className="font-semibold border-border text-sm"
                    >
                      {equipment}
                    </Badge>
                  ))}
              </span>
            </span>
          </section>
        </DialogHeader>

        <section className="space-y-4">
          {/* Preparation Section */}
          <div>
            <div className="font-semibold text-2xl flex gap-2 items-center">
              <Clock color="#ef4444" /> <span>Preparation</span>
            </div>
            <div className="text-muted-foreground">
              {state.exerciseDetail?.preparation}
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-semibold text-2xl flex gap-2 items-center">
              <Lightbulb color="#eab308" /> <span>How to Perform</span>
            </div>
            <ul className="space-y-2">
              {state.exerciseDetail &&
                state.exerciseDetail.instructions.map((instruction, index) => (
                  <li className="flex items-center gap-3">
                    <Badge className="font-bold bg-[#12d393] text-secondary">
                      {index + 1}
                    </Badge>
                    <span>{instruction}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <Button
              onClick={() => {
                navigate("/log");
              }}
              className="w-full text-secondary font-semibold text-xl text-center py-2 bg-[#12d393] hover:bg-[#12d393e6] hover:shadow-[0_0_20px_#12d39366]"
            >
              Log Exercise
            </Button>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseDetailModal;
