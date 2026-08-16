import SectionOne from "@/components/landing/SectionOne";
import SectionTwo from "@/components/landing/SectionTwo";
import SectionThree from "@/components/landing/SectionThree";
import SectionFour from "@/components/landing/SectionFour";
import SectionFive from "@/components/landing/SectionFive";

const LandingPage = () => {
  return (
    <main>
      {/* Section 1 */}
      <SectionOne
        userCount={50}
        logCount={1.5}
        exerciseCount={50}
        rating={4.7}
      />

      {/* Section 2 */}
      <SectionTwo />

      {/* Section 3 */}
      <SectionThree />

      {/* Section 4 */}
      <SectionFour />

      {/* Section 5 */}
      <SectionFive />
    </main>
  );
};

export default LandingPage;
