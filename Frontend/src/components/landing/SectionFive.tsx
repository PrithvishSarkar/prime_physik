import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const LandingSectionFive = () => {
  return (
    <Card className="p-8 md:p-12 lg:p-16 mx-8 my-20 rounded-3xl bg-linear-to-b from-[#181d25] to-[#101318] text-center border border-border">
      <CardHeader>
        <CardTitle className="font-bold text-3xl sm:text-4xl">
          Ready to Start Your Transformation?
        </CardTitle>
        <CardDescription className="text-muted-foreground text-lg">
          Join thousands of users who have already transformed their fitness
          journey with FitTrack.
          <br />
          Start your free trial today.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
        <Link to="/register" className="text-secondary font-bold text-lg px-8 py-2 rounded-xl inline-flex gap-2 justify-center items-center cursor-pointer bg-linear-135 from-[#12d393] to-[#0ea472] transition-all hover:shadow-[0_0_20px_#12d39366] ring-offset-background">
          <span>Get Started Free</span>
          <span>
            <ChevronRight />
          </span>
        </Link>
        <Link to="/login" className="font-semibold text-lg px-8 py-2 bg-background border border-input rounded-xl ring-offset-background inline-flex gap-2 justify-center items-center cursor-pointer transition-all hover:bg-secondary">I Have an Account</Link>
      </CardContent>
    </Card>
  );
};

export default LandingSectionFive;
