import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import image1 from "../../assets/H9_Blog_1.png";
import image2 from "../../assets/H9_Blog_2.png";

const H9_Blog = () => {
  return (
    <div className="bg-[#ffffff] p-10">
      <div className="flex flex-col items-center justify-center ">
        {/* Top Texts */}
        <div className="w-full max-w-[1200px] flex flex-col items-center p-10">
          <div className="bg-[#F4F4F4] flex flex-row items-center w-auto mb-2 justify-center px-3 py-1">
            <FiEdit />
            <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
              Blog & Articles
            </h1>
          </div>

          <h1 className="text-4xl text-[#1C2752] text-center font-bold font-mulish px-3 py-1 mb-2 ">
            Latest News and Articles
          </h1>
        </div>

        {/* White boxes */}
        <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto  mb-10">
          {/* First box -------------------------------------------------------*/}
          <div className="bg-[#ffffff] max-w-[500px] h-auto p-10">
            <img src={image1} alt="" className="object-cover mb-4" />

            {/* Person name and date */}
            <div className="flex flex-row items-center justify-center relative z-50 -mt-10">
              <div className="bg-[#4194CE] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
                <IoPerson />
                <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                  John Kennis
                </h1>
              </div>
              <div className="bg-[#0063A7] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
                <IoTime />
                <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                  April 2, 2022
                </h1>
              </div>
            </div>

            <h1 className="text-lg font-bold font-mulish text-[#1C2752] mb-2 mt-6">
              Improve Workflow With bluecollar Construction
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter mb-6">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt. Interdum et malesuada.
            </p>
            <Link
              to="/blog"
              className="text-sm font-semibold text-[#1C2752] font-inter"
            >
              Read More
            </Link>
          </div>

          {/* Second box -----------------------------------------------------*/}
          <div className="bg-[#ffffff] max-w-[500px] h-auto p-10">
            <img src={image2} alt="" className="object-cover mb-4" />

            {/* Person name and date */}
            <div className="flex flex-row items-center justify-center relative z-50 -mt-10">
              <div className="bg-[#4194CE] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
                <IoPerson />
                <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                  John Kennis
                </h1>
              </div>
              <div className="bg-[#0063A7] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
                <IoTime />
                <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                  April 2, 2022
                </h1>
              </div>
            </div>

            <h1 className="text-lg font-bold font-mulish text-[#1C2752] mb-2 mt-6">
              Understanding Your Home’s Electrical Capacity
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter mb-6">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt. Interdum et malesuada.
            </p>
            <Link
              to="/blog"
              className="text-sm font-semibold text-[#1C2752] font-inter"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H9_Blog;
