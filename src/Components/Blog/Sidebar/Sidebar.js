import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([null]);

  const baseUrl = `http://localhost:1337`;
  useEffect(() => {
    fetch(`${baseUrl}/api/categories?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  });
  const categoryNames = categories?.data?.attributes?.categoryName;

  return (
    <>
      <aside
        className="lg:w-60 md:w-52 sm:w-40 text-white"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 overflow-y-auto rounded bg-white border border-t dark:bg-gray-800 mt-6">
          <h1 className="text-black mb-8 text-gray-800cd font-bold text-2xl">
            Top Categories
          </h1>
          <ul className="space-y-2 text-white">
            <li>
              <Link
                to="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg "
              >
                <div className="grid grid-cols-3">
                  <span className="ml-3 text-black hover:text-black">
                    Dashboard
                  </span>
                  <span></span>
                  <span className="ml-3 text-black hover:text-black">
                    {categories.length}
                  </span>
                </div>
              </Link>
            </li>{" "}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
