import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import LayoutBase from "../layouts/LayoutBase/LayoutBase"
import ListTips from "../components/ListTips/ListTips"
// import LayoutPost from "../components/Post/Post"

class PageListTipsTemplate extends React.Component {
  render() {
    const { tips } = this.props.data
    const page = this.props.data.page.group[0]

    return <React.Fragment>
      <LayoutBase location={this.props.location}>
        <SEO 
          title={'post.frontmatter.title'}
          description={'post.frontmatter.description || post.excerpt'}
        />

        <ListTips title={page.fieldValue} totalTips={page.totalCount} tips={tips} />

      </LayoutBase>
    </React.Fragment>
  }
}

export default PageListTipsTemplate

export const pageQuery = graphql`
  query PageListTipsBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    page: allMarkdownRemark(limit: 1000, filter: {frontmatter: {type: {eq: "tip"}, category: {eq: $slug}}}) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
    tips: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "tip"}, category: {eq: $slug}}}) {
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
