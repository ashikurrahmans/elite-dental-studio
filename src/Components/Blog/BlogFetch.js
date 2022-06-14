import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
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
      <div className="flex flex-col">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id}></BlogCard>
        ))}
        <Counter></Counter>
      </div>
    </>
  );
};

export default BlogFetch;
