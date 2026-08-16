import { Quote, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LandingSectionFour = () => {
  return (
    <main className="px-8">
      <div className="text-center mb-12">
        <header className="text-primary font-bold text-3xl sm:text-4xl">
          Loved by Athletes Worldwide
        </header>
        <p role="description" className="text-primary/80 text-lg mt-4">
          See what our community has to say about PrimePhysik.
        </p>
      </div>
      <ul className="flex flex-col md:flex-row gap-6 md:items-stretch">
        {[
          {
            comment:
              "FitTrack transformed my training. I've improved my pace by 20% in just 3 months!",
            rating: 5,
            name: "Sarah Johnson",
            profession: "Marathon Runner",
          },
          {
            comment:
              "The best workout tracker I've ever used. The analytics are incredibly detailed.",
            rating: 4,
            name: "Mike Chen",
            profession: "Bodybuilder",
          },
          {
            comment:
              "Finally an app that understands my fitness journey. Highly recommended!",
            rating: 5,
            name: "Emily Davis",
            profession: "Fitness Enthusiast",
          },
        ].map((testimonial, index) => (
          <li key={index}>
            <Card className="border border-primary/20 bg-primary/10 rounded-2xl backdrop-blur-sm">
              <CardContent>
                <Quote />
                <p className="text-primary/90">{testimonial.comment}</p>
                <ul className="mt-4 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map(
                    (_, index) => (
                      <li key={index}>
                        <Star fill="orange" color="orange" />
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
              <Separator />
              <CardFooter className="flex flex-col items-start justify-center">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <small className="text-primary/70">{testimonial.profession}</small>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default LandingSectionFour;
