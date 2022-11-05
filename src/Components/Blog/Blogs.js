import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar/Sidebar";
import SidebarArticles from "./Sidebar/SidebarHomeArticles";

const Blogs = () => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  });
  const allBlog = blogs.data;

  return (
    <>
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full lg:w-9/12 md:w-9/12 sm:12/12 flex flex-col items-center px-3">
          {allBlog?.map((blog) => {
            return <BlogCard blog={blog.attributes} key={blog.id}></BlogCard>;
          })}
          <Pagination></Pagination>
        </section>
        <div className="lg:block md:block sm:none lg:w-3/12 w-9/12 sm:12/12">
          <Sidebar></Sidebar>
          <SidebarArticles blogs={allBlog}></SidebarArticles>
        </div>
      </div>
    </>
  );
};

export default Blogs;
