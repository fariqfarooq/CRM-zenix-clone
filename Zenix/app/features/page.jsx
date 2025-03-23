import AchievementsSection from '@/components/FeaturePage/Achievements';
import FAQAccordion from '@/components/FeaturePage/Faqs';
import FeaturesAndServices from '@/components/FeaturePage/landing';
import IntegrationsSection from '@/components/sections/Integrations';
import TestimonialsSlider from '@/components/sections/Testimonials';
import React from 'react'

const page = () => {
  return (
    <div>
        <FeaturesAndServices/>
        <AchievementsSection/>
        <IntegrationsSection/>
        <TestimonialsSlider/>
        <FAQAccordion/>
    </div>
  )
}

export default page;
