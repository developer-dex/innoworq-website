import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import image1 from "../../assets/H6_Gallery_1.png";
import image2 from "../../assets/H6_Gallery_2.png";
import image3 from "../../assets/H6_Gallery_3.png";
import image4 from "../../assets/H6_Gallery_4.png";

const H6_Gallery = () => {
  return (
    <div className="bg-[#0063A7] p-10">
      <div className="flex flex-col items-center justify-center ">
        {/* Top Texts */}
        <div className="w-full max-w-[1200px] flex flex-col items-center p-10">
          <div className="bg-[#F4F4F4] flex flex-row items-center w-auto mb-2 justify-center px-3 py-1">
            <FiEdit />
            <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
              The Gallery
            </h1>
          </div>

          <h1 className="text-4xl text-[#ffffff] text-center font-bold font-mulish px-3 py-1 mb-2 ">
            Check Our Recent Work
          </h1>
        </div>

        {/* Image boxes */}
        <div className="flex flex-col md:flex-row gap-4 mb-20">
          {/* First box */}
          <Link
            to="/gallery"
            className="bg-[#ffffff] max-w-[400px] max-h-[500px] p-3"
          >
            <img
              src={image1}
              alt=""
              className=" w-[375px] h-[425px] object-cover mb-3"
            />
            <h1 className="text-xl font-bold text-center font-mulish text-[#0063A7]">
              Data Center Maintenance
            </h1>
          </Link>

          {/* Second box */}
          <Link
            to="/gallery"
            className="bg-[#ffffff] max-w-[400px] max-h-[500px] p-3"
          >
            <img
              src={image2}
              alt=""
              className=" w-[375px] h-[425px] object-cover mb-3"
            />
            <h1 className="text-xl font-bold text-center font-mulish text-[#0063A7]">
              Cybersecurity
            </h1>
          </Link>

          {/* Third box */}
          <Link
            to="/gallery"
            className="bg-[#ffffff] max-w-[400px] max-h-[500px] p-3"
          >
            <img
              src={image3}
              alt=""
              className=" w-[375px] h-[425px] object-cover mb-3"
            />
            <h1 className="text-xl font-bold text-center font-mulish text-[#0063A7]">
              Cloud Advancement
            </h1>
          </Link>

          {/* Fourth box */}
          <Link
            to="/gallery"
            className="bg-[#ffffff] max-w-[400px] max-h-[500px] p-3"
          >
            <img
              src={image4}
              alt=""
              className=" w-[375px] h-[425px] object-cover mb-3"
            />
            <h1 className="text-xl font-bold text-center font-mulish text-[#0063A7]">
              Infrastructure
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default H6_Gallery;
