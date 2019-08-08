import React from "react"
import { graphql } from "gatsby"
import rehypeReact from 'rehype-react'

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HeaderPost from "../components/HeaderPost"
import ImageCover from "../components/ImageCover"
import Comments from '../components/Comments'
import RecommendedPosts from '../components/RecommendedPosts'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'image-cover': ImageCover },
}).Compiler

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <HeaderPost post={post} />
        <div className="post-content">{renderAst(post.htmlAst)}</div>
        <div className="bio-footer"><Bio /></div>
        <RecommendedPosts next={next} previous={previous} />
        <Comments url={post.fields.slug} title={post.frontmatter.title} />

      </Layout>
    )
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        description
      }
    }
  }
`
