import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const { id, title, img, description } = props.service;
  return (
    <>
      <div className="card lg:w-90 md:w-50 sm:w-66 bg-base-100 shadow-xl hover:shadow-2xl ">
        <Link to={`service/${id}`}>
          <figure>
            <img
              //   src="https://api.lorem.space/image/shoes?w=400&h=225"
              src={img}
              alt={title}
              className="lg:w-full md:w-50 h-60"
            />
          </figure>
          <div className="">
            <h2 className=" text-xl font-bold dark:text-white text-black py-6 bg-[#CE8C41] text-center">
              {title}
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            {/* <p className="text-black pt-2">{description.slice(0, 100)}</p> */}
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServiceCard;
