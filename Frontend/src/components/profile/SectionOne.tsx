import React from "react";
import { User } from "lucide-react";
import list from "@/lib/profileSectionOneList";

// Redux Toolkit
import type { RootState, AppDispatch } from "@/reduxToolkit/store";
import { useSelector, useDispatch } from "react-redux";

// ShadCN Components
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const ProfileSectionOne = () => {
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
          <span className="bg-[#12d3931a] rounded-xl p-3 text-[#12d393]">
            <User />
          </span>
          <span className="text-xl font-semibold">Personal Information</span>
        </CardTitle>
      </CardHeader>

      {/* User Details */}
      <CardContent>
        <ul className="space-x-1">
          {LIST.map((item, index) => (
            <React.Fragment key={index}>
              <li className="py-3 flex items-center justify-between">
                <Label
                  htmlFor={item.label.toLowerCase()}
                  className="text-muted-foreground"
                >
                  {item.label}
                </Label>

                {/* Either User Inputs or Display Texts - Name and Email are unalterable */}
                {state.editProfile ? (
                  // Either Input Field or Select Field
                  item.type !== "select" ? (
                    <Input
                      required
                      type={item.type}
                      readOnly={
                        item.label.toLowerCase() === "name" ||
                        item.label.toLowerCase() === "email"
                      }
                      name={item.label.toLowerCase()}
                      value={item.value ?? ""}
                      onChange={(
                        e: React.ChangeEvent<HTMLInputElement> & string,
                      ) => item.onchange(e)}
                      className="py-1 px-3 bg-background focus:outline-none focus:ring-2 focus:ring-[#12d393] w-fit"
                    />
                  ) : (
                    <Select
                      required
                      name={item.label.toLowerCase()}
                      value={item.value?.toString() ?? ""}
                      onValueChange={(
                        value: React.ChangeEvent<HTMLInputElement> & string,
                      ) => item.onchange(value)}
                    >
                      <SelectTrigger className="py-1 px-3 bg-background focus:outline-none focus:ring-2 focus:ring-[#12d393] w-fit">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {["male", "female", "others"].map((gender, index) => (
                          <SelectItem key={index} value={gender}>
                            {gender[0].toUpperCase() + gender.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )
                ) : (
                  <span className="font-medium">{item.value ?? ""}</span>
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

export default ProfileSectionOne;
