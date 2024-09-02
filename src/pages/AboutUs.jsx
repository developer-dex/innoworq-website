import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/Common/SubHero";
import A1_Intro from "../components/AboutUs/A1_Intro";
import A2_Stats from "../components/AboutUs/A2_Stats";
import A4_Team from "../components/AboutUs/A4_Team";
import A3_Timeline from "../components/AboutUs/A3_Timeline";
import A5_Timeline from "../components/AboutUs/A5_sample";
import image from "../assets/SubHero.png";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <SubHero imageUrl={image} title="About Us" />
      <A1_Intro />
      <A2_Stats />
      <A3_Timeline />
      <A4_Team />
      <Footer />
    </div>
  );
};

export default AboutUs;
