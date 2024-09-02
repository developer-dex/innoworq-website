import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-2">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 flex justify-between w-full md:w-auto">
          <img
            src="/src/assets/Logo2.png"
            alt=""
            className="md:text-left w-auto max-h-[35px]"
          />
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        <div
          className={`flex-col md:flex-row items-center md:justify-center gap-4 md:gap-16 ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <div className="flex items-center justify-center gap-4">
            <span className="inline-flex items-center justify-center rounded-full bg-[#0063A7] p-2 text-white text-[24px]">
              <MdOutlineEmail />
            </span>
            <div>
              <p className="text-sm font-bold font-mulish text-[#0D161A]">
                Mail Us
              </p>
              <p className="text-sm font-normal font-inter text-[#7E7E7E]">
                info@example.com
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="inline-flex items-center justify-center rounded-full bg-[#0063A7] p-2 text-white text-[24px]">
              <CiPhone />
            </span>
            <div>
              <p className="text-sm font-bold font-mulish text-[#0D161A]">
                Call Us
              </p>
              <p className="text-sm font-normal font-inter text-[#7E7E7E]">
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
