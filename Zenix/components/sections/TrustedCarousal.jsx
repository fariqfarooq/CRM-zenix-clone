'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@heroui/image';

export default function TrustedCarousel() {
  const images = [
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Urban-helpdesk.png',
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Runwaaay-helpdesk.png',
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Quantum-helpdesk.png',
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Lunaxy-helpdesk.png',
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Harvest-helpdesk.png',
    'https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/07/new-Gourmet-helpdesk.png',
    
  ];

  // Reference to the carousel container.
  const carouselRef = useRef(null);
  // State to hold the maximum draggable width.
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      // Calculate the draggable width: total scrollable width minus the visible width.
      setDragWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="bg-[#004050] py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[14px] font-bold mb-8 text-white">
          Trusted by 100,000+ teams globally at innovative companies
        </h2>
        <div className="overflow-hidden cursor-grab">
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{ right: 0, left: -dragWidth }}
            className="flex"
          >
            {images.map((src, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-contain h-14"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
