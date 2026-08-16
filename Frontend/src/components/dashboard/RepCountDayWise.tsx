import CardMould from "./CardMould";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useSelector } from "react-redux";
import type { RootState } from "@/reduxToolkit/store";

const RepCountDayWise = () => {
  const repCountDayWise = useSelector(
    (state: RootState) => state.dashboardSliceReducer.repCountDayWise,
  );

  return (
    <CardMould
      mainText="Rep Count Analytics"
      mainTextStyle="text-xl md:text-2xl font-semibold"
      largeScreenColSpan={6}
    >
      <ResponsiveContainer width="100%" height={256}>
        <AreaChart data={repCountDayWise}>
          <defs>
            <linearGradient id="repGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="hsl(160, 84%, 39%)"
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor="hsl(160, 84%, 39%)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12 }}
            stroke="hsl(220, 10%, 46%)"
          />
          <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="totalReps"
            stroke="hsl(160, 84%, 39%)"
            strokeWidth={2}
            fill="url(#repGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </CardMould>
  );
};

export default RepCountDayWise;
