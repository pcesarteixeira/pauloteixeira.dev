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
            linkedin {
              name
              user
              link
            }
            twitter {
              name
              user
              link
            }
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata
  const [fixedNav, setFixedNav] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => window.pageYOffset > 0 ? setFixedNav(true) : setFixedNav(false)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const RenderingIconSocial = ({ social }) => {
    switch (social) {
      case 'linkedin': return <IconLinkedIn />
      case 'twitter': return <IconTwitter />
      case 'github': return <IconGithub />
      default: return false
    }
  }
  
  return (
    <S.Nav className={`${fixedNav && 'shadow'}`}>
      <div className="content">
        <div className="grid">
          
          <S.Logo>
            <Link to="/">
              <span className="first-name">Paulo</span>
              <span className="last-name">Teixeira</span>
            </Link>
          </S.Logo>

          <S.SocialAndNightMode>
            <div className="social">
              {Object.keys(social).map((network, key) => <a 
                key={key}
                className="social__network-item" 
                target="_blank" 
                rel="noopener noreferrer" 
                alt={social[network].name} 
                href={social[network].link}
              >
                <S.SocialItem className={network}>
                  <RenderingIconSocial social={network} />
                </S.SocialItem>
              </a>)}
            </div>
            <ToggleTheme />
          </S.SocialAndNightMode>
          
        </div>
      </div>
    </S.Nav>
  )
}
      // <div className="menu-links">
      //   <Link to="/" style={{ marginRight: 30 }}>
          
      //   </Link>
      //   {/* <Link to="/" style={{ marginRight: 20 }}><S.Link className={`${checkActiveRoute({ route: '/' }) && 'active'}`}>Artigos</S.Link></Link> */}
      //   {/* <Link to="/tips" style={{ marginRight: 20 }}><S.Link className={`${checkActiveRoute({ route: '/tips' }) && 'active'}`}>Dicas</S.Link></Link>
      //   <Link to="/career" style={{ marginRight: 20 }}><S.Link className={`${checkActiveRoute({ route: '/career' }) && 'active'}`}>Carreira</S.Link></Link> */}
      // </div>
      // <div style={{ display: 'flex' }}>
      //   <ToggleTheme />
      //   <S.Social>
          
      //     <a className="linkedin" target="_blank" rel="noopener noreferrer" alt={social.linkedin.name} href={`https://linkedin.com/` + social.linkedin.user}>
      //       <S.SocialItem><IconLinkedIn /></S.SocialItem>
      //     </a>
      //     <a className="twitter" target="_blank" rel="noopener noreferrer" alt={social.twitter.name} href={`https://twitter.com/` + social.twitter.user}>
      //       <S.SocialItem><IconTwitter /></S.SocialItem>
      //     </a>
      //   </S.Social>
      // </div>