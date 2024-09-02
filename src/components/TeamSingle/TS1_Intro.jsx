import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../assets/TS1_Main.png";

const TS1_Intro = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between mt-10 mb-10">
        {/* Left Part-------------------------- */}
        <div className="flex-1 flex ">
          <img
            src={image}
            alt=""
            // className="w-[540px] h-[540px] p-4"
            className="w-full max-w-[540px] h-auto p-4"
          />
        </div>

        {/* Right part-------------------------- */}
        <div className="flex-1 flex flex-col p-2">
          <h1 className="text-2xl text-[#1C2752] font-bold font-mulish px-3 py-1 mb-2 leading-10">
            Devid is a professional Engineer for BlueCollar since 2010
          </h1>
          <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-6">
            Serving INNOWORQ services to its clients across the India, Africa,
            Middle East, US, UK and Globally. INNOWORQ is an Indian grounded
            multi-OEM service provider organization, have operations globally to
            support all customers under "follow the sun" model, call center and
            technical hubs.
          </h1>
          <hr className="w-full border-[#D2D2D2] p-4" />{" "}
          {/* Contact details  */}
          <div>
            <p className="text-left font-mulish text-[#1C2752] font-bold mb-2 md:mb-4 px-3">
              Phone :
              <span className="text-left font-normal font-inter text-[#7E7E7E] ml-6 mb-4 ">
                (+01) 123 456 789
              </span>
            </p>
          </div>
          <div>
            <p className="text-left font-mulish text-[#1C2752] font-bold mb-2 md:mb-4 px-3">
              Email :
              <span className="text-left font-normal font-inter text-[#7E7E7E] ml-8 mb-4 ">
                @davidjames.com
              </span>
            </p>
          </div>
          <div>
            <p className="text-left font-mulish text-[#1C2752] font-bold mb-2 md:mb-4 px-3">
              Website :
              <span className="text-left font-normal font-inter text-[#7E7E7E] ml-3 mb-4 ">
                www.davidjames.com
              </span>
            </p>
          </div>
          {/* Social media icons  */}
          <div className="flex gap-5 px-3 mt-4">
            <Link to="https://www.facebook.com/">
              <FaInstagram className="text-[#1C2752] w-[18px] h-[18px]" />
            </Link>
            <Link to="https://www.facebook.com/">
              <FaFacebook className="text-[#1C2752] w-[18px] h-[18px]" />
            </Link>
            <Link to="https://www.facebook.com/">
              <FaTwitter className="text-[#1C2752] w-[18px] h-[18px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TS1_Intro;
