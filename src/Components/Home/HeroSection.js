import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ homeTitle, homeDescription }) => {
  return (
    <>
      <div className="bg-[#060511] dark:text-[#f5f6fa] light:bg-[#f5f6fa] light:bg-[#060511] min-h-screen ">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0 lg:py-24">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 lg:mt-48 md:mt-20">
            <h2 className="max-w-3xl mb-6 font-sans text-4xl lg:text-5xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto bg-clip-text text-transparent bg-gradient-to-r from-[#6DB416] to-white">
              {homeTitle}
            </h2>
            <p className="text-base text-indigo-100 md:text-lg">
              {homeDescription}
            </p>
          </div>
          <div>
            <Link
              to={"buttonUrl"}
              className="font-bold bg-gradient-to-r from-[#6DB416] to-[#e0e0e0] hover:bg-gradient-to-r hover:from-[#fdfdfd] hover:to-[#6DB416] inline-flex items-center justify-center h-12 px-6 tracking-wide text-black transition duration-0 hover:duration-700 ease-in-out rounded-lg shadow-lg shadow-slate-50 hover:shadow-slate-100"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
