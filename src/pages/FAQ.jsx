import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/Common/SubHero";
import F3_Form from "../components/FAQs/F3_Form";
import F1_Query from "../components/FAQs/F1_Query";
import F2_FAQAccordion from "../components/FAQs/F2_FAQAccordion";
import image from "../assets/SubHero.png";

const FAQ = () => {
  return (
    <div>
      <Navbar />
      <SubHero imageUrl={image} title="FAQs" />
      <F1_Query />
      <F2_FAQAccordion />
      <F3_Form />

      <Footer />
    </div>
  );
};

export default FAQ;
