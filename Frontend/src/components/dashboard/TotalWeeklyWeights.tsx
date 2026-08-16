import { useSelector } from "react-redux";
import CardMould from "./CardMould";
import { Dumbbell, TrendingUp } from "lucide-react";
import type { RootState } from "@/reduxToolkit/store";

const TotalWeeklyWeights = () => {
  const totalWeeklyWeightLifted = useSelector(
    (state: RootState) => state.dashboardSliceReducer.totalWeeklyWeightLifted,
  );

  return (
    <CardMould
      mainText="Weight Lifted"
      mainTextStyle="text-sm font-medium text-muted-foreground"
      additionalItem={<Dumbbell size={16} className="text-muted-foreground" />}
      largeScreenColSpan={3}
    >
      {/* Weights Lifted Numeric Data */}
      <div>
        <span className="text-4xl font-bold">
          {totalWeeklyWeightLifted ?? "ERROR"}
        </span>
        &nbsp;
        <span className="text-muted-foreground">kg</span>
      </div>

      {/* Motivational Text */}
      <div className="text-[#12d393] flex items-center gap-1 text-sm">
        <span>
          <TrendingUp size={24} />
        </span>
        <span>The more you lift.. the stronger you become</span>
      </div>
    </CardMould>
  );
};

export default TotalWeeklyWeights;
