import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SidebarArticles = () => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://ashikurrahmans.github.io/elite-data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  });

  return (
    <>
      <div className=" mb-8 flex flex-wrap">
        <div className="w-full px-4">
          <h2
            className="wow fadeInUp relative text-2xl font-semibold text-dark sm:text-[28px] my-4"
            data-wow-delay=".1s"
          >
            Popular Article
          </h2>
          <span className="inline-block h-[2px] w-20 bg-primary"></span>
        </div>

        {blogs?.slice(2, 7).map((blog) => (
          <div className="w-[200px] px-4 md:w-1/2 lg:w-[300px] shadow border py-4">
            <div
              className="wow fadeInUp mb-2 flex w-full items-center border-b border-[#F2F3F8]"
              data-wow-delay=".1s"
            >
              <div className="mr-5 h-16 w-full max-w-[50px] overflow-hidden rounded-full">
                <img src={blog?.image} alt={blog?.title} className="w-full" />
              </div>
              <div className="w-full">
                <h4>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="mb-1 inline-block text-base leading-snug text-dark hover:text-primary lg:text-base xl:text-base"
                  >
                    {blog?.title}
                  </Link>
                </h4>
                <p className="text-sm text-body-color">{blog?.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SidebarArticles;
