import { Button } from '@heroui/button';
import React from 'react';

export default function LandingSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 w-full py-4">
      {/* Main Container */}
      <div className="w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-12 md:space-y-0">
          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              className="w-full max-w-none h-auto"
              src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/Main-Dashboard-1-e1728723144728-1024x717.png"
              alt="Main Dashboard"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-6 p-6">
            <h2 className="text-5xl font-semibold text-gray-800">
              Streamline your operations with Zenix&#39;s innovative CRM
            </h2>
            <p className="text-lg text-gray-600">
              Take control of your customer experience. CRM-service is a fully-featured cloud-based Customer Relationship Management service with highly scalable features.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <Button
                href="#"
                className="inline-block py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Request A Demo
              </Button>
              <Button
                href="/pricing/"
                className="inline-block py-2 px-6 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Explore More
              </Button>
            </div>
            <div className="mt-12 text-center">
          <ul className="space-y-4">
            <li className="flex  text-gray-600">
              <svg
                className="w-4 h-4 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
              </svg>
              <span className='text-sm'>30-day money back guarantee</span>
            </li>
          </ul>
        </div>
          </div>
        </div>

        {/* Features List */}
       
      </div>
    </div>
  );
};
