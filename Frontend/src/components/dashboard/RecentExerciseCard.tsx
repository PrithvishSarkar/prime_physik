import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

interface PropInterface {
  name: string;
  date: Date;
  sets: { weight: number; reps: number }[];
}

const RecentExerciseCard = ({ name, date, sets }: PropInterface) => {
  return (
    <Card className="bg-background/50">
      <CardContent className="space-y-2">
        <section className="flex items-center justify-between">
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-sm text-muted-foreground">
            {date.toDateString()}
          </div>
        </section>
        <section className="flex flex-wrap gap-2">
          {sets.map((set, index) => (
            <Badge
              key={index}
              className="bg-[#12d3931a] text-[#12d393]"
            >{`${set.weight}kg x ${set.reps}`}</Badge>
          ))}
        </section>
      </CardContent>
    </Card>
  );
};

export default RecentExerciseCard;
