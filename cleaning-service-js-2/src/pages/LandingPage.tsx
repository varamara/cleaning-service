import AboutUs from "../components/landingpagecomponents/AboutUs";
import HeroSection from "../components/landingpagecomponents/HeroSection";
import SustainabilityInfo from "../components/landingpagecomponents/SustainabilityInfo";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SustainabilityInfo />
      <AboutUs />
    </div>
  );
};

export default LandingPage;
