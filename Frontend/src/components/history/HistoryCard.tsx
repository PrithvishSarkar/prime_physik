import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { WorkoutHistoryExerciseInterface } from "@/interfaces/workoutHistorySliceState";

interface PropInterface {
  exercise: WorkoutHistoryExerciseInterface;
}

const WorkoutHistoryCard = ({ exercise }: PropInterface) => {
  return (
    <Card className="bg-background">
      <CardContent className="flex items-center justify-between gap-3">
        {/* Main Information */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <div>
              <img
                src={exercise.exercise.thumbnailUrl}
                alt="thumbnail"
                width={40}
                height={40}
              />
            </div>
            <ul>
              <li className="font-semibold text-lg">
                {exercise.exercise.name}
              </li>
              <li className="flex items-center gap-2">
                {exercise.exercise.secondaryMuscles.map((muscle, idx) => {
                  const length = exercise.exercise.secondaryMuscles.length;
                  return (
                    <span key={idx} className="flex items-center gap-2">
                      <span className="text-muted-foreground">
                        {muscle[0].toUpperCase() + muscle.slice(1)}
                      </span>
                      {idx < length - 1 && (
                        <i className="inline-block w-1 h-1 rounded-full bg-muted-foreground" />
                      )}
                    </span>
                  );
                })}
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {exercise.sets.map((set, idx) => (
              <Badge
                key={idx}
                className="px-3 py-1 bg-secondary text-sm"
              >{`${set.weight}kg x ${set.reps}`}</Badge>
            ))}
          </div>
        </section>

        {/* Basic Statistics */}
        <section className="text-right">
          <p className="font-medium text-[#12d393] text-xl">
            {`${exercise.sets.reduce(
              (total, current) => (total += current.reps),
              0,
            )} reps`}
          </p>
          <p className="text-muted-foreground">{`${exercise.sets.length} sets`}</p>
        </section>
      </CardContent>
    </Card>
  );
};

export default WorkoutHistoryCard;
