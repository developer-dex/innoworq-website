import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import image1 from "../../assets/Air Conditioner.png";
import image2 from "../../assets/Substation.png";
import image3 from "../../assets/Icon.png";

const H4_Capability = () => {
  return (
    <div className="bg-[#F4F4F4] p-10">
      <div className="flex flex-col items-center justify-center mt-20 ">
        {/* Top Texts */}
        <div className="w-full max-w-[1200px] flex flex-col items-center p-10">
          <div className="bg-[#FFFFFF] flex flex-row items-center w-auto mb-2 justify-center px-3 py-1">
            <FiEdit />
            <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
              Our Capabilities
            </h1>
          </div>

          <h1 className="text-4xl text-[#1C2752] text-center font-bold font-mulish px-3 py-1 mb-2 ">
            Our Capabilities
          </h1>
          <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 text-center">
            Serving INNOWORQ services to its clients across the India, Africa,
            Middle East, US, UK and Globally. INNOWORQ is an Indian grounded
            multi-OEM service provider organization, have operations globally to
            support all customers under "follow the sun" model, call center and
            technical hubs.
          </h1>
        </div>

        {/* Blue boxes */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* First box */}
          <div className="bg-[#0063A7] max-w-[350px] max-h-[322] p-10">
            <img src={image1} alt="" className="w-[36px] h-[36px] mb-3" />
            <h1 className="text-lg font-bold font-mulish text-white">
              Service Operations
            </h1>
            <p className="text-[#D2D2D2] font-normal font-inter mb-6">
              Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna
              sit amet tincidunt.
            </p>
            <Link
              to="/services"
              className="text-sm font-semibold text-white font-inter"
            >
              Read More
            </Link>
          </div>

          {/* Second box */}
          <div className="bg-[#0063A7] max-w-[350px] max-h-[322] p-10">
            <img src={image2} alt="" className="w-[36px] h-[36px] mb-3" />
            <h1 className="text-lg font-bold font-mulish text-white">
              Service Catalogue
            </h1>
            <p className="text-[#D2D2D2] font-normal font-inter mb-6">
              Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna
              sit amet tincidunt.
            </p>
            <Link
              to="/services"
              className="text-sm font-semibold text-white font-inter"
            >
              Read More
            </Link>
          </div>

          {/* Third box */}
          <div className="bg-[#0063A7] max-w-[350px] max-h-[322] p-10">
            <img src={image3} alt="" className="w-[36px] h-[36px] mb-3" />
            <h1 className="text-lg font-bold font-mulish text-white">
              Service Management
            </h1>
            <p className="text-[#D2D2D2] font-normal font-inter mb-6">
              Sagittis Nulla facilisi. In sed pretium metus. Proin pretium Turna
              sit amet tincidunt.
            </p>
            <Link
              to="/services"
              className="text-sm font-semibold text-white font-inter"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H4_Capability;
