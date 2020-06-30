import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import LayoutBase from "../layouts/LayoutBase/LayoutBase"
import LayoutPost from "../components/Post/Post"

class BlogPostTemplate extends React.Component {
  render() {
    const { post } = this.props.data

    return <React.Fragment>
      <LayoutBase location={this.props.location}>
        <SEO 
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.cover}
        />
        <LayoutPost post={post} />
      </LayoutBase>
    </React.Fragment>
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      htmlAst
      fields {
        slug
      }
      frontmatter {
        cover
        tags
        title
        subtitle
        date(formatString: "DD/MM/YYYY")
        description
      }
    }
  }
`
