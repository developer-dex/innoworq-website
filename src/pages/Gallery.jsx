import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/Common/SubHero";
import G1_Main from "../components/Gallery/G1_Main";
import image from "../assets/SubHero.png";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <SubHero imageUrl={image} title="Our Projects" />
      <G1_Main />
      <Footer />
    </div>
  );
};

export default Gallery;
