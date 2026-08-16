import type DataInterface from "@/interfaces/onboardingAndProfileBaseData";
import { toast } from "sonner";
import { permissibleHeightAndWeight } from "@/components/onboarding/SectionTwo";

const validateFilledData = (data: DataInterface): boolean => {
  // 1. Age Validation
  if (data.age < 10 || data.age > 90) {
    toast.warning("Age must be within 10 to 90 years.");
    return false;
  }

  // 2. Gender Validation
  if (!["male", "female", "others"].includes(data.gender)) {
    toast.warning("Gender must be either 'male', 'female', or 'others'.");
    return false;
  }

  // 3. Height Validation
  const minHeight = permissibleHeightAndWeight.height.minimum;
  const maxHeight = permissibleHeightAndWeight.height.maximum;
  if (data.height < minHeight || data.height > maxHeight) {
    toast.warning(`Height must be within ${minHeight}cm and ${maxHeight}cm`);
    return false;
  }

  // 4. Weight Validation
  const minWeight = permissibleHeightAndWeight.weight.minimum;
  const maxWeight = permissibleHeightAndWeight.weight.maximum;
  if (data.weight < minWeight || data.weight > maxWeight) {
    toast.warning(`Weight must be within ${minWeight}kg and ${maxWeight}kg.`);
    return false;
  }

  // 5. Workout Frequency Validation
  if (![3, 4, 5, 6].includes(data.workoutFrequency)) {
    toast.warning("Invalid Workout Frequency.");
    return false;
  }

  // 6. Fitness Goal Validation
  if (
    ![
      "muscle_building",
      "fat_loss",
      "strength_gain",
      "general_fitness",
    ].includes(data.fitnessGoal)
  ) {
    toast.warning("Invalid Fitness Goal.");
    return false;
  }

  // 7. Experience Level Validation
  if (
    !["beginner", "intermediate", "advanced"].includes(data.experienceLevel)
  ) {
    toast.warning("Invalid Experience Level.");
    return false;
  }

  return true;
};

export default validateFilledData;
