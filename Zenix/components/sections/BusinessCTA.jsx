import { Button } from "@heroui/button";
import { Code } from "@heroui/code";
import React from "react";

export default function BusinessCTA() {
  return (
    <section className="relative bg-[#004050] text-white pt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
        <Code color="" className="text-sm font-medium bg-[#DFF9EB]  text-[#00CC61]">
            Get Started
          </Code>
          <h2 className="text-4xl font-bold mt-4">
            Ready To Boost Your Business?
          </h2>
          <p className="text-lg mt-4">
            Boost sales and stay ahead of the competition with our innovative solutions. Be one of the first to benefit!
          </p>
          <div className="mt-6 flex space-x-4">
            <Button size="lg" color="success" className=" text-white text-sm ">
              Contact Us
            </Button>
            <Button size="lg" className="bg-[#DFF9EB] text-sm text-gray-900  hover:bg-gray-200">
              View Pricing
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative md:w-1/2 flex justify-center mt-10 md:mt-0">
          {/* Semi-Circle Background */}
          <div className="absolute bottom-0 right-0 w-[400px] h-[200px]  sm:w-[600px] sm:h-[300px]  bg-green-500 rounded-t-full"></div>
          {/* Image */}
          <img
            src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/file-2-1024x683.webp"
            alt="Business Person"
            className="relative z-10 w-80 h-auto md:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
