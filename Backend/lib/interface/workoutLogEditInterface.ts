interface SetType {
  weight: number;
  reps: number;
}

export default interface RequestBodyType {
  exercise: string;
  sets: SetType[];
}
