import React from "react";

const HeroBottom = ({ greenSectionLeft, greenBottom, greenSectionRight }) => {
  return (
    <div className="bg-[#6DB416] lg:py-14 md:py-10 sm:py-7">
      <div className="w-8/12 mx-auto text-white text-xl font-semibold">
        <div className="flex">
          <div>
            <h2>{greenSectionLeft}</h2>
            <h1>{greenBottom}</h1>
          </div>
          <div className="ml-24 mt-6">
            <h1>{greenSectionRight}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
