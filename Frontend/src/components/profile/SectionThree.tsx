import React from "react";
import list from "@/lib/profileSectionThreeList";
import { Target } from "lucide-react";

// Redux Toolkit
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { useDispatch, useSelector } from "react-redux";

// ShadCN Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProfileSectionThree = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector(
    (state: RootState) => state.profileDetailsSliceReducer,
  );

  const LIST = list(dispatch, state);

  return (
    <Card className="bg-[#14181f]">
      {/* Introduction */}
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="rounded-xl bg-sky-500/10 text-sky-500 p-3">
            <Target />
          </span>
          <span className="text-xl font-semibold">Training Preference</span>
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
                  <span className="font-medium">
                    {!item.value
                      ? ""
                      : typeof item.value === "number"
                        ? `${item.value} days/week`
                        : item.value
                            .split("_")
                            .map((val) => val[0].toUpperCase() + val.slice(1))
                            .join(" ")}
                  </span>
                ) : (
                  <Select
                    value={item.value?.toString() ?? ""}
                    onValueChange={(value) => item.onchange(value)}
                  >
                    <SelectTrigger className="w-fit py-1 px-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-[#12d393]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {item.options.map((option, idx) => (
                        <SelectItem key={idx} value={option.toString()}>
                          {typeof option === "number"
                            ? `${option} days/week`
                            : option
                                .split("_")
                                .map(
                                  (val) => val[0].toUpperCase() + val.slice(1),
                                )
                                .join(" ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </li>
              {index < LIST.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProfileSectionThree;
