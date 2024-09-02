import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdRadioButtonChecked } from "react-icons/md";
import image from "../../assets/Logo2.png";

const A3_Timeline = () => {
  const timelineData = [
    {
      year: "2022",
      text: "Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla facilisi. In sed pretium. ",
    },
    {
      year: "2020",
      text: "Pellentesque vehicula eros neque, maximus mattis est sagittis. Nulla facilisi. In sed pretium.",
    },
    {
      year: "2015",
      text: "Pellentesque vehicula eros neque, maximus mattis est sagittis. Nulla facilisi. In sed pretium.",
    },
  ];
  return (
    <div className="bg-[#F4F4F4]">
      {/* Boxes  */}
      <div className=" flex flex-col items-center justify-center md:flex-row max-w-[1200px] mx-auto  mb-6 md:mb-10 mt-10 md:mt-20 md:py-10 p-4 md:p-0">
        {/* Box1  */}

        <div className="flex-1 p-4 flex flex-col items-start justify-center ">
          <div className="bg-[#ffffff] flex flex-row items-center justify-center w-auto mb-2 px-3 py-1">
            <FiEdit />
            <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
              Welcome to Innoworq
            </h1>
          </div>

          <h1 className="text-4xl text-[#1C2752] font-bold text-left font-mulish  py-1 mb-2 max-w-[600px] ">
            Let’s Build Something Creative Together
          </h1>

          <h1 className="text-[#7E7E7E] font-normal font-inter text-left py-1 mb-10 max-w-[600px]">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt. Interdum et malesuada.
          </h1>

          <div className="flex flex-row items-start justify-start gap-2 mb-8">
            <IoMdCheckmarkCircle className="text-[#0063A7] text-2xl" />
            <div>
              <h1 className="font-bold font-mulish text-[#1C2752]">
                35 Years Experience
              </h1>
              <p className="text-[#7E7E7E] font-normal font-inter text-left py-1 max-w-[500px]">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium
              </p>
            </div>
          </div>

          <div className="flex flex-row items-start justify-start gap-2 mb-8">
            <IoMdCheckmarkCircle className="text-[#0063A7] text-2xl" />
            <div>
              <h1 className="font-bold font-mulish text-[#1C2752]">
                Excellencee Certificate
              </h1>
              <p className="text-[#7E7E7E] font-normal font-inter text-left py-1 max-w-[500px]">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium
              </p>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex-1 flex items-center justify-center mt-10">
          <div className="bg-[#F4F4F4] max-w-3xl mx-auto p-4">
            <div className="relative">
              {/* Line part1  */}
              <div className="absolute  left-4 top-0 bottom-0 w-px bg-white"></div>
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-start mb-8">
                  <div className="flex flex-col items-center">
                    {/* Circle for timeline */}
                    <div className="bg-white  w-8 h-8 flex items-center justify-center rounded-full">
                      <span className="text-blue-600">
                        <MdRadioButtonChecked />
                      </span>
                    </div>
                    {/* Vertical line for timeline part2 */}
                    {index < timelineData.length - 1 && (
                      <div className="w-px bg-whiteflex-1"></div>
                    )}
                  </div>
                  {/* Text Box  */}
                  <div className="ml-8">
                    <div className="bg-[#ffffff] rounded-lg shadow p-4 mb-4 mt-4">
                      <div className="flex items-center">
                        <span className="bg-[#1C2752] text-white py-1 px-6  text-xl font-mulish font-bold mr-2 relative -mt-8">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-700 mt-2">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default A3_Timeline;
