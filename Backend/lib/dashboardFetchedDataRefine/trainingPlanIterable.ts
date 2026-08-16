import type TrainingPlanInterface from "../interface/dashboardTrainingPlanInterface.js";

const trainingPlanIterable = (trainingPlan: TrainingPlanInterface) => {
  const result = [] as {
    label: "Goal" | "Experience" | "Frequency";
    value: string | number;
  }[];

  for (let key in trainingPlan) {
    switch (key) {
      case "fitnessGoal":
        result.push({ label: "Goal", value: trainingPlan[key] });
        break;
      case "experienceLevel":
        result.push({ label: "Experience", value: trainingPlan[key] });
        break;
      case "workoutFrequency":
        result.push({ label: "Frequency", value: trainingPlan[key] });
        break;
      default:
        break;
    }
  }

  return result;
};

export default trainingPlanIterable;
