import type React from "react";
import type StateInterface from "@/interfaces/profileDetailsSliceState";
import type { AppDispatch } from "@/reduxToolkit/store";
import {
  setHeight,
  setWeight,
} from "@/reduxToolkit/slices/profileDetailsSlice";

const profileSectionTwoUserDetails = (
  dispatch: AppDispatch,
  state: StateInterface,
) => [
  {
    label: "Height",
    value: state.height,
    type: "number",
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setHeight(Number(e.target.value)));
    },
  },
  {
    label: "Weight",
    value: state.weight,
    type: "number",
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setWeight(Number(e.target.value)));
    },
  },
];

export default profileSectionTwoUserDetails;
