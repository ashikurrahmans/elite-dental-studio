import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, img, category } = props.blog;
  return (
    <>
      <section className="sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="p-2 mx-auto ">
          <article className="flex flex-col dark:bg-gray-900 shadow-xl">
            <Link
              rel="noopener noreferrer"
              to={`${id}`}
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt={title}
                className="object-cover w-full h-52 dark:bg-gray-500"
                src={img}
              />
            </Link>
            <div className="flex flex-col flex-1 p-6">
              <Link
                rel="noopener noreferrer"
                to="#"
                className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
              >
                {category}
              </Link>
              <Link to={`${id}`}>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  {title}
                </h3>
              </Link>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default BlogCard;
