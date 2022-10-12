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
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {blogs?.map((blog, i) => {
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
