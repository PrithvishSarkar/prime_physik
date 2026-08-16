import { Link } from "react-router";
import CardMould from "./CardMould";
import { ChevronRight } from "lucide-react";
import RecentExerciseCard from "./RecentExerciseCard";
import { useSelector } from "react-redux";
import type { RootState } from "@/reduxToolkit/store";

const RedirectingLink = () => {
  return (
    <Link
      to="/history/1"
      className="text-[#12d393] flex items-center gap-1 hover:underline"
    >
      <span>View All</span>
      <span>
        <ChevronRight />
      </span>
    </Link>
  );
};

const RecentExercises = () => {
  const recentExercises = useSelector(
    (state: RootState) => state.dashboardSliceReducer.recentExercises,
  );

  return (
    <CardMould
      mainText="Recent Exercises"
      mainTextStyle="text-xl md:text-2xl font-semibold"
      additionalItem={<RedirectingLink />}
      largeScreenColSpan={4}
    >
      <ul className="space-y-3">
        {recentExercises.map((item, index) => (
          <RecentExerciseCard
            key={index}
            name={item.name}
            date={new Date(item.date)}
            sets={item.sets}
          />
        ))}
      </ul>
    </CardMould>
  );
};

export default RecentExercises;
