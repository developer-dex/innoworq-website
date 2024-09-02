import React from "react";
import { MdRadioButtonChecked } from "react-icons/md";
import image from "../../assets/Logo2.png";

const A5_Timeline = () => {
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
              <div className="bg-[#ffffff] rounded-lg shadow p-4 mb-8">
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
  );
};

export default A5_Timeline;
