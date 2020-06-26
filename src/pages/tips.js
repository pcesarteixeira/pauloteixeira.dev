import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import ListPosts from "../components/ListPosts"
import WorkExperience from "../components/WorkExperience"

import LayoutBase from "../layouts/LayoutBase/LayoutBase"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.posts.edges

    return <LayoutBase location={this.props.location}>
      <SEO title="Dicas" />
      <div>dicas</div>
    </LayoutBase>

      // <Layout location={this.props.location} title={siteTitle}>
        // <SEO title="Todos os artigos" />
        {/* <ListPosts title="Últimos artigos" posts={posts} />
        <WorkExperience /> */}
      // </Layout>
    // )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    tips: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "tip"}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            cover
            date(formatString: "DD/MM/YYYY")
            title
            description
            category
          }
          id
        }
      }
    }
    posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "post"}}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            cover
            date(formatString: "DD/MM/YYYY")
            title
            description
            tags
          }
          id
        }
      }
    }
  }
`
