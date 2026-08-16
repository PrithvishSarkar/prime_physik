import React from "react";
import { Check, ChevronLeft, Target } from "lucide-react";
import { useNavigate } from "react-router";
import onboardingHandleSaveInfo from "@/lib/onboardingHandleSaveData";

// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import {
  setWorkoutFrequency,
  setFitnessGoal,
  setExperienceLevel,
} from "@/reduxToolkit/slices/onboardingFormSlice";

// ShadCN Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SpinningLoader from "../SpinningLoader";

interface PropInterface {
  setCurrentSection: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

const OnboardingSectionThree = ({ setCurrentSection }: PropInterface) => {
  // Save Info button loading state which calls an API when clicked
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(
    (state: RootState) => state.onboardingFormSliceReducer,
  );

  const navigate = useNavigate();

  const optionButtonClass =
    "font-medium text-lg p-3 border transition-colors hover:border-[#12d39380]";

  return (
    <Card className="bg-[#14181f]">
      <CardHeader role="introductory-text" className="flex gap-3 items-center">
        <div className="rounded-xl bg-[#12d3931a] p-3 text-[#12d393]">
          <Target />
        </div>
        <div>
          <CardTitle
            role="main-introductory-text"
            className="text-xl font-semibold"
          >
            Training Preference
          </CardTitle>
          <CardDescription
            role="complementary-introductory-text"
            className="text-sm text-muted-foreground"
          >
            Customize yur workout plan
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Workout Frequency */}
        <section>
          <Label className="text-sm font-semibold mb-2">
            Workout Frequency
          </Label>
          <div className="grid grid-cols-4 gap-2">
            {[3, 4, 5, 6].map((frequency, index) => (
              <Button
                key={index}
                value={frequency}
                onClick={() => {
                  switch (frequency) {
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                      dispatch(setWorkoutFrequency(frequency));
                      break;
                    default:
                      break;
                  }
                }}
                className={`${frequency === state.workoutFrequency ? "text-[#12d393] bg-[#12d3931a] border-[#12d393]" : "border-border"} ${optionButtonClass}`}
              >{`${frequency} days`}</Button>
            ))}
          </div>
        </section>

        {/* Fitness Goal */}
        <section>
          <Label className="text-sm font-semibold mb-2">Fitness Goal</Label>
          <div className="grid grid-cols-2 gap-2">
            {[
              "muscle_building",
              "fat_loss",
              "strength_gain",
              "general_fitness",
            ].map((goal, index) => (
              <Button
                key={index}
                value={goal}
                onClick={() => {
                  switch (goal) {
                    case "muscle_building":
                    case "fat_loss":
                    case "strength_gain":
                    case "general_fitness":
                      dispatch(setFitnessGoal(goal));
                      break;
                    default:
                      break;
                  }
                }}
                className={`${goal === state.fitnessGoal ? "text-[#12d393] bg-[#12d3931a] border-[#12d393]" : "border-border"} ${optionButtonClass}`}
              >
                {goal
                  .split("_")
                  .map((text) => text[0].toUpperCase() + text.slice(1))
                  .join(" ")}
              </Button>
            ))}
          </div>
        </section>

        {/* Experience Level */}
        <section>
          <Label className="text-sm font-semibold mb-2">Experience Level</Label>
          <div className="grid grid-cols-3 gap-2">
            {["beginner", "intermediate", "advanced"].map(
              (experience, index) => (
                <Button
                  key={index}
                  value={experience}
                  onClick={() => {
                    switch (experience) {
                      case "beginner":
                      case "intermediate":
                      case "advanced":
                        dispatch(setExperienceLevel(experience));
                        break;
                      default:
                        break;
                    }
                  }}
                  className={`${experience === state.experienceLevel ? "text-[#12d393] bg-[#12d3931a] border-[#12d393]" : "border-border"} ${optionButtonClass}`}
                >
                  {experience[0].toUpperCase() + experience.slice(1)}
                </Button>
              ),
            )}
          </div>
        </section>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between items-center">
        <Button
          onClick={() => setCurrentSection(2)}
          className="font-semibold px-6 py-2 bg-background ring-offset-background hover:bg-secondary"
        >
          <ChevronLeft /> Back
        </Button>
        <Button
          disabled={
            !state.workoutFrequency ||
            !state.fitnessGoal ||
            !state.experienceLevel
          }
          onClick={() =>
            onboardingHandleSaveInfo(state, navigate, setIsLoading)
          }
          className="text-secondary font-semibold px-6 py-2 bg-[#12d393] ring-offset-background hover:bg-[#12d393e6] hover:shadow-[0_0_20px_#12d39366]"
        >
          {isLoading ? <SpinningLoader size={4} color="dark" /> : <Check />}
          Save Info
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OnboardingSectionThree;
