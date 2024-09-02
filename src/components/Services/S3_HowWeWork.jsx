import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import BulletsGrid from "../Common/BulletsGrid";
import image1 from "../../assets/SS1_Main_2.png";
import image2 from "../../assets/SS1_Main_2.png";
import image3 from "../../assets/SS1_Main_2.png";
import image4 from "../../assets/SS1_Main_1.png";

const S3_HowWeWork = () => {
  const [activeTab, setActiveTab] = useState("Commercial");

  const renderContent = () => {
    switch (activeTab) {
      case "Commercial":
        return (
          <div>
            <h1 className="text-3xl text-[#1C2752] font-bold font-mulish px-3 py-1 mb-2 ">
              Commercial Services
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-4">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium dynamically target high-payoff
              intellectual capital for customized technologies objectively
              integrate emerging core competencies before process-centric
              communities.
            </p>
            <img src={image1} alt="" />
            <BulletsGrid />
          </div>
        );
      case "Residential":
        return (
          <div>
            <h1 className="text-3xl text-[#1C2752] font-bold font-mulish px-3 py-1 mb-2 ">
              Residential Services
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-4">
              Residential services description here. Focus on comfort, safety,
              and efficiency for home electrical solutions.
            </p>
            <img src={image2} alt="" />
            <BulletsGrid />
          </div>
        );
      case "Industrial":
        return (
          <div>
            <h1 className="text-3xl text-[#1C2752] font-bold font-mulish px-3 py-1 mb-2 ">
              Industrial Services
            </h1>
            <p className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-4">
              Industrial services description here. Ensuring robust and reliable
              electrical systems for large-scale operations.
            </p>
            <img src={image3} alt="" />
            <BulletsGrid />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full md:w-[1200px] mx-auto">
      {/* Top Texts */}
      <div className="w-full max-w-[1200px] flex flex-col items-center p-10">
        <div className="bg-[#FFFFFF] flex flex-row items-center w-auto mb-2 justify-center px-3 py-1">
          <FiEdit />
          <h1 className="text-[#1C2752] text-base md:text-base font-semibold font-inter ml-3 mt-1">
            Our Services
          </h1>
        </div>

        <h1 className="text-4xl text-[#1C2752] text-center font-bold font-mulish px-3 py-1 mb-2">
          How We Work
        </h1>
        <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 text-center">
          Serving INNOWORQ services to its clients across the India, Africa,
          Middle East, US, UK, and Globally. INNOWORQ is an Indian grounded
          multi-OEM service provider organization, having operations globally to
          support all customers under the "follow the sun" model, call center
          and technical hubs.
        </h1>
      </div>

      {/* Bottom tabs and details */}
      <div className="flex flex-col md:flex-row mt-4">
        {/* LEFT Side */}
        <div className="w-full md:w-1/3 bg-white p-4 flex flex-col">
          {/* Tabs */}
          <button
            onClick={() => setActiveTab("Commercial")}
            className={`w-full py-3 text-2xl text-center justify-between px-3 items-center mb-4 flex flex-row ${
              activeTab === "Commercial"
                ? "bg-[#0063A7] text-white"
                : "bg-[#F4F4F4] text-[#1C2752]"
            }`}
          >
            Commercial Services
            <IoIosArrowForward />
          </button>
          <button
            onClick={() => setActiveTab("Residential")}
            className={`w-full py-3 text-2xl text-center justify-between px-3 items-center mb-4 flex flex-row ${
              activeTab === "Residential"
                ? "bg-[#0063A7] text-white"
                : "bg-[#F4F4F4] text-[#1C2752]"
            }`}
          >
            Residential Services
            <IoIosArrowForward />
          </button>
          <button
            onClick={() => setActiveTab("Industrial")}
            className={`w-full py-3 text-2xl text-center justify-between px-3 items-center mb-4 flex flex-row ${
              activeTab === "Industrial"
                ? "bg-[#0063A7] text-white"
                : "bg-[#F4F4F4] text-[#1C2752]"
            }`}
          >
            Industrial Services
            <IoIosArrowForward />
          </button>

          {/* Box content */}
          <div
            className="relative w-full h-64 bg-cover bg-center overflow-hidden flex items-center justify-center"
            style={{
              backgroundImage: `url(${image4})`,
            }}
          >
            <div className="absolute inset-0 bg-[#1C2752] opacity-95 blur-1px"></div>
            <div className="relative p-4 flex flex-col items-center justify-center z-10 ">
              <h2 className="text-white text-2xl font-mulish text-center mb-2">
                Providing Variety Electrical Services
              </h2>
              <Link
                to="/contact-us"
                className="bg-[#0063A7] text-[#F4F4F4] text-center px-3 py-2 w-full"
              >
                Discount 25%
                <p className="text-[#F4F4F4] font-bold font-mulish mb-2">
                  Rewiring Services
                </p>
              </Link>
              <a
                href="/contact-us"
                className="text-white text-center font-mulish mt-4"
              >
                Click to get discount
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 bg-white p-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default S3_HowWeWork;
