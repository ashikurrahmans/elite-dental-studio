import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogFetch = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrahmans/portfolio-json/main/blog.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
        <p className="font-serif text-sm dark:text-gray-400">
          Qualisque erroribus usu at, duo te agam soluta mucius.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id}></BlogCard>
        ))}
      </div>
    </>
  );
};

export default BlogFetch;
