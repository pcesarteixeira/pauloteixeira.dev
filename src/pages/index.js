import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import ListPosts from "../components/ListPosts/ListPosts"
import LayoutBase from "../layouts/LayoutBase/LayoutBase"
import TipsHome from "../components/TipsHome/TipsHome"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.posts.edges
    const tips = data.tips.group

    return <React.Fragment>
      <LayoutBase location={this.props.location}>
        <SEO title="Todos os artigos" />
        <TipsHome tips={tips} />
        <ListPosts posts={posts} />
      </LayoutBase>
    </React.Fragment>
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
  tips: allMarkdownRemark(limit: 1000, filter: {frontmatter: {type: {eq: "tip"}}}) {
    group(field: frontmatter___category) {
      totalCount
      fieldValue
    }
    totalCount
  }
  posts: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "post"}}}) {
    edges {
      node {
        timeToRead
        excerpt(pruneLength: 250)
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