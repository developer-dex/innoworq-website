import React from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import image from "../../assets/H5_ChooseUs.jpg";

const H5_ChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left side /////////// */}
      <div className="flex-1">
        <img src={image} alt="" />
      </div>

      {/* Right side /////////// */}
      <div className="w-full max-w-[1200px] flex flex-1 flex-col items-start justify-center p-10">
        <div className="bg-[#F4F4F4] flex flex-row items-center w-auto mb-2 justify-center px-3 py-1">
          <FiEdit />
          <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
            Why Choose Us
          </h1>
        </div>

        <h1 className="text-4xl text-[#1C2752] font-bold text-left font-mulish  py-1 mb-2 max-w-[600px] ">
          Few Reasons Why You Should Choose Us
        </h1>

        <h1 className="text-[#7E7E7E] font-normal font-inter text-left py-1 mb-10 max-w-[600px]">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium metus. Proin pretium id urna sit amet
          tincidunt. Interdum et malesuada.
        </h1>

        <div className="flex flex-row items-start justify-start gap-2 mb-8">
          <IoMdCheckmarkCircle className="text-[#0063A7] text-2xl" />
          <div>
            <h1 className="font-bold font-mulish text-[#1C2752]">
              35 Years Experience
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter text-left py-1 max-w-[500px]">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-2 mb-8">
          <IoMdCheckmarkCircle className="text-[#0063A7] text-2xl" />
          <div>
            <h1 className="font-bold font-mulish text-[#1C2752]">
              Excellencee Certificate
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter text-left py-1 max-w-[500px]">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-2 mb-8">
          <IoMdCheckmarkCircle className="text-[#0063A7] text-2xl" />
          <div>
            <h1 className="font-bold font-mulish text-[#1C2752]">
              Affordable Price
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter text-left py-1 max-w-[500px]">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H5_ChooseUs;
