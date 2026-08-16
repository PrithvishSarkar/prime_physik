import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

interface PropInterface {
  userCount: number;
  logCount: number;
  exerciseCount: number;
  rating: number;
}

const LandingSectionOne = ({
  userCount,
  logCount,
  exerciseCount,
  rating,
}: PropInterface) => {
  return (
    <main className="p-8">
      <div className="text-center px-41.25">
        {/* Introduction */}
        <header className="text-4xl sm:text-5xl lg:text-6xl text-primary font-bold">
          Transform Your Body,
          <br />
          Track Your Progress
        </header>

        {/* Description */}
        <p className="text-primary/80 text-lg mt-16">
          The ultimate workout companion that helps you plan, track, and achieve
          your fitness goals. Join thousands of athletes who trust{" "}
          <span>PrimePhysik</span>.
        </p>

        {/* Redirecting Links */}
        <section className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            to="/register"
            className="text-[#12d393] text-lg font-semibold px-10 py-4 rounded-xl inline-flex gap-2 justify-center items-center cursor-pointer bg-primary-foreground"
          >
            <span>Start Free Trial</span>
            <span>
              <ChevronRight />
            </span>
          </Link>
          <Link
            to="/exercises"
            className="text-primary font-semibold text-lg px-10 py-4 bg-primary/10 border-2 border-primary/20 rounded-xl inline-flex gap-2 justify-center items-center cursor-pointer"
          >
            Explore Exercises
          </Link>
        </section>
      </div>

      {/* Statistical Metrics */}
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
        {[
          { data: userCount + "K+", text: "Active Users" },
          { data: logCount + "M+", text: "Workouts Logged" },
          { data: exerciseCount + "+", text: "Exercises" },
          { data: rating, text: "Rating" },
        ].map((item, index) => (
          <li key={index} className="text-center p-6 bg-primary/10 rounded-xl">
            <div className="text-primary font-bold text-3xl">{item.data}</div>
            <div className="text-primary/80 text-sm mt-1">{item.text}</div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default LandingSectionOne;
