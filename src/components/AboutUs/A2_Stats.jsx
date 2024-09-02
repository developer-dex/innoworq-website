import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import image1 from "../../assets/A2_Stats_1.svg";
import image2 from "../../assets/A2_Stats_2.svg";
import image3 from "../../assets/A2_Stats_3.svg";
import image4 from "../../assets/A2_Stats_4.svg";

const A2_Stats = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 md:gap-10 mb-6 md:mb-10 md:mt-20 p-4 md:p-0">
      {/* Box1  */}
      <div className="bg-[#F4F4F4] flex-1 p-4 flex flex-col items-center justify-center">
        <img src={image1} alt="" className="mb-2 md:mb-3 " />
        <div className="text-center text-[#1C2752] text-4xl font-bold font-mulish mb-2">
          1920
        </div>
        <div className="text-center text-[#1C2752]  font-bold font-mulish">
          Projects Completed
        </div>
      </div>
      {/* Box 2 */}
      <div className="bg-[#F4F4F4] flex-1 p-4 flex flex-col items-center justify-center">
        <img src={image2} alt="" className="mb-2 md:mb-3 " />
        <div className="text-center text-[#1C2752] text-4xl font-bold font-mulish mb-2">
          2500+
        </div>
        <div className="text-center text-[#1C2752]  font-bold font-mulish">
          Industry Solutions
        </div>
      </div>
      {/* Box 3 */}
      <div className="bg-[#F4F4F4] flex-1 p-4 flex flex-col items-center justify-center">
        <img src={image3} alt="" className="mb-2 md:mb-3 " />
        <div className="text-center text-[#1C2752] text-4xl font-bold font-mulish mb-2">
          500+
        </div>
        <div className="text-center text-[#1C2752]  font-bold font-mulish">
          Expert Contractors
        </div>
      </div>
      {/* Box 4  */}
      <div className="bg-[#F4F4F4] flex-1 p-4 flex flex-col items-center justify-center">
        <img src={image4} alt="" className="mb-2 md:mb-3" />
        <div className="text-center text-[#1C2752] text-4xl font-bold font-mulish mb-2">
          1k+
        </div>
        <div className="text-center text-[#1C2752]  font-bold font-mulish">
          Happy Customers
        </div>
      </div>
    </div>
  );
};

export default A2_Stats;
