import styled from 'styled-components'
import media from 'styled-media-query'

export const SocialAndNightMode = styled.div`
  display: flex;
  height: 25px;

  .social {
    display: flex;

    &__network-item {
      .github, .linkedin {
        ${media.lessThan('medium')`
          display: none;
        `}
      }
    }
  }
`

export const Logo = styled.div`
  line-height: 1;
  font-family: 'Exo', sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;

    span {
      &.first-name {
        color: var(--highlightText);  
      }

      &.last-name {
        color: #b3b3b3;
      
        /* ${media.lessThan("medium")` */
          display: none;
        /* `} */
      }
    }
  }
  
  &:hover {
    opacity: 0.6;
  }
`

export const Nav = styled.nav`
  background: var(--backgroundNavbar);
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  position: fixed;
  height: 80px;
  max-height: 80px;
  display: flex;
  align-items: center;
  transition: box-shadow 300ms ease-in-out 0s;

  .grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.shadow {
    background: var(--backgroundNavbar);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 8px -8px;
    transition: box-shadow 300ms ease-in-out 0s;
  }
  /* justify-content: space-between;
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
  } */
`

// export const Link = styled.div`
//   font-size: 18px;
//   line-height: 1;
//   color: var(--textNormal);

//   &.active {
//     font-weight: bold;
//     color: var(--highlightText);
//   }

//   &:hover {
//     color: var(--highlightText);
//   }
// `


// export const Social = styled.div`
//   display: flex;

  

//   .twitter {

//   }

//   .linkedin {
//     ${media.lessThan("small")`
//       display: none;
//     `}
//   }
// `
export const SocialItem = styled.div`
  background: transparent;
  margin-left: 15px;
  width: 25px;
  height: 25px;

  svg {
    width: 100%;
    height: 30px;
    fill: var(--iconNavbar);
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