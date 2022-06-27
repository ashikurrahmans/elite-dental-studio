import React from "react";
import heroBottomImage from "../../assets/images/Dentist-Illustration.png";

const HeroSection = () => {
  return (
    <div>
      <div className="bg-[#060606]">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-52 lg:pb-96 md:pb-72">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <a href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                  <svg
                    className="w-10 h-10 text-deep-purple-900"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </a>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    {/* <span className="relative">
                      Welcome to <br />
                    </span> */}
                  </span>
                  Elite Dental Studio USA
                </h2>
                <p className="text-base text-indigo-100 md:text-lg">
                  We know that your first priority is the happiness and
                  satisfaction of your patients; furthermore, we know that you
                  are looking for the best possible quality for your dental
                  restorations
                </p>
              </div>
              <div>
                <a
                  href="/"
                  className=" bg-white inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:-mt-96 md:-mg-96 sm:-mg-96">
        <img src={heroBottomImage} alt="Elite Dental Studio Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
