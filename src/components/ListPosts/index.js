import React from "react"
import { Link } from "gatsby"

import * as S from './styled'

export default function ListPosts(props) {
  return (
    <>
      <S.TitleSection>Articles</S.TitleSection>
      <S.Posts>
        {props.posts.length > 0 ? (
          props.posts.map(({ node }) => {        
            const title = node.frontmatter.title || node.fields.slug
            
            return (
              <S.Post key={node.id}>
                <Link to={node.fields.slug}>
                  <S.Cover style={{backgroundImage: `url(${node.frontmatter.cover})`}} />
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
    </>
  )
}