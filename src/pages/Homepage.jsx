import React from "react";
import Navbar from "../components/Navbar/Navbar";
import H1_Hero from "../components/Homepage/H1_Hero";
import Footer from "../components/Footer/Footer";
import H2_Welcome from "../components/Homepage/H2_Welcome";
import H3_Services from "../components/Homepage/H3_Services";
import H4_Capability from "../components/Homepage/H4_Capability";
import H5_ChooseUs from "../components/Homepage/H5_ChooseUs";
import H6_Gallery from "../components/Homepage/H6_Gallery";
import H7_Form from "../components/Homepage/H7_Form";
import H8_Clients from "../components/Homepage/H8_Clients";
import H9_Blog from "../components/Homepage/H9_Blog";
import image from "../assets/SubHero.png";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <H1_Hero />
      <H2_Welcome />
      <H3_Services />
      <H4_Capability />
      <H5_ChooseUs />
      <H6_Gallery />
      <H7_Form />

      <H8_Clients />
      <H9_Blog />
      <Footer />
    </div>
  );
};

export default Homepage;
