import React from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm/ContactForm";
import image from "../../assets/H7_Form_1.jpg";

const H7_Form = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-start justify-between mt-20 gap-10">
        {/* Left Box -------------------------- */}
        <div className="w-full md:max-w-[600px]">
          <div className="bg-[#F4F4F4] flex flex-row items-center w-auto max-w-[180px] mb-2 justify-center px-3 py-1">
            <FiEdit />
            <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
              Testimonial
            </h1>
          </div>

          <h1 className="text-4xl text-[#1C2752] font-bold text-left font-mulish  py-1 mb-2 max-w-[600px] ">
            Customers Say
          </h1>

          <div className="border border-gray-300 p-10">
            <div className="flex flex-row items-end justify-between">
              <div className="flex flex-row items-end gap-4 ">
                <img
                  src={image}
                  alt=""
                  className="object-cover w-[80px h-auto rounded-full"
                />
                <p className="text-[#7E7E7E] text-xl font-bold font-inter">
                  New York
                </p>
              </div>

              <BiSolidQuoteAltRight className="text-white text-6xl bg-[#0063A7] rounded-full p-4" />
            </div>
            {/* Line break */}
            <div className="max-w-[1200px] mx-auto border-t border-gray-400 my-10"></div>
            <div className="text-[#7E7E7E] font-normal font-inter max-w-[550px] italic">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              facilisi.”In sed pretium metus”. Ppretium id urna sit amet
              tincidunt. Lorem ipsum dolor sit amet,tristique. Duis cursus,in
              elementum tristique
            </div>
          </div>

          <div className="bg-[#0063A7] p-10 items-start">
            <div className="bg-[#F4F4F4] flex flex-row items-center w-auto max-w-[180px] mb-2 justify-center px-3 py-1">
              <FiEdit />
              <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
                Any Questions?
              </h1>
            </div>
            <h1 className="text-xl font-bold font-mulish text-white mb-1 mt-4">
              99.9% Customer Satisfation Based
            </h1>
            <p className="text-[#D2D2D2] font-normal font-inter mb-6">
              If you have any questions or need help contact with our team, or
              call
            </p>
            <Link
              to="/contact-us"
              className="text-xl font-semibold text-white font-inter"
            >
              (003) 123 456 7890
            </Link>
          </div>
        </div>
        {/* Right box ------------------------ */}
        <div className="w-full md:max-w-[600px]">
          <div className="bg-[#F4F4F4] flex flex-row items-center w-auto max-w-[180px] mb-2 justify-center px-3 py-1">
            <FiEdit />
            <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
              Meet Us
            </h1>
          </div>

          <h1 className="text-4xl text-[#1C2752] font-bold text-left font-mulish  py-1 mb-2 max-w-[600px] ">
            Appointment Form
          </h1>

          <div className="border border-gray-300 ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default H7_Form;
