import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Lottie from "../constants/Lottie";
import Title from "../constants/Title";
import ReactMarkdown from "react-markdown";

const ProjectTemplate = ({ data }) => {
  const { title, content, donationLink, youtubeEmbededLink } = data.project;
  return (
    <Layout>
      <section className="relative bg-gray-100">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto container md:px-24 lg:px-8 lg:py-20">
          <iframe
            className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg lg:h-72 h-60"
            width="100%"
            height="100%"
            src={youtubeEmbededLink}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen"
          ></iframe>

          <div className="mb-16 md:mb-0 sm:mx-auto md:text-center">
            <Title title={title} normal />
          </div>
        </div>
      </section>
      <section className="container md:mx-auto sm:mx-auto px-4 md:px-24 lg:px-8 py-6 ">
        <p className="mb-5 text-base text-gray-700 md:text-lg font-serif tracking-wider">
          <ReactMarkdown source={content} />
        </p>
      </section>
      <section className="relative bg-gray-100">
        <div className="absolute inset-x-0 top-0">
          <svg
            viewBox="0 0 224 12"
            transform="rotate(180)"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div className="container md:mx-auto sm:mx-auto px-4 py-16 md:px-24 lg:px-8 lg:py-20 ">
          <div className="flex flex-col">
            <div className="mb-10 md:mb-12">
              <div className="py-4">
                <Title dot title="How to Donate" />
              </div>
              <p className="text-base text-gray-700 md:text-lg font-serif tracking-wider">
                You can donate via bank transfers or online payments with
                GoFundMe down below.
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="p-6 rounded shadow-xl sm:p-16 bg-white">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 lg:pr-5">
                  <div className="inline-flex lg:-mt-4">
                    <div className="lg:mr-2 flex justify-end flex-col">
                      <Title title="Online via" highlight="GoFundMe" normal />
                    </div>

                    <div className="w-1/5 lg:block hidden">
                      <Lottie online />
                    </div>
                  </div>
                  <p className="pb-6 pt-2 font-serif tracking-wider">
                    All online donations via the GoFundMe process are accounted
                    and tracked by GoFundMe to keep records of all donations for
                    accountability.
                  </p>
                </div>
                <div className="lg:w-1/2 my-auto">
                  <embed
                    className="w-full h-60 sm:h-56"
                    src={donationLink}
                    type="text/html"
                  ></embed>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-12">
            <div className="p-6 rounded shadow-xl sm:p-16 bg-white">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 lg:pr-5">
                  <div className="inline-flex">
                    <div className="my-auto lg:mr-2">
                      <Title title="Bank Transfer" normal />
                    </div>
                    <div className="w-1/3 lg:block hidden my-auto">
                      <Lottie bank />
                    </div>
                  </div>
                  <p className="pb-6 pt-2 font-serif tracking-wider">
                    All donations via the bank transfers are documented to keep
                    records of all donations for accountability.
                  </p>
                </div>
                <div className="lg:w-1/2 my-auto">
                  <p className="font-serif">
                    <span className="text-sm text-blue-accent-700">
                      Bank Info:
                    </span>{" "}
                    Options for Choices - Scotiabank Savings Park and Richmond
                    Streets. Port of Spain. Trinidad and Tobago
                    <br />
                    <span className="text-sm text-blue-accent-700">
                      Account No:
                    </span>{" "}
                    74815 4005857
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

//  <div className="w-full">
//    <div className="flex">
//      <div className="flex flex-col items-center mr-4">
//        <div>
//          <div className="flex items-center justify-center w-10 h-10 border shadow-md rounded-full">
//            <HiOutlineArrowDown className="text-blue-accent-700" />
//          </div>
//        </div>
//        <div className="w-px h-full bg-blue-100"></div>
//      </div>
//      <div className="pt-1 pb-6">
//        <p className="mb-1 text-lg font-bold font-sans">Step 1</p>
//        <p className="text-gray-700 font-serif tracking-wider">
//          All recipes are written using certain conventions, which define the
//          characteristics of common ingredients. The rules vary from place to
//          place.
//        </p>
//      </div>
//    </div>
//    <div className="flex">
//      <div className="flex flex-col items-center mr-4">
//        <div>
//          <div className="flex items-center justify-center w-10 h-10 border shadow-md rounded-full">
//            <HiOutlineArrowDown className="text-blue-accent-700" />
//          </div>
//        </div>
//        <div className="w-px h-full bg-blue-100"></div>
//      </div>
//      <div className="pt-1 pb-6">
//        <p className="mb-1 text-lg font-bold font-sans">Step 2</p>
//        <p className="text-gray-700 font-serif tracking-wider">
//          The first mate and his Skipper too will do their very best to make the
//          others comfortable in their tropic island nest. Michael Knight a young
//          loner.
//        </p>
//      </div>
//    </div>
//    <div className="flex">
//      <div className="flex flex-col items-center mr-4">
//        <div>
//          <div className="flex items-center justify-center w-10 h-10 border shadow-md rounded-full">
//            <HiOutlineArrowDown className="text-blue-accent-700" />
//          </div>
//        </div>
//        <div className="w-px h-full bg-blue-100"></div>
//      </div>
//      <div className="pt-1 pb-6">
//        <p className="mb-1 text-lg font-bold font-sans">Step 3</p>
//        <p className="text-gray-700 font-serif tracking-wider">
//          Tell them I hate them. Is the Space Pope reptilian!? Tell her she looks
//          thin. Hello, little man. I will destroy you!
//        </p>
//      </div>
//    </div>
//    <div className="flex">
//      <div className="flex flex-col items-center mr-4">
//        <div>
//          <div className="flex items-center justify-center w-10 h-10 border shadow-md rounded-full">
//            <HiOutlineArrowDown className="text-blue-accent-700" />
//          </div>
//        </div>
//        <div className="w-px h-full bg-blue-100"></div>
//      </div>
//      <div className="pt-1 pb-6">
//        <p className="mb-1 text-lg font-bold font-sans">Step 4</p>
//        <p className="text-gray-700 font-serif tracking-wider">
//          If one examines precultural libertarianism, one is faced with a choice:
//          either accept rationalism or conclude that context is a product.
//        </p>
//      </div>
//    </div>
//    <div className="flex">
//      <div className="flex flex-col items-center mr-4">
//        <div>
//          <div className="flex items-center justify-center w-10 h-10 border shadow-md rounded-full">
//            <HiOutlineCheck className="text-blue-accent-700 text-lg" />
//          </div>
//        </div>
//      </div>
//      <div className="pt-1">
//        <p className="text-lg font-bold font-sans">Success</p>
//        <p className="text-gray-700"></p>
//      </div>
//    </div>
//  </div>;

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
      title
      content
      donationLink
      youtubeEmbededLink
    }
  }
`;

export default ProjectTemplate;
