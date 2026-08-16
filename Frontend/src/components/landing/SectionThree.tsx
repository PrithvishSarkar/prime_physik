import { Target, Calendar, BarChart4, Dumbbell, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LandingSectionThree = () => {
  return (
    <main className="py-20 px-4">
      <div className="mb-12">
        <Badge className="bg-[#12d3931a] text-[#12d393] text-sm inline-flex gap-2 items-center px-4 py-2 mb-6 rounded-full font-medium">
          <span>
            <Target />
          </span>
          <span>About PrimePhysik</span>
        </Badge>
        <header className="font-bold text-3xl sm:text-4xl">
          Your Personal Fitness Journel Starts Here
        </header>
        <p role="description" className="text-muted-foreground mt-4 text-lg">
          PrimePhysik is more than just a workout tracker. It's your complete
          fitness companion that adapts to your goals, track your progress, and
          keeps you motivated every step of the way.
        </p>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: Calendar,
            title: "Smart Planning",
            description: "Personalized workout plans based on your goals.",
          },
          {
            icon: BarChart4,
            title: "Progress Tracking",
            description:
              "Visualize your gains with detailed analytics and progress charts.",
          },
          {
            icon: Dumbbell,
            title: "Exercise Library",
            description:
              "50+ exercises with detailed instructions and prerequisites.",
          },
          {
            icon: Zap,
            title: "Quick Logging",
            description:
              "Log your workouts in seconds with our intuitive interface.",
          },
        ].map((item, index) => (
          <li
            key={index}
            className="p-6 group bg-[#14181f] border border-border rounded-2xl transition-all hover:border-primary/20 hover:shadow-lg"
          >
            <div>
              <span className="p-2 text-[#12d393] bg-[#12d3931a] rounded-xl inline-block transition-colors group-hover:bg-[#12d393] group-hover:text-secondary">
                {<item.icon />}
              </span>
            </div>
            <div>
              <div className="font-semibold text-lg mt-4">{item.title}</div>
              <div className="text-muted-foreground text-sm mt-2">{item.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default LandingSectionThree;
