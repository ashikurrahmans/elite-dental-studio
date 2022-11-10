import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Sidebar from "../Sidebars/Sidebar";

const Blogs = () => {
  const [blogs, setBlog] = useState([null]);

  useEffect(() => {
    fetch("http://localhost:1337/api/blogs?populate=*")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  });

  return (
    <>
      <section className="container mx-auto flex flex-wrap py-6">
        <div className="w-full lg:w-9/12 md:w-9/12 sm:12/12 flex flex-col items-center px-3">
          {blogs.data?.map((blog) => {
            return <BlogCard blog={blog} key={blog.id}></BlogCard>;
          })}
          <Pagination></Pagination>
        </div>
        <div className="lg:block md:block sm:none lg:w-3/12 w-9/12 sm:12/12">
          <Sidebar></Sidebar>
        </div>
      </section>
    </>
  );
};

export default Blogs;
