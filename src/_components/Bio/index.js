import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

export default function Bio(props) {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <S.BiographyWrapper>
      <img 
        style={{
          maxWidth: 70,
          maxHeight: 70,
          marginBottom: 0,
          borderRadius: `50%`,
        }}
        alt="Paulo Teixeira"
        src="/img/profile-pic.jpg" />
      <S.BiographyText style={{ maxWidth: `${props.maxWidth}px` }}>
        Escrito por <strong>{author}</strong>, desenvolvedor javascript atualmente vivendo e trabalhando em Curitiba.
      </S.BiographyText>
    </S.BiographyWrapper>
  )
}