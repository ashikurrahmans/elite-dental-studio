import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar/Sidebar";
import SidebarArticles from "./Sidebar/SidebarHomeArticles";

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
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full lg:w-9/12 md:w-9/12 sm:12/12 flex flex-col items-center px-3">
          {blogs.data?.map((blog) => {
            return <BlogCard blog={blog} key={blog.id}></BlogCard>;
          })}
          <Pagination></Pagination>
        </section>
        <div className="lg:block md:block sm:none lg:w-3/12 w-9/12 sm:12/12">
          <Sidebar></Sidebar>
          <SidebarArticles blogs={blogs?.data}></SidebarArticles>
        </div>
      </div>
    </>
  );
};

export default Blogs;
