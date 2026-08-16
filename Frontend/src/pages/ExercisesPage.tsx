import React from "react";
import { Search } from "lucide-react";
import exerciseFetchDataGetApiCall from "@/services/exerciseFetchData";
import Library from "@/components/exercise/Library";
import DetailModal from "@/components/exercise/DetailModal";

// ShadCN Components
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Redux Toolkit
import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchExercise } from "@/reduxToolkit/slices/exerciseLibrarySlice";
import { setIsModalOpen } from "@/reduxToolkit/slices/exerciseDetailModalSlice";
import SpinningLoader from "@/components/SpinningLoader";

const ExercisesPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const exerciseGroupList = useSelector(
    (state: RootState) => state.exerciseListSliceReducer.exerciseGroup,
  );
  const searchExercise = useSelector(
    (state: RootState) => state.exerciseListSliceReducer.searchExercise,
  );

  React.useEffect(() => {
    !exerciseGroupList.length && exerciseFetchDataGetApiCall(dispatch);
    return () => {
      dispatch(setIsModalOpen(false));
    };
  }, []);

  if (!exerciseGroupList.length) return <SpinningLoader size={24} />;

  return (
    <>
      <main className="p-8">
        {/* Introduction */}
        <section role="introduction-container" className="mb-8 space-y-1">
          <div role="title" className="text-3xl font-bold">
            Exercise Library
          </div>
          <div role="description" className="text-muted-foreground">
            Browse exercises by muscle group
          </div>
        </section>

        {/* Search Bar */}
        <section className="mb-6 relative">
          <Label
            htmlFor="search"
            className="absolute left-4 top-1/2 -translate-y-1/2"
          >
            <Search />
          </Label>
          <Input
            type="text"
            id="search"
            value={searchExercise}
            placeholder="Search exercises..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(setSearchExercise(e.target.value))
            }
            className="text-sm py-3 pe-4 ps-12 bg-background focus:ring-2 focus:ring-[#12d393]"
          />
        </section>

        {/* Grouped Exercises */}
        <div>
          <Library
            exerciseGroupList={exerciseGroupList}
            searchExercise={searchExercise}
          />
        </div>
      </main>
      <DetailModal />
    </>
  );
};

export default ExercisesPage;
