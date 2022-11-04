import React from "react";
import { Link } from "react-router-dom";
import videobg from "../../assets/videos/videoBg.mp4";
import "./videoBackground.css";

const HeroSection = ({ homeTitle, homeDescription }) => {
  return (
    <>
      {/* <div className="bg-[#060511] flex lg:min-h-screen md:min-h-screen sm:max-h-max	h-[620px]">
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
      </div> */}

      {/* // Second  */}

      {/* <section
        className="showcase absolute right-0 w-full min-h-screen 
   p-20 flex justify-between items-center bg-black text-white z-10
   transition ease-in-out duration-1000 "
      >
        <video
          src={videobg}
          muted
          loop
          autoplay
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        ></video>

        <div className="overlay absolute top-0 left-0 w-full h-full bg-overlay blend-screen"></div>

        <div className="text z-40">
          <h2 className="text-7xl font-extrabold uppercase 2xl:text-4xl">
            Never Stop
          </h2>
          <h3 className="text-5xl my-5 font-normal max-w-2xl 2xl:text-3xl">
            Exploring The World
          </h3>
          <p className="max-w-2xl my-5 text-base font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            voluptatibus dolor at eius voluptates impedit harum tempora
            excepturi, animi nam.
          </p>
        </div>
      </section> */}

      <header>
        <video class="video-bg" autoPlay={true} muted loop>
          <source
            src="https://player.vimeo.com/video/506116236"
            type="video/mp4"
          />
          <source
            src="http://www.georgewpark.com/video/blurred-street.webm"
            type="video/webm"
          />
        </video>

        {/* <iframe
          className="video-bg"
          width="1200px"
          src="https://player.vimeo.com/video/506116236?h=eece1f2f01&amp;byline=0&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
          height="100%"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen=""
          title="tR_Video_Website_HOME_r1"
          data-ready="true"
        ></iframe> */}

        <div class="video-overlay">
          <h1 className="text-white text-7xl tracking-wide mb-2 font-medium">
            GRAB <span className="bg-[#00AEEF] font-bold px-2">ATTENTION</span>
          </h1>
          <h1 className="text-white text-7xl tracking-wide mt-2 font-medium">
            GROW YOUR
            <span className="bg-[#00AEEF] font-bold px-2 ml-2">PRACTICE</span>
          </h1>
        </div>
      </header>
    </>
  );
};

export default HeroSection;
