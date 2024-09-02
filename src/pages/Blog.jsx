import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/Common/SubHero";
import B1_Main from "../components/Blog/B1_Main";
import image from "../assets/SubHero.png";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <SubHero imageUrl={image} title="Blog" />
      <B1_Main />
      <Footer />
    </div>
  );
};

export default Blog;
