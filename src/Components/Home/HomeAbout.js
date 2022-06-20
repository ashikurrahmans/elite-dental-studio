import React from "react";

const HomeAbout = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="text-red-600">About</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Elite Dental Studio USA
            </h1>
            <p className="mb-8 leading-relaxed text-black">
              The leading lab authority on digital impressions. Founded in 1974,
              Pittman Dental Laboratory has built a reputation of quality and
              service utilizing the very best in technology. As a Family owned
              company for over 45 Years we value our customers both Practice and
              Patient, we vow to use only the highest quality materials and
              craftmanship because our success depends on your success.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Know More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ml-12">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.pittmandental.com/hubfs/Pittman%20-%20May%202019%20Folder/Images/9X2B8093.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
