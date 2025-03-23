"use client";


import { Button } from "@heroui/button";
// Replace with actual image import
import { Image } from "@heroui/image";

const AchievementsSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-20 ">
      
      <div className="max-w-2xl text-center lg:text-left">
        
        <div className="bg-green-100 text-green-500 text-sm font-semibold px-4 py-1 rounded-lg mb-4 inline-block">
          Why Choose Us
        </div>

       
        <h2 className="text-[42px] font-semibold  leading-tight">
          Unveiling The Success Of <br className="hidden md:block" />
          Our Achievements
        </h2>

        
        <p className="text-gray-600 mt-4 text-lg">
          We believe that numbers tell a powerful story. Our counters provide a <br className="hidden md:block" /> snapshot of 
          the significant achievements we&apos;ve reached in our journey to <br className="hidden md:block" /> revolutionize 
          customer support.
        </p>

        {/* CTA Button */}
        <Button className="mt-6 text-white text-sm font-semibold" color="success" size="lg">
          Contact Us
        </Button>
      </div>

      
      <div className="mt-10 lg:mt-0">
        <Image
          src='https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/Main-Dashboard-1-e1728723144728-1024x717.png'
          alt="Dashboard Preview"
          width={500}
          height={300}
          className="rounded-lg "
        />
      </div>
    </section>
  );
};

export default AchievementsSection;
