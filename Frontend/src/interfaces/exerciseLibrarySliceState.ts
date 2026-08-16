export interface ExerciseInterface {
  _id: string;
  name: string;
  exerciseType: string;
  primaryMuscle: string;
  secondaryMuscles: string[];
  equipments: string[];
  preparation: string;
  instructions: string[];
  thumbnailUrl: string;
}

export default interface StateObjectInterface {
  muscle: string;
  exercises: ExerciseInterface[];
}
