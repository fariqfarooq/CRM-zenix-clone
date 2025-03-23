import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import LandingSection from "../components/sections/Landing";
import CRMLanding from "../components/sections/CRMlanding";
import TrustedCarousel from "../components/sections/TrustedCarousal";
import CompanyOverview from "../components/sections/CompanyOverview";
import IntegrationsSection from "../components/sections/Integrations";
import PricingPlansSection from "../components/sections/PricingPlanSect";
import TestimonialsSection from "../components/sections/Testimonials";
import FAQAccordion from "../components/sections/FAQs";
import BusinessCTA from "../components/sections/BusinessCTA";

export default function Home() {
  return (
    <><LandingSection />
       <CRMLanding/>
       <TrustedCarousel />
       <CompanyOverview />
       <IntegrationsSection/>
       <PricingPlansSection/>
       <TestimonialsSection/>
       <FAQAccordion/>
       <BusinessCTA/>
    </>
  );
}
