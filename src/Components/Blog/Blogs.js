import React from "react";
import PageTitle from "./../PageTitle/PageTitle";
import BredCumbs from "./../Shared/BredCumbs";
import BlogFetch from "./BlogFetch";

const Blogs = () => {
  return (
    <>
      <PageTitle title="Our Blogs"></PageTitle>
      <BredCumbs home="Home" page="Blogs" url="/blogs"></BredCumbs>
      <div className="py-12 w-9/12 mx-auto lg:w-10/12">
        <BlogFetch></BlogFetch>
      </div>
    </>
  );
};

export default Blogs;
