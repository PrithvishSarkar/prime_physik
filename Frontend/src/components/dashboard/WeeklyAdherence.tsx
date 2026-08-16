import React from "react";
import { Target } from "lucide-react";
import CardMould from "./CardMould";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Label,
  Sector,
  type PieSectorShapeProps,
} from "recharts";

import { useSelector } from "react-redux";
import type { RootState } from "@/reduxToolkit/store";

const PIE_SHAPE_DETAILS = {
  COLORS: ["#12d393", "#404040"],
  CORNER_RADII: [10, 0],
};

const MyCustomPie = (props: PieSectorShapeProps) => (
  <Sector
    {...props}
    fill={
      PIE_SHAPE_DETAILS.COLORS[props.index % PIE_SHAPE_DETAILS.COLORS.length]
    }
    cornerRadius={
      PIE_SHAPE_DETAILS.CORNER_RADII[
        props.index % PIE_SHAPE_DETAILS.CORNER_RADII.length
      ]
    }
  />
);

const WeeklyAdherence = () => {
  const { weeklyAdherence, trainingPlan } = useSelector(
    (state: RootState) => state.dashboardSliceReducer,
  );

  const [percentage, setPercentage] = React.useState<number>(0);

  // Percentage Value Updates Using `weeklyAdherence` and `trainingPlan` Values
  React.useEffect(() => {
    if (!weeklyAdherence && !trainingPlan.length) return;

    const adherence = weeklyAdherence ?? 0;
    const frequency = trainingPlan.find(
      (element) => element.label === "Frequency",
    )?.value as number;

    setPercentage(Math.round((adherence / frequency) * 100));
  }, [weeklyAdherence, trainingPlan.length]);

  // Data to be used for Pie Chart
  const [data, setData] = React.useState<
    { status: "complete" | "incomplete"; value: number }[]
  >([
    { status: "complete", value: 0 },
    { status: "incomplete", value: 100 },
  ]);

  // Data Updates Using `percentage` Value
  React.useEffect(() => {
    setData([
      { status: "complete", value: percentage },
      { status: "incomplete", value: 100 - percentage },
    ]);
  }, [percentage]);

  return (
    <CardMould
      mainText="Weekly Adherence"
      mainTextStyle="text-sm font-medium text-muted-foreground"
      additionalItem={<Target size={16} className="text-muted-foreground" />}
      largeScreenColSpan={3}
    >
      {/* Donut Chart */}
      <section className="flex items-center justify-center">
        <ResponsiveContainer width="100%" height={125}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius="80%"
              innerRadius="70%"
              stroke="transparent"
              startAngle={-270}
              cornerRadius={10}
              shape={MyCustomPie}
            >
              <Label
                position="center"
                value={`${data[0].value}%`}
                className="text-2xl font-bold"
                fill="white"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </section>

      {/* Adherence Text Data */}
      <section className="text-sm text-center text-muted-foreground">
        {!!trainingPlan.length &&
          `${weeklyAdherence} out of ${
            trainingPlan.find((element) => element.label === "Frequency")?.value
          } days completed`}
      </section>
    </CardMould>
  );
};

export default WeeklyAdherence;
