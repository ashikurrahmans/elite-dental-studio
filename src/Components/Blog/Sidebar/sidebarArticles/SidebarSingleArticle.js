import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarSingleArticle = ({ id }) => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://elitedentals.github.io/elite-data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  });

  const relatedArticles = blogs.filter((item) => item.id !== Number(id));

  return (
    <>
      {relatedArticles?.slice(0, 5).map((blog) => (
        <div className="w-full px-4 md:w-1/2 lg:w-full">
          <div
            className="wow fadeInUp mb-5 flex w-full items-center border-b border-[#F2F3F8] pb-5"
            data-wow-delay=".1s"
          >
            <div className="mr-5 h-14 w-full max-w-[50px] overflow-hidden rounded">
              <Link to="">
                <img src={blog?.authorImage} alt="images" className="w-full" />
              </Link>
            </div>
            <div className="w-full">
              <h4>
                <Link
                  to={`/blogs/${blog?.id}`}
                  className="mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg"
                >
                  {blog?.title}
                </Link>
              </h4>
              <p className="text-sm text-body-color">{blog?.author}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SidebarSingleArticle;
