import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Title from "../../constants/Title";

const Content = ({ homeProject, projects }) => {
  const { title, description } = homeProject[0];
  return (
    <section className="bg-gray-100">
      <div className="px-4 py-16 mx-auto container md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:flex-row md:mb-8">
          <div className="lg:w-1/2 mb-4 lg:mr-5 lg:mb-2">
            <Title title={title} underline />
          </div>

          <p className="text-gray-700 lg:text-base text-sm lg:w-1/2 font-serif tracking-wider">
            {description}
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          {projects.map((card, index) => {
            return (
              card.active === true && (
                <Link
                  to={`/${card.slug}`}
                  key={index}
                  className="relative overflow-hidden group shadow-xl hover:shadow-2xl bg-white rounded-lg"
                  data-sal="slide-down"
                  data-sal-duration="600"
                  data-sal-easing="ease"
                >
                  <div className=" p-3">
                    <p className="text-lg font-bold text-black overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {card.title}
                    </p>
                  </div>

                  <article className="relative overflow-hidden transition duration-200 transform rounded-b-lg shadow group-hover:shadow-lg">
                    <GatsbyImage
                      image={card.cardImage.childImageSharp.gatsbyImageData}
                      alt={card.title}
                      className="rounded-b-lg h-56 md:h-64 xl:h-80 lg:w-full object-cover"
                    />
                    <div className="absolute inset-0 p-3 transition-opacity duration-200 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 rounded">
                      <p className="text-base text-gray-200 font-serif tracking-wider">
                        {card.description}
                      </p>
                    </div>
                  </article>
                </Link>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
