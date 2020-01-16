module.exports = {
  siteMetadata: {
    title: `Jeremy Tinianow`,
    description: `Hi, I’m Jeremy. I’m a designer who believes in making things better than they need to be.`,
    author: `@jtinianow`,
    // TODO: Change this before going live
    canonicalUrl: 'https://jtini.github.io/tinyeahno-2020/'
  },
  pathPrefix: '/tinyeahno-2020',
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
        name: `tinyeahno-2020`,
        short_name: `tinyeahno`,
        start_url: `/`,
        background_color: `#FFD580`,
        theme_color: `#FFD580`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
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
              maxWidth: 1200,
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
