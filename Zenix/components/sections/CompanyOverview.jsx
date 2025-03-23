import { Button } from "@heroui/button";
import { Code } from "@heroui/code";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";

export default function CompanyHistory() {
  return (
    <section className="px-6 md:px-16 lg:px-20 py-12 mt-12">
      <Code className="text-sm text-green-500 font-medium " color="success">
        Company History
      </Code>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:items-center">
        {/* Left Side: Title */}
        <h2 className="text-[42px] font-semibold md:w-1/2 leading-tight">
          Our Journey From Inception To Present Day
        </h2>

        {/* Right Side: Description */}
        <p className="text-gray-600 md:w-1/3 text-left pt-12 text-[16px] leading-tight ">
          Founded in 2010, began as a small startup with a big vision to
          revolutionize customer relationship management.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8 bg-[#F4F4F4]  rounded-2xl overflow-hidden p-6">
        <Image
          alt="Company Office"
          height={300}
          src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/austin-distel-wawEfYdpkag-unsplash.webp"
          width='100%'
        />

        {/* Vision & Mission Section */}
        <div className=" p-4 md:p-6  mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <div>
            <h3 className="text-[18px] font-semibold">Our Vision</h3>
            <p className="text-gray-600 mt-2 text-[16px]">
              We are committed to continuously innovating in the development of
              CRM solutions that deliver added value to businesses worldwide.
            </p>
            <div className="flex space-x-4 mt-4">
              <Button color="success" className=" text-white px-5 py-2 rounded-lg font-medium ">
                Contact Us
              </Button>
              <Button className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg font-medium hover:bg-gray-300">
                View Pricing
              </Button>
            </div>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-[18px] font-semibold">Our Mission</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
              {[
                "Enhance Relationships",
                "Drive Business Success",
                "Innovate Continuously",
                "Ensure Reliability",
                "Focus on Integrity",
                "Deliver Excellent Service",
                "Inspire Positive Change",
                "Create Meaningful Relationships",
              ].map((mission, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <Icon
                    className="text-green-500"
                    icon="ic:round-check-circle"
                  />
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
