import { Activity } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { Link, useLocation } from "react-router";

const NoExerciseLogged = () => {
  const { pathname } = useLocation();

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia className="bg-[#12d3931a] p-2 rounded-lg">
          <Activity size={28} stroke="#12d393" />
        </EmptyMedia>
        <EmptyTitle>Ready to workout?</EmptyTitle>
        <EmptyDescription>
          Whether you've been recovering or just taking a breather, your mat is
          ready. Let's crush today's session!
        </EmptyDescription>
      </EmptyHeader>
      {pathname === "/dashboard" && (
        <EmptyContent>
          <Link to="/log" className="bg-[#12d393] text-secondary text-lg font-semibold rounded-lg px-6 py-2">Log Today's Workout</Link>
        </EmptyContent>
      )}
    </Empty>
  );
};

export default NoExerciseLogged;
