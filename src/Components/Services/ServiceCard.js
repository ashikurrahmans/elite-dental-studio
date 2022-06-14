import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = (props) => {
  const { title, img, description } = props.service;
  return (
    <>
      <div className="card w-90 lg:w-96 bg-base-100 shadow-xl hover:shadow-2xl">
        <Link to="/">
          <figure>
            <img
              //   src="https://api.lorem.space/image/shoes?w=400&h=225"
              src={img}
              alt={title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">
              {title}
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p>{description.slice(0, 100)}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServiceCard;
