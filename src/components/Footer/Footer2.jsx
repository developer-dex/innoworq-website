import React from "react";
import { PiLineVerticalLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import image from "../../assets/Logo2.png";

const Footer2 = () => {
  return (
    <div className="bg-[#0063A7] text-white py-10 px-4">
      {/* Top layer */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-around items-center mb-10 gap-10">
        <div className="flex items-center justify-center gap-4">
          <span className="inline-flex items-center justify-center rounded-full bg-white p-4 text-[#0063A7] text-[24px]">
            <MdOutlineEmail />
          </span>
          <div>
            <p className="text-base font-bold font-mulish text-white">
              Mail Us
            </p>
            <p className="text-base font-light font-inter text-white">
              info@example.com
            </p>
          </div>
        </div>
        {/* // Text 2 */}
        <div className="flex items-center justify-center gap-4">
          <span className="inline-flex items-center justify-center rounded-full bg-white p-4 text-[#0063A7] text-[24px]">
            <CiPhone />
          </span>
          <div>
            <p className="text-base font-bold font-mulish text-white">
              Call Us
            </p>
            <p className="text-base font-light font-inter text-white">
              +01 569 896 654
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="inline-flex items-center justify-center rounded-full bg-white p-4 text-[#0063A7] text-[24px]">
            <CiLocationOn />
          </span>
          <div>
            <p className="text-base font-bold font-mulish text-white">
              Location
            </p>
            <p className="text-base font-light font-inter text-white">
              Amsterdam, 109-74
            </p>
          </div>
        </div>
      </div>

      {/* Line break */}
      <div className="max-w-[1200px] mx-auto border-t border-gray-400 my-10"></div>

      {/* Mid Layer */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-around items-center">
        {/* Left Part */}
        <div className="flex-1 mb-6 md:mb-0 md:pr-6">
          <p className="text-gray-300 md:text-left text-center">
            Denouncing pleasure and praising pain was born and I will givg you a
            coghmplete acchount of the system, and expound the actual
          </p>
        </div>

        {/* Right Part */}
        {/* <div className="flex-1 flex flex-row gap-20 md:gap-0 justify-around"> */}
        <div className="flex-1 flex flex-row gap-20 md:gap-0 justify-around items-start">
          {/* First Text Column */}
          <div className="mb-6 md:mb-0 md:pr-6 text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Explore</h2>
            <div className="flex flex-col">
              <Link to="/about-us" className="text-gray-300">
                About Us
              </Link>
              <Link to="/team" className="text-gray-300">
                Team
              </Link>
              <Link to="/gallery" className="text-gray-300">
                Gallery
              </Link>
              <Link to="/faq" className="text-gray-300">
                FAQs
              </Link>
            </div>
          </div>

          {/* Second Text Column */}
          <div className="md:pl-6 text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <div className="flex flex-col">
              <Link to="/services" className="text-gray-300">
                Services
              </Link>
              <Link to="/blog" className="text-gray-300">
                Blog
              </Link>
              <Link to="/contact-us" className="text-gray-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Line break */}
      <div className="max-w-[1200px] mx-auto border-t border-gray-400 my-10"></div>

      {/* Bottom Layer */}
      <div className="max-w-[1200px] mx-auto flex justify-center items-center text-gray-300">
        Copyright © Innoworq | All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer2;
