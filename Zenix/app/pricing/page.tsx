import { title } from "@/components/primitives";
import PricingPlansSection from "@/components/sections/PricingPlanSect";
import TrustedCarousel from "@/components/sections/TrustedCarousal";
import ComparePlans from "@/components/PricingPage/ComparisonTable";
import FAQAccordion from "@/components/sections/FAQs";
import BusinessCTA from "@/components/sections/BusinessCTA";

export default function PricingPage() {
  return (
    <div>
      <PricingPlansSection showNav={true}/>
      <TrustedCarousel/>
      <ComparePlans/>
      <FAQAccordion/>
      <BusinessCTA/>
    </div>
  );
}
