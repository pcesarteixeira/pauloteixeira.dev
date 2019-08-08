module.exports = {
  siteMetadata: {
    title: `Paulo Teixeira`,
    author: `Paulo Teixeira`,
    description: `Blog pessoal de Paulo Teixeira`,
    siteUrl: `https://pauloteixeira.dev/`,
    social: {
      twitter: { name: 'Twitter', user: 'pcesarteixeira' },
      linkedin: { name: 'LinkedIn', user: 'in/pcesarteixeira' },
      github: { name: 'GitHub', user: 'pcesarteixeira' },
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/content/assets/svg`
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-custom-image-component`,
            options: {
              componentName: 'image-cover',
              imagePropName: 'src',
              sharpMethod: 'fluid',
              quality: 50,
              maxWidth: 800,
            }
          },
          {
            resolve: "@weknow/gatsby-remark-twitter",
            options: {
              theme: 'dark'
            }
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paulo Teixeira`,
        short_name: `pauloteixeira`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#209CEE`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
} 
