import { React, useRef } from "react";
import PageTitle from "../PageTitle/PageTitle";
import BredCumbs from "./../Shared/BredCumbs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  let form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pi7hzkr",
        "template_c6y6nys",
        form.current,
        "UWPT-zbO6jI5U64NU"
      )
      .then(
        (result) => {
          toast.success("Sending Email");
        },
        (error) => {
          toast.error("Sending Failed");
        }
      );
  };

  return (
    <div>
      <PageTitle title="Contact US"></PageTitle>
      <BredCumbs home="Home" page="Contact" url="/contact"></BredCumbs>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-black text-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  Contact Phone Number
                </h2>
                <p className="leading-relaxed text-base">1 (844) 686-5534</p>
                <p className="leading-relaxed text-base">
                  Call us if you have query in your mind.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-black text-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg  font-medium title-font mb-2 text-white">
                  Our Email Address
                </h2>
                <p className="leading-relaxed text-base">
                  Info@elitedentalstudiousa.com
                </p>
                <p className="leading-relaxed text-base">
                  Send your query our team will reply you.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg bg-black text-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  Our Address
                </h2>
                <p className="leading-relaxed text-base">
                  2445 Hilton Drive, Suite 100B, Gainesville <br /> GA 30501,
                  United State
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pb-20 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 w-full h-96 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.9078926467473!2d-83.84838328528049!3d34.2764008805455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5f6a7e6da0c47%3A0xafbf52cae6440d7f!2sElite%20Dental%20Studio%20USA!5e0!3m2!1sen!2sbd!4v1656321252293!5m2!1sen!2sbd"
            ></iframe>
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <input
                // onClick={handleForm}
                type="submit"
                value="Submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
              />
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Contact;
