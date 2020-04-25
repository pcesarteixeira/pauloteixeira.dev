import React from "react"
import { Link } from "gatsby"

import * as S from './styled'

export default function ListPosts(props) {
  // const [tags, setTags] = React.useState([])

  // const tagsWithPosts = () => {
  //   let tags = []
  //   const onlyUnique = (value, index, self) => self.indexOf(value) === index

  //   props.posts.map(({ node }) => {
  //     node.frontmatter.tags.map(tag => {
  //       tags.push(tag)
  //     })
  //   })

  //   return tags.filter(onlyUnique)
  // }

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
    <S.Wrapper>
      <div className="main">
        <S.TitleSection>{props.title}</S.TitleSection>
        <S.Posts>
          {props.posts.length > 0 ? (
            props.posts.map(({ node }) => {        
              const title = node.frontmatter.title || node.fields.slug
              
              return (
                <S.Post key={node.id}>
                  <Link to={node.fields.slug}>
                    <S.Cover style={{backgroundImage: `url(${node.frontmatter.cover})`}} />
                    <S.Tags>
                      {node.frontmatter.tags.map(tag => <span className={tag}>{nameTag(tag)}</span>)}
                    </S.Tags>
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
      </div>
      {/* <div className="aside">
        <S.TitleSection>Categorias</S.TitleSection>
        <S.ListTags>
          {tagsWithPosts().map((tag, key) => <li key={key}><a href="#" className={`tag tag--${tag}`}>{nameTag(tag)}</a></li>)}
        </S.ListTags>
      </div> */}
    </S.Wrapper>
  )
}