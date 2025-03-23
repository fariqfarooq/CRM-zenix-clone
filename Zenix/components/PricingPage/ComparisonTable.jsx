import { Icon } from "@iconify/react";
import React from "react";


const ComparePlans = () => {
  const data = {
    title: "Compare Plans",
    subtitle: "Transparent pricing for every stage.",
    plans: [
      { name: "Personal", price: "$156/Mo" },
      { name: "Professional", price: "$256/Mo" },
    ],
    features: [
      {
        title: "Time Management Integration",
        description: "Tackle the right tasks at the right time.",
        icons: [true, true],
      },
      {
        title: "Customizable Reporting Dashboard",
        description: "Tackle the right tasks at the right time.",
        icons: [true, true],
      },
      {
        title: "Detailed Transaction Payloads",
        description: "Tackle the right tasks at the right time.",
        icons: [true, true],
      },
      {
        title: "Basic Registration And Ticketing",
        description: "Tackle the right tasks at the right time.",
        icons: [true, true],
      },
      {
        title: "Real-Time Notifications",
        description: "Tackle the right tasks at the right time.",
        icons: [true, true],
      },
      {
        title: "Automatic Backups",
        description: "Tackle the right tasks at the right time.",
        icons: [false, true],
      },
      {
        title: "Multilingual Support",
        description: "Tackle the right tasks at the right time.",
        icons: [false, true],
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto border-[0.5px] border-gray-200 rounded-2xl my-20 overflow-hidden">
      {/* Header */}
      <div className="bg-green-100 px-6 py-4 grid grid-cols-3 items-center text-left font-bold">
        <h2 className="text-[16px] sm:text-[24px] col-span-1">{data.title} <br /> <span className="text-[16px] text-gray-600 font-medium">Transparent pricing for every stage.</span></h2>
        
        {data.plans.map((plan, idx) => (
          <div key={idx} className="text-center">
            <p className=" text-[16px] sm:text-[24px] font-bold">{plan.name}</p>
            <p className="text-gray-600 font-medium">{plan.price}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="divide-y ">
        {data.features.map((feature, idx) => (
          <div key={idx} className="grid grid-cols-3 px-6 py-4 items-center">
            <div>
              <h4 className=" text-[14px] sm:text-[18px] font-semibold">{feature.title}</h4>
              <p className="text-gray-500 text-[12px] sm:text-[14px]">{feature.description}</p>
            </div>
            {feature.icons.map((icon, iconIdx) => (
              <div key={iconIdx} className="text-center">
                {icon ? (
                  <Icon icon="icons8:checked" className="text-green-500 w-8 h-8 mx-auto" />
                ) : (
                    <Icon icon="stash:minus-solid" className="text-red-500 w-6 h-6 mx-auto" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparePlans;
