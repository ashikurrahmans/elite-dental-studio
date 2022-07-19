import React from "react";
import { Link } from "react-router-dom";
import BredCumbs from "../Shared/BredCumbs";
import PageTitle from "./../PageTitle/PageTitle";

const About = () => {
  return (
    <div>
      <PageTitle title="About"></PageTitle>
      <BredCumbs home="Home" page="About" url="/about"></BredCumbs>
      <div className="flex flex-col text-center  mb-20 mt-20 w-9/12 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          About US
        </h1>
        <p className="leading-relaxed text-base ml-6 mr-6">
          Gainesville, also renowned as the Queen City of the Mountains and the
          Poultry Capital, was recently named the "Hospitality Capital of the
          World" after it hosted the 1996 Olympic rowing and kayaking
          competitions. The 38,000-acre Lake Sidney Lanier provides several
          recreational activities, such as the rental of canoes and kayaks at
          the Olympic Venue. Every year, the Petit LeMans is held at Road
          Atlanta, a world-renowned street racing track.
        </p>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col ">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-2xl ml-6 shadow-2xl"
              alt="hero"
              src="https://www.elitedentalstudiousa.com/wp-content/uploads/2022/04/Elite-Dental.jpeg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left text-center">
            <p className="text-red-700 font-bold">About CEO</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Edgar Munoz DTG
            </h1>
            <h2 className="text-red-700 font-semibold">
              CEO Elite Dental Studio LLC in Atlanta
            </h2>
            <p className="mb-8 leading-relaxed">
              Owner of the Elite Dental Studio USA in Georgia, Edgar Munoz, has
              been a renowned figure in the dental industry. Named one of the
              "Forty Under Forty" top dental technicians in the US by the LMT
              magazine in 2012, Mr. Munoz provides individualized services to
              dentist clientele who share his ideal of excellent esthetics. His
              competence in digital dentistry, implant restorations, and crown
              and bridge encompasses more than 18 years of experience. He has
              extended his education by participating in several workshops and
              courses across the US and abroad. Additionally, Mr. Munoz belongs
              to the Dental Technicians Guild.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font my-20">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Promise
            </h1>
            <p className="mb-8 leading-relaxed w-5/6">
              Elite Dental Studio USA believes every client should access the
              best quality treatment. Thus, with us as your partner, it is
              always possible to provide patients with beautiful smiles and the
              most effective treatment. Indeed our advanced digital process and
              production efficiencies enable us to offer first-rate restorations
              created from the best quality materials at an affordable price.
            </p>
            <div className="flex justify-center mb-6">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Know More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 relative">
            <img
              className="object-cover object-center absolute w-full h-80 hover:cursor-pointer"
              alt="hero"
              src="https://fbutube.com/media/images/play_button/play_button_added.webp"
            />
            <div className="video-responsive">
              <iframe
                className="w-full h-80 "
                src="https://www.youtube.com/embed/d4V3qheys0s"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Advantages Of Elite Dental Studio USA
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Elite Dental Studio features a full-service laboratory with the
              skills, knowledge, and dedication to aid in the success of your
              practice.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Best Customer Service
                </h2>
                <p className="leading-relaxed text-base">
                  Our top priority is customer service of the highest caliber,
                  and we attempt to offer our clients a smooth experience.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Experienced Professional
                </h2>
                <p className="leading-relaxed text-base">
                  We have experienced professionals who have experience in major
                  restorative cases and offer the best to you.
                </p>
                <Link
                  to="/about"
                  className="mt-3 text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Highly-Equipped Lab
                </h2>
                <p className="leading-relaxed text-base">
                  We have the latest infrastructure, tools, and technology to
                  provide your clinic with consistent, high-quality results.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
