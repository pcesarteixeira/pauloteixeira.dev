import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import LayoutBase from "../layouts/LayoutBase/LayoutBase"

class NotFoundPage extends React.Component {
  render() {
    // const { data } = this.props
    return <LayoutBase location={this.props.location}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
    </LayoutBase>
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`