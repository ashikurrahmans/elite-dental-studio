import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogCategory = () => {
  // const [blogs, setBlog] = useState([null]);

  // useEffect(() => {
  //   fetch("http://localhost:1337/api/blogs?populate=*")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBlog(data);
  //     });
  // });

  return (
    <>
      <div
      // className={`description?.length >= 50 ? "pb-4 md:flex-none sm:flex-none" : "md:flex-none sm:flex-none" `}
      >
        <Link
          to="#"
          className="text-black text-xs bg-[#f0f0f0] hover:bg-[#E6E6E6] rounded-full p-1 mx-1"
        >
          Technology
        </Link>
        <Link
          to="#"
          className="text-black text-xs bg-[#f0f0f0] hover:bg-[#E6E6E6] rounded-full p-1 mx-1"
        >
          Technology
        </Link>
        <Link
          to="#"
          className="text-black text-xs bg-[#f0f0f0] hover:bg-[#E6E6E6] rounded-full p-1 mx-1"
        >
          Technology
        </Link>
        <Link
          to="#"
          className="text-black text-xs bg-[#f0f0f0] hover:bg-[#E6E6E6] rounded-full p-1 mx-1"
        >
          Technology
        </Link>
        <Link
          to="#"
          className="text-black text-xs bg-[#f0f0f0] hover:bg-[#E6E6E6] rounded-full p-1 mx-1"
        >
          Technology
        </Link>
      </div>
    </>
  );
};

export default BlogCategory;
