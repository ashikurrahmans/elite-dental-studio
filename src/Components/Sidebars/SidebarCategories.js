import React from "react";
import { Link } from "react-router-dom";

const SidebarCategories = () => {
  return (
    <>
      <div className="mb-6 bg-white shadow-md p-2 mt-7 w-72">
        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
          Popular Topics
        </h5>
        <ul>
          <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <Link
              to="#"
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
              Nutrition
              <span className="text-gray-500 ml-auto">23 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarCategories;
