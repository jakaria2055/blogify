import React from "react";
import { Route, Routes } from "react-router"
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import ServicePage from "../pages/ServicePage";
import AboutPage from "../pages/AboutPage";

const PageRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default PageRouter;
