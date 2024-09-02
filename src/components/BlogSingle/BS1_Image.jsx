import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import image from "../../assets/H9_Blog_1.png";

const BS1_Image = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 md:gap-6 mb-0 md:mb-4 p-4 md:p-0 mt-3 md:mt-10">
        {/* Box1  */}
        <div className=" flex-1 p-4 flex flex-col items-center justify-center  min-h-[250px]">
          <img
            src={image}
            alt=""
            className="w-full max-w-[1200px] object-cover mb-4"
          />

          {/* Person name and date */}
          <div className="flex flex-row items-center justify-center relative z-50 -mt-10">
            <div className=" bg-[#0063A7] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
              <IoPerson />
              <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                John Kennis
              </h1>
            </div>
            <div className="  bg-[#56AAE3] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
              <IoTime />
              <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                April 2, 2022
              </h1>
            </div>
            <div className="bg-[#0063A7] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
              <FaLocationDot />
              <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                New York
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BS1_Image;
