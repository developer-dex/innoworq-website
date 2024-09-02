import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import image1 from "../../assets/H6_Gallery_1.png";
import image2 from "../../assets/G1_Main_2.png";
import image3 from "../../assets/H6_Gallery_3.png";

const GS4_RelatedProjects = () => {
  return (
    <div className="  flex flex-col items-center justify-center">
      {/* Top Texts */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between items-center p-4 mt-10">
        <h1 className="text-4xl text-[#1C2752] text-left font-bold font-mulish px-3 py-1 mb-2 ">
          Related Projects
        </h1>
      </div>

      {/* Boxes Row 1  */}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 md:gap-10 mb-4 md:mb-12 p-4 md:p-0">
        {/* Box1  */}
        <Link
          to="/gallery"
          className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400"
        >
          <img
            src={image1}
            alt=""
            className="w-full h-[450px] object-cover mb-3"
          />
          <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
            Electrical & Maintanace
          </h1>
          <p className="text-[#7E7E7E] text-center font-semibold">
            House, Office{" "}
          </p>
        </Link>
        {/* Box 2 */}
        <Link
          to="/gallery"
          className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400"
        >
          <img
            src={image2}
            alt=""
            className="w-full h-[450px] object-cover mb-3"
          />
          <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
            Industry machine issue
          </h1>
          <p className="text-[#7E7E7E] text-center font-semibold">
            House, Office{" "}
          </p>
        </Link>
        {/* Box 3 */}
        <Link
          to="/gallery"
          className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400"
        >
          <img
            src={image3}
            alt=""
            className="w-full h-[450px] object-cover mb-3"
          />
          <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
            Car Repair & Maintanance
          </h1>
          <p className="text-[#7E7E7E] text-center font-semibold">
            House, Office{" "}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default GS4_RelatedProjects;
