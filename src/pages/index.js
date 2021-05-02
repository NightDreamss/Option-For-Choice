import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import Projects from "../components/Modules/Projects";
import Hero from "../components/Modules/Hero";
import Content from "../components/Modules/Content";
import Donate from "../components/Modules/Donate";

const IndexPage = ({ data }) => {
  const {
    allStrapiHero: { nodes: hero },
    allStrapiContent: { nodes: content },
    allStrapiDonation: { nodes: donation },
    allStrapiHomeProject: { nodes: homeProject },
    allStrapiProjects: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Hero hero={hero} />
      <Content content={content} />
      <Donate donation={donation} />
      <Projects homeProject={homeProject} projects={projects} />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiHero {
      nodes {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(
              webpOptions: { quality: 80 }
              quality: 80
              layout: CONSTRAINED
              formats: WEBP
            )
          }
        }
      }
    }
    allStrapiContent {
      nodes {
        images {
          url
          id
          name
          alternativeText
        }
        title
        description
        content {
          description
          id
          title
        }
      }
    }
    allStrapiDonation {
      nodes {
        title
        description
      }
    }
    allStrapiHomeProject {
      nodes {
        title
        description
      }
    }
    allStrapiProjects {
      nodes {
        title
        slug
        active
        description
        cardImage {
          childImageSharp {
            gatsbyImageData(
              webpOptions: { quality: 80 }
              quality: 80
              layout: CONSTRAINED
              formats: WEBP
            )
          }
        }
      }
    }
  }
`;

export default IndexPage;
