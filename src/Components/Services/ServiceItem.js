import React, { useEffect, useState } from "react";

const ServiceItem = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrohman/boots-data/main/elite-services.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      {services.map((service) => (
        <div className="my-6 border-2 py-8 shadow-xl ">
          <div className="card box-border flex flex-col items-center content-center  text-black max-w- border-solid md:flex-row lg:px-16 ">
            <div className="max-w-4xl relative bg-no-repeat md:w-1/2 ">
              <img
                alt={service.Servicetitle}
                src={service.serviceImg}
                className=""
              />
            </div>

            <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                {service.Servicetitle}
              </h2>
              <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Build an atmosphere that creates productivity in your
                organization and your company culture.Build an atmosphere that
                creates productivity in your organization and your company
                culture.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                {service.iconDescription.map((item) => (
                  <li className="my-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                      <span className="text-sm font-bold">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn btn-sm mt-4">Know More</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceItem;
