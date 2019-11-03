import React from "react"

import * as S from './styled'

export default function HeaderPost(props) {
  const { post } = props

  console.log(props)

  return (
    <S.HeaderPostWrapper>
      <S.ColumnData>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDate>Postado em {post.frontmatter.date}</S.PostDate>
        <S.PostAuthor>Escrito por Paulo César Teixeira</S.PostAuthor>
        <S.PostComments><a href="#comments">Ver comentários</a></S.PostComments>
      </S.ColumnData>
      <S.ImagePost>
        <S.Cover style={{backgroundImage: `url(${post.frontmatter.cover})`}} />
      </S.ImagePost>
    </S.HeaderPostWrapper>
  )
}

      // {/* <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
      // <S.PostDate>Postado em {post.frontmatter.date}</S.PostDate> */}