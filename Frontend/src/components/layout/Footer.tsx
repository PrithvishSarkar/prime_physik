import { Separator } from "../ui/separator";
import { Bird, Camera, Dumbbell, Mail, Video } from "lucide-react";
import { Link } from "react-router";

// Redux Toolkit Imports
import type { RootState } from "@/reduxToolkit/store";
import { useSelector } from "react-redux";

const Footer = () => {
  const {isAuthentic, isOnboarded} = useSelector(
    (state: RootState) => state.userAuthenticitySliceReducer,
  );

  return (
    <footer className="py-12 px-8 border-t border-border bg-secondary/30">
      <main className="grid md:grid-cols-4 gap-8 mb-8">
        {/* About and Social Media */}
        <div className="space-y-4">
          <Link to="/" className="font-bold text-xl flex items-center gap-2">
            <span className="bg-linear-to-br from-[#12d393] to-[#0ea472] rounded-lg flex justify-center items-center w-9 h-9">
              <Dumbbell className="text-white" />
            </span>
            <span>PrimePhysik</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Your personal workout companion.
            <br />
            Track, plan, and achieve your fitness goals.
          </p>
          <ul className="flex gap-3">
            {[
              { Icon: Camera, title: "Instagram" },
              { Icon: Bird, title: "Twitter" },
              { Icon: Video, title: "YouTube" },
            ].map(({ Icon, title }, index) => (
              <li
                key={index}
                title={title}
                className="p-2 bg-secondary rounded-lg transition-colors hover:bg-[#12d393] cursor-pointer"
              >
                <Icon />
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { text: "Exercise Library", link: "/exercises" },
              { text: "Workout Plan", link: "/plan" },
              { text: "Log Workout", link: "/log" },
              { text: "Workout History", link: "/history/1" },
            ].map(({ text, link }, index) => (
              <li key={index}>
                {isAuthentic && isOnboarded ? (
                  <Link
                    to={link}
                    className="transition-colors hover:text-[#12d393]"
                  >
                    {text}
                  </Link>
                ) : (
                  <p>{text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Dummy Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Help Center", "Privacy Policy", "Terms of Service", "FAQ"].map(
              (text, index) => (
                <li key={index}>
                  <Link
                    to="#"
                    className="transition-colors hover:text-[#12d393]"
                  >
                    {text}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Email and Address */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2 items-center">
              <Mail /> support@primephysik.com
            </li>
            <li>
              123 Fitness Street
              <br />
              Victoria Palace, Kolkata
            </li>
          </ul>
        </div>
      </main>
      <Separator />
      <small className="inline-block w-full text-muted-foreground text-center mt-8">
        &copy; {new Date().getFullYear()}. All rights reserved. Designed,
        developed, and maintained by Prithvish Sarkar.
      </small>
    </footer>
  );
};

export default Footer;
