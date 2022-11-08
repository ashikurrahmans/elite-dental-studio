import React from "react";

const Keywords = () => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2">
        <div
          className="wow fadeInUp mb-8 flex flex-wrap items-center md:mb-0"
          data-wow-delay=".1s"
        >
          <a
            href="$"
            className="mr-2 mb-2 block rounded bg-primary bg-opacity-5 py-2 px-5 text-xs font-medium text-primary hover:bg-opacity-100 hover:text-white md:mr-4 lg:mr-2 xl:mr-4"
          >
            Design
          </a>
          <a
            href="$"
            className="mr-2 mb-2 block rounded bg-primary bg-opacity-5 py-2 px-5 text-xs font-medium text-primary hover:bg-opacity-100 hover:text-white md:mr-4 lg:mr-2 xl:mr-4"
          >
            Development
          </a>
          <a
            href="$"
            className="mb-2 block rounded bg-primary bg-opacity-5 py-2 px-5 text-xs font-medium text-primary hover:bg-opacity-100 hover:text-white"
          >
            Info
          </a>
        </div>
      </div>
    </>
  );
};

export default Keywords;
