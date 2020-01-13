module.exports = {
  siteMetadata: {
    title: `Gatsby Starter TS Scss`,
    description: `Do Sass! Make the Typescripts!`,
    author: `@jtini`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page-images`,
        path: `${__dirname}/src/pages`,
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'snu1mhw'
        }
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 90,
              maxWidth: 1400,
              linkImagesToOriginal: false,
              sizeByPixelDensity: false,
              showCaptions: true,
              markdownCaptions: true,
              withWebp: true
            }
          }
        ],
        defaultLayouts: {
          default: require.resolve("./src/components/CaseStudyLayout/CaseStudyLayout.tsx")
        }
      }
    }
  ],
}
