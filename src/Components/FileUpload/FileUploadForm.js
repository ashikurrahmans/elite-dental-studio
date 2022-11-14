import React from "react";

const FileUploadForm = () => {
  return (
    <>
      <div class="w-full flex items-center justify-center my-12">
        <div class=" bg-white dark:bg-gray-800  lg:px-28 px-8">
          <div class="md:flex items-center">
            <div class="md:w-72 flex flex-col">
              <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Choose Your File
              </label>
              <input
                tabindex="0"
                type="file"
                class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
              />
            </div>
            <div class="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Email Address
              </label>
              <input
                tabindex="0"
                arial-label="Please input email address"
                type="name"
                class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div class="md:flex items-center mt-8">
            <div class="md:w-72 flex flex-col">
              <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Doctors First Name
              </label>
              <input
                tabindex="0"
                arial-label="Please input company name"
                type="name"
                class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input company name"
              />
            </div>
            <div class="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Doctors Last Name
              </label>
              <input
                tabindex="0"
                arial-label="Please input country name"
                type="name"
                class="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
              />
            </div>
          </div>
          <div>
            <div class="w-full flex flex-col mt-8">
              <label class="text-base font-semibold leading-none text-gray-800 dark:text-white">
                Message
              </label>
              <textarea
                tabindex="0"
                aria-label="leave a message"
                type="name"
                class="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
              ></textarea>
            </div>
          </div>

          <div class="flex items-center justify-center w-full">
            <button class="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#83cf25] rounded hover:bg-[#62ae05] focus:ring-2 focus:ring-offset-2 focus:bg-[#6DB417] focus:outline-none">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUploadForm;
