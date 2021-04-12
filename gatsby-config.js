module.exports = {
  siteMetadata: {
    title: `Build Your Best Team`,
    description: `Game Plan is a Fantast Sports Platform in Bangladesh providing world class fantasy sports experience to the crazy sports fan of Bangladeh.`,
    author: `@zahidhasan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gameplan-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
