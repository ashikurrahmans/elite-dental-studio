import React from "react";

const HomeTitles = (props) => {
  return (
    <>
      <div className="flex flex-col text-center w-full my-24 ">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-white">
          {props.title}
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-black dark:text-white">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default HomeTitles;
