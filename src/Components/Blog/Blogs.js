import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar/Sidebar";
// import useFatchData from "./../../hooks/useFatchData";

const Blogs = () => {
  const [blogs, setBlog] = useState([]);
  // const { data } = useFatchData(
  //   "https://ashikurrahmans.github.io/elite-data/blogs.json"
  // );

  // console.log("blog", data);

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
        <section className="w-full lg:w-9/12 md:w-9/12 sm:12/12 flex flex-col items-center px-3">
          {blogs?.map((blog, i) => {
            return <BlogCard blog={blog} key={i}></BlogCard>;
          })}
          <Pagination></Pagination>
        </section>
        <div className="lg:block md:block sm:none">
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
  );
};

export default Blogs;
