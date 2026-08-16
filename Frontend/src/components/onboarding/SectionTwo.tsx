import React from "react";
import onboardingSectionTwoNextBtnDisabledStatus from "@/lib/onboardingSectionTwoNextBtnDisabledStatus";
import calculateBMI from "@/lib/calculateBMI";

// Redux Toolkit
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/reduxToolkit/store";
import {
  setHeight,
  setWeight,
} from "@/reduxToolkit/slices/onboardingFormSlice";

// Lucide Icons
import { Activity, ChevronLeft, ChevronRight } from "lucide-react";

// ShadCN Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PropInterface {
  setCurrentSection: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

export const permissibleHeightAndWeight = {
  height: { minimum: 100, maximum: 230 },
  weight: { minimum: 30, maximum: 160 },
};

const OnboardingSectionTwo = ({ setCurrentSection }: PropInterface) => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(
    (state: RootState) => state.onboardingFormSliceReducer,
  );
  const [bmi, setBmi] = React.useState<number>(0);

  React.useEffect(() => {
    if (state.height === undefined || state.weight === undefined) return;
    const bmiValue = calculateBMI(state.height, state.weight);
    setBmi(bmiValue);
  }, [state.height, state.weight]);

  return (
    <Card className="bg-[#14181f]">
      <CardHeader
        role="introductory-text"
        className="flex items-center gap-2 mb-6"
      >
        <div className="rounded-xl bg-[#f459251a] text-[#f45925] p-3">
          <Activity />
        </div>
        <div>
          <CardTitle
            role="main-introductory-text"
            className="text-xl font-semibold"
          >
            Body Metrics
          </CardTitle>
          <CardDescription
            role="complementary-introductory-text"
            className="text-sm text-muted-foreground"
          >
            Help us calculate your BMI
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          {/* Height Input */}
          <section>
            <Label htmlFor="height" className="text-sm font-semibold mb-2">
              Height (cm)
            </Label>
            <Input
              type="number"
              id="height"
              name="height"
              min={permissibleHeightAndWeight.height.minimum}
              max={permissibleHeightAndWeight.height.maximum}
              step={1}
              placeholder="170"
              required
              value={state.height ?? ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setHeight(Number(e.target.value)))
              }
              className="px-4 py-3 bg-background"
            />
          </section>

          {/* Weight Input */}
          <section>
            <Label htmlFor="weight" className="text-sm font-semibold mb-2">
              Weight (kg)
            </Label>
            <Input
              type="number"
              id="weight"
              name="weight"
              min={permissibleHeightAndWeight.weight.minimum}
              max={permissibleHeightAndWeight.height.maximum}
              step={1}
              placeholder="70"
              required
              value={state.weight ?? ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setWeight(Number(e.target.value)))
              }
              className="px-4 py-3 bg-background"
            />
          </section>
        </form>

        {/* BMI Value */}
        {Boolean(state.height) && Boolean(state.weight) && (
          <section className="p-4 rounded-xl bg-[#1f242e80] border border-border mt-4">
            <p className="text-sm text-muted-forground mb-1">Your BMI</p>
            <p className="text-2xl font-bold text-[#12d393]">{bmi}</p>
          </section>
        )}
      </CardContent>
      <Separator />
      <CardFooter className="flex items-center justify-between">
        <Button
          onClick={() => setCurrentSection(1)}
          className="font-semibold px-6 py-2 bg-background border border-input rounded-lg ring-offset-background hover:text-primary hover:bg-secondary"
        >
          <ChevronLeft /> Back
        </Button>
        <Button
          disabled={onboardingSectionTwoNextBtnDisabledStatus(
            state.height,
            state.weight,
          )}
          onClick={() => setCurrentSection(3)}
          className="text-secondary font-semibold px-6 py-2 bg-[#12d393] transition-all hover:bg-[#12d393e6] hover:shadow-[0_0_20px_#12d39366]"
        >
          Next <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OnboardingSectionTwo;
