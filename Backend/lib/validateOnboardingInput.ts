import CustomError from "../customError.js";
import type RequestBodyType from "./interface/profileInterface.js";

const validateNumbers = (
  age: number,
  height: number,
  weight: number,
  workoutFrequency: 3 | 4 | 5 | 6
) => {
  if (!age || !height || !weight || !workoutFrequency)
    throw new CustomError("Missing Numeric Inputs.", 400);

  if (
    typeof age !== "number" ||
    typeof height !== "number" ||
    typeof weight !== "number" ||
    typeof workoutFrequency !== "number"
  )
    throw new CustomError("Invalid Numeric Input Types.", 400);

  if (age < 15 || age > 80)
    throw new CustomError(
      "Underage/Overage Not Allowed. Valid age is 15-80.",
      400
    );

  if (height < 150 || height > 220)
    throw new CustomError("Invalid Height. Valid height is 150cm-220cm", 400);

  if (weight < 40 || weight > 200)
    throw new CustomError("Invalid Weight. Valid weight is 40kg-200kg.", 400);

  if (![3, 4, 5, 6].includes(workoutFrequency))
    throw new CustomError(
      "Invalid Workout Frequency. Valid frequency is 3-6.",
      400
    );
};

const validateEnums = (
  gender: "male" | "female" | "others",
  fitnessGoal:
    | "muscle_building"
    | "fat_loss"
    | "strength_gain"
    | "general_fitness",
  experienceLevel: "beginner" | "intermediate" | "advanced"
) => {
  if (
    typeof gender !== "string" ||
    typeof fitnessGoal !== "string" ||
    typeof experienceLevel !== "string"
  )
    throw new CustomError("Invalid Enum Input Types.", 400);

  if (!gender.trim() || !fitnessGoal.trim() || !experienceLevel.trim())
    throw new CustomError("Empty Enum Values Not Allowed.", 400);

  // Checking Gender Enum Value.
  const genderValues = ["male", "female", "others"];
  if (!genderValues.includes(gender))
    throw new CustomError("Invalid Gender Value.", 400);

  // Checking Fitness Goal Enum Value.
  const fitnessGoalValues = [
    "muscle_building",
    "fat_loss",
    "strength_gain",
    "general_fitness",
  ];
  if (!fitnessGoalValues.includes(fitnessGoal))
    throw new CustomError("Invalid Fitness Goal Value.", 400);

  // Checking Experience Level Enum Value.
  const experienceLevelValues = ["beginner", "intermediate", "advanced"];
  if (!experienceLevelValues.includes(experienceLevel))
    throw new CustomError("Invalid Experience Level Value.", 400);
};

const validateOnboardingInput = (reqBody: RequestBodyType): RequestBodyType => {
  const {
    age,
    gender, // Gender will be selected by user from dropdown.
    height,
    weight,
    workoutFrequency, // Workout Frequency will be selected by user from options.
    fitnessGoal, // Fitness Goals will be selected by user from options.
    experienceLevel, // Experience Level will be selected by user from options.
  } = reqBody;

  // Validating Numeric Inputs.
  validateNumbers(age, height, weight, workoutFrequency);

  // Validating String (Enum) Inputs.
  validateEnums(gender, fitnessGoal, experienceLevel);

  return {
    age,
    gender,
    height,
    weight,
    workoutFrequency,
    fitnessGoal,
    experienceLevel,
  };
};

export default validateOnboardingInput;
