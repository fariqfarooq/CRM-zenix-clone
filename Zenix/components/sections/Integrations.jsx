import { Button } from "@heroui/button";
import { Code } from "@heroui/code";
import React from "react";

const integrations = [
  {
    name: "Slack",
    category: "Productivity",
    description:
      "Notify your teammates of the latest activities with instant Slack messages.",
    icon: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-slack.svg",
  },
  {
    name: "Slack",
    category: "Productivity",
    description:
      "Notify your teammates of the latest activities with instant Slack messages.",
    icon: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-slack.svg",
  },
  {
    name: "HubSpot",
    category: "CRM",
    description:
      "Notify your teammates of the latest activities with instant Slack messages.",
    icon: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-hubspot.svg",
  },
  {
    name: "Salesforce",
    category: "CRM",
    description:
      "Notify your teammates of the latest activities with instant Slack messages.",
    icon: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-salesforce.svg",
  },
  {
    name: "PayPal",
    category: "Payment",
    description:
      "Notify your teammates of the latest activities with instant Slack messages.",
    icon: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-paypal.svg",
  },
  {
    name: "Stripe",
    category: "Payment",
    description:
      "Notify your teammates of the latest activities with instant Slack messages.",
    icon: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/tool-stripe.svg",
  },
];

export default function IntegrationsSection() {
  return (
    <section className="py-12 bg-[#004050]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <Code color="" className="text-sm font-medium bg-[#DFF9EB]  text-[#00CC61]">
            Integrations
          </Code>
          <h2 className="text-[42px] font-semibold mt-2 text-white break-words capitalize leading-tight">
  Boost your efficiency 
  <br className="hidden lg:block" />
  with integrations
</h2>
<p className="mt-4 text-white text-gray-700 break-words leading-tight">
  Connect every part of your business with 
  
  integrations  that will <br className="hidden lg:block" /> simplify your workflow.
</p>

        </div>
        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((item, index) => (
            <div
              key={index}
              className=" bg-gray-900 bg-opacity-20 p-6 shadow rounded-2xl"
            >
              {/* Info and Logo Row */}
              <div className="flex items-center justify-between mb-4  p-4 rounded">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
                <div>
                  <img
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                    src={item.icon}
                  />
                </div>
              </div>
              {/* Description */}
              <p className="mb-4 text-[#DFF9EB] text-sm ml-4">{item.description}</p>
              {/* Call to Action Button */}
              <Button
              variant="light"
                className="text-[#DFF9EB] "
                href="#"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
