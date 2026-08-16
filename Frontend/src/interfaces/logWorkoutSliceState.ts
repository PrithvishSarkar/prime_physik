export interface SetInterface {
  weight: number;
  reps: number;
}

export default interface StateInterface {
  exercise: string | undefined;
  sets: SetInterface[];
}
