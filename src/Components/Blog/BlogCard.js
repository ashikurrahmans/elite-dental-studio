import React from "react";
import { Link } from "react-router-dom";
import BlogCategory from "./Categories/BlogCategory";

const BlogCard = ({ blog }) => {
  return (
    <>
      <article className="flex flex-col shadow my-4">
        <Link to="#" className="hover:opacity-75">
          <img src={blog.image} alt="" />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <BlogCategory></BlogCategory>
          <Link to="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            {blog.title}
          </Link>
          <p href="#" className="text-sm pb-3">
            By
            <Link to="#" className="font-semibold hover:text-gray-800">
              {blog.author}
            </Link>
            , Published on {blog.publishTime}
          </p>
          <Link to="#" className="pb-6">
            {blog.description}
          </Link>
          <Link to="#" className="uppercase text-gray-800 hover:text-black">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </article>
    </>
  );
};

export default BlogCard;
