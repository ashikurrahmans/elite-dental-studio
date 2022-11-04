import React, { useEffect, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import WhyChooseUs from "./WhyChooseUs";
import ImageGallery from "./ImageGallery";
import HeroSection from "./HeroSection";
import Faq from "./Faq";
import HeroBottom from "./HeroBottom";
import ServicesFatch from "../Services/ServicesFatch";

const Home = () => {
  const [homeData, setData] = useState([]);

  useEffect(() => {
    fetch("https://elitedentals.github.io/elite-data/homepage.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      });
  });

  const {
    homeTitle,
    homeDescription,
    greenSectionLeft,
    greenBottom,
    greenSectionRight,
    serviceTitle,
    serviceDescription,
    iconSectionTitle,
    iconSectionDescription,
    icon,
    faqTitle,
    faqDescription,
    faq,
    galleryTitle,
    galleryDescription,
    imageBox,
  } = homeData;

  return (
    <>
      <PageTitle title="Best Dental Services"></PageTitle>
      <HeroSection
        homeTitle={homeTitle}
        homeDescription={homeDescription}
      ></HeroSection>
      <HeroBottom
        greenSectionLeft={greenSectionLeft}
        greenSectionRight={greenSectionRight}
        greenBottom={greenBottom}
      ></HeroBottom>
      <ServicesFatch
        serviceTitle={serviceTitle}
        serviceDescription={serviceDescription}
      ></ServicesFatch>
      <WhyChooseUs
        iconSectionTitle={iconSectionTitle}
        iconSectionDescription={iconSectionDescription}
        icon={icon}
      ></WhyChooseUs>
      <Faq faqTitle={faqTitle} faqDescription={faqDescription} faq={faq}></Faq>
      <ImageGallery
        galleryTitle={galleryTitle}
        galleryDescription={galleryDescription}
        imageBox={imageBox}
      ></ImageGallery>
    </>
  );
};

export default Home;
