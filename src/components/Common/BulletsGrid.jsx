import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import image from "../../assets/Logo2.png";

const GridComponent = () => {
  const items = [
    "Telecom Installation and Repair",
    "Lighting Design",
    "Hosted PBX Solutions",
    "Motors and Transformers",
    "Outdoor/Parking Lot Lighting",
    "Isolated Computer Circuits",
    "Outlets, Circuits and Rewiring",
    "Data/Communications Cabling",
    "HID Lighting and Control",
    "Ballast/Lamp Replacing",
  ];

  return (
    <div className="grid grid-cols-2 gap-4 py-4 px-3 mt-2">
      {items.map((text, index) => (
        <div
          key={index}
          className="flex flex-row items-start justify-start gap-3 mb-1 mt-1"
        >
          <IoMdCheckmarkCircle className="text-[#0063A7] text-xl" />
          <h1 className="font-inter text-[#7E7E7E]">{text}</h1>
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
