import type StateInterface from "@/interfaces/profileDetailsSliceState";
import type { AppDispatch } from "@/reduxToolkit/store";
import {
  setWorkoutFrequency,
  setFitnessGoal,
  setExperienceLevel,
} from "@/reduxToolkit/slices/profileDetailsSlice";

const profileSectionThreeUserDetails = (
  dispatch: AppDispatch,
  state: StateInterface,
) => [
  {
    label: "Workout Frequency",
    value: state.workoutFrequency,
    options: [3, 4, 5, 6],
    onchange: (value: string) => {
      const numValue = parseInt(value);
      switch (numValue) {
        case 3:
        case 4:
        case 5:
        case 6:
          dispatch(setWorkoutFrequency(numValue));
          break;
        default:
          break;
      }
    },
  },
  {
    label: "Fitness Goal",
    value: state.fitnessGoal,
    options: [
      "muscle_building",
      "fat_loss",
      "strength_gain",
      "general_fitness",
    ],
    onchange: (value: string) => {
      switch (value) {
        case "muscle_building":
        case "fat_loss":
        case "strength_gain":
        case "general_fitness":
          dispatch(setFitnessGoal(value));
          break;
        default:
          break;
      }
    },
  },
  {
    label: "Experience Level",
    value: state.experienceLevel,
    options: ["beginner", "intermediate", "advanced"],
    onchange: (value: string) => {
      switch (value) {
        case "beginner":
        case "intermediate":
        case "advanced":
          dispatch(setExperienceLevel(value));
          break;
        default:
          break;
      }
    },
  },
];

export default profileSectionThreeUserDetails;
