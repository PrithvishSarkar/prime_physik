import { TrendingUp } from "lucide-react";

const LandingSectionTwo = () => {
  return (
    <main className="py-20 px-41.25 bg-secondary/30 text-center">
      <div className="flex justify-center mb-6">
        <span className="rounded-full bg-[#12d3931a] p-4 text-[#12d393]">
          <TrendingUp className="h-8 w-8" />
        </span>
      </div>
      <header className="font-bold text-3xl sm:text-4xl lg:text-5xl">
        <span>Every Rep Counts,</span>
        <span className="text-transparent bg-clip-text bg-linear-to-br from-[#12d393] to-[#0ea472]">Every Day Matters.</span>
      </header>
      <p role="description" className="text-muted-foreground text-lg mt-6">
        We believe that consistency is the key to transformation. PrimePhysik
        helps you build sustainable habits and celebrate every milestone on your
        fitness journey.
      </p>
    </main>
  );
};

export default LandingSectionTwo;
