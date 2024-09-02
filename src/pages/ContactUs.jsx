import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/Common/SubHero";
import C1_Details from "../components/ContactUs/C1_Details";
import C2_Form from "../components/ContactUs/C2_Form";
import image from "../assets/SubHero.png";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <SubHero imageUrl={image} title="Contact Us" />
      <C1_Details />
      <C2_Form />
      <Footer />
    </div>
  );
};

export default ContactUs;
