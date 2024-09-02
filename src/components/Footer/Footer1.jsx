import React from "react";
import image from "../../assets/Logo2.png";

const Footer1 = () => {
  return (
    <div className="bg-[#EBEBEB] py-10 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 md:pr-6">
          <h2 className="text-2xl font-bold mb-2">Subscribe Our Newsletter</h2>
          <p className="text-gray-800">
            Stay in touch with us to get the latest news. Maximus mattis est
            facilisi. In sed pretium. Proin pretium id urna sit amet tincidunt.
          </p>
        </div>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow py-2 px-4 rounded-l-lg text-gray-700 border  border-gray-600 "
          />
          <button className="bg-[#0063A7] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r-lg transition duration-300 border  border-gray-600 ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
