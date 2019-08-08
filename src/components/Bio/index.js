import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import * as S from './styled'

export default function Bio(props) {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{ marginBottom: 0, maxWidth: 70, maxHeight: 70 }}
        imgStyle={{ borderRadius: `50%` }}
      />
      <S.BiographyText style={{ maxWidth: `${props.maxWidth}px` }}>
        Escrito por <strong>{author}</strong>, desenvolvedor javascript atualmente vivendo e trabalhando em Curitiba.
      </S.BiographyText>
    </S.BiographyWrapper>
  )
}