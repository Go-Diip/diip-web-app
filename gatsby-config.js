let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

console.log(
  `This WordPress Endpoint is used: '${process.env.GATSBY_WORDPRESS_URL}'`
)

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.godiip.com`,
  },
  flags: {
    // FAST_DEV: true,
    // DEV_SSR: false,
    // FAST_REFRESH: true,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-gatsby-cloud`,
    // Make sure this plugin is first in the array of plugins
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-111111111-1",
    //     // this option places the tracking script into the head of the DOM
    //     head: true,
    //     // other options
    //   },
    // },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.godiip.com",
        sitemap: "https://www.godiip.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Poppins`,
                variants: [`400`, `500`, `600`, `700`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Diip`,
        short_name: `Diip`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `#001EF5`,
        icon: `src/assets/godiip-favicon.png`, // This path is relative to the root of the site.
      },
    },
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: `${process.env.GATSBY_WORDPRESS_URL}/graphql`,
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },

    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `DM Sans\:100,400,500,700`,
    //       `Merriweather\:100,300,400,600,700`,
    //     ],
    //     display: "swap",
    //   },
    // },
  ],
}
