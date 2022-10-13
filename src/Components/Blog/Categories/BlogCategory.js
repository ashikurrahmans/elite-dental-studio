import React from "react";
import { Link } from "react-router-dom";

const BlogCategory = ({ description }) => {
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
        </Link>{" "}
        <Link
          to="#"
          className="text-black text-xs bg-[#f0f0f0] hover:bg-[#E6E6E6] rounded-full p-1 mx-1"
        >
          Technology
        </Link>{" "}
        <Link
          to="#"
          className="text-black text-xs bg-[#f0f0f0] hover:bg-[#E6E6E6] rounded-full p-1 mx-1"
        >
          Technology
        </Link>{" "}
        <Link
          to="#"
          className="text-black text-xs bg-[#f0f0f0] hover:bg-[#E6E6E6] rounded-full p-1 mx-1"
        >
          Technology
        </Link>{" "}
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
