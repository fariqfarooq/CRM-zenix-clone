import { Code } from "@heroui/code";
import { Link } from "@heroui/link";
import React from "react";

const FeaturesAndServices = () => {
  return (
    <section className="flex flex-col items-center text-center px-4 py-16 bg-[#F4F4F4]">
      {/* Small Tag */}
      <Code
        className="text-sm font-medium bg-[#DFF9EB]  text-[#00CC61] mb-8"
        color=""
      >
        What will you get?
      </Code>

      {/* Heading */}
      <h2 className="text-[48px] font-semibold text-gray-900 mb-4">
        Features & Services
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        Discover how our tech solutions can transform your business. Explore our
        features and take your business to new heights.
      </p>

      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 flex gap-2">
        <Link className="text-gray-700 text-sm hover:text-green-600" href="/">
          Home
        </Link>
        <span className="text-gray-400">›</span>
        <span className="text-green-500 font-medium">Features</span>
      </nav>
    </section>
  );
};

export default FeaturesAndServices;
