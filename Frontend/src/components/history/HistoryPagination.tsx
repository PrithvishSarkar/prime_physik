import type { RootState } from "@/reduxToolkit/store";
import { useSelector } from "react-redux";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const WorkoutHistoryPagination = ({ page }: { page: string }) => {
  const totalPages = useSelector(
    (state: RootState) => state.workoutHistorySliceReducer.totalPages,
  );

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem
            key={index}
            className={`${Number(page) === index + 1 && "bg-[#12d393] hover:bg-[#12d393]"} rounded-lg`}
          >
            <PaginationLink to={`/history/${index + 1}`}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  );
};

export default WorkoutHistoryPagination;
