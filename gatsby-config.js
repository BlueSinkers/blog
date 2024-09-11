/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Blog V1`,
    siteUrl: `https://abhiramkidambi.com/blog`,  // Updated to reflect the subdirectory
  },
  pathPrefix: `/blog`,  // Added to support deployment to a subdirectory
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Configure any specific options if needed
      },
    },
    "gatsby-plugin-mdx",
  ],
};
