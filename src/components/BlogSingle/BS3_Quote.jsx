import React from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import image from "../../assets/BS3_Quote.png";

const BS3_Quote = () => {
  return (
    <div className="bg-[#F4F4F4] p-20">
      <div className="flex flex-col items-center">
        <BiSolidQuoteAltRight className="text-white text-6xl bg-[#0063A7] rounded-full p-3" />
        <p className="italic font-inter text-xl text-[#7E7E7E] mb-4 max-w-[900px] text-center py-10 tracking-wide leading-relaxed">
          " This is an example quote with some{" "}
          <span className="font-bold text-[#1C2752]">bold words</span> and the
          rest are normal. This is an example quote with some{" "}
          <span className="font-bold text-[#1C2752]">bold words</span> and the
          rest are normal."
        </p>
        <img
          src={image}
          alt=""
          className="object-cover w-[80px h-auto rounded-full"
        />
        <p className="font-inter font-semibold text-[#1C2752]">Nancy Luther</p>
        <p className="text-[#7E7E7E] text-sm  font-inter">New York</p>
      </div>
    </div>
  );
};

export default BS3_Quote;
