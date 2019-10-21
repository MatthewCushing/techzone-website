// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `The TechZone Coding Club is a great place for the development community `,
        author: `Matt Cushing`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-root-import`,
            options: {
                src: path.join(__dirname, 'src'),
                global: path.join(__dirname, 'src/components/global'),
                reusable: path.join(__dirname, 'src/components/reusable'),
                utility: path.join(__dirname, 'src/components/utility'),
                views: path.join(__dirname, 'src/components/views'),
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-eslint`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-emotion`,
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
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
