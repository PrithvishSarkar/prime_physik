import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type BarShapeProps,
} from "recharts";
import CardMould from "./CardMould";
import { useSelector } from "react-redux";
import type { RootState } from "@/reduxToolkit/store";

const COLORS = [
  "hsl(160, 84%, 39%)",
  "hsl(15, 90%, 60%)",
  "hsl(220, 70%, 50%)",
  "hsl(280, 65%, 60%)",
  "hsl(340, 75%, 55%)",
  "hsl(45, 95%, 50%)",
  "hsl(192, 80%, 45%)",
];

const MyCustomRectangle = (props: BarShapeProps) => {
  return <Rectangle {...props} fill={COLORS[props.index % COLORS.length]} />;
};

const RepCountMuscleWise = () => {
  const repCountMuscleWise = useSelector(
    (state: RootState) => state.dashboardSliceReducer.repCountMuscleWise,
  );
  return (
    <CardMould
      mainText="Muscle Distribution"
      mainTextStyle="text-xl md:text-2xl font-semibold"
      largeScreenColSpan={4}
    >
      <ResponsiveContainer width="100%" height={256}>
        <BarChart data={repCountMuscleWise} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
          <XAxis
            type="number"
            tick={{ fontSize: 12 }}
            stroke="hsl(220, 10%, 46%)"
          />
          <YAxis
            dataKey="muscle"
            type="category"
            tick={{ fontSize: 12 }}
            stroke="hsl(220, 10%, 46%)"
            width={70}
          />
          <Tooltip />
          <Bar dataKey="totalReps" shape={MyCustomRectangle} />
        </BarChart>
      </ResponsiveContainer>
    </CardMould>
  );
};

export default RepCountMuscleWise;
