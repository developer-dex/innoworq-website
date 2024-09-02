import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import image1 from "../../assets/H9_Blog_1.png";
import image2 from "../../assets/H9_Blog_2.png";

const BS4_MoreBlogs = () => {
  return (
    <div>
      {/* Top Texts */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between items-center p-4 mt-10">
        <h1 className="text-4xl text-[#1C2752] text-left font-bold font-mulish px-3 py-1 mb-2 ">
          Related Posts
        </h1>
        <Link
          to="/services"
          className="bg-[#0063A7] w-[150px] py-3 mt-4 md:mt-0 text-white text-center"
        >
          Read More
        </Link>
      </div>

      {/* Boxes Row  1 --------------------------------------------------------------------*/}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 md:gap-6 mb-0 md:mb-6 p-4 md:p-0">
        {/* Box1  */}
        <Link
          to="/blog"
          className=" flex-1 p-4 flex flex-col items-center justify-center  min-h-[250px]"
        >
          <img src={image1} alt="" className="object-cover mb-4" />

          {/* Person name and date */}
          <div className="flex flex-row items-center justify-center relative z-50 -mt-10">
            <div className="bg-[#56AAE3] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
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

          {/* Text  */}
          <div className="flex flex-col items-start">
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
              className="text-sm font-semibold text-[#1C2752] font-inter underline"
            >
              Read More
            </Link>
          </div>
        </Link>

        {/* Box 2 */}
        <Link
          to="/blog"
          className=" flex-1 p-4 flex flex-col items-center justify-center  min-h-[250px]"
        >
          <img src={image2} alt="" className="object-cover mb-4" />

          {/* Person name and date */}
          <div className="flex flex-row items-center justify-center relative z-50 -mt-10">
            <div className="bg-[#56AAE3] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
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

          {/* Text  */}
          <div className="flex flex-col items-start">
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
              className="text-sm font-semibold text-[#1C2752] font-inter underline"
            >
              Read More
            </Link>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BS4_MoreBlogs;
