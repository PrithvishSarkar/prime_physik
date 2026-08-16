import React from "react";
import { Activity } from "lucide-react";
import list from "@/lib/profileSectionTwoList";
import calculateBMI from "@/lib/calculateBMI";

// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { setBMI } from "@/reduxToolkit/slices/profileDetailsSlice";

// ShadCN Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const ProfileSectionTwo = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(
    (state: RootState) => state.profileDetailsSliceReducer,
  );

  const LIST = list(dispatch, state);

  // Update BMI when height and weight changes
  React.useEffect(() => {
    if (!state.height || !state.weight) return;
    dispatch(setBMI(calculateBMI(state.height, state.weight)));
  }, [state.height, state.weight]);

  const [bmiCategory, setBmiCategory] = React.useState<
    "underweight" | "normal" | "overweight" | "obese" | undefined
  >(undefined);

  interface BmiCategoryColorInterface {
    text: "text-orange-500" | "text-red-500" | "text-emerald-500";
    background: "bg-orange-500/10" | "bg-red-500/10" | "bg-emerald-500/10";
  }
  const [bmiCategoryColor, setBmiCategoryColor] = React.useState<
    BmiCategoryColorInterface | undefined
  >(undefined);

  // Update BMI Category whenever BMI changes
  React.useEffect(() => {
    if (!state.BMI) return;
    if (state.BMI < 18.5) {
      setBmiCategory("underweight");
      setBmiCategoryColor({
        text: "text-orange-500",
        background: "bg-orange-500/10",
      });
    } else if (state.BMI >= 18.5 && state.BMI < 25) {
      setBmiCategory("normal");
      setBmiCategoryColor({
        text: "text-emerald-500",
        background: "bg-emerald-500/10",
      });
    } else if (state.BMI >= 25 && state.BMI < 30) {
      setBmiCategory("overweight");
      setBmiCategoryColor({
        text: "text-orange-500",
        background: "bg-orange-500/10",
      });
    } else {
      setBmiCategory("obese");
      setBmiCategoryColor({ text: "text-red-500", background: "bg-red-500/10" });
    }
  }, [state.BMI]);

  return (
    <Card className="bg-[#14181f]">
      {/* Introduction */}
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="bg-[#f459261a] text-[#f45925] p-3 rounded-xl">
            <Activity />
          </span>
          <span className="font-semibold text-xl">Body Metrics</span>
        </CardTitle>
      </CardHeader>

      {/* Main Content */}
      <CardContent>
        <ul className="space-y-1">
          {LIST.map((item, index) => (
            <React.Fragment key={index}>
              <li className="py-3 flex items-center justify-between">
                <Label className="text-muted-foreground">{item.label}</Label>
                {!state.editProfile ? (
                  <span className="font-medium">{item.value ?? ""}</span>
                ) : (
                  <Input
                    type={item.type}
                    value={item.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      item.onchange(e)
                    }
                    className="w-fit py-1 px-3 bg-background focus:outline-none focus:ring-2 focus:ring-[#12d393]"
                  />
                )}
              </li>
              <Separator />
            </React.Fragment>
          ))}
          <li className="py-3 flex items-center justify-between">
            <Label className="text-muted-foreground">BMI</Label>
            <span className="flex gap-2 items-center">
              <span className="font-medium">{state.BMI ?? ""}</span>
              {bmiCategory && bmiCategoryColor && (
                <Badge
                  className={`${bmiCategoryColor.text} ${bmiCategoryColor.background}`}
                >
                  {bmiCategory}
                </Badge>
              )}
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProfileSectionTwo;
