import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import image from "../../assets/Logo2.png";

const Navbar2 = () => {
  return (
    <div className="bg-white flex justify-center items-center p-2">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between mb-2 md:mb-0">
        <div className="mb-6 md:mb-0">
          <img
            src={image}
            // src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
            className="md:text-left w-auto max-h-[35px]"
          />
        </div>
        {/* // Texts */}
        <div className="flex flex-row items-center justify-between md:justify-center gap-6 md:gap-16">
          {/* Text 1 */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <span className="inline-flex items-center justify-center rounded-full bg-[#0063A7] p-2 text-white text-[24px]">
              <MdOutlineEmail />
            </span>
            <div>
              <p className="text-sm md:text-base font-bold font-mulish text-[#0D161A]">
                Mail Us
              </p>
              <p className="text-sm md:text-base  font-inter text-[#7E7E7E]">
                info@example.com
              </p>
            </div>
          </div>
          {/* // Text 2 */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <span className="inline-flex items-center justify-center rounded-full bg-[#0063A7] p-2 text-white text-[24px]">
              <CiPhone />
            </span>
            <div>
              <p className="text-sm md:text-base  font-bold font-mulish text-[#0D161A]">
                Call Us
              </p>
              <p className="text-sm md:text-base  font-normal font-inter text-[#7E7E7E]">
                +01 569 896 654
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
