"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Code } from "@heroui/code";
import { Button } from "@heroui/button";

const testimonials = [
  {
    image: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/3-2.png",
    feedback:
      "“I’ve tried several CRM platforms, but Zenix stands out for its user-friendly interface and comprehensive features. It has truly simplified our workflow productivity.”",
    name: "Max Doe",
    designation: "Designer",
  },
  {
    image: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/5-1.png",
    feedback:
      "“Zenix has been instrumental in helping us close deals faster. Its automation features have allowed us to focus on building relationships with our clients.”",
    name: "Khyati H.",
    designation: "Designer",
  },
  {
    image: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/6.png",
    feedback:
      "“Zenix has exceeded our expectations in every way. From its seamless integration with our existing tools to its robust reporting capabilities, it has become an indispensable asset.”",
    name: "Maya",
    designation: "Designer",
  },
  {
    image: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/1.png",
    feedback:
      "I wanted to take a moment to express my gratitude for the exceptional service they provided. Their support and dedication were truly impressive.",
    name: "John Doe",
    designation: "Designer",
  },
  {
    image: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/1.png",
    feedback:
      "I wanted to take a moment to express my gratitude for the exceptional service they provided. Their support and dedication were truly impressive.",
    name: "John Doe",
    designation: "Designer",
  },
  {
    image: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/1.png",
    feedback:
      "I wanted to take a moment to express my gratitude for the exceptional service they provided. Their support and dedication were truly impressive.",
    name: "John Doe",
    designation: "Designer",
  },
  {
    image: "https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/1.png",
    feedback:
      "I wanted to take a moment to express my gratitude for the exceptional service they provided. Their support and dedication were truly impressive.",
    name: "John Doe",
    designation: "Designer",
  },
];

export default function TestimonialsSlider() {
  const carouselRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(1);
  const x = useMotionValue(0);

  // Calculate total scrollable width for drag constraints.
  useEffect(() => {
    if (carouselRef.current) {
      const totalScrollableWidth =
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
      setDragConstraints({ right: 0, left: -totalScrollableWidth });
    }
  }, []);

  // Update number of visible slides and each card's width based on window width.
  useEffect(() => {
    const updateDimensions = () => {
      if (carouselRef.current) {
        let v;
        if (window.innerWidth < 768) v = 1;
        else if (window.innerWidth < 1024) v = 2;
        else v = 3;
        setVisibleSlides(v);
        setCardWidth(carouselRef.current.offsetWidth / v);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Update the current index continuously based on the leftmost card in view.
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (cardWidth) {
        // Using Math.floor so that as soon as the next card starts entering, the index updates.
        const newIndex = Math.floor(-latest / cardWidth) + 1;
        const maxIndex = testimonials.length - visibleSlides + 1;
        setCurrentIndex(Math.max(1, Math.min(newIndex, maxIndex)));
      }
    });
    return () => unsubscribe();
  }, [cardWidth, x, visibleSlides]);

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        {/* Header Section: Text on left, Button on right */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="text-left">
          <Code color="" className="text-sm font-medium bg-[#DFF9EB]  text-[#00CC61]">
            Reviews
          </Code>
            <h2 className="text-[42px] font-semibold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-700 text-[16px]">
              Witness firsthand the user appreciation for our uncomplicated ticketing system in their daily activities.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <Button size='lg' className="bg-[#00CC61] text-white font-semibold text-sm  hover:bg-[#00CC61]">
              View all reviews
            </Button>
          </div>
        </div>
        {/* Draggable Carousel */}
        <div className="overflow-hidden cursor-grab">
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={dragConstraints}
            style={{ x }}
            className="flex"
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-none w-full md:w-1/2 lg:w-1/3 px-2"
              >
                <div className="bg-[#F4F4F4] p-6 rounded-2xl  flex flex-col h-full">
                  <div className="w-16 h-16  mb-4 justify-start">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4 text-left">
                    {testimonial.feedback}
                  </p>
                  <div className="text-left">
                    <div className="font-bold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.designation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Index Indicator */}
        <div className="text-center mt-4 text-gray-600">
          {currentIndex.toString().padStart(2, "0")} —{" "}
          {testimonials.length.toString().padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}
