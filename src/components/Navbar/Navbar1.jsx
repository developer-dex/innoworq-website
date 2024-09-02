import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <div className="bg-[#F2F2F2] h-[35px] flex justify-center items-center">
      <div className="w-[1200px] flex justify-between items-center m-4">
        <div className="font-inter font-normal text-sm leading-[22px] text-[#0063A7] text-left">
          Opening Hours: <b>24x7</b>
        </div>
        <div className="flex gap-3">
          <Link to="https://www.facebook.com/">
            <FaInstagram className="text-[#0063A7] w-[18px] h-[18px]" />
          </Link>
          <Link to="https://www.facebook.com/">
            <FaFacebook className="text-[#0063A7] w-[18px] h-[18px]" />
          </Link>
          <Link to="https://www.facebook.com/">
            <FaTwitter className="text-[#0063A7] w-[18px] h-[18px]" />
          </Link>
          <Link to="https://www.facebook.com/">
            <FaPinterest className="text-[#0063A7] w-[18px] h-[18px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
