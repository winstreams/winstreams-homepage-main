import HeroFounderStory from "./HeroFounderStory";
import AboutDeanCard from "./AboutDeanCard";
import OurMission from "./OurMission";
import WhatWereNot from "./WhatWereNot";
import BuiltByOperators from "./BuiltByOperators";
import FinalCTA from "./FinalCTA";

const AboutUsPage = () => {
  return (
    <div className="font-sans text-slate-900">
      <HeroFounderStory />
      <AboutDeanCard />
      <OurMission />
      <WhatWereNot />
      <BuiltByOperators />
      <FinalCTA />
    </div>
  );
};

export default AboutUsPage;
