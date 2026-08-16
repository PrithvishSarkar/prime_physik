import { Award } from "lucide-react";
import CardMould from "./CardMould";
import MostFrequentExerciseCard from "./MostFrequentExerciseCard";
import { useSelector } from "react-redux";
import type { RootState } from "@/reduxToolkit/store";

const MostFrequentExercises = () => {
  const topExercises = useSelector(
    (state: RootState) => state.dashboardSliceReducer.topExercises,
  );

  return (
    <CardMould
      mainText="Top Exercises"
      mainTextStyle="text-xl md:text-2xl font-semibold"
      additionalItem={<Award size={16} color="#f45925" />}
      largeScreenColSpan={4}
    >
      <ul className="space-y-3">
        {topExercises.map((item, index) => (
          <MostFrequentExerciseCard
            key={index}
            name={item.name}
            reps={item.totalReps}
            weight={item.totalWeightLifted}
          />
        ))}
      </ul>
    </CardMould>
  );
};

export default MostFrequentExercises;
