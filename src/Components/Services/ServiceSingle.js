import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceSingle = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrohman/boots-data/main/elite-services.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  const service = services.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h2 className="text-4xl my-10">{service?.title}</h2>
    </div>
  );
};

export default ServiceSingle;
