import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import Service from "./Service";
import WhyChooseUs from "./WhyChooseUs";
import ImageGallery from "./ImageGallery";
import HeroSection from "./HeroSection";
import Faq from "./Faq";

const Home = () => {
  return (
    <>
      <PageTitle title="Best Dental Services"></PageTitle>
      <HeroSection></HeroSection>
      <Service></Service>
      <Faq></Faq>
      <WhyChooseUs></WhyChooseUs>
      <ImageGallery></ImageGallery>
    </>
  );
};

export default Home;
