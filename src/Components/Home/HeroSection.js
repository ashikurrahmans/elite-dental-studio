import React from "react";
import { Link } from "react-router-dom";
import heroBottomImage from "../../assets/images/Dentist-Illustration.png";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-[#060606]">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-52 lg:pb-52 md:pb-72">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-3xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                  High-Quality Dental Restoration Products For Superior Results
                </h2>
                <p className="text-base text-indigo-100 md:text-lg">
                  As a leading Full Service Dental Laboratory, we help dental
                  clients flourish by providing superior lab Dental services and
                  unparalleled support. Our experienced team leverages skilled
                  craftsmanship alongside the latest technology to deliver
                  exceptional dental restorations.
                </p>
              </div>
              <div>
                <Link
                  to="/services"
                  className=" bg-white inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-center lg:-mt-96 md:-mg-96 sm:-mg-96">
        <img src={heroBottomImage} alt="Elite Dental Studio Hero" />
      </div> */}
    </div>
  );
};

export default HeroSection;
