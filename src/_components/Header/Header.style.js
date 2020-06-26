import styled from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  padding: 25px;
  max-width: 100%;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--backgroundNavbar);
  z-index: 99;

  &.shadow {
    background: var(--backgroundNavbar);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 8px -8px;
    transition: box-shadow 300ms ease-in-out 0s;
  }

  .menu-links {
    display: flex;
    align-items: center;
  }
`

export const Logo = styled.div`
  line-height: 1;
  font-family: 'Exo', sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  
  &:hover {
    opacity: 0.6;
  }
`

export const Link = styled.div`
  font-size: 18px;
  line-height: 1;
  color: var(--textNormal);

  &.active {
    font-weight: bold;
    color: var(--highlightText);
  }

  &:hover {
    color: var(--highlightText);
  }
`

export const LogoFirstName = styled.span`
  color: var(--highlightText);
`

export const LogoLastName = styled.span`
  color: #b3b3b3;
`
  // ${media.lessThan("medium")`
  //   display: none;
  // `}

export const Social = styled.div`
  display: flex;

  .github {
    ${media.lessThan("small")`
      display: none;
    `}
  }

  .twitter {

  }

  .linkedin {
    ${media.lessThan("small")`
      display: none;
    `}
  }
`
export const SocialItem = styled.div`
  background: transparent;
  margin-left: 15px;
  width: 30px;
  height: 30px;

  svg {
    width: 100%;
    height: 30px;
  }

  .dark {
    svg {
      fill: #fff;
    }
  }

  &:hover {
    opacity: 0.5;
  }
`