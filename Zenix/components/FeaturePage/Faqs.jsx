"use client";
import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Code } from "@heroui/code";

export default function FAQAccordion() {
  return (
    <section className="py-12 bg-[#004050] ">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-8">
          <Code
            className="text-sm font-medium bg-[#DFF9EB]  text-[#00CC61]"
            color=""
          >
            FAQs
          </Code>
          <h2 className="text-[42px] font-semibold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#F4F4F4] text-[16px] leading-tight">
            Discover our help desk FAQs to learn how we efficiently address your{" "}
            <br className="hidden lg:block" /> technical issues, ensuring you
            receive the support needed to stay{" "}
            <br className="hidden lg:block" /> productive and focused.
          </p>
        </div>
        {/* FAQ Accordion */}
        <div className="bg-[#FFFFFF12] p-8 rounded-2xl  ">
          <Accordion selectionMode="multiple" variant="light">
            <AccordionItem
              key="1"
              aria-label="How can I contact the help desk?"
              title={
                <span className="text-[#DFF9EB] font-bold">
                  How can I contact the help desk?
                </span>
              }
            >
               <p className="text-[#DFF9EB]"> You can contact the help desk via phone, email, or through our
              online support portal, available 24/7 for your convenience.</p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="What types of issues can the help desk assist with?"
              title={
                <span className=" text-[#DFF9EB] font-bold">
                  What types of issues can the help desk assist with?
                </span>
              }
            >
             <p className="text-[#DFF9EB]"> Our help desk can assist with a wide range of technical issues
              including software troubleshooting, hardware problems, network
              connectivity, account access, and general IT support.</p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Can the help desk assist remotely?"
              title={
                <span className=" text-[#DFF9EB] font-bold">
                  Can the help desk assist remotely?
                </span>
              }
            >
             <p className="text-[#DFF9EB]"> Yes, our help desk can provide remote assistance using secure
              remote access tools to troubleshoot and resolve issues directly on
              your device.</p>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="What are the help desk's hours of operation?"
              title={
                <span className=" text-[#DFF9EB] font-bold">
                  What are the help desk&apos;s hours of operation?
                </span>
              }
            >
             <p className="text-[#DFF9EB]"> The help desk operates 24/7 to ensure you receive timely support
              whenever you need it, including weekends and holidays.</p>
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Is there a way to check the status of my support request?"
              title={
                <span className="text-[#DFF9EB] font-bold">
                  Is there a way to check the status of my support request?
                </span>
              }
            >
             <p className="text-[#DFF9EB]"> Yes, you can check the status of your support request through our
              online support portal or by contacting the help desk directly for
              updates.</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
