import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SidebarSingleArticle = ({ id }) => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://ashikurrahmans.github.io/elite-data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  });

  const relatedArticles = blogs.filter((item) => item.id !== Number(id));
  console.log(relatedArticles);

  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-full">
        <div
          className="wow fadeInUp mb-5 flex w-full items-center border-b border-[#F2F3F8] pb-5"
          data-wow-delay=".1s
                        "
        >
          <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full">
            <img
              src="assets/images/blog/article-author-01.png"
              alt="images"
              className="w-full"
            />
          </div>
          <div className="w-full">
            <h4>
              <a
                href="https://facebook.com"
                className="mb-1 inline-block text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg"
              >
                Create engaging online courses your student…
              </a>
            </h4>
            <p className="text-sm text-body-color">Glomiya Lucy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarSingleArticle;
