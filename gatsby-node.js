const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
    {
      posts: 
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___date], 
            order: DESC
          }, 
          limit: 1000, 
          filter: {frontmatter: {type: {eq: "post"}}}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      tips: 
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___date], 
            order: DESC
          }, 
          limit: 1000, 
          filter: {frontmatter: {type: {eq: "tip"}}}
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.posts.edges
  const tips = result.data.tips.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  tips.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`
    })
  }
}
