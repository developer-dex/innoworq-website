import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import PaginationComponent from "../Common/PaginationComponent";
import { IoTime } from "react-icons/io5";
import image1 from "../../assets/H9_Blog_1.png";
import image2 from "../../assets/H9_Blog_2.png";
import image3 from "../../assets/H9_Blog_3.png";
import image4 from "../../assets/H9_Blog_4.png";

const B1_Main = () => {
  const prevPage = "/about-us"; // Replace with your previous page route
  const nextPage = "/contact-us"; // Replace with your next page route

  return (
    <div>
      {/* Top Texts */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center p-10 mt-8">
        <div className="bg-[#F4F4F4] flex flex-row items-center w-auto mb-2 justify-center px-3 py-1">
          <FiEdit />
          <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
            Blogs and Articles
          </h1>
        </div>
      </div>

      {/* Boxes Row  1 --------------------------------------------------------------------*/}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 md:gap-6 mb-0 md:mb-6 p-4 md:p-0">
        {/* Box1  */}
        <Link
          to="/blog/ss"
          className=" flex-1 p-4 flex flex-col items-center justify-center  min-h-[250px]"
        >
          <img src={image1} alt="" className="object-cover mb-4" />

          {/* Person name and date */}
          <div className="flex flex-row items-center justify-center relative z-50 -mt-10">
            <div className="bg-[#FFC368] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
              <IoPerson />
              <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                John Kennis
              </h1>
            </div>
            <div className="bg-[#0063A7] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
              <IoTime />
              <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                April 2, 2022
              </h1>
            </div>
          </div>

          {/* Text  */}
          <div className="flex flex-col items-start">
            <h1 className="text-lg font-bold font-mulish text-[#1C2752] mb-2 mt-6">
              Improve Workflow With bluecollar Construction
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter mb-6">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt. Interdum et malesuada.
            </p>
            <Link
              to="/blog/ss"
              className="text-sm font-semibold text-[#1C2752] font-inter underline"
            >
              Read More
            </Link>
          </div>
        </Link>

        {/* Box 2 */}
        <Link
          to="/blog/ss"
          className=" flex-1 p-4 flex flex-col items-center justify-center  min-h-[250px]"
        >
          <img src={image2} alt="" className="object-cover mb-4" />

          {/* Person name and date */}
          <div className="flex flex-row items-center justify-center relative z-50 -mt-10">
            <div className="bg-[#FFC368] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
              <IoPerson />
              <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                John Kennis
              </h1>
            </div>
            <div className="bg-[#0063A7] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
              <IoTime />
              <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                April 2, 2022
              </h1>
            </div>
          </div>

          {/* Text  */}
          <div className="flex flex-col items-start">
            <h1 className="text-lg font-bold font-mulish text-[#1C2752] mb-2 mt-6">
              Understanding Your Home’s Electrical Capacity
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter mb-6">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt. Interdum et malesuada.
            </p>
            <Link
              to="/blog/ss"
              className="text-sm font-semibold text-[#1C2752] font-inter underline"
            >
              Read More
            </Link>
          </div>
        </Link>
      </div>

      {/* Boxes Row  2 --------------------------------------------------------------------*/}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 md:gap-6 mb-0 md:mb-6 p-4 md:p-0">
        {/* Box1  */}
        <Link
          to="/blog/ss"
          className=" flex-1 p-4 flex flex-col items-center justify-center  min-h-[250px]"
        >
          <img src={image3} alt="" className="object-cover mb-4" />

          {/* Person name and date */}
          <div className="flex flex-row items-center justify-center relative z-50 -mt-10">
            <div className="bg-[#FFC368] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
              <IoPerson />
              <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                John Kennis
              </h1>
            </div>
            <div className="bg-[#0063A7] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
              <IoTime />
              <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                April 2, 2022
              </h1>
            </div>
          </div>

          {/* Text  */}
          <div className="flex flex-col items-start">
            <h1 className="text-lg font-bold font-mulish text-[#1C2752] mb-2 mt-6">
              The Connection between Electric and Construction Business
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter mb-6">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt. Interdum et malesuada.
            </p>
            <Link
              to="/blog/ss"
              className="text-sm font-semibold text-[#1C2752] font-inter underline"
            >
              Read More
            </Link>
          </div>
        </Link>

        {/* Box 2 */}
        <Link
          to="/blog/ss"
          className=" flex-1 p-4 flex flex-col items-center justify-center  min-h-[250px]"
        >
          <img src={image4} alt="" className="object-cover mb-4" />

          {/* Person name and date */}
          <div className="flex flex-row items-center justify-center relative z-50 -mt-10">
            <div className="bg-[#FFC368] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
              <IoPerson />
              <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                John Kennis
              </h1>
            </div>
            <div className="bg-[#0063A7] text-white flex flex-row items-center w-auto max-w-[200px] mb-2 justify-center px-3 py-1">
              <IoTime />
              <h1 className=" text-[#ffffff] text-sm md:text-sm font-semibold font-inter ml-3 mt-1 px-2 py-1  ">
                April 2, 2022
              </h1>
            </div>
          </div>

          {/* Text  */}
          <div className="flex flex-col items-start">
            <h1 className="text-lg font-bold font-mulish text-[#1C2752] mb-2 mt-6">
              Promising Business in Electronic Product Industry
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter mb-6">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt. Interdum et malesuada.
            </p>
            <Link
              to="/blog/ss"
              className="text-sm font-semibold text-[#1C2752] font-inter underline"
            >
              Read More
            </Link>
          </div>
        </Link>
      </div>

      <PaginationComponent prevPage={prevPage} nextPage={nextPage} />
    </div>
  );
};

export default B1_Main;
