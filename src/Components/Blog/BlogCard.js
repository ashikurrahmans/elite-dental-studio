import React from "react";
import { Link } from "react-router-dom";
import BlogCategory from "./Categories/BlogCategory";

const BlogCard = ({ blog }) => {
  const { id, image, title, author, publishTime, description } = blog;
  return (
    <>
      <article className="flex flex-col shadow ">
        <Link className="hover:opacity-75" to={`/blogs/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <BlogCategory></BlogCategory>
          <Link
            to={`/blogs/${id}`}
            className="text-3xl font-bold hover:text-gray-700 pb-4"
          >
            {title}
          </Link>
          <p href="#" className="text-sm pb-3">
            By
            <Link to="#" className="font-semibold hover:text-gray-800">
              {author}
            </Link>
            , Published on {publishTime}
          </p>
          <Link to="#" className="pb-6">
            {description.slice(0, 300)}
          </Link>
          <Link
            to={`/blogs/${id}`}
            className="uppercase text-gray-800 hover:text-black"
          >
            Continue Reading <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </article>
    </>
  );
};

export default BlogCard;
