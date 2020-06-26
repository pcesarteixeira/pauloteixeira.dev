import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import * as S from './Header.style'

import ToggleTheme from "../ToggleTheme/ToggleTheme"
import IconLinkedIn from "../../../static/svg/linkedin.svg"
import IconTwitter from "../../../static/svg/twitter.svg"
import IconGithub from "../../../static/svg/github.svg"

export default function Header({ location }) {
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
  const [fixedNav, setFixedNav] = React.useState(false)
  const checkActiveRoute = ({ route }) => route === location.pathname

  React.useEffect(() => {
    const handleScroll = () => window.pageYOffset > 19 ? setFixedNav(true) : setFixedNav(false)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  
  return (
    <S.Nav className={`${fixedNav && 'shadow'}`}>
      <div className="menu-links">
        <Link to="/" style={{ marginRight: 30 }}>
          <S.Logo>
            <S.LogoFirstName>Paulo</S.LogoFirstName>
            <S.LogoLastName>Teixeira</S.LogoLastName>
          </S.Logo>
        </Link>
        {/* <Link to="/" style={{ marginRight: 20 }}><S.Link className={`${checkActiveRoute({ route: '/' }) && 'active'}`}>Artigos</S.Link></Link> */}
        {/* <Link to="/tips" style={{ marginRight: 20 }}><S.Link className={`${checkActiveRoute({ route: '/tips' }) && 'active'}`}>Dicas</S.Link></Link>
        <Link to="/career" style={{ marginRight: 20 }}><S.Link className={`${checkActiveRoute({ route: '/career' }) && 'active'}`}>Carreira</S.Link></Link> */}
      </div>
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