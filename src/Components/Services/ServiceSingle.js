import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

const ServiceSingle = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ashikurrohman/boots-data/main/elite-services.json"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  const service = services.find((item) => item.id === parseInt(id));

  let checkIcon = (
    <span>
      <FiCheckCircle
        style={{
          display: "inline",
          marginRight: "6px",
          fontSize: "22px",
          color: "green",
        }}
      />
    </span>
  );

  return (
    <>
      <div className="relative">
        <img
          src="https://www.dentalgetaways.com.au/wp-content/uploads/2015/11/old-smiling-couple.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className=" flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12"></div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="p-7 sm:p-10">
                  <button className="btn no-animation bg-black text-white font-bold">
                    Schedule a Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-center py-12">
        <h2 className="text-3xl text-[#0F8BBC] font-semibold">
          Dental Implants in San Jose to Replace Missing Teeth
        </h2>
        <h3 className="text-xl text-black my-2">
          We Offer Both Titanium and Ceramic Metal-Free Dental Implants Here in
          San Jose.
        </h3>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
              SPECIAL OFFER
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              30% Off Dental Implant Denture
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Schedule Today
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.serenitydentalsanjose.com/wp-content/uploads/2019/09/dental-implants-san-jose-5.jpg"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.serenitydentalsanjose.com/wp-content/uploads/2019/09/san-jose-dental-implants-800x800-750x750.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-16">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
              WHAT ARE DENTAL IMPLANTS?
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              A Permanent Tooth Replacement Solution
            </h1>
            <p className="mb-8 leading-relaxed">
              A dental implant is a small ceramic or titanium screw secured into
              the jawbone which serves as the anchor or tooth root of the
              replacement tooth. Both the Ceramic Metal-Free and Titanium
              implants are a biocompatible material that fuses with the jaw bone
              which helps to stabilize the implant and prevent facial changes
              that can occur with bone loss.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Schedule Today
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-300">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-9/12 mx-auto py-14">
          <div className="text-xl text-black">
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Permanent Tooth Replacement
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Improved Chewing Ability
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
          </div>
          <div className="text-xl text-black">
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Permanent Tooth Replacement
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Improved Chewing Ability
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
          </div>
          <div className="text-xl text-black">
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Permanent Tooth Replacement
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Improved Chewing Ability
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
            <p className="my-3 bg-gray-100 rounded-lg shadow flex p-2">
              {checkIcon}
              Natural Look and Function
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
              ALL-ON-4 SAME-DAY DENTAL IMPLANTS
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              A Permanent Tooth Replacement Solution
            </h1>
            <p className="mb-8 leading-relaxed">
              With our All-on-4, Same-Day dental implant procedure, you can walk
              in with missing teeth and walk out with a full set. We use the
              One-Visit Dental implant treatment specifically to replace the
              entire upper or lower set of teeth by using 4 dental implants
              which serve as an anchor for a bridge or overdenture. This dental
              implant procedure is an alternative to dentures and can replace
              all of your damaged and missing teeth in just one visit to our
              dental office here in San Jose.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.serenitydentalsanjose.com/wp-content/uploads/2019/09/dental-implants-san-jose-5.jpg"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.serenitydentalsanjose.com/wp-content/uploads/2019/09/san-jose-dental-implants-800x800-750x750.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-16">
            <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-900">
              IMPLANT RETAINED DENTURES
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Do You Have Dentures That Slip and Move While You Talk Chew and
              Smile?
            </h1>
            <p className="mb-8 leading-relaxed">
              The Benefits of Dental Implant Retained Dentures. More Natural
              Looking – Dentures that are placed over dental implants look,
              feel, and function more like your natural teeth. The denture is
              securely anchored to the implant which allows you to smile and
              chew just as you would with your natural teeth. No Movement – When
              dentures are anchored to dental implants, they will not move,
              which is not the case with removable dentures. Removable dentures
              are fixed to the gums with adhesives that are not effective and
              will allow the dentures to slip which will affect your smile and
              ability to chew. Improved Chewing Ability – With dental implant
              retained dentures, you’ll chew just like you would with natural
              teeth.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-blue-300 py-12">
        <div className="w-9/12 mx-auto">
          <div className="flex items-center text-black text-bold gap-12">
            <p className="text-2xl">
              SCHEDULE AN APPOINTMENT FOR A COMPLIMENTARY CONSULTATION
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Schedule Today
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className="my-8">
          <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
            <h1 className="text-4xl font-semibold leading-none text-center">
              What our customers are saying about us
            </h1>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
            <div className="flex flex-col items-center mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
              <p>Leroy Jenkins</p>
            </div>
            <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                  ></path>
                </svg>
                <p className="px-6 py-1 text-lg italic">
                  Accusantium illum cupiditate harum asperiores iusto quos quasi
                  quis quae! Fugit doloribus, voluptatum quidem magnam velit
                  excepturi nobis, reprehenderit ducimus incidunt quisquam quae
                  veritatis, quos iure harum.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
                >
                  <path
                    fill="currentColor"
                    d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                  ></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
              <p>Leroy Jenkins</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ServiceSingle;
