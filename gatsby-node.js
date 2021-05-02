const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      projects: allStrapiProjects {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.projects.nodes.forEach((project) => {
    createPage({
      path: `/${project.slug}`,
      component: path.resolve(`src/templates/projects-template.js`),
      context: {
        slug: project.slug,
      },
    });
  });
};
