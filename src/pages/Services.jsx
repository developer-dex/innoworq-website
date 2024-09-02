import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/Common/SubHero";
import H3_Services from "../components/Homepage/H3_Services";
import S2_ServiceList from "../components/Services/S2_ServiceList";
import S3_HowWeWork from "../components/Services/S3_HowWeWork";
import image from "../assets/SubHero.png";

const Services = () => {
  return (
    <div>
      <Navbar />
      <SubHero imageUrl={image} title="Services" />
      <H3_Services />
      <S2_ServiceList />
      <S3_HowWeWork />
      <Footer />
    </div>
  );
};

export default Services;
