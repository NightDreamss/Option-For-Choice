import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Contact",
    url: "/contact",
  },
];

const tempLinks = data.map((link) => {
  return (
    <li
      className="pl-4 mt-1 text-sm leading-relaxed tracking-widest font-semibold text-black md:pr-8 md:text-lg group hover:text-blue-accent-700"
      key={link.id}
    >
      <Link to={link.url}>
        {link.text}
        <div className="mx-auto rounded-full h-0.5 group-hover:bg-blue-accent-700"></div>
      </Link>
    </li>
  );
});

const Links = ({ styleClass }) => {
  const {
    allStrapiProjects: { nodes: project },
  } = useStaticQuery(query);
  const Projects = project.map((links, index) => {
    return (
      links.active === true && (
        <li
          key={index}
          className="bg-gray-50 hover:bg-blue-accent-700 rounded-md"
        >
          <Link
            to={`/${links.slug}`}
            className="block px-4 py-2 text-xs font-medium text-black border-b rounded-b-sm border-gray-300 md:text-sm hover:text-white font-sans"
            role="menuitem"
          >
            {links.title}
          </Link>
        </li>
      )
    );
  });

  return (
    <ul
      className={`page-links font-sans tracking-wider ${
        styleClass ? styleClass : ""
      }`}
    >
      {tempLinks}
      <div className="inline-block my-auto text-left md:m-auto md:relative">
        <div
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          className="service"
        >
          <button className="pl-4 mt-1 text-sm leading-relaxed tracking-widest font-semibold text-black md:pr-8 md:text-lg group hover:text-blue-accent-700 focus:outline-none">
            Projects
          </button>
          <div className="absolute right-0 w-80 mr-4 origin-top-right bg-white rounded-md shadow-lg services">
            {Projects}
          </div>
        </div>
      </div>
    </ul>
  );
};

const query = graphql`
  {
    allStrapiProjects {
      nodes {
        title
        slug
        active
      }
    }
  }
`;

export default Links;
