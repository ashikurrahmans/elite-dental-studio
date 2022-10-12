import React from "react";
import { Link } from "react-router-dom";
import BlogCategory from "./Categories/BlogCategory";

const BlogCard = ({ blog }) => {
  const { id, image, title, author, publishTime, description } = blog;
  return (
    <article className="lg:w-[900px] lg:h-[300px] md:w-[600px] md:h-[250px] sm:w-[400px] sm:h-[180px] bg-white shadow-lg my-6 border-t border">
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        <div>
          <Link to={`/blogs/${id}`}>
            <img
              src={image}
              alt={title}
              className="hover:opacity-80 border lg:h-[300px] md:h-[250px] sm:h-[180px]"
            />
          </Link>
        </div>
        <div className="lg:col-span-2 md:col-span-1">
          <div className="py-8 mb-12 mx-4">
            <div className="mt-2 mb-4">
              <Link to={`/blogs/${id}`}>
                <h1 className="mb-3 text-xl font-bold">{title}</h1>
              </Link>
              <div className="text-sm text-neutral-600 md:none">
                {description.slice(0, 500) + "...."}
              </div>
            </div>

            <div className="flex items-center justify-between text-slate-500 mb-6">
              <div>
                <span>
                  <Link to={`/blogs/${id}`} className="text-red-800">
                    Read More..
                  </Link>
                </span>
              </div>
              <div>
                <div className="flex space-x-4 md:space-x-8">
                  <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                    <Link to={`/blogs/${id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1.5 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </Link>
                    <span className="text-red-700">125</span>
                  </div>
                  <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1.5 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeKLinejoin="round"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    <span className="text-green-600">4</span>
                  </div>
                </div>
              </div>
            </div>
            <BlogCategory></BlogCategory>
          </div>
        </div>
      </div>

      {/* <div className="flex w-full items-center justify-between border p-3 bg-black">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-slate-400 ">
            <img src={image} alt="" />
          </div>
          <h4 className="text-lg font-bold text-white">{author}</h4>
        </div>
        <div className="flex items-center">
          <BlogCategory></BlogCategory>

          <div className="text-xs text-white">{publishTime}</div>
        </div>
      </div> */}
    </article>
  );
};

export default BlogCard;
