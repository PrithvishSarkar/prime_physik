import { Card, CardContent } from "../ui/card";

interface PropInterface {
  name: string;
  reps: number;
  weight: number;
}

const MostFrequentExerciseCard = ({ name, reps, weight }: PropInterface) => {
  return (
    <Card className="bg-background/50">
      <CardContent className="flex items-center justify-between gap-3 text-sm">
        <section className="font-medium">{name}</section>
        <section>
          <div className="text-[#12d393] font-medium">{`${reps} reps`}</div>
          <div className="text-muted-foreground">{`${weight} kg`}</div>
        </section>
      </CardContent>
    </Card>
  );
};

export default MostFrequentExerciseCard;
