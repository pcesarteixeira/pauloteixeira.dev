import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import ListPosts from "../components/ListPosts/ListPosts"
import LayoutBase from "../layouts/LayoutBase/LayoutBase"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.posts.edges

    return <React.Fragment>
      <LayoutBase location={this.props.location}>
        <SEO 
          title="Todos os artigos" 
        />
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