import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/Common/SubHero";
import SS1_Main from "../components/ServiceSingle/SS1_Main";
import image from "../assets/SubHero.png";

const ServicesSingle = () => {
  return (
    <div>
      <Navbar />
      <SubHero imageUrl={image} title="Services Single" />
      <SS1_Main />
      <Footer />
    </div>
  );
};

export default ServicesSingle;
