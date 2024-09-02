import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import image1 from "../../assets/H8_Clients_1.svg";
import image2 from "../../assets/H8_Clients_2.svg";
import image3 from "../../assets/H8_Clients_3.svg";
import image4 from "../../assets/H8_Clients_4.svg";

const H8_Clients = () => {
  return (
    <div className="bg-[#ffffff] p-10">
      <div className="flex flex-col items-center justify-center ">
        {/* Top Texts */}
        <div className="w-full max-w-[1200px] flex flex-col items-center p-10">
          <div className="bg-[#F4F4F4] flex flex-row items-center w-auto mb-2 justify-center px-3 py-1">
            <FiEdit />
            <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
              Clients
            </h1>
          </div>

          <h1 className="text-4xl text-[#1C2752] text-center font-bold font-mulish px-3 py-1 mb-2 ">
            Our Trusted Big Clients
          </h1>
        </div>

        {/* Logos  */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default H8_Clients;
