import type StateInterface from "@/interfaces/workoutPlanSliceState";
import workoutPlanExerciseCount from "@/lib/workoutPlanExerciseCount";

interface PropInterface {
  state: StateInterface;
}

const WorkoutPlanOverview = ({ state }: PropInterface) => {
  return (
    <ul className="mb-8 p-4 text-center bg-[#1f242e80] border border-border rounded-xl grid grid-cols-2 sm:grid-cols-4 gap-3">
      {[
        { label: "Days/week", value: state.frequency ?? "" },
        { label: "Goal", value: state.goal ?? "" },
        { label: "Level", value: state.level ?? "" },
        {
          label: "Exercises",
          value: !state.workouts
            ? ""
            : workoutPlanExerciseCount(state.workouts).reduce(
                (total, value) => (total += value),
                0,
              ),
        }, // Liable for change
      ].map((item, index) => {
        switch (typeof item.value) {
          case "string":
            return (
              <li key={index} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-[#12d393]">
                  {!item.value
                    ? ""
                    : item.value
                        .split("_")
                        .map((text) => text[0].toUpperCase() + text.slice(1))
                        .join(" ")}
                </span>
                <span className="text-muted-foreground">{item.label}</span>
              </li>
            );
          case "number":
            return (
              <li key={index} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-[#12d393]">
                  {item.value}
                </span>
                <span className="text-muted-foreground">{item.label}</span>
              </li>
            );
          default:
            return <li key={index}></li>;
        }
      })}
    </ul>
  );
};

export default WorkoutPlanOverview;
