import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/Common/SubHero";
import GS4_RelatedProjects from "../components/GallerySingle/GS4_RelatedProjects";
import GS3_Text from "../components/GallerySingle/GS3_Text";
import GS2_Info from "../components/GallerySingle/GS2_Info";
import image from "../assets/SubHero.png";

const GallerySingle = () => {
  return (
    <div>
      <Navbar />
      <SubHero imageUrl={image} title="Industry Machine Issue" />
      <GS2_Info />
      <GS3_Text />
      <GS4_RelatedProjects />
      <Footer />
    </div>
  );
};

export default GallerySingle;
