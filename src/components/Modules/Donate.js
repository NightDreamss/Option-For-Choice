import React from "react";
import { Link } from "gatsby";
import Title from "../../constants/Title";

const Donate = ({ donation }) => {
  const title = donation[0].title;
  const description = donation[0].description;
  return (
    <div className="bg-white">
      <div className="relative mt-0.1">
        <div className="top-0 mt-0.1 left-0 right-0 w-full absolute pointer-event-none overflow-hidden h-32">
          <svg
            className="overflow-hidden mt-0.1"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none slice"
            version="1.1"
            transform="rotate(180)"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto container md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:flex-row py-12">
          <div className="my-auto lg:w-1/2 pb-4 lg:pb-0 lg:mr-5">
            <Title title={title} normal />
            <p className="mb-2 text-base text-gray-600 font-serif tracking-wider mt-2">
              {description}
            </p>
          </div>

          <div className="text-gray-700 lg:text-base text-sm lg:w-1/2">
            <p className="text-lg text-blue-accent-700 mb-2 mt-4">
              Bank Transfer
            </p>
            <p className="font-serif text-gray-600">
              <span className="text-sm text-black">Bank Info:</span> Options for
              Choices - Scotiabank Savings Park and Richmond Streets. Port of
              Spain. Trinidad and Tobago
              <br />
              <span className="text-sm text-black">Account No:</span> 74815
              4005857
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bottom-0 left-0 right-0 w-full absolute pointer-event-none overflow-hidden h-32">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none slice"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Donate;
