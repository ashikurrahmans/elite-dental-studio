import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ homeTitle, homeDescription }) => {
  return (
    <>
      <div className="bg-[#060511] flex lg:min-h-screen md:min-h-screen sm:max-h-max	h-[620px]">
        <div className="w-3/5 mx-auto my-auto text-center">
          <h2 className="font-sans text-4xl lg:text-5xl md:text-4xl font-bold leading-none tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#6DB416] to-white py-6 mx-[-40px]">
            {homeTitle}
          </h2>
          <p className=" text-indigo-100 text-lg md:text-lg pb-12 mx-[-40px]">
            {homeDescription}
          </p>
          <Link
            to="/services"
            className="font-bold bg-gradient-to-r from-[#6DB416] to-[#e0e0e0] hover:bg-gradient-to-r hover:from-[#fdfdfd] hover:to-[#6DB416] inline-flex items-center justify-center h-12 px-6 tracking-wide text-black transition duration-0 hover:duration-700 ease-in-out rounded-lg shadow-lg shadow-slate-50 hover:shadow-slate-100 text-center"
          >
            Our Services
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
