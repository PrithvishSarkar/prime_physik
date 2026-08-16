import { Activity, TrendingUp } from "lucide-react";
import CardMould from "./CardMould";
import type { RootState } from "@/reduxToolkit/store";
import { useSelector } from "react-redux";

const TotalWeeklyReps = () => {
  const totalWeeklyReps = useSelector((state: RootState) => state.dashboardSliceReducer.totalWeeklyReps);

  return (
    <CardMould
      mainText="Weekly Reps"
      mainTextStyle="text-sm font-medium text-muted-foreground"
      additionalItem={<Activity size={16} className="text-muted-foreground" />}
      largeScreenColSpan={3}
    >
      {/* Rep Count Numeric Data */}
      <div>
        <span className="text-4xl font-bold">{totalWeeklyReps ?? "ERROR"}</span>
        &nbsp;
        <span className="text-muted-foreground">reps</span>
      </div>

      {/* Motivational Text */}
      <div className="text-[#12d393] flex gap-1 items-center text-sm">
        <span>
          <TrendingUp size={24} />
        </span>
        <span>You become what you repeatedly do</span>
      </div>
    </CardMould>
  );
};

export default TotalWeeklyReps;
