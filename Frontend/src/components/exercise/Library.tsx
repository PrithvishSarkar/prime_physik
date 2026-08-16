import type StateObjectInterface from "@/interfaces/exerciseLibrarySliceState";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ExerciseCard from "./ExerciseCard";

interface PropInterface {
  exerciseGroupList: StateObjectInterface[];
  searchExercise: string;
}

const ExerciseLibrary = ({
  exerciseGroupList,
  searchExercise,
}: PropInterface) => {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {exerciseGroupList
        .slice()
        .sort((a, b) => {
          if (a.muscle < b.muscle) return -1;
          return 1;
        })
        .filter((groupMember) => {
          for (let exercise of groupMember.exercises) {
            if (
              exercise.name.toLowerCase().includes(searchExercise.toLowerCase())
            )
              return true;
            return false;
          }
        })
        .map((groupMember, index) => {
          const filteredExercises = groupMember.exercises.filter((exercise) =>
            exercise.name.toLowerCase().includes(searchExercise.toLowerCase()),
          );
          return (
            <AccordionItem
              value={groupMember.muscle}
              key={index}
              className="border border-border rounded-xl bg-[#14181f]"
            >
              <AccordionTrigger className="cursor-pointer px-3">
                <ul className="flex items-center gap-3">
                  <li className="bg-[#12d3931a] rounded-lg p-3 text-[#12d393] font-semibold">
                    {groupMember.muscle[0].toUpperCase()}
                  </li>
                  <div>
                    <li className="text-2xl font-semibold">
                      {groupMember.muscle[0].toUpperCase() +
                        groupMember.muscle.slice(1)}
                    </li>
                    <li className="text-sm text-muted-foreground">{`${filteredExercises.length} exercises`}</li>
                  </div>
                </ul>
              </AccordionTrigger>
              <AccordionContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4">
                {filteredExercises.map((exercise, index) => (
                  <ExerciseCard key={index} exercise={exercise} />
                ))}
              </AccordionContent>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
};

export default ExerciseLibrary;
