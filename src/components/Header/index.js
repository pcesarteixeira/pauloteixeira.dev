import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import * as S from './styled'

import ToggleTheme from "../ToggleTheme"
import IconLinkedIn from "../../../static/svg/linkedin.svg"
import IconTwitter from "../../../static/svg/twitter.svg"
import IconGithub from "../../../static/svg/github.svg"

export default function Header(props) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          social {
            github {
              name
              user
            }
            linkedin {
              name
              user
            }
            twitter {
              name
              user
            }
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  
  return (
    <S.Nav>
      <Link to="/">
        <S.Logo>
          <S.LogoFirstName>Paulo</S.LogoFirstName>
          <S.LogoLastName>Teixeira</S.LogoLastName>
        </S.Logo>
      </Link>
      <div style={{ display: 'flex' }}>
        <ToggleTheme />
        <S.Social>
          <a className="github" target="_blank" rel="noopener noreferrer" alt={social.github.name} href={`https://github.com/` + social.github.user}>
            <S.SocialItem><IconGithub /></S.SocialItem>
          </a>
          <a className="linkedin" target="_blank" rel="noopener noreferrer" alt={social.linkedin.name} href={`https://linkedin.com/` + social.linkedin.user}>
            <S.SocialItem><IconLinkedIn /></S.SocialItem>
          </a>
          <a className="twitter" target="_blank" rel="noopener noreferrer" alt={social.twitter.name} href={`https://twitter.com/` + social.twitter.user}>
            <S.SocialItem><IconTwitter /></S.SocialItem>
          </a>
        </S.Social>
      </div>
    </S.Nav>
  )
}