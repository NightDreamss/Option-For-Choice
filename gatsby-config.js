module.exports = {
  siteMetadata: {
    title: "Option For Choices ",
    description:
      "Options for Choices was founded in 2010 by Caron Greaves as one of her joys and passion. The NGO was created in mind to uplift and improve the social economic challenges youths are faced with, in the Laventille community to improving their future through quality education",
    author: "@Caron Greaves",
    dev: "@BrandonLitren",
    siteUrl: "https://www.optionsforchoices.co.tt",
    keywords:
      "trinidad, tobago, website, NGO, non-government organization, Laventille, Success RC School",
  },
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/public/**/*.html": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/public/page-data/*": [
            "cache-control: public",
            "cache-control: max-age=0",
            "cache-control: must-revalidate",
          ],
          "/static/*": [
            "cache-control: public",
            "cache-control: max-age=31536000",
            "cache-control: immutable",
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-smoothscroll",
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-scroll-indicator",
      options: {
        color: "linear-gradient(to right, #a1c4ff, #2962ff)",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Options For Choices",
        short_name: "OFC",
        start_url: "/",
        background_color: "#f5f5f5",
        theme_color: "#2962ff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
        // This path is relative to the root of the site.
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.optionsforchoices.co.tt",
        sitemap: "https://www.optionsforchoices.co.tt/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `${process.env.API_URL || "http://localhost:1337"}`,
        queryLimit: 1000,
        contentTypes: [`projects`],
        singleTypes: [`hero`, `content`, `home-project`, `donation`],
      },
    },
  ],
};
