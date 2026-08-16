import WorkoutHistoryCard from "./HistoryCard";
import totalSets from "@/lib/workoutHistoryTotalSets";
import { Calendar } from "lucide-react";

// ShadCN Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useSelector } from "react-redux";
import type { RootState } from "@/reduxToolkit/store";

const WorkoutHistoryMainContent = () => {
  const history = useSelector(
    (state: RootState) => state.workoutHistorySliceReducer.workoutHistory,
  );

  return (
    <Accordion type="single" collapsible className="space-y-4">
      {history.map((stateItem, index) => (
        <AccordionItem
          key={index}
          value={stateItem.date.toString()}
          className="bg-[#14181f] border border-border rounded-2xl"
        >
          <AccordionTrigger className="cursor-pointer px-4 hover:bg-[#1f242e80]">
            <div className="flex items-center gap-3">
              <div className="bg-[#12d3931a] text-[#12d393] rounded-xl p-2">
                <Calendar />
              </div>
              <ul className="">
                <li className="font-semibold text-2xl">
                  {new Date(stateItem.date).toDateString().slice(4)}
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span>{`${stateItem.exercises.length} exercises`}</span>
                  <i className="inline-block w-1 h-1 rounded-full bg-muted-foreground" />
                  <span>{`${totalSets(stateItem.exercises)} total reps`}</span>
                </li>
              </ul>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 space-y-3">
            {stateItem.exercises.map((exerciseItem, index) => (
              <WorkoutHistoryCard key={index} exercise={exerciseItem} />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default WorkoutHistoryMainContent;
