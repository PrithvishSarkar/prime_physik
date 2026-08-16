import type { AppDispatch, RootState } from "@/reduxToolkit/store";
import { LogOut, User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import logout from "@/services/logout";

const NavbarLinksLargeScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isAuthentic, isOnboarded } = useSelector(
    (state: RootState) => state.userAuthenticitySliceReducer,
  );

  const { pathname } = useLocation();

  const navLinks = [
    { pageName: "Dashboard", pageLink: "/dashboard" },
    { pageName: "Exercises", pageLink: "/exercises" },
    { pageName: "My Plan", pageLink: "/plan" },
    { pageName: "Log Workout", pageLink: "/log" },
    { pageName: "History", pageLink: "/history/1" },
  ];

  const navLinkStyle = (path: string) => {
    return `transition-all px-4 py-2 rounded-lg text-sm font-medium ${pathname === path ? "text-[#12d393] bg-[#12d3931a]" : "text-[#818898] hover:text-foreground hover:bg-secondary"}`;
  };

  const navigate = useNavigate();

  if (isAuthentic)
    return (
      <main className="hidden md:flex md:items-center md:justify-between md:gap-3">
        {/* Navigation Link */}
        <section className="hidden md:flex md:gap-1 md:items-center">
          {isOnboarded ? (
            navLinks.map((info, index) => (
              <Link
                key={index}
                to={info.pageLink}
                className={navLinkStyle(info.pageLink)}
              >
                {info.pageName}
              </Link>
            ))
          ) : (
            <Link to="/onboarding" className={navLinkStyle("/onboarding")}>
              Onboard
            </Link>
          )}
        </section>

        {/* Profile and Logout */}
        <section className="hidden md:flex md:items-center md:gap-3">
          {isOnboarded && (
            <Link
              to="/profile"
              className="rounded-lg cursor-pointer w-10 h-10 inline-flex items-center justify-center transition-all hover:text-secondary-foreground hover:bg-secondary text-sm"
            >
              <User />
            </Link>
          )}
          <Button
            onClick={() => logout(navigate, dispatch)}
            className="text-primary transition-all hover:text-secondary-foreground hover:bg-secondary bg-background font-semibold text-sm px-4 h-9 border border-input rounded-md inline-flex gap-2 items-center justify-center cursor-pointer"
          >
            <span>
              <LogOut />
            </span>
            <span>Logout</span>
          </Button>
        </section>
      </main>
    );

  return (
    <main className="hidden md:flex md:items-center md:justify-between md:gap-3">
      {/* Navigation Link */}
      <section className="hidden md:grow md:flex md:gap-1 md:items-center">
        <Link to="/exercises" className={navLinkStyle("/exercises")}>
          Exercises
        </Link>
      </section>

      {/* Login and Register */}
      <section className="hidden md:flex md:items-center md:gap-3">
        <Link
          to="/login"
          className="px-5 py-2 text-sm rounded-lg h-10 cursor-pointer font-semibold transition-all hover:text-secondary-foreground hover:bg-secondary"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-5 py-2 text-sm font-semibold bg-[#12d393] rounded-lg cursor-pointer text-primary-foreground transition-all hover:bg-[#12d393e6]"
        >
          Register
        </Link>
      </section>
    </main>
  );
};

export default NavbarLinksLargeScreen;
