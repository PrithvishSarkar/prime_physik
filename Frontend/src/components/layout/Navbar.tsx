import { Dumbbell } from "lucide-react";
import { Link } from "react-router";
import NavbarLinksLargeScreen from "./NavbarLinksLargeScreen";
import { Skeleton } from "../ui/skeleton";

// Redux Toolkit Imports
import { useSelector } from "react-redux";
import type { RootState } from "@/reduxToolkit/store";

const Navbar = () => {
  const { isLoading } = useSelector(
    (state: RootState) => state.userAuthenticitySliceReducer,
  );

  if (isLoading) return <Skeleton className="h-16 w-full" />;

  return ( 
    <nav className="flex items-center justify-between h-16 w-full mx-auto px-8 border-b border-b-border">
      {/* Brand Logo */}
      <section>
        <Link
          to="/"
          className="flex items-center gap-2 text-foreground text-xl font-bold font-sans"
        >
          <span className="bg-linear-to-br from-[#12d393] to-[#0ea472] rounded-lg flex justify-center items-center w-9 h-9">
            <Dumbbell className="text-white" />
          </span>
          <span>PrimePhysik</span>
        </Link>
      </section>

      {/* Links for Medium and Large Screens */}
      <NavbarLinksLargeScreen />

      {/* Links for Small Screens */}
      {/* <NavbarLinksSmallScreen /> */}
    </nav>
  );
};

export default Navbar;
