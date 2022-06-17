import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import BredCumbs from "./../Shared/BredCumbs";
import PageTitle from "./../PageTitle/PageTitle";

const Services = () => {
  const iconsStyle = {
    display: "inline-block",
    color: "green",
    margin: "10px",
    fontSize: "20px",
  };
  return (
    <div>
      <PageTitle title="Our Services"></PageTitle>
      <BredCumbs home="Home" page="Services" url="/services"></BredCumbs>
      <section className="w-5/6 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center mt-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Business Services To Help Grow Your Dental Practice
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="flex bg-white rounded-lg shadow-lg my-12">
          <div className="h-full w-full lg:w-96 md:w-96 md:h-full flex-none bg-cover text-center">
            <a href="#">
              <img
                src="https://www.elitedentalstudiousa.com/wp-content/uploads/2022/01/DSC_0042-1-scaled.jpg"
                alt="avatar"
                className="object-cover w-full h-full sm:block"
              />
            </a>
          </div>
          <div>
            <div className="mt-6">
              <div className="max-w-4xl px-10 py-6 mx-auto ">
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-2xl font-bold text-gray-700 hover:underline"
                  >
                    Crown & Bridge
                  </a>
                  <p className="mt-2 text-gray-600">
                    Our NDX Consultants can help guide you through the Digital
                    evolution with dental programs, data plans and equipment for
                    your practice. NDX not only processes digital data from all
                    major scanning systems, making the transition to digital
                    dentistry easy for your practice, but also provides
                    consulting services to help you choose the scanning system
                    and programs that works best for your practice.
                  </p>
                  <div>
                    <p>
                      <span>
                        <AiFillCheckCircle style={iconsStyle} />
                      </span>
                      Remake Reduction
                    </p>
                    <p>
                      <span>
                        <AiFillCheckCircle style={iconsStyle} />
                      </span>
                      Efficient Turnaround
                    </p>
                    <p>
                      <span>
                        <AiFillCheckCircle style={iconsStyle} />
                      </span>
                      Cost Effective
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div></div>
                  <button className="btn btn-sm">Know More </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-white rounded-lg shadow-md my-12">
          <div className="h-full w-full lg:w-96 md:w-96 md:h-full flex-none bg-cover text-center">
            <a href="#">
              <img
                src="https://www.elitedentalstudiousa.com/wp-content/uploads/2022/01/DSC_0042-1-scaled.jpg"
                alt="avatar"
                className=" object-cover w-full h-full sm:block"
              />
            </a>
          </div>
          <div>
            <div className="mt-6">
              <div className="max-w-4xl px-10 py-6 mx-auto ">
                <div className="mt-2">
                  <a
                    href="#"
                    className="text-2xl font-bold text-gray-700 hover:underline"
                  >
                    Crown & Bridge
                  </a>
                  <p className="mt-2 text-gray-600">
                    Our NDX Consultants can help guide you through the Digital
                    evolution with dental programs, data plans and equipment for
                    your practice. NDX not only processes digital data from all
                    major scanning systems, making the transition to digital
                    dentistry easy for your practice, but also provides
                    consulting services to help you choose the scanning system
                    and programs that works best for your practice.
                  </p>
                  <div>
                    <p>
                      <span>
                        <AiFillCheckCircle style={iconsStyle} />
                      </span>
                      Remake Reduction
                    </p>
                    <p>
                      <span>
                        <AiFillCheckCircle style={iconsStyle} />
                      </span>
                      Efficient Turnaround
                    </p>
                    <p>
                      <span>
                        <AiFillCheckCircle style={iconsStyle} />
                      </span>
                      Cost Effective
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div></div>
                  <button className="btn btn-sm">Know More </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
