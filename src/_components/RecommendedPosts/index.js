import React from "react"
import { Link } from "gatsby"

import * as S from './styled'

export default function RecommendedPosts(props) {
  const { next, previous } = props

  return (
    <S.Wrapper>
      <S.Posts>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              <div className="title">← {previous.frontmatter.title}</div>
              <div className="action">Artigo anterior</div>
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              <div className="title">{next.frontmatter.title} →</div>
              <div className="action">Próximo artigo</div>
            </Link>
          )}
        </li>
      </S.Posts>
    </S.Wrapper>
  )
}