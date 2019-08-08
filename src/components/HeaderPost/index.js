import React from "react"

import * as S from './styled'

export default function HeaderPost(props) {
  const { post } = props

  return (
    <S.HeaderPostWrapper>
      <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
      <S.PostDate>Postado em {post.frontmatter.date}</S.PostDate>
    </S.HeaderPostWrapper>
  )
}