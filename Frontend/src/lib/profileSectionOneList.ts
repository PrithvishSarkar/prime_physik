import type { AppDispatch } from "@/reduxToolkit/store";
import type StateInterface from "@/interfaces/profileDetailsSliceState";
import {
  setName,
  setEmail,
  setAge,
  setGender,
} from "@/reduxToolkit/slices/profileDetailsSlice";

const profileSectionOneUserDetails = (
  dispatch: AppDispatch,
  state: StateInterface,
) => [
  {
    label: "Name",
    value: state.name,
    type: "text",
    onchange: (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setName(e.target.value)),
  },
  {
    label: "Email",
    value: state.email,
    type: "text",
    onchange: (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setEmail(e.target.value)),
  },
  {
    label: "Age",
    value: state.age,
    type: "number",
    onchange: (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setAge(Number(e.target.value))),
  },
  {
    label: "Gender",
    value: state.gender,
    type: "select",
    onchange: (value: string) => {
      switch (value) {
        case "male":
        case "female":
        case "others":
          dispatch(setGender(value));
          break;
        default:
          break;
      }
    },
  },
];

export default profileSectionOneUserDetails;
