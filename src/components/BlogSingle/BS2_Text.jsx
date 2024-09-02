import React from "react";
import { FiEdit } from "react-icons/fi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import image from "../../assets/Logo2.png";

const BS2_Text = () => {
  return (
    <div>
      {/* Top Texts */}
      <div className="w-full max-w-[900px] mx-auto flex flex-col justify-between items-start p-4 mt-0 md:mt-6">
        <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-6">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium dynamically target high-payoff intellectual
          capital for customized technologies objectively integrate emerging
          core competencies before process-centric communities dramatically
          evisculate holistic innovation rather than client-centric data.
        </h1>
        <h1 className="text-4xl text-[#1C2752] font-bold font-mulish px-3 py-1 mb-6 ">
          Perfect Work Time For Workers
        </h1>
        <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-4">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium dynamically target high-payoff intellectual
          capital for customized technologies objectively integrate emerging
          core competencies before process-centric communities dramatically
          evisculate holistic innovation rather than client-centric data.
        </h1>

        {/* Bullets */}

        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-row items-start justify-start gap-2 mb-2">
            <GoDotFill className="text-[#7E7E7E] text-xl flex-shrink-0" />
            <h1 className="text-[#7E7E7E] font-normal font-inter px-3  ">
              Listen to what they say about you
            </h1>
          </div>

          <div className="flex flex-row items-start justify-start gap-2 mb-2">
            <GoDotFill className="text-[#7E7E7E] text-xl flex-shrink-0" />
            <h1 className="text-[#7E7E7E] font-normal font-inter px-3  ">
              Listen to what they say about you
            </h1>
          </div>

          <div className="flex flex-row items-start justify-start gap-2 mb-2">
            <GoDotFill className="text-[#7E7E7E] text-xl flex-shrink-0" />
            <h1 className="text-[#7E7E7E] font-normal font-inter px-3  ">
              Listen to what they say about you
            </h1>
          </div>
        </div>

        {/* Quote  */}
        <div className="flex flex-row items-stretch w-full mx-auto h-full mt-4 mb-4">
          <div className="bg-[#4B4B4B] p-4"></div>
          <div className="bg-[#56AAE3] p-4 flex-1 h-full">
            <p className="text-white italic text-xl font-extralight tracking-wide font-inter leading-relaxed ">
              “The job market of the future will consist of those jobs that
              robots cannot perform. Our blue-collar work is pattern
              recognition, making sense of what you see. Gardeners will still
              have jobs because every garden is different.”
            </p>
          </div>
        </div>

        {/* Text block  */}
        <h1 className="text-2xl text-[#1C2752] font-bold font-mulish px-3 py-1 mb-6 mt-6 ">
          Make real time a day services
        </h1>
        <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-4">
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits. Dramatically visualize customer directed convergence without
          revolutionary ROI.
        </h1>

        {/* Bullets */}

        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-row items-start justify-start gap-2 mb-2">
            <GoDotFill className="text-[#7E7E7E] text-xl flex-shrink-0" />
            <h1 className="text-[#7E7E7E] font-normal font-inter px-3  ">
              Listen to what they say about you jdjklk dsa sad klj dsa
            </h1>
          </div>

          <div className="flex flex-row items-start justify-start gap-2 mb-2">
            <GoDotFill className="text-[#7E7E7E] text-xl flex-shrink-0" />
            <h1 className="text-[#7E7E7E] font-normal font-inter px-3  ">
              Listen to what they say about you
            </h1>
          </div>

          <div className="flex flex-row items-start justify-start gap-2 mb-2">
            <GoDotFill className="text-[#7E7E7E] text-xl flex-shrink-0" />
            <h1 className="text-[#7E7E7E] font-normal font-inter px-3  ">
              Listen to what they say about you
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BS2_Text;
