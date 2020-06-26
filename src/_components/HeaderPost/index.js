import React from "react"

import * as S from './styled'

export default function HeaderPost(props) {
  const { post } = props

  const nameTag = (tag) => {
    switch (tag) {
      case 'personal':
        return 'Pessoal'
      case 'tech':
        return 'Tech'
      case 'discuss':
        return 'Discussão'
      case 'frontend':
        return 'Front-end'
      default:
        return 'Sem categoria'
    }
  }

  return (
    <S.HeaderPostWrapper>

      <S.Header>
        <S.Tags>{post.frontmatter.tags.map(tag => <span className={tag}>{nameTag(tag)}</span>)}</S.Tags>
        <div className="title">{post.frontmatter.title}</div>
        <div className="subtitle">{post.frontmatter.subtitle}</div>
      </S.Header>

      <S.InfoPost>
        <div className="author">
          <div className="author__photo">
            <img 
              style={{
                maxWidth: 50,
                maxHeight: 50,
                marginBottom: 0,
                borderRadius: `50%`,
              }}
              alt="Paulo Teixeira"
              src="/img/profile-pic.jpg" 
            />
          </div>
          <div className="author__info">
            <div className="author__info-name">Paulo Teixeira</div>
            <div className="author__info-date">Postado em {post.frontmatter.date}</div>
          </div>
        </div>
        <div className="comments">
          <a href="#comments">Ver comentários</a>
        </div>
      </S.InfoPost>

      <S.Cover>
        <img src={`${post.frontmatter.cover}`} />
      </S.Cover>

      {/* <S.ColumnData>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDate>Postado em {post.frontmatter.date}</S.PostDate>
        <S.PostAuthor>Escrito por Paulo César Teixeira</S.PostAuthor>
        <S.PostComments></S.PostComments>
      </S.ColumnData>
      <S.ImagePost>
        <S.Cover style={{backgroundImage: `url(${post.frontmatter.cover})`}} />
      </S.ImagePost> */}

    </S.HeaderPostWrapper>
  )
}

      // {/* <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
      // <S.PostDate>Postado em {post.frontmatter.date}</S.PostDate> */}