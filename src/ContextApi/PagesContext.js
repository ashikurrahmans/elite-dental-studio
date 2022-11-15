import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const pageContent = createContext();

const PagesContent = ({ children }) => {
  // Contents
  const [homeContent, setHomeContent] = useState([]);
  const [aboutContent, setAboutContent] = useState([]);
  const [servicesContent, setServicesContent] = useState([]);

  // Loadings
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchHome = async () => {
    const response = await axios.get(
      `https://elitedentals.github.io/elite-data/homepage.json`
    );

    setHomeContent(response.data[0]);
    setDataLoaded(true);
  };
  const fetchAbout = async () => {
    const response = await axios.get(
      `https://elitedentals.github.io/elite-data/aboutpage.json`
    );
    setAboutContent(response?.data[0]);
    setDataLoaded(true);
  };
  const fetchServices = async () => {
    const response = await axios.get(
      `https://elitedentals.github.io/elite-data/servicepage.json`
    );
    setServicesContent(response?.data);
    setDataLoaded(true);
  };

  useEffect(() => {
    fetchHome();
    fetchAbout();
    fetchServices();
  }, []);

  const value = {
    dataLoaded,
    homeContent,
    aboutContent,
    servicesContent,
  };
  return <pageContent.Provider value={value}>{children}</pageContent.Provider>;
};

export default PagesContent;
