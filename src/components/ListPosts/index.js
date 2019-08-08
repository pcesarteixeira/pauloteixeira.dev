import React from "react"
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import * as S from './styled'

export default function ListPosts(props) {
  return (
    <S.Posts>
      {props.posts.length > 0 ? (
        props.posts.map(({ node }) => {        
          const title = node.frontmatter.title || node.fields.slug
          
          return (
            <S.Post key={node.id}>
              <Link to={node.fields.slug}>
                <BackgroundImage
                  Tag="div"
                  className="cover-card-post"
                  fluid={node.frontmatter.cover.childImageSharp.fluid}
                  backgroundColor={`#040e18`}
                />
                <S.Title>{title}</S.Title>
                <S.Date className="datetime">{node.frontmatter.date}</S.Date>
                <S.Description
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }}
                />
              </Link>
            </S.Post>
          )
        })
      ) : (
        <S.NoResults>Sem publicações por enquanto.</S.NoResults>
      )}
    </S.Posts>
  )
}