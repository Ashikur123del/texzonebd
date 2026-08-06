import AlloverPrintSection from "../AboutCompo/AlloverPrintSection";
import FabricProductionProcess from "../AboutCompo/FabricProductionProcess";
import FabricRepairingSection from "../AboutCompo/FabricRepairingSection";
import HeroSection from "../AboutCompo/HeroSection";
import ImportedFabricsGrid from "../AboutCompo/ImportedFabricsGrid";
import ImportedHero from "../AboutCompo/ImportedHero";
import KnitFabricShowcase from "../AboutCompo/KnitFabricShowcase";
import MdMessage from "../AboutCompo/MdMessage";
import WhoWeAre from "../AboutCompo/WhoWeAre";
import WhyChooseUs from '../WhyChooseUs'
const AboutUs = () => {
  return (
    <div className="bg-stone-50 text-slate-900 font-sans selection:bg-[#990000] selection:text-white">
      <HeroSection />
      <WhoWeAre />
      <MdMessage />
      <KnitFabricShowcase />
      <FabricProductionProcess />
      <ImportedHero />
      <ImportedFabricsGrid />
      <AlloverPrintSection />
      <FabricRepairingSection />
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;