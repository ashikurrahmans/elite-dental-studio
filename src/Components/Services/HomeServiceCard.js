import React from "react";
import { Link } from "react-router-dom";

const HomeServiceCard = (props) => {
  const { id, Servicetitle, serviceImg } = props.service;
  return (
    <>
      <div className="card lg:w-90 md:w-50 sm:w-66 bg-base-100 shadow-xl hover:shadow-2xl ">
        <Link to={`service/${id}`}>
          <figure>
            <img
              src={serviceImg}
              alt={Servicetitle}
              className="lg:w-full md:w-full sm:w-full w-full h-60"
            />
          </figure>
          <div className="">
            <h2 className=" text-xl font-bold dark:text-white text-black py-8 bg-[#CE8C41] text-center">
              {Servicetitle}
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            {/* <p className="text-black pt-2">{description.slice(0, 100)}</p> */}
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomeServiceCard;
