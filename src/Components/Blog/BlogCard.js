import React from "react";

const BlogCard = (props) => {
  return (
    <>
      <div className="flex rounded-lg shadow-md my-12 bg-white">
        <div className="h-full w-full lg:w-96 md:w-96 md:h-full flex-none bg-cover text-center">
          <a href="/">
            <img
              src={props?.img}
              alt="avatar"
              className=" object-cover w-96 h-96 sm:block"
            />
          </a>
        </div>

        <div className="mt-6">
          <div className="max-w-4xl px-10 py-6 mx-auto ">
            <div className="flex items-center justify-between">
              <span className="font-light text-gray-600">Jun 1, 2020</span>
              <div className="badge badge-primary p-2">
                <a href="#">Laravel</a>
              </div>
            </div>
            <div className="mt-2">
              <a
                href="#"
                className="text-2xl font-bold text-gray-700 hover:underline"
              >
                {props?.title}
              </a>
              <p className="mt-2 text-gray-600">{props?.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a href="#" className="flex items-center">
                <span className="mr-2">Author : </span>
                <h1 className="font-bold text-gray-700 hover:underline">
                  Alex John
                </h1>
              </a>
              <button className="btn btn-sm">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
