import { Button } from '@heroui/button';
import { Code } from '@heroui/code';
import { Link } from '@heroui/link';
import React from 'react';

const pricingPlans = [
  {
    name: "Premium",
    price: "$199",
    description:
      "Best for medium business owners and startups who need a landing page for their business.",
    features: [
      "130+ Coded Blocks",
      "Best for Developers, Freelancers",
      "Made with TailwindCSS",
      "Premium Support",
      "Future Updates",
    ],
  },
  {
    name: "Enterprise",
    price: "$399",
    description:
      "Best for medium business owners and startups who need a landing page for their business.",
    features: [
      "130+ Coded Blocks",
      "Best for Developers, Freelancers",
      "Made with TailwindCSS",
      "Premium Support",
      "Future Updates",
    ],
  },
];

export default function PricingPlansSection({ showNav = false }) {
  return (
    <section className="pb-24 pt-32 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        {/* Two-column layout on large screens */}
        <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 mt-0 lg:mt-32">
            <Code
              color=""
              className="text-sm font-medium bg-[#DFF9EB] text-[#00CC61]"
            >
              Pricing Plans
            </Code>
            <h2 className="text-[48px] leading-tight capitalize font-semibold my-4 text-gray-800">
              Find the right <br className="hidden lg:block" /> package
            </h2>
            <p className="text-gray-700 text-[16px]">
              Enjoy a range of features designed to enhance <br className="hidden lg:block" /> your project management
              experience, all at a price <br className="hidden lg:block" /> that fits your budget.
            </p>
            {showNav && (
              <nav className="text-sm text-gray-500 flex gap-2 mt-6">
                <Link className="text-gray-700 text-sm hover:text-green-600" href="/">
                  Home
                </Link>
                <span className="text-gray-400">›</span>
                <span className="text-green-500 font-medium">Pricing</span>
              </nav>
            )}
          </div>
          {/* Right Column: Pricing Cards */}
          <div className="lg:w-[90%] grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="p-10 rounded-3xl bg-white flex flex-col justify-between"
              >
                {/* Plan Header */}
                <div className="mb-6">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-[16px] font-bold">{plan.name}</h3>
                    <h3 className="text-[42px] font-bold">{plan.price}</h3>
                  </div>
                  <p className="mt-4 text-[16px]">{plan.description}</p>
                </div>
                {/* Get Started Button */}
                <div className="mb-6">
                  <Button
                    color="success"
                    size="lg"
                    href="#"
                    className="inline-block text-white font-medium"
                  >
                    Get Started
                  </Button>
                </div>
                {/* What's Included */}
                <div>
                  <p className="font-semibold mb-2 text-[16px]">What’s included:</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[16px]">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-green-400 mr-2 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
