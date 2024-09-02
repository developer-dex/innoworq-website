import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SubHero from "../components/Common/SubHero";
import BS4_MoreBlogs from "../components/BlogSingle/BS4_MoreBlogs";
import BS3_Quote from "../components/BlogSingle/BS3_Quote";
import BS1_Image from "../components/BlogSingle/BS1_Image";
import BS2_Text from "../components/BlogSingle/BS2_Text";
import image from "../assets/SubHero.png";

const BlogSingle = () => {
  return (
    <div>
      <Navbar />
      <SubHero imageUrl={image} title="Blog Single" />
      <BS1_Image />
      <BS2_Text />
      <BS3_Quote />
      <BS4_MoreBlogs />
      <Footer />
    </div>
  );
};

export default BlogSingle;
