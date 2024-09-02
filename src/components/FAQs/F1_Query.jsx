import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import image from "../../assets/Logo2.png";

const F1_Query = () => {
  return (
    <div>
      {/* Top Texts */}
      <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center p-10 ">
        <div className="bg-[#F4F4F4] flex flex-row items-center w-auto mb-2 justify-center px-3 py-1">
          <FiEdit />
          <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
            Pre-Service Questions
          </h1>
        </div>

        <h1 className="text-4xl text-[#1C2752] text-center font-bold font-mulish px-3 py-1 mb-2 ">
          Frequently Asked Questions
        </h1>
        <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 text-center">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium metus. Proin pretium id urna sit amet
          tincidunt.Pellentesque vehicula eros neque, maximus mattis est
          sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna
          sit amet tincidunt.
        </h1>
      </div>
    </div>
  );
};

export default F1_Query;
