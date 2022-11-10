import React from "react";
import { Link } from "react-router-dom";

const PopularArticles = () => {
  return (
    <>
      <div className="mb-6 bg-white shadow-md p-2 mt-7 lg:w-72 md:w-60 sm:w-48">
        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
          Popular Articles
        </h5>
        <ul>
          <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <Link
              rel="noopener noreferrer"
              to="#"
              className="font-serif hover:underline"
            >
              Donec sed elit quis odio mollis dignissim eget et nulla.
            </Link>
            <p className="text-xs dark:text-gray-400">
              47 minutes ago by
              <Link
                rel="noopener noreferrer"
                to="#"
                className="hover:underline dark:text-violet-400 ml-1"
              >
                Leroy Jenkins
              </Link>
            </p>
          </li>{" "}
          <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <Link
              rel="noopener noreferrer"
              to="#"
              className="font-serif hover:underline"
            >
              Donec sed elit quis odio mollis dignissim eget et nulla.
            </Link>
            <p className="text-xs dark:text-gray-400">
              47 minutes ago by
              <Link
                rel="noopener noreferrer"
                to="#"
                className="hover:underline dark:text-violet-400 ml-1"
              >
                Leroy Jenkins
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PopularArticles;
