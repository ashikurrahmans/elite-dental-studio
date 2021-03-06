import React from "react";

const Counter = () => {
  return (
    <>
      <div className="mt-8">
        <div className="flex">
          <a
            href="#"
            className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed"
          >
            previous
          </a>
          <a
            href="#"
            className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
          >
            1
          </a>

          <a
            href="#"
            className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
          >
            2
          </a>

          <a
            href="#"
            className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
          >
            3
          </a>

          <a
            href="#"
            className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
          >
            Next
          </a>
        </div>
      </div>
    </>
  );
};

export default Counter;
