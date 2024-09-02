import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/Common/SubHero";
import TS2_Text from "../components/TeamSingle/TS2_Text";
import TS1_Intro from "../components/TeamSingle/TS1_Intro";
import image from "../assets/SubHero.png";

const TeamSingle = () => {
  return (
    <div>
      <Navbar />
      <SubHero imageUrl={image} title="Team Single" />
      <TS1_Intro />
      <TS2_Text />
      <Footer />
    </div>
  );
};

export default TeamSingle;
