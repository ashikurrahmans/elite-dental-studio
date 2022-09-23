import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar/Sidebar";

const Blogs = () => {
  const [blogData, setBlog] = useState([]);

  useEffect(() => {
    fetch("https://ashikurrahmans.github.io/elite-data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  });
  return (
    <>
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {blogData?.map((blog, i) => {
            return <BlogCard blog={blog} key={i}></BlogCard>;
          })}
          <Pagination></Pagination>
        </section>
        <Sidebar></Sidebar>
      </div>
    </>
  );
};

export default Blogs;
