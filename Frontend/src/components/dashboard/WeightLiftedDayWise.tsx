import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CardMould from "./CardMould";
import { useSelector } from "react-redux";
import type { RootState } from "@/reduxToolkit/store";

const WeightLiftedDayWise = () => {
  const weightLiftedDayWise = useSelector(
    (state: RootState) => state.dashboardSliceReducer.weightLiftedDayWise,
  );

  return (
    <CardMould
      mainText="Weight Lifted Analytics"
      mainTextStyle="text-xl md:text-2xl font-semibold"
      largeScreenColSpan={6}
    >
      <ResponsiveContainer width="100%" height={256}>
        <BarChart data={weightLiftedDayWise}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12 }}
            stroke="hsl(220, 10%, 46%)"
          />
          <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
          <Tooltip />
          <Bar
            dataKey="totalWeight"
            fill="hsl(15, 90%, 60%)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </CardMould>
  );
};

export default WeightLiftedDayWise;
