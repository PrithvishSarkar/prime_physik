import type {
  ExerciseListObjectType,
  ExerciseGroupObjectType,
  PrimaryMuscleType,
} from "./interface/exerciseGroupInterface.js";

const exerciseGrouping = (exerciseList: ExerciseListObjectType[]) => {
  const exerciseGroup = [] as ExerciseGroupObjectType[];

  // Listing Primary Muscles
  const muscles = new Set<PrimaryMuscleType>();
  exerciseList.forEach((exercise) => {
    if (exercise.primaryMuscle === undefined) return;
    muscles.add(exercise.primaryMuscle);
  });

  // Structuring Exercise Group Array
  muscles.forEach((muscle) => {
    exerciseGroup.push({ muscle, exercises: [] });
  });

  // Populating Exercise Group Array
  exerciseList.forEach((exercise) => {
    if (exercise.primaryMuscle === undefined) return;
    for (let groupMember of exerciseGroup) {
      groupMember.muscle === exercise.primaryMuscle &&
        groupMember.exercises.push(exercise);
    }
  });

  // Replacing Null Value
  const exerciseGroupList = exerciseGroup.map((groupMember) => {
    switch (groupMember.muscle) {
      case null:
        return { muscle: "mixed", exercises: groupMember.exercises };
      default:
        return groupMember;
    }
  });
  return exerciseGroupList;
};

export default exerciseGrouping;
