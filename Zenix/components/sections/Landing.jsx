import { Button } from '@heroui/button';
import { Icon } from '@iconify/react';
import React from 'react';

export default function LandingSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#004050] w-full px-10 pt-16  ">
      {/* Main Container */}
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-12 md:space-y-0 mt-10">
          {/* Image Section */}
          <div className="flex-1 flex justify-center mt-2">
            <img
              className="w-full max-w-none h-auto rounded-t-2xl "
              src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/Main-Dashboard-1-e1728723144728-1024x717.png"
              alt="Main Dashboard"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-6 p-6 mx-10">
            <h2 className="text-5xl font-semibold text-white">
              Streamline Your Operations with Zenix&#39;s Innovative CRM
            </h2>
            <p className="text-md text-white">
              Take control of your customer experience. CRM-service is a fully-featured cloud-based Customer Relationship Management service with highly scalable features.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <Button

              size='lg'
                href="#"
                className="inline-block py-2 px-6 bg-success text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Request A Demo
              </Button>
              <Button
              size='lg'
                href="/pricing/"
                className="inline-block py-2 px-6   bg-green-50 text-sm font-medium rounded-lg hover:bg-green-600 hover:text-white transition"
              >
                Explore More
              </Button>
            </div>
            <div className="mt-12 text-center">
          <ul className="space-y-4">
            <li className="flex  text-gray-600">
             <Icon icon="ic:round-lock" className="text-green-500 mr-2" />
              <span className='text-sm text-white'>30-day money back guarantee</span>
            </li>
          </ul>
        </div>
          </div>
        </div>

       
       
      </div>
    </div>
  );
};
