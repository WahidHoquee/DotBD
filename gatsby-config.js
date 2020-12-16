module.exports = {
  siteMetadata: {
    title: 'Dot Bangladesh',
    description: 'For quality Website Development, Software Development and Enterprise Software Solution Dot Bangladesh is the best choice. Providing customized HRM, Accounting and ERP software.',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-playground`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'qcq9j6h8u5o8',
        accessToken: 'gXkyR0QoslswYUqwIs4Vb59X9TGMoqn4U0vmuTWxVYo',
        downloadLocal: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
