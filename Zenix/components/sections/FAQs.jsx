"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Code } from "@heroui/code";

export default function FAQAccordion() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
        <Code color="" className="text-sm font-medium bg-[#DFF9EB]  text-[#00CC61]">
            FAQs
          </Code>
          <h2 className="text-[42px] font-semibold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-[16px] leading-tight">
            Discover our help desk FAQs to learn how we efficiently address your <br  className="hidden lg:block" /> technical issues,
            ensuring you receive the support needed to stay <br className="hidden lg:block" /> productive and focused.
          </p>
        </div>
        {/* FAQ Accordion */}
        <Accordion selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="How can I contact the help desk?"
            title={<span className="font-bold">How can I contact the help desk?</span>}
          >
            You can contact the help desk via phone, email, or through our online support portal, available 24/7 for your convenience.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="What types of issues can the help desk assist with?"
            title={<span className="font-bold">What types of issues can the help desk assist with?</span>}
          >
            Our help desk can assist with a wide range of technical issues including software troubleshooting, hardware problems, network connectivity, account access, and general IT support.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Can the help desk assist remotely?"
            title={<span className="font-bold">Can the help desk assist remotely?</span>}
          >
            Yes, our help desk can provide remote assistance using secure remote access tools to troubleshoot and resolve issues directly on your device.
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="What are the help desk's hours of operation?"
            title={<span className="font-bold">What are the help desk&apos;s hours of operation?</span>}
          >
            The help desk operates 24/7 to ensure you receive timely support whenever you need it, including weekends and holidays.
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Is there a way to check the status of my support request?"
            title={<span className="font-bold">Is there a way to check the status of my support request?</span>}
          >
            Yes, you can check the status of your support request through our online support portal or by contacting the help desk directly for updates.
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
