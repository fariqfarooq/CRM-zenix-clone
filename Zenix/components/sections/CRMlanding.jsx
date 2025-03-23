import { Button } from '@heroui/button';
import { Code } from '@heroui/code';
import { Image } from '@heroui/image';
import { Snippet } from '@heroui/snippet';
import React from 'react';

export default function CRMLanding() {
  return (
    <div className="container mx-auto max-w-8xl px-4 py-12">
      {/* Intro Section */}
      <section className="text-center mb-16">
        <Code color='success' className="text-sm text-green-500 ">
          CRM Platform
        </Code>
        <h2 className="text-[38px] font-semibold mt-4 capitalize leading-tight">
          Leading CRM platform that will <br /> empower your businesses
        </h2>
        <p className="mt-4 text-gray-700 leading-tight">
          Eliminate repetitive customer service tasks with easy-to-configure <br /> automation, boosting efficiency.
        </p>
      </section>

      {/* Consultation Section */}
      <section className="grid md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <Image
            src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/Medium_Traffic-1024x908.png"
            alt="Traffic illustration"
            height={400}
            width='100%'
          />
        </div>
        <div>
          <h2 className="text-[28px] font-semibold leading-tight">
            Reach out for a <br /> personalized consultation
          </h2>
          <p className="mt-4 text-gray-700 leading-tight">
            Eliminate repetitive customer service tasks with easy-to <br />-configure automation, boosting efficiency.
          </p>
          <Button
          radius='md'
            size='lg'
            color='success'
            href="/pricing/"
            className="inline-block mt-6 text-white text-sm   font-medium  transition"
          >
            View Pricing
          </Button>
        </div>
      </section>

      {/* Tools Section */}
      <section className="grid md:grid-cols-2 gap-32 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-[28px] font-semibold font-bold leading-tight">
            Share tools quickly and <br /> confidently in minutes
          </h2>
          <p className="mt-4 text-gray-700 leading-tight">
            This powerful tool eliminates the need to leave Salesforce <br /> to get things done as I can create a custom proposal with <br /> dynamic pricing tables. You can also customize your own <br /> dynamic versions.
          </p>
          <Button
          radius='md'
            size='lg'
            color='success'
            href="/pricing/"
            className="inline-block mt-6 text-white text-sm   font-medium  transition"
          >
            View Pricing
          </Button>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/Medium_Team-1024x925.png"
            alt="Team illustration"
            className=""
            height={400}
            width='100%'
          />
        </div>
      </section>
    </div>
  );
}
