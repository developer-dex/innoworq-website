import React from "react";
import { Link } from "react-router-dom";

const Navbar3 = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Projects",
      link: "/gallery",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <div className="flex items-center justify-center z-50 relative">
      {/* <div className="w-[1200px] bg-[#0063A7] flex items-center justify-between p-2 rounded"> */}
      <div className="w-full max-w-[1200px] bg-[#0063A7] flex flex-col md:flex-row items-center justify-between p-2">
        {/* <div className="flex gap-16 text-white font-inter text-lg px-4"> */}
        <div className="flex md:flex-row flex-wrap md:flex-nowrap gap-6 items-center justify-center md:gap-16 text-white font-inter text-base md:text-lg px-2 mb-4 mt-2 md:mt-0 md:mb-0">
          {links.map((items, i) => (
            <Link
              to={items.link}
              className="hover:text-blue-500 text-base md:text-lg transition-all duration-300"
              key={i}
            >
              {items.title}
            </Link>
          ))}
        </div>
        {/* <Link
          to="/contact-us"
          className="bg-[#1C2752] text-white rounded font-inter text-base md:text-lg px-4 py-2 hover:text-blue-500 transition-all duration-300"
        >
          Have Any Questions?
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar3;
