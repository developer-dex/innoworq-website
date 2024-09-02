import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
    { title: "Services", link: "/services" },
    { title: "Projects", link: "/gallery" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  return (
    <div className="flex items-center justify-center z-50 relative">
      <div className="w-full max-w-[1200px] bg-[#0063A7] flex flex-col md:flex-row items-center justify-between p-2">
        <div className="flex flex-row items-center justify-between w-full">
          <div
            className={`flex-col md:flex-row gap-4 md:gap-16 text-white font-inter text-base md:text-lg px-4 mb-4 md:mb-0 ${
              isOpen ? "flex" : "hidden"
            } md:flex`}
          >
            {links.map((items, i) => (
              <Link
                to={items.link}
                className="hover:text-blue-500 transition-all duration-300"
                key={i}
              >
                {items.title}
              </Link>
            ))}
          </div>
          <Link
            to="/contact-us"
            className="bg-[#1C2752] text-white rounded font-inter text-base md:text-lg px-4 py-2 hover:text-blue-500 transition-all duration-300 md:ml-auto"
          >
            Have Any Questions?
          </Link>
          <button
            className="md:hidden text-3xl text-white mt-0 md:mt-0 md:ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar3;
