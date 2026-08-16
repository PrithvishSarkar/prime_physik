import { Calendar } from "lucide-react";
import ExerciseCard from "@/components/exercise/ExerciseCard";
import workoutPlanExerciseCount from "@/lib/workoutPlanExerciseCount";

// Redux Toolkit
import { useSelector } from "react-redux";
import type { RootState } from "@/reduxToolkit/store";

// ShadCN Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const WorkoutSchedule = () => {
  const workouts = useSelector(
    (state: RootState) => state.workoutPlanSliceReducer.workouts,
  );

  const exerciseCountList = !workouts ? [] : workoutPlanExerciseCount(workouts);

  return (
    <Accordion collapsible type="single" className="space-y-3">
      {workouts &&
        workouts.map((workout, index) => {
          // Collecting Unique Primary Muscles
          const primaryMuscleSet = new Set<string>();
          workout.exercises.forEach((exercise) =>
            primaryMuscleSet.add(exercise.primaryMuscle),
          );

          return (
            <AccordionItem
              key={index}
              value={workout._id}
              className="bg-[#14181f] rounded-2xl border border-border"
            >
              <AccordionTrigger className="px-4 cursor-pointer hover:bg-[#1f242e80]">
                <ul className="flex items-center justify-between w-full">
                  <li className="flex items-center gap-3">
                    <span className="bg-[#12d3931a] text-[#12d393] rounded-lg p-2">
                      <Calendar />
                    </span>
                    <span className="flex flex-col justify-start gap-2">
                      <span className="text-2xl font-bold">{`Day ${workout.day}`}</span>
                      <span className="flex gap-2 items-center">
                        {Array.from(primaryMuscleSet).map((muscle, index) => (
                          <Badge
                            key={index}
                            className="px-3 py-1 text-muted-foreground border border-input text-sm"
                          >
                            {muscle}
                          </Badge>
                        ))}
                      </span>
                    </span>
                  </li>
                  <li>
                    <Badge className="text-sm px-3 py-1 text-[#12d393] bg-[#12d3931a]">{`${exerciseCountList[workout.day - 1]} exercises`}</Badge>
                  </li>
                </ul>
              </AccordionTrigger>
              <AccordionContent className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {workout.exercises.map((exercise, index) => (
                  <ExerciseCard key={index} exercise={exercise} />
                ))}
              </AccordionContent>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
};

export default WorkoutSchedule;
