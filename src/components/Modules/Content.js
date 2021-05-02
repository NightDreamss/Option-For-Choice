import React from "react";
import Title from "../../constants/Title";

const Content = ({ content }) => {
  const { title, description, images, content: history } = content[0];
  return (
    <div className="bg-gray-100" id="content">
      <div className="px-4 py-16 mx-auto container md:px-24 lg:px-8 lg:py-20">
        <div className="mb-10 md:mb-12">
          <div className="mb-2">
            <Title dot title={title} />
          </div>
          <p className="text-base text-gray-700 md:text-lg font-serif tracking-wider">
            {description}
          </p>
        </div>
        <div className="lg:grid gap-8 lg:grid-cols-3 ">
          <div
            className="grid grid-cols-2 gap-5 mb-4 lg:mb-0"
            data-sal="fade-in"
            data-sal-duration="600"
            data-sal-easing="ease"
          >
            {images.map((image, index) => {
              return index === 0 ? (
                <div
                  className=" h-56 col-span-2 rounded-md shadow-lg"
                  key={index}
                >
                  <img
                    alt={image.alternativeText || image.name}
                    className="object-cover object-center w-full h-full rounded-md"
                    src={image.url}
                    formats={["auto", "webp"]}
                  />
                </div>
              ) : (
                <div className=" h-48 rounded-md shadow-lg" key={index}>
                  <img
                    alt={image.alternativeText || image.name}
                    className="object-cover object-center w-full h-full rounded-md"
                    src={image.url}
                  />
                </div>
              );
            })}
          </div>
          <div
            className="flex flex-col justify-center col-span-2"
            data-sal="slide-down"
            data-sal-delay="400"
            data-sal-duration="600"
            data-sal-easing="ease"
          >
            {history.map((data) => {
              return (
                <div
                  className="pb-4 mb-4 border-b border-blue-100"
                  key={data.id}
                >
                  <h6 className="mb-2 font-semibold leading-5 text-black font-sans">
                    {data.title}
                  </h6>
                  <p className="text-sm text-gray-700 font-serif tracking-wider">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
