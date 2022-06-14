import colorObject from "daisyui/src/colors";
import React from "react";

const BredCumbs = ({ title, bred }) => {
  return (
    <div className="bg-black text-white text-center py-20">
      <h1 className="text-4xl mb-4">{title}</h1>
      <a href="#" className="text-blue-600 font-bold">
        {bred}
      </a>
    </div>
  );
};

export default BredCumbs;
