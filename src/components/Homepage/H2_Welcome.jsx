import React from "react";
import image from "../../assets/H2_Welcome.jpg";

const H2_Welcome = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between mt-10 mb-10">
        {/* Left Part-------------------------- */}
        <div className="flex-1 flex ">
          <img
            src={image}
            alt=""
            // className="w-[540px] h-[540px] p-4"
            className="w-full max-w-[540px] h-auto p-4"
          />
        </div>

        {/* Right part-------------------------- */}
        <div className="flex-1 flex flex-col p-2">
          <h1 className="bg-[#F4F4F4] text-[#1C2752] text-base md:text-base font-semibold font-inter mb-2 ml-3 px-3 py-1 w-[200px]">
            Welcome to Innoworq
          </h1>
          <h1 className="text-4xl text-[#1C2752] font-bold font-mulish px-3 py-1 mb-2 ">
            We Provide Your Future
          </h1>
          <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-6">
            Serving INNOWORQ services to its clients across the India, Africa,
            Middle East, US, UK and Globally. INNOWORQ is an Indian grounded
            multi-OEM service provider organization, have operations globally to
            support all customers under "follow the sun" model, call center and
            technical hubs.
          </h1>
          <h1 className="text-[#7E7E7E] font-normal font-inter px-3 py-1 mb-6">
            Serving INNOWORQ services to its clients across the India, Africa,
            Middle East, US, UK and Globally. INNOWORQ is an Indian grounded
            multi-OEM
          </h1>
          <div className="flex items-center">
            <div className="w-[130px] h-[150px] bg-[#F4F4F4] flex flex-col items-center justify-center gap-2 ml-3">
              <p className="text-6xl text-[#0063A7] font-bold font-mulish text-center">
                35
              </p>
              <p className="text-[#1C2752] text-center font-bold">
                Years of Experience
              </p>
            </div>
            <div className="text-[#7E7E7E] font-normal font-inter px-3 py-1">
              <p className="py-1">- Sed varius ipsum lacus</p>
              <p className="py-1">- Pulvinar tortor dignissim sit amet.</p>
              <p className="py-1">- Quisque tristique diam quis placerat</p>
              <p className="py-1">- Aliquam id ante suscipi fringilla.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default H2_Welcome;
