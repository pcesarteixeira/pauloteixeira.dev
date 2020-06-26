import React from "react"
import { graphql } from "gatsby"

import Layout from "../_components/Layout"
import SEO from "../_components/Seo"
import ListPosts from "../_components/ListPosts"
import WorkExperience from "../_components/WorkExperience"

import LayoutBase from "../layouts/LayoutBase/LayoutBase"
import SliderPost from "../_components/SliderPost/SliderPost"


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.posts.edges

    return <LayoutBase location={this.props.location}>
      <SEO title="Todos os artigos" />
      <ListPosts title="Últimos artigos" posts={posts} />
    </LayoutBase>
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
