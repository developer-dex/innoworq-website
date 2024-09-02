// ResponsiveComponent.jsx
import React from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import image1 from "../../assets/A1_Intro_1.png";
import image2 from "../../assets/A1_Intro_2.png";

const A1_Intro = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between mt-10 mb-10">
        {/* Left part-------------------------- */}
        <div className="flex-1 flex flex-col p-2">
          <h1 className="bg-[#F4F4F4] text-[#1C2752] text-base md:text-base font-semibold font-inter mb-2 ml-3 px-3 py-1 w-[200px]">
            Welcome to Innoworq
          </h1>
          <h1 className="text-4xl text-[#1C2752] font-bold font-mulish px-3 py-1 mb-2 ">
            We Provide Your Future
          </h1>
          <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-6">
            Proactively envisined multimeda based exptis and cross media growth
            strategies seamlessly visualized quality a intellectual capitals
            withouts superiors collaboration ideas sharing holistically
            pontificated installed base portals after maintainable products.
          </h1>

          {/* Bullets */}

          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="flex flex-row items-start justify-start gap-2 mb-6">
              <IoMdCheckmarkCircle className="text-[#0063A7] text-2xl" />
              <h1 className="font-bold font-mulish text-[#1C2752]">
                We provide 24/7 service
              </h1>
            </div>
            <div className="flex flex-row items-start justify-start gap-2 mb-6">
              <IoMdCheckmarkCircle className="text-[#0063A7] text-2xl" />
              <h1 className="font-bold font-mulish text-[#1C2752]">
                Great Technology
              </h1>
            </div>
            <div className="flex flex-row items-start justify-start gap-2 mb-6">
              <IoMdCheckmarkCircle className="text-[#0063A7] text-2xl" />
              <h1 className="font-bold font-mulish text-[#1C2752]">
                Qualified Agents
              </h1>
            </div>
            <div className="flex flex-row items-start justify-start gap-2 mb-6">
              <IoMdCheckmarkCircle className="text-[#0063A7] text-2xl" />
              <h1 className="font-bold font-mulish text-[#1C2752]">
                35 Years Experience
              </h1>
            </div>
          </div>

          {/* Sign and founder details */}
          <div className="flex flex-row items-center justify-left gap-8 mb-8">
            <img
              src={image2}
              alt=""
              className="max-w-[200px] w-auto max-h-[80px] h-auto"
            />
            <div className="flex flex-col gap-1">
              <p className="font-mulish text-xl font-bold ">Benjamin Dowd</p>
              <h1 className="font-inter  text-[#0063A7]">
                Founder of Bluecollar
              </h1>
            </div>
          </div>

          {/* Button & Contact */}
          <div className="flex flex-col md:flex-row items-center justify-left gap-8 mb-8">
            <div className="bg-[#0063A7] w-[150px] py-3 flex items-center justify-center">
              <Link to="/contact-us" className="text-white text-center">
                More About Us
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-inter font-semibold underline text-center md:text-left">
                For Emergency Fixing or Appointment
              </p>
              <h1 className="font-inter font-bold text-xl text-[#0063A7] text-center md:text-left">
                (03) 123 456 7890
              </h1>
            </div>
          </div>
        </div>

        {/* Right Part-------------------------- */}
        <div className="flex-1 flex ">
          <img
            src={image1}
            alt=""
            // className="w-[540px] h-[540px] p-4"
            className="w-full max-w-[540px] max-h-[500px] h-auto object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default A1_Intro;
