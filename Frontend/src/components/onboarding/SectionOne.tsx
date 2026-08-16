import React from "react";

// Lucide React
import { ChevronRight, User } from "lucide-react";

// Redux Toolkit
import type StateInterface from "@/interfaces/onboardingFormSliceState";
import type { RootState, AppDispatch } from "@/reduxToolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { setAge } from "@/reduxToolkit/slices/onboardingFormSlice";
import onboardingHandleGenderChange from "@/lib/onboardingHandleGenderChange";
import disabledStatus from "@/lib/onboardingSectionOneNextBtnDisabledStatus";

// ShadCN Component
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const permissibleAge = { minimum: 13, maximum: 90 };

interface PropInteface {
  setCurrentSection: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

const OnboardingSectionOne = ({ setCurrentSection }: PropInteface) => {
  const dispatch: AppDispatch = useDispatch();
  const state: StateInterface = useSelector(
    (state: RootState) => state.onboardingFormSliceReducer,
  );

  const inputClass =
    "px-4 py-3 bg-background border border-input rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#12d393]";

  return (
    <Card role="form-container" className="bg-[#14181f]">
      <CardHeader role="introductory-text" className="flex items-center gap-3">
        <div className="rounded-xl p-3 bg-[#12d3931a] text-[#12d393]">
          <User />
        </div>
        <div>
          <CardTitle
            role="main-introductory-text"
            className="text-xl font-semibold"
          >
            Personal Information
          </CardTitle>
          <CardDescription
            role="complementary-introductory-text"
            className="text-sm text-muted-foreground"
          >
            Tell us about yourself
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          {/* Name Input - Prefilled and Readonly */}
          <section>
            <Label htmlFor="name" className="text-sm font-medium mb-2">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              name="name"
              readOnly
              value={state.name}
              className={inputClass}
            />
          </section>

          {/* Email Input - Prefilled and Readonly */}
          <section>
            <Label htmlFor="email" className="text-sm font-medium mb-2">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              readOnly
              value={state.email}
              className={inputClass}
            />
          </section>

          {/* Age and Gender Input Container */}
          <div className="flex items-stretch gap-4">
            {/* Age Input */}
            <section className="grow">
              <Label htmlFor="age" className="text-sm font-medium mb-2">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                step={1}
                min={permissibleAge.minimum}
                max={permissibleAge.maximum}
                placeholder="25"
                required
                value={state.age ?? ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setAge(Number(e.target.value)))
                }
                className={inputClass}
              />
            </section>

            {/* Gender Input */}
            <section className="grow">
              <Label htmlFor="gender" className="text-sm font-medium mb-2">Gender</Label>
              <Select
                required
                value={state.gender ?? ""}
                onValueChange={(value) => {
                  onboardingHandleGenderChange(value, dispatch);
                }}
              >
                <SelectTrigger id="gender" className={`${inputClass} h-[49.28]`}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {["male", "female", "others"].map((item, index) => (
                    <SelectItem key={index} value={item}>
                      {item[0].toUpperCase() + item.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </section>
          </div>
        </form>
      </CardContent>
      <Separator /> {/* Form and Button Separator */}
      <CardFooter>
        <Button
          className="ms-auto px-5 py-2 cursor-pointer text-background bg-[#12d393] ring-offset-background transition-all hover:bg-[#12d393e6] hover:shadow-[0_0_20px_#12d39366]"
          disabled={disabledStatus(
            state.name,
            state.email,
            state.age,
            state.gender,
          )}
          onClick={() => setCurrentSection(2)}
        >
          Next <ChevronRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OnboardingSectionOne;
