import React from "react";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";

export default function Footer() {
  return (
    <footer className="bg-[#004050] text-white">
     
      <div className="w-full border-t border-[#EBFEF614]" />
      
      {/* Top Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
      
          <div className="flex items-center space-x-4">
            <Link href="https://crm-zenix.keystonedemo.com/">
              <Image
                src="https://crm-zenix.keystonedemo.com/wp-content/uploads/2024/10/crm-logo-light.svg"
                alt="CRM Logo"
                className=""
                height={40}
              />
            </Link>
            <h2 className="text-xl font-boldsemi">
              CRM platform built for{" "}
              <span className="text-[#a9ff9b]">success</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-6 md:mt-0">
            {/* Phone Block */}
            <div className="flex items-center">
                <div className="p-2 mr-2 bg-green-500 rounded-full">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>
              </div>
              <div className="mr-3 text-left">
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-sm">+91 3497 - 347</p>
              </div>
              
            </div>
            {/* Email Block */}
            <div className="flex items-center">
            <div className="p-2 mr-2 bg-green-500 rounded-full">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
                </svg>
              </div>
              <div className="mr-3 text-left">
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-sm">mail@example.com</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full border-b border-[#EBFEF614]" />

      {/* Middle Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Our Program
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Help &amp; Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Expert Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Report Abuse
                </Link>
              </li>
            </ul>
          </div>
         
          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Referral Program
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Payment Gateway
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Blog &amp; News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Our Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#DFF9EB] text-[14px] hover:text-green-500"
                >
                  Compare Other
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

 
      <div className="w-full border-b border-[#EBFEF614]" />

      {/* Bottom Section: Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-[#DFF9EB] text-[14px]">
          <div className="text-center md:text-left">
            <p>Copyright © 2024. - WP Theme by</p>
            <p>Keystone Themes</p>
            <p className="mt-2 text-xs">
                Developed by <Link className="text-green-500" href="http://linkedin.com/in/fariq-farooq-a860261b2">Fariq Farooq</Link> as an assessment task for Shuura Business setup UAE
            </p>
          </div>
          <div className="text-center md:text-right">
            <p>© 2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
