import React, { useEffect, useState } from "react";
import HomeTitles from "../Home/HomeTitles";
import HomeServiceCard from "./HomeServiceCard";

const ServicesFatch = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrohman/boots-data/main/elite-services.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <>
      <HomeTitles
        title="Delta Restoration Products for Every Patient "
        description="From gold to ceramic, single tooth to complete mouth, our Dental Technicians continually exceed the expectations of dentists. We offer state-of-the-art aesthetic alternatives to suit every patient's dental restoration requirements."
      ></HomeTitles>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-8 sm:gap-6 gap-4 gap-y-8">
        {services.map((service) => (
          <HomeServiceCard service={service} key={service.id}></HomeServiceCard>
        ))}
      </div>
    </>
  );
};

export default ServicesFatch;
