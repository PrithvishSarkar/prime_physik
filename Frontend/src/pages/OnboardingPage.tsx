import React, { type ReactNode } from "react";
import SectionOne from "@/components/onboarding/SectionOne";
import SectionTwo from "@/components/onboarding/SectionTwo";
import SectionThree from "@/components/onboarding/SectionThree";
import onboardingFetchNameEmailGetApiCall from "@/services/onboardingFetchNameEmail";
import type { AppDispatch } from "@/reduxToolkit/store";
import { useDispatch } from "react-redux";
import { Check } from "lucide-react";

const OnboardingPage = () => {
  const dispatch: AppDispatch = useDispatch();
  React.useEffect(() => {
    onboardingFetchNameEmailGetApiCall(dispatch);
  }, []);

  const [currentSection, setCurrentSection] = React.useState<1 | 2 | 3>(1);
  const [component, setComponent] = React.useState<ReactNode>(
    <SectionOne setCurrentSection={setCurrentSection} />,
  );

  React.useEffect(() => {
    switch (currentSection) {
      case 1:
        setComponent(
          <SectionOne setCurrentSection={setCurrentSection} />,
        );
        break;
      case 2:
        setComponent(
          <SectionTwo setCurrentSection={setCurrentSection} />,
        );
        break;
      case 3:
        setComponent(
          <SectionThree setCurrentSection={setCurrentSection} />,
        );
        break;
      default:
        break;
    }
  }, [currentSection]);

  const progressIndicatorClass = `w-10 h-10 text-primary text-lg font-semibold rounded-full flex items-center justify-center`;

  const progressStickClass = `w-16 h-1 rounded-full mx-2`;

  return (
    <main className="mx-65 m-auto my-8">
      {/* Header */}
      <header className="text-center mb-8">
        <p className="text-3xl font-bold mb-2">Welcome to Prime Physik</p>
        <p className="text-muted-foreground">
          Let's set up your profile to personalize your experience
        </p>
      </header>

      {/* Progress Measure */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <span
          className={`${progressIndicatorClass} ${currentSection >= 1 ? "bg-[#12d393] text-secondary" : "bg-[#1f242e]"}`}
        >
          {currentSection > 1 ? <Check /> : 1}
        </span>
        <span
          role="connecting-stick"
          className={`${progressStickClass} ${currentSection > 1 ? "bg-[#12d393]" : "bg-[#1f242e]"}`}
        ></span>
        <span
          className={`${progressIndicatorClass} ${currentSection >= 2 ? "bg-[#12d393] text-secondary" : "bg-[#1f242e]"}`}
        >
          {currentSection > 2 ? <Check /> : 2}
        </span>
        <span
          role="connecting-stick"
          className={`${progressStickClass} ${currentSection > 2 ? "bg-[#12d393]" : "bg-[#1f242e]"}`}
        ></span>
        <span
          className={`${progressIndicatorClass} ${currentSection >= 3 ? "bg-[#12d393] text-secondary" : "bg-[#1f242e]"}`}
        >
          3
        </span>
      </div>

      {/* Main Content */}
      <section>
        <ul className="text-muted-foreground text-sm px-4 flex items-center justify-between mb-8">
          {[
            { section: 1, title: "Personal" },
            { section: 2, title: "Body Metrics" },
            { section: 3, title: "Training" },
          ].map(({ section, title }, index) => (
            <li
              key={index}
              className={`${section === currentSection && "font-semibold text-[#12d393]"}`}
            >
              {title}
            </li>
          ))}
        </ul>
        {component}
      </section>
    </main>
  );
};

export default OnboardingPage;
