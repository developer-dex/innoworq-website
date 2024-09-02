import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import PaginationComponent from "../Common/PaginationComponent";
import { IoTime } from "react-icons/io5";
import image from "../../assets/GS2_Info.png";

const GS2_Info = () => {
  return (
    <div className="flex items-center justify-center md:mt-16 mb-16">
      <div className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto gap-8">
        {/* Left div */}
        <div className="w-full md:w-1/3 bg-[#F4F4F4] flex items-center justify-start p-12">
          <div className="w-full flex flex-col gap-4">
            <div>
              <p className="text-left font-mulish text-[#1C2752] font-bold mb-2">
                Project Information
              </p>
              <div className="w-full border-t-4 border-[#0063A7] " />
            </div>

            <div>
              <p className="text-left font-mulish text-[#1C2752] font-bold mb-2">
                Client:
              </p>
              <p className="text-left font-inter text-[#7E7E7E]  mb-4 ">
                DPR Construction
              </p>
              <hr className="w-full border-[#D2D2D2] " />{" "}
            </div>

            <div>
              <p className="text-left font-mulish text-[#1C2752] font-bold mb-2">
                Location:
              </p>
              <p className="text-left font-inter text-[#7E7E7E]  mb-4 ">
                New York United States
              </p>
              <hr className="w-full border-[#D2D2D2]" />{" "}
            </div>

            <div>
              <p className="text-left font-mulish text-[#1C2752] font-bold mb-2">
                Project Date:
              </p>
              <p className="text-left font-inter text-[#7E7E7E]  mb-4 ">
                15 December ,2022
              </p>
              <hr className="w-full border-[#D2D2D2]" />{" "}
            </div>

            <div>
              <p className="text-left font-mulish text-[#1C2752] font-bold mb-2">
                Category:
              </p>
              <p className="text-left font-inter text-[#7E7E7E]  mb-4 ">
                Service
              </p>
              <hr className="w-full border-[#D2D2D2]" />{" "}
            </div>

            <div>
              <p className="text-left font-mulish text-[#1C2752] font-bold mb-2">
                Value:
              </p>
              <p className="text-left font-inter text-[#7E7E7E]  mb-4 ">
                $ 2 250 000
              </p>
              <hr className="w-full border-[#D2D2D2]" />{" "}
            </div>
          </div>
        </div>
        {/* Right div */}
        <div className="w-full md:w-2/3 flex items-center justify-center">
          <img
            src={image}
            alt="Placeholder"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GS2_Info;
