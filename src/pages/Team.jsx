import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/Common/SubHero";
import T1_Main from "../components/Team/T1_Main";
import image from "../assets/SubHero.png";

const Team = () => {
  return (
    <div>
      <Navbar />
      <SubHero imageUrl={image} title="Team" />
      <T1_Main />
      <Footer />
    </div>
  );
};

export default Team;
Team;
