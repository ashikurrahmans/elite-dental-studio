import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import HomeAbout from "./HomeAbout";
import Service from "./Service";
import WhyChooseUs from "./WhyChooseUs";
import ImageGallery from "./ImageGallery";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <PageTitle title="Best Dental Services"></PageTitle>
      <HeroSection></HeroSection>
      <Service></Service>
      <HomeAbout></HomeAbout>
      <WhyChooseUs></WhyChooseUs>
      <ImageGallery></ImageGallery>
    </>
  );
};

export default Home;
