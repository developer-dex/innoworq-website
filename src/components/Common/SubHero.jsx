// BackgroundImageComponent.jsx
import React from "react";
import image from "../../assets/Logo2.png";

const SubHero = ({ imageUrl, title }) => {
  return (
    <div className="relative h-600px w-full -mt-10">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="h-[300px] w-full border border-gray-900">
        <img
          src={imageUrl}
          alt="Background"
          className="object-cover h-[300px] w-full blur-[2px]"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white font-bold text-4xl font-mulish">{title}</h1>
      </div>
    </div>
  );
};

export default SubHero;
