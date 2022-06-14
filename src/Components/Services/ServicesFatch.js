import React, { useEffect, useState } from "react";
import HomeTitles from "../Home/HomeTitles";
import ServiceCard from "./ServiceCard";

const ServicesFatch = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrahmans/elite-dental-studio/main/services.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <>
      <HomeTitles
        title="Hello Elite Dental studio"
        description="We tailor our services to the individual demands of each doctor,
          office and patient. We customize our service to meet your requirements
          without compromising our high standards."
      ></HomeTitles>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-8 sm:gap-6 gap-4 gap-y-8">
        {services.map((service) => (
          <ServiceCard service={service} key={service.id}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default ServicesFatch;
