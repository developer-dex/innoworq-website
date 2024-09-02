import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import image1 from "../../assets/H3_Services_1.png";
import image2 from "../../assets/H3_Services_1.png";
import image3 from "../../assets/H3_Services_1.png";
import image4 from "../../assets/H3_Services_1.png";

const H3_Services = () => {
  const [activeTab, setActiveTab] = useState("Data Center Maintenance");

  const renderContent = () => {
    switch (activeTab) {
      case "Data Center Maintenance":
        return (
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Left side */}
            <div className="flex-1 flex flex-col p-10 ">
              <h1 className="bg-[#F4F4F4] text-[#1C2752] text-base md:text-base font-semibold font-inter mb-2 px-2 py-1 w-[230px]">
                Data Center Maintenance
              </h1>
              <h1 className="text-4xl text-[#1C2752] font-bold font-mulish py-1 mb-2">
                Maintenance
              </h1>
              <h1 className="text-[#7E7E7E] font-normal font-inter py-1 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                incididunt ut labore et dolore magna aliqua. Ut enim ad
                minimquis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </h1>
              <Link
                to="/services/ss"
                className="bg-[#0063A7] w-[150px] py-3 text-white text-center"
              >
                Read More
              </Link>
            </div>
            {/* Right side */}
            <div className="flex-1 flex flex-col p-10">
              <img
                src={image1}
                alt=""
                className="w-auto max-h-[320px] h-auto object-cover"
              />
            </div>
          </div>
        );
      case "Cybersecurity":
        return (
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Content for Cybersecurity */}
            <div className="flex-1 flex flex-col p-10">
              <h1 className="text-4xl text-[#1C2752] font-bold font-mulish py-1 mb-2">
                Cybersecurity
              </h1>
              <h1 className="text-[#7E7E7E] font-normal font-inter py-1 mb-6">
                Cybersecurity content goes here.
              </h1>
              <Link
                to="/services/ss"
                className="bg-[#0063A7] w-[150px] py-3 text-white text-center"
              >
                Read More
              </Link>
            </div>
            <div className="flex-1 flex flex-col p-10">
              <img
                src={image2}
                alt=""
                className=" w-auto max-h-[320px] h-auto object-cover"
              />
            </div>
          </div>
        );
      case "Cloud Advancement":
        return (
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Content for Cloud Advancement */}
            <div className="flex-1 flex flex-col p-10">
              <h1 className="text-4xl text-[#1C2752] font-bold font-mulish py-1 mb-2">
                Cloud Advancement
              </h1>
              <h1 className="text-[#7E7E7E] font-normal font-inter py-1 mb-6">
                Cloud Advancement content goes here.
              </h1>
              <Link
                to="/services/ss"
                className="bg-[#0063A7] w-[150px] py-3 text-white text-center"
              >
                Read More
              </Link>
            </div>
            <div className="flex-1 flex flex-col p-10">
              <img
                src={image3}
                alt=""
                className=" w-auto max-h-[320px] h-auto object-cover"
              />
            </div>
          </div>
        );
      case "Infrastructure":
        return (
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Content for Infrastructure */}
            <div className="flex-1 flex flex-col p-10">
              <h1 className="text-4xl text-[#1C2752] font-bold font-mulish py-1 mb-2">
                Infrastructure
              </h1>
              <h1 className="text-[#7E7E7E] font-normal font-inter py-1 mb-6">
                Infrastructure content goes here.
              </h1>
              <Link
                to="/services/:id"
                className="bg-[#0063A7] w-[150px] py-3 text-white text-center"
              >
                Read More
              </Link>
            </div>
            <div className="flex-1 flex flex-col p-10">
              <img
                src={image4}
                alt=""
                className=" w-auto max-h-[320px] h-auto object-cover"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#0063A7] p-10">
      <div className="flex flex-col items-center justify-center">
        {/* Top Texts */}
        <div className="w-full max-w-[1200px] flex flex-col items-center p-10">
          <h1 className="text-4xl text-[#FFFFFF] text-center font-bold font-mulish px-3 py-1 mb-2">
            Professional Main Services
          </h1>
          <h1 className="text-[#D2D2D2] font-normal max-w-[800px] font-inter px-3 py-1 text-center">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt.
          </h1>
        </div>
        {/* Tabs */}
        <div className="flex flex-col md:flex-row mb-10 gap-10">
          <div
            className={`cursor-pointer ${
              activeTab === "Data Center Maintenance"
                ? "bg-white text-[#0063A7]"
                : "bg-[#0063A7] text-white"
            } border border-gray-200 px-3 py-1 w-auto max-w-[250px]`}
            onClick={() => setActiveTab("Data Center Maintenance")}
          >
            <h1 className="text-lg font-normal font-inter">
              Data Center Maintenance
            </h1>
          </div>

          <div
            className={`cursor-pointer ${
              activeTab === "Cybersecurity"
                ? "bg-white text-[#0063A7]"
                : "bg-[#0063A7] text-white"
            } border border-gray-200 px-3 py-1 w-auto max-w-[250px]`}
            onClick={() => setActiveTab("Cybersecurity")}
          >
            <h1 className="text-lg font-normal font-inter">Cybersecurity</h1>
          </div>

          <div
            className={`cursor-pointer ${
              activeTab === "Cloud Advancement"
                ? "bg-white text-[#0063A7]"
                : "bg-[#0063A7] text-white"
            } border border-gray-200 px-3 py-1 w-auto max-w-[250px]`}
            onClick={() => setActiveTab("Cloud Advancement")}
          >
            <h1 className="text-lg font-normal font-inter">
              Cloud Advancement
            </h1>
          </div>

          <div
            className={`cursor-pointer ${
              activeTab === "Infrastructure"
                ? "bg-white text-[#0063A7]"
                : "bg-[#0063A7] text-white"
            } border border-gray-200 px-3 py-1 w-auto max-w-[250px]`}
            onClick={() => setActiveTab("Infrastructure")}
          >
            <h1 className="text-lg font-normal font-inter">Infrastructure</h1>
          </div>
        </div>

        {/* Bottom Detail Window */}
        <div className="bg-white w-full md:max-w-[1200px] relative z-50 -mb-32 shadow">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default H3_Services;
