import React from "react";

const SidebarArticles = () => {
  return (
    <>
      <div className=" mb-8 flex flex-wrap">
        <div className="w-full px-4">
          <h2
            className="wow fadeInUp relative pb-5 text-2xl font-semibold text-dark sm:text-[28px] my-4"
            data-wow-delay=".1s"
          >
            Popular Articles
          </h2>
          <span className="inline-block h-[2px] w-20 bg-primary"></span>
        </div>

        <div className="w-[200px] px-4 md:w-1/2 lg:w-[300px] shadow border">
          <div
            className="wow fadeInUp mb-5 flex w-full items-center border-b border-[#F2F3F8] pb-5"
            data-wow-delay=".1s"
          >
            <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full">
              <img
                src="https://res.cloudinary.com/dcqcto7jt/image/upload/v1665637995/elitedental/blog-details-01_coscu9.jpg"
                alt="images"
                className="w-full"
              />
            </div>
            <div className="w-full">
              <h4>
                <a
                  href="#"
                  className="mb-1 inline-block text-base font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg"
                >
                  Create engaging online courses
                </a>
              </h4>
              <p className="text-sm text-body-color">Glomiya Lucy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarArticles;
