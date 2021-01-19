import React from "react"
import { Link } from "gatsby"

import * as S from './Header.style'

import ToggleTheme from "../ToggleTheme/ToggleTheme"

export default function Header({ location }) {
  const [fixedNav, setFixedNav] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => window.pageYOffset > 60 ? setFixedNav(true) : setFixedNav(false)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
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