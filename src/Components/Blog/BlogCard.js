import React from "react";

const BlogCard = (props) => {
  return (
    <>
      <div className=" px-4 mb-6 max-w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
          <div className="w-2/6">
            <img
              className="object-cover h-full w-full"
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
            />
          </div>
          <div className="w-4/6 p-5">
            <h2 className="text-white leading-normal text-lg">
              How To Boost Your Traffic Of Your Blog And Destroy The Competition
            </h2>
            <div className="flex flex-wrap justify-between items-center mt-6">
              <div className="inline-flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://randomuser.me/api/portraits/men/8.jpg" />
                </div>
                <div className="flex-1 pl-2">
                  <h2 className="text-white mb-1">Jonathan Mithu</h2>
                  <p className="text-white opacity-50 text-xs">May 18</p>
                </div>
              </div>
              <span className="text-white opacity-50">
                <svg
                  className="fill-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 459 459"
                >
                  <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
