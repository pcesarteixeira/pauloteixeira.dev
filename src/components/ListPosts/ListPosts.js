import React from "react"
import { Link } from "gatsby"

import * as S from './ListPosts.style'

export default function ListPosts({ posts }) {

  return <React.Fragment>
    <S.Title className="content">Últimos artigos</S.Title>

    <S.Posts className="content">
      {posts.map(({ node }) => <Link key={node.id} className="post" to={node.fields.slug}>
        <div className="post__image" style={{backgroundImage: `url(${node.frontmatter.cover})`}}></div>
        <div className="post__info">
          <div className="post__info-timetoread"><span>{node.frontmatter.date}</span> - {node.timeToRead} minuto{node.timeToRead > 1 ? 's' : ''} de leitura</div>
          <div className="post__info-title">{node.frontmatter.title}</div>
          <div className="post__info-excerpt">{node.excerpt}</div>
        </div>
      </Link>)}
    </S.Posts>
  </React.Fragment>
}



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

  // const nameTag = (tag) => {
  //   switch (tag) {
  //     case 'personal':
  //       return 'Pessoal'
  //     case 'tech':
  //       return 'Tech'
  //     case 'discuss':
  //       return 'Discussão'
  //     case 'frontend':
  //       return 'Front-end'
  //     default:
  //       return 'Sem categoria'
  //   }
  // }


      // <S.Wrapper className="a">
    //   <div className="main">
    //     <S.Posts>
    //       {props.posts.length > 0 ? (
    //         props.posts.map(({ node }) => {        
    //           const title = node.frontmatter.title || node.fields.slug
              
    //           return (
    //             <S.Post key={node.id}>
    //               <Link to={node.fields.slug}>
    //                 <S.Cover style={{backgroundImage: `url(${node.frontmatter.cover})`}} />
    //                 <S.Tags>
    //                   {node.frontmatter.tags.map(tag => <span className={tag}>{nameTag(tag)}</span>)}
    //                 </S.Tags>
    //                 <S.Title>{title}</S.Title>
    //                 <S.Date className="datetime">{node.frontmatter.date}</S.Date>
    //                 <S.Description
    //                   dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }}
    //                 />
    //               </Link>
    //             </S.Post>
    //           )
    //         })
    //       ) : (
    //         <S.NoResults>Sem publicações por enquanto.</S.NoResults>
    //       )}
    //     </S.Posts>
    //   </div>
    // </S.Wrapper>
  // )