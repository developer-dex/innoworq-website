import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/BlogSingle";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import GallerySingle from "./pages/GallerySingle";
import Services from "./pages/Services";
import ServicesSingle from "./pages/ServicesSingle";
import Team from "./pages/Team";
import TeamSingle from "./pages/TeamSingle";
import ScrollToTop from "./components/Common/ScrollToTop";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GallerySingle />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServicesSingle />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<TeamSingle />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
