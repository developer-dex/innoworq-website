import React from "react";
import { Link } from "react-router-dom";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { VscFilePdf } from "react-icons/vsc";
import { BiSolidFileDoc } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import image1 from "../../assets/SS1_Main_1.png";
import image2 from "../../assets/SS1_Main_2.png";
import image3 from "../../assets/SS1_Main_3.png";
import image4 from "../../assets/SS1_Main_4.svg";
import image5 from "../../assets/SS1_Main_5.png";
import image6 from "../../assets/SS1_Main_6.svg";
import image7 from "../../assets/SS1_Main_7.svg";
import image8 from "../../assets/A4_Team_1.png";
import image9 from "../../assets/A4_Team_2.png";
import image10 from "../../assets/A4_Team_3.png";

const SS1_Main = () => {
  const bullets = [
    "experience investor Technician.",
    "Your Electrical and Security System.",
    "sources whereas high standards",
    "Credibly innovate granular internal",
    "services for domestic and commercial.",
  ];

  const services = [
    "Telecom Installation and Repair",
    "Hosted PBX Solutions",
    "Outdoor/Parking Lot Lighting",
    "Outlets, Circuits and Rewiring",
    "HID Lighting and Control",
    "Lighting Design",
    "Motors and Transformers",
    "Isolated Computer Circuits",
    "Data/Communications Cabling",
    "Ballast/Lamp Replacing",
  ];

  const link1 =
    "https://nationalduediligenceservices.com/wp-content/uploads/2014/02/Construction-monitoring.pdf";

  return (
    <div className="w-full md:w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row mt-4">
        {/* LEFT Side -------------------------------------------------------------------------------------- */}
        <div className="w-full md:w-1/3 bg-white p-4 flex flex-col ">
          {/* Box content */}
          <div
            className="relative w-full h-64 bg-cover bg-center overflow-hidden flex items-center justify-center"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
            <div className="absolute inset-0 bg-[#1C2752] opacity-95 blur-1px"></div>
            <div className="relative p-4 flex flex-col items-center justify-center z-10 ">
              <h2 className="text-white text-2xl font-mulish text-center mb-2">
                Providing Varity Electical Services
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
              <Link
                to="/contact-us"
                className="text-white text-center font-mulish mt-4 "
              >
                Click to get discount
              </Link>
            </div>
          </div>

          {/* Bullets */}
          <h1 className="text-4xl text-[#1C2752] text-left font-bold font-mulish py-2 mt-4 mb-4">
            Our Services
          </h1>
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-row items-center justify-start gap-3 mb-4 mt-3">
                <IoMdCheckmarkCircle className="text-[#0063A7] text-xl" />
                <h1 className="font-semibold font-inter text-[#7E7E7E]">
                  {service}
                </h1>
              </div>
              <hr className="w-full border-[#D2D2D2]" />
            </React.Fragment>
          ))}
          {/* Icons and description  */}
          {/* Icon 1 */}
          <div className="flex flex-row mt-4">
            <div className="bg-[#1C2752] flex-1 flex items-center justify-center p-2">
              <VscFilePdf className="text-white text-5xl" />
            </div>

            <a
              href={link1}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0063A7] flex-3 items-start p-4"
            >
              <h1 className="text-2xl text-white text-left font-mulish">
                Detailed Service Pack
              </h1>
              <h1 className="text-white text-left font-mulish">Download PDF</h1>
            </a>
          </div>
          {/* Icon 2 */}
          <div className="flex flex-row mt-4">
            <div className="bg-[#1C2752] flex-1 flex items-center justify-center p-2">
              <BiSolidFileDoc className="text-white text-5xl" />
            </div>

            <a
              href={link1}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0063A7] flex-3 items-start p-4"
            >
              <h1 className="text-2xl text-white text-left font-mulish">
                Our Company Details
              </h1>
              <h1 className="text-white text-left font-mulish">Download PDF</h1>
            </a>
          </div>
        </div>

        {/* Right Side -------------------------------------------------------------------------------------- */}
        <div className="w-full md:w-2/3 bg-white p-4">
          <img src={image2} alt="" className="w-full" />

          {/* Texts  */}
          <h1 className="text-4xl text-[#1C2752] font-bold font-mulish px-3 py-1 mb-6 mt-8 ">
            Description for Commercial Services
          </h1>
          <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-4">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium dynamically target high-payoff intellectual
            capital for customized technologies objectively integrate emerging
            core competencies before process-centric communities dramatically
            evisculate holistic innovation rather than client-centric data.
          </h1>

          {/* Quote  */}
          <div className="flex flex-row items-stretch w-full mx-auto h-auto mt-6 md:mt-8 mb-4">
            <div className="bg-[#1C2752] p-4 md:p-6"></div>
            <div className="bg-[#0063A7] p-4 flex-1 h-full">
              <p className="text-white text-center italic text-xl font-extralight tracking-wide font-inter leading-relaxed ">
                The job market of the future will consist of those jobs that
                robots cannot perform. Our blue-collar work is pattern
                recognition, making sense of what you see.
              </p>
            </div>
          </div>

          {/* Texts  */}
          <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-4">
            Coordinate proactives e-commerce process centric outside the box
            thinking completely pursue scalabl customer service through
            sustainable potentialities colaboratively administrate turnkey
            channels whereas virtual e tailers objectively seize scalable.
          </h1>

          {/* Icons  */}
          <div className="grid grid-cols-2 items-center justify-center mt-8 bg-[#F4F4F4] p-4">
            {/* Grid item 1 */}
            <div className="flex flex-row items-start justify-center p-4 gap-4">
              <img
                src={image4}
                alt=""
                className="w-[32px] h-[32px] mt-1 text-[#1C2752]"
              />
              <div>
                <h1 className="font-bold text-xl font-mulish text-[#1C2752]">
                  24/7 Availability
                </h1>
                <p className="text-[#7E7E7E] font-normal font-inter text-left py-1 max-w-[500px]">
                  Globally incubate standards before scalable benefits.
                </p>
              </div>
            </div>
            {/* Grid item 2 */}
            <div className="flex flex-row items-start justify-center p-4 gap-4 ">
              <img
                src={image5}
                alt=""
                className="w-[32px] h-[32px] mt-1 text-[#1C2752]"
              />
              <div>
                <h1 className="font-bold text-xl font-mulish text-[#1C2752]">
                  Affordable Price
                </h1>
                <p className="text-[#7E7E7E] font-normal font-inter text-left py-1 max-w-[500px]">
                  Globally incubate standards before scalable benefits.
                </p>
              </div>
            </div>
            {/* Grid item 3 */}
            <div className="flex flex-row items-start justify-center p-4 gap-4 ">
              <img
                src={image6}
                alt=""
                className="w-[32px] h-[32px] mt-1 text-[#1C2752]"
              />
              <div>
                <h1 className="font-bold text-xl font-mulish text-[#1C2752]">
                  Process Technology
                </h1>
                <p className="text-[#7E7E7E] font-normal font-inter text-left py-1 max-w-[500px]">
                  Globally incubate standards before scalable benefits.
                </p>
              </div>
            </div>
            {/* Grid item 4 */}
            <div className="flex flex-row items-start justify-center p-4 gap-4">
              <img
                src={image7}
                alt=""
                className="w-[32px] h-[32px] mt-1 text-[#1C2752]"
              />
              <div>
                <h1 className="font-bold text-xl font-mulish text-[#1C2752]">
                  Free Estimation
                </h1>
                <p className="text-[#7E7E7E] font-normal font-inter text-left py-1 max-w-[500px]">
                  Globally incubate standards before scalable benefits.
                </p>
              </div>
            </div>
          </div>

          {/* Text  */}
          <h1 className="text-4xl text-[#1C2752] font-bold font-mulish px-3 py-1 mb-6 mt-8 ">
            Key benefits With Our Service
          </h1>
          <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-4">
            Scalabl customer service through sustainable potentialities
            colaboratively administrate turnkey channels whereas virtual e
            tailers objectively seize scalable metrics whereas proactiveservices
            Seamlessly empower fully researched growth strategies.
          </h1>

          {/* Bullets & Image */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 mb-4">
            {/* Bullets */}
            <div className="flex flex-1 flex-col items-start justify-center">
              {bullets.map((bullet, index) => (
                <div
                  className="flex flex-row items-center justify-start gap-3 mb-3 mt-3"
                  key={index}
                >
                  <IoMdCheckmarkCircle className="text-[#0063A7] text-xl" />
                  <h1 className="font-inter text-[#7E7E7E]">{bullet}</h1>
                </div>
              ))}
            </div>

            {/* Image  */}
            <div className="flex flex-1">
              <img src={image3} alt="" className="w-auto object-contain" />
            </div>
          </div>

          {/* Text Title */}
          <div className="w-full max-w-[1200px] mx-auto flex flex-col items-start mt-16 ">
            <h1 className="text-4xl text-[#1C2752] text-left font-bold font-mulish px-3 py-1 mb-2 md:mb-8 ">
              Our Experts Team
            </h1>
          </div>

          {/* Boxes  */}
          <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-4 md:gap-10 mb-12 md:mb-28 p-4 md:p-0">
            {/* Box1  */}
            <Link
              to="/team"
              className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400"
            >
              <img src={image8} alt="" className="object-cover mb-3" />
              <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
                David James
              </h1>
              <p className="text-[#7E7E7E] text-center font-semibold">
                Engineer
              </p>
            </Link>
            {/* Box 2 */}
            <Link
              to="/team"
              className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400"
            >
              <img src={image9} alt="" className="object-cover mb-3" />
              <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
                Kevin Martin
              </h1>
              <p className="text-[#7E7E7E] text-center font-semibold">
                Engineer
              </p>
            </Link>
            {/* Box 3 */}
            <Link
              to="/team"
              className="bg-[#ffffff] flex-1 p-4 flex flex-col items-center justify-center border border-gray-400"
            >
              <img src={image10} alt="" className="object-cover mb-3" />
              <h1 className="text-xl font-bold text-center font-mulish text-[#1C2752]">
                Sarrah Albert
              </h1>
              <p className="text-[#7E7E7E] text-center font-semibold">
                Engineer
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SS1_Main;
