import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/Homepage-hero2.png";

const H1_Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center -mt-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center md:items-start px-4 md:px-4">
        <div className="w-full max-w-[1200px] flex flex-col justify-center items-center md:items-start md:mt-48 mb-20 gap-4 md:gap-0">
          <h1 className="bg-zinc-700 text-white text-base md:text-base font-normal font-inter mb-4 px-3 py-1 rounded">
            Trusted & Professional
          </h1>
          <h1 className="text-white text-3xl text-center md:text-start font-mulish font-bold md:text-5xl mb-4 md:max-w-[20ch] leading-snug md:leading-snug">
            Drive Better ROI and Business Evolution
          </h1>
          <Link
            to="/services"
            className="bg-[#0063A7] text-white text-lg font-inter md:text-xl px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default H1_Hero;
