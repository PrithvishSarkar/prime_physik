import { Calendar } from "lucide-react";
import CardMould from "./CardMould";
import { useSelector } from "react-redux";
import type { RootState } from "@/reduxToolkit/store";

const UserTrainingPlan = () => {
  const trainingPlan = useSelector(
    (state: RootState) => state.dashboardSliceReducer.trainingPlan,
  );

  return (
    <CardMould
      mainText="Training Plan"
      mainTextStyle="text-sm font-medium text-muted-foreground"
      additionalItem={<Calendar size={16} className="text-muted-foreground" />}
      largeScreenColSpan={3}
    >
      {/* Training Plan Data */}
      <ul className="space-y-3">
        {trainingPlan.map(({ label, value }, index) => {
          let displayValue: number | string = "";
          switch (typeof value) {
            case "number":
              displayValue = value;
              break;
            case "string":
              displayValue = value
                .split("_")
                .map((item) => item[0].toUpperCase() + item.slice(1))
                .join(" ");
              break;
            default:
              break;
          }
          return (
            <li key={index}>
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="font-semibold text-[#12d393]">{displayValue}</p>
            </li>
          );
        })}
      </ul>
    </CardMould>
  );
};

export default UserTrainingPlan;
