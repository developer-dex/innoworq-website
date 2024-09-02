import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import image1 from "../../assets/Air Conditioner.png";
import image2 from "../../assets/Substation.png";
import image3 from "../../assets/Icon.png";
import image4 from "../../assets/Security.png";
import image5 from "../../assets/Maintenance.png";
import image6 from "../../assets/Home Page.png";

const S2_ServiceList = () => {
  return (
    <div>
      {/* Top Texts */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center p-10 mt-32">
        <div className="bg-[#F4F4F4] flex flex-row items-center w-auto mb-2 justify-center px-3 py-1">
          <FiEdit />
          <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
            Our Services
          </h1>
        </div>

        <h1 className="text-4xl text-[#1C2752] text-center font-bold font-mulish px-3 py-1 mb-2 ">
          Our Services
        </h1>
        <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 text-center">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium metus. Proin pretium id urna sit amet
          tincidunt.Pellentesque vehicula eros neque, maximus mattis est
          sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna
          sit amet tincidunt.
        </h1>
      </div>

      {/* Boxes Row 1  */}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 md:gap-6 mb-0 md:mb-6 p-4 md:p-0">
        {/* Box1  */}
        <div className="bg-[#0063A7] flex-1 p-4 flex flex-col items-start justify-center border border-gray-400 min-h-[250px]">
          <img src={image1} alt="" className="w-[36px] h-[36px] mb-3" />
          <h1 className="text-lg font-bold font-mulish text-white">
            Air condition service
          </h1>
          <p className="text-[#D2D2D2] font-normal font-inter mb-6">
            Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna
            sit amet tincidunt.
          </p>
          {/* <Link
            to="/services"
            className="text-sm font-semibold text-white font-inter"
          >
            Read More
          </Link> */}
        </div>

        {/* Box 2 */}
        <div className="bg-[#0063A7] flex-1 p-4 flex flex-col items-start justify-center border border-gray-400 min-h-[250px]">
          <img src={image2} alt="" className="w-[36px] h-[36px] mb-3" />
          <h1 className="text-lg font-bold font-mulish text-white">
            Electrical installation
          </h1>
          <p className="text-[#D2D2D2] font-normal font-inter mb-6">
            Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna
            sit amet tincidunt.
          </p>
          {/* <Link
            to="/services"
            className="text-sm font-semibold text-white font-inter"
          >
            Read More
          </Link> */}
        </div>

        {/* Box 3 */}
        <div className="bg-[#0063A7] flex-1 p-4 flex flex-col items-start justify-center border border-gray-400 min-h-[250px]">
          <img src={image3} alt="" className="w-[36px] h-[36px] mb-3" />
          <h1 className="text-lg font-bold font-mulish text-white">
            General Builder
          </h1>
          <p className="text-[#D2D2D2] font-normal font-inter mb-6">
            Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna
            sit amet tincidunt.
          </p>
          {/* <Link
            to="/services"
            className="text-sm font-semibold text-white font-inter"
          >
            Read More
          </Link> */}
        </div>
      </div>

      {/* Boxes Row 2  */}
      <div className="flex flex-col md:flex-row max-w-[1200px]  mx-auto gap-4 md:gap-6 mb-12 md:mb-28 p-4 md:p-0">
        {/* Box1  */}
        <div className="bg-[#0063A7] flex-1 p-4 flex flex-col items-start justify-center border border-gray-400  min-h-[250px]">
          <img src={image4} alt="" className="w-[36px] h-[36px] mb-3" />
          <h1 className="text-lg font-bold font-mulish text-white">
            Security System
          </h1>
          <p className="text-[#D2D2D2] font-normal font-inter mb-6">
            Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna
            sit amet tincidunt.
          </p>
          {/* <Link
            to="/services"
            className="text-sm font-semibold text-white font-inter"
          >
            Read More
          </Link> */}
        </div>

        {/* Box 2 */}
        <div className="bg-[#0063A7] flex-1 p-4 flex flex-col items-start justify-center border border-gray-400  min-h-[250px]">
          <img src={image5} alt="" className="w-[36px] h-[36px] mb-3" />
          <h1 className="text-lg font-bold font-mulish text-white">
            Service & maintenance
          </h1>
          <p className="text-[#D2D2D2] font-normal font-inter mb-6">
            Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna
            sit amet tincidunt.
          </p>
          {/* <Link
            to="/services"
            className="text-sm font-semibold text-white font-inter"
          >
            Read More
          </Link> */}
        </div>

        {/* Box 3 */}
        <div className="bg-[#0063A7] flex-1 p-4 flex flex-col items-start justify-center border border-gray-400 min-h-[250px]">
          <img src={image6} alt="" className="w-[36px] h-[36px] mb-3" />
          <h1 className="text-lg font-bold font-mulish text-white">
            House Extensions
          </h1>
          <p className="text-[#D2D2D2] font-normal font-inter mb-6">
            Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna
            sit amet tincidunt.
          </p>
          {/* <Link
            to="/services"
            className="text-sm font-semibold text-white font-inter"
          >
            Read More
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default S2_ServiceList;
