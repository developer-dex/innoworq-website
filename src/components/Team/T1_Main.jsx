import React from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import image1 from "../../assets/A4_Team_1.png";
import image2 from "../../assets/A4_Team_2.png";
import image3 from "../../assets/A4_Team_3.png";
import image4 from "../../assets/T1_Team_4.png";
import image5 from "../../assets/A4_Team_2.png";
import image6 from "../../assets/T1_Team_6.png";

const T1_Main = () => {
  return (
    <div>
      {/* Top Texts */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center p-10">
        <div className="bg-[#F4F4F4] flex flex-row items-center w-auto mb-2 justify-center px-3 py-1">
          <FiEdit />
          <h1 className=" text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1   ">
            Our Team
          </h1>
        </div>

        <h1 className="text-4xl text-[#1C2752] text-center font-bold font-mulish px-3 py-1 mb-2 ">
          Meet Our Experts
        </h1>
        <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 text-center">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium metus. Proin pretium id urna sit amet
          tincidunt.Pellentesque vehicula eros neque, maximus mattis est
          sagittis Nulla facilisi. In sed pretium metus. Proin pretium id urna
          sit amet tincidunt.
        </h1>
      </div>

      {/* Boxes Row 1 */}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 md:gap-10 mb-0 md:mb-10 p-4 md:p-0">
        {/* Box1  */}
        <div className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400">
          <img src={image1} alt="" className="object-cover mb-3" />
          <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
            David James
          </h1>
          <p className="text-[#7E7E7E] text-center font-semibold">Engineer</p>
        </div>
        {/* Box 2 */}
        <div className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400">
          <img src={image2} alt="" className="object-cover mb-3" />
          <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
            Kevin Martin
          </h1>
          <p className="text-[#7E7E7E] text-center font-semibold">Engineer</p>
        </div>
        {/* Box 3 */}
        <div className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400">
          <img src={image3} alt="" className="object-cover mb-3" />
          <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
            Sarrah Albert
          </h1>
          <p className="text-[#7E7E7E] text-center font-semibold">Engineer</p>
        </div>
      </div>

      {/* Boxes Row 2 */}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 md:gap-10 mb-12 md:mb-28 p-4 md:p-0">
        {/* Box1  */}
        <div className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400">
          <img src={image4} alt="" className="object-cover mb-3 bg-gray-300" />
          <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
            Jake Gibson
          </h1>
          <p className="text-[#7E7E7E] text-center font-semibold">Engineer</p>
        </div>
        {/* Box 2 */}
        <div className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400">
          <img src={image5} alt="" className="object-cover mb-3" />
          <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
            Natalie Lee
          </h1>
          <p className="text-[#7E7E7E] text-center font-semibold">Engineer</p>
        </div>
        {/* Box 3 */}
        <div className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400">
          <img src={image6} alt="" className="object-cover mb-3 bg-gray-300" />
          <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
            Max Oliver
          </h1>
          <p className="text-[#7E7E7E] text-center font-semibold">Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default T1_Main;
