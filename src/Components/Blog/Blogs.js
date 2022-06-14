import React from "react";
import PageTitle from "./../PageTitle/PageTitle";
import BredCumbs from "./../Shared/BredCumbs";
import BlogLeft from "./BlogLeft";
import BlogRight from "./BlogRight";

const Blogs = () => {
  return (
    <>
      <PageTitle title="Our Blogs"></PageTitle>
      <BredCumbs title="Our Services" bred={"Home > Articles"}></BredCumbs>

      <div className="flex justify-between mx-auto bg-gray-100">
        <BlogLeft></BlogLeft>
        <BlogRight></BlogRight>
      </div>
    </>
  );
};

export default Blogs;
