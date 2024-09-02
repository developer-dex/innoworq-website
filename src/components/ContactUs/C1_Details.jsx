import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import image from "../../assets/Logo2.png";

const C1_Details = () => {
  return (
    <div>
      {/* Top Texts */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center p-10 ">
        <div className="bg-[#F4F4F4] flex flex-row items-center w-auto mb-2 justify-center px-3 py-1">
          <FiEdit />
          <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
            Quick Contact
          </h1>
        </div>

        <h1 className="text-4xl text-[#1C2752] text-center font-bold font-mulish px-3 py-1 mb-2 ">
          Contact Details
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
      <div className="flex flex-col md:flex-row md:justify-center md:items-center max-w-[1200px] mx-auto gap-0 md:gap-0 mb-0 md:mb-6 p-4 md:p-0">
        {/* Box1  */}
        <div className="bg-[#0063A7] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400 h-[250px]">
          <IoTime className="text-[#E1E1E1] text-5xl" />
          <p className="text-[#D2D2D2] font-normal font-inter mb-1 mt-4">
            Emergency Works
          </p>
          <h1 className="text-2xl font-bold font-mulish text-white mb-4">
            (003) 123 456 7890
          </h1>

          <div className="bg-[#1C2752] w-[150px] py-3 text-white text-center">
            Call Us
          </div>
        </div>

        {/* Box 2 */}
        <div className="bg-[#1C2752] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400 min-h-[300px]">
          <div className="w-full flex flex-col gap-4 px-6 py-4">
            <div>
              <p className="text-center text-xl font-mulish text-[#ffffff] font-bold mb-2">
                Main Branch
              </p>
              {/* <div className="w-full border-t-4 border-[#0063A7] " /> */}
            </div>

            <div>
              <p className="text-left text-base font-mulish text-[#ffffff] font-semibold mb-2">
                Address:
              </p>
              <p className="text-left text-sm font-inter font-light text-[#ffffff]  mb-2 ">
                Amsterdam, 109-74
              </p>
              <hr className="w-full border-[#D2D2D2] " />{" "}
            </div>

            <div>
              <p className="text-left text-base font-mulish text-[#ffffff] font-semibold mb-2">
                Phone :
              </p>
              <p className="text-left text-sm  font-inter font-light text-[#ffffff]  mb-2 ">
                +01 569 896 654
              </p>
              <hr className="w-full border-[#D2D2D2]" />{" "}
            </div>

            <div>
              <p className="text-left text-base font-mulish text-[#ffffff] font-semibold mb-2">
                Email:
              </p>
              <p className="text-left text-sm  font-interfont-light  text-[#ffffff]  mb-2 ">
                info@example.com
              </p>
              <hr className="w-full border-[#D2D2D2]" />{" "}
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="bg-[#0063A7] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400 h-[250px]">
          <IoPerson className="text-[#E1E1E1] text-5xl" />
          <p className="text-[#D2D2D2] font-normal font-inter mb-1 mt-4">
            You Have a Question?
          </p>
          <h1 className="text-2xl font-bold font-mulish text-white mb-4">
            (003) 123 456 7888
          </h1>

          <div className="bg-[#1C2752] w-[150px] py-3 text-white text-center">
            Reach Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default C1_Details;
