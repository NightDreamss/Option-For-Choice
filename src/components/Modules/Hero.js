import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import Title from "../../constants/Title";

const Hero = ({ hero }) => {
  const { title, description, image } = hero[0];
  const Image = getImage(image.childImageSharp.gatsbyImageData);
  const lastIndex = title.lastIndexOf(" ");
  const lastWord = title.substring(lastIndex + 1);
  const newTitle = title.substring(0, lastIndex);
  return (
    <main className="bg-gray-100 -mt-16 z-0">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 min-h-screen">
        <div
          data-sal="fade-in"
          data-sal-duration="1500"
          data-sal-easing="ease"
          className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
        >
          <svg
            className="absolute left-0 hidden h-full text-gray-100 transform -translate-x-1/2 lg:block z-10"
            viewBox="0 0 100 100"
            fill="currentColor"
            version="1.1"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H90L50 100H0L50 0Z"></path>
          </svg>
          <GatsbyImage
            className="lg:object-cover lg:w-full w-3/5 mx-auto rounded shadow-lg lg:rounded-none lg:shadow-none h-96 lg:h-full"
            image={Image}
            alt="University Graduates Students"
          />
          <div className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full bg-blue-accent-700 absolute right-0 top-0 z-0 opacity-20 lg:block hidden" />
        </div>
        <div
          className="relative flex flex-col items-start container w-full mx-auto md:px-8 px-4 my-auto lg:pt-0 pt-4"
          data-sal="slide-right"
          data-sal-delay="600"
          data-sal-duration="600"
          data-sal-easing="ease"
        >
          <div className="mb-12 lg:my-40 lg:max-w-lg">
            <div className="mb-4">
              <Title title={newTitle} normal highlight={lastWord} />
            </div>
            <p className="mb-5 text-base text-gray-600 md:text-lg font-serif tracking-wider">
              {description}
            </p>
            <div className="flex items-center">
              <button
                onClick={() => scrollTo("#content")}
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-accent-400 hover:bg-blue-accent-700 focus:shadow-outline focus:outline-none"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
