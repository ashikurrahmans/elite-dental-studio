import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import BlogRight from "./BlogRight";
import Counter from "./Counter";

const BlogFetch = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrahmans/portfolio-json/main/blog.json"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  });
  console.log(blogs);
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col col-span-2">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id}></BlogCard>
          ))}
          <div className="flex items-center justify-items-center">
            <Counter></Counter>
          </div>
        </div>
        <BlogRight></BlogRight>
      </div>
    </>
  );
};

export default BlogFetch;
