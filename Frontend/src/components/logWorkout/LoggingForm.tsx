import React from "react";
import { setSets } from "@/reduxToolkit/slices/logWorkoutSlice";
import type { AppDispatch } from "@/reduxToolkit/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface PropInterface {
  isWeightDisabled: boolean;
  setCountSet: React.Dispatch<React.SetStateAction<number>>;
  dispatch: AppDispatch;
}

const LogWorkoutSetDetailsForm = ({
  isWeightDisabled,
  setCountSet,
  dispatch,
}: PropInterface) => {
  const [weight, setWeight] = React.useState<number | null>(null);
  const [reps, setReps] = React.useState<number | null>(null);

  React.useEffect(() => {
    isWeightDisabled && setWeight(0);
  }, [isWeightDisabled]);

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (weight === null || reps === null) return;
        dispatch(setSets({ weight, reps }));
        setCountSet(value => value + 1);
        setWeight(isWeightDisabled ? 0 : null);
        setReps(null);
      }}
      className="grid grid-cols-3 gap-3 mb-4"
    >
      {/* Weight Input */}
      <section className="space-y-2">
        <Label className="font-medium text-sm">Weight (kg)</Label>
        <Input
          type="number"
          step={0.5}
          min={0}
          placeholder="20"
          required
          disabled={isWeightDisabled}
          value={weight ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWeight(Number(e.target.value))
          }
          className="font-medium text-center md:text-lg px-4 py-3 bg-background focus:ouline-none focus:ring-2 focus:ring-[#12d393]"
        />
      </section>

      {/* Reps Input */}
      <section className="space-y-2">
        <Label className="font-medium text-sm">Reps</Label>
        <Input
          type="number"
          step={1}
          min={1}
          placeholder="16"
          required
          value={reps ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setReps(Number(e.target.value))
          }
          className="font-medium text-center md:text-lg px-4 py-3 bg-background focus:ouline-none focus:ring-2 focus:ring-[#12d393]"
        />
      </section>

      {/* Sumbit Button */}
      <section className="flex items-end">
        <Button
          type="submit"
          className="w-full px-4 py-3 text-center text-secondary text-lg font-semibold bg-[#12d393] inline-flex gap-2 justify-center items-center ring-offset-background hover:bg-[#12d393e6] hover:shadow-[0_0_20px_#12d39366]"
        >
          <Plus />
          <span>Add</span>
        </Button>
      </section>
    </form>
  );
};

export default LogWorkoutSetDetailsForm;
