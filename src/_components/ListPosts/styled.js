import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr) minmax(230px, auto);
  grid-template-areas: "main main main";
  padding: 0 25px;
  padding-bottom: 50px;
  padding-top: 25px;

  ${media.lessThan("medium")`
    grid-template-columns: 1fr;
    grid-template-areas:  "main";
  `}

  .main {
    grid-area: main;
  }

  .aside {
    grid-area: aside;
  }
`

export const TitleSection = styled.h2`
  margin: 30px auto 0 auto;
  padding: 0px;
  max-width: 100%;
  font-size: 22px;
  color: var(--highlightText);
  display: flex;
  align-items: center;
`

export const Tags = styled.div`
  margin-bottom: 10px;

  span {
    padding: 4px 6px;
    border-radius: 4px;
    color: #fff !important;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 5px;

    &.tech {
      background: #007eff;
    }

    &.frontend {
      background: #79b518;
    }

    &.personal {
      background: #000;
    }

    &.discuss {
      background: #eebb45;
    }
  }
`

export const Posts = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  padding: 0px;
  position: relative;
  margin: 0px auto 0 auto;
  max-width: 100%;

  ${media.lessThan("medium")`
    grid-template-columns: repeat(1, 1fr);
  `}

  ${media.between("medium", "large")`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const Cover = styled.div`
  width: 100%;
  border-radius: 7px;
  height: 160px;
  margin-bottom: 10px;
  background-position: center;
  background-size: cover;
`

export const Post = styled.div`
  a:hover {
    * {
      color: var(--textLink);
      transition: all .3s;
    }

    .datetime {
      opacity: 1;
    }
  }
`

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1;
  padding-bottom: 5px;
`

export const Date = styled.div`
  font-size: 14px;
  color: #333;
  color: var(--textNormal);
  opacity: 0.5;
`

export const Description = styled.div`
  color: var(--textNormal);
  font-size: 16px;
  margin-top: 10px;
  line-height: 1.2;
  transition: all .3s;
`

export const NoResults = styled.div`
  font-size: 18px;
`

export const ListTags = styled.ul`
  margin-top: 15px;
  list-style: none;

  li {
    .tag {

      font-size: 28px;
      font-weight: 800;

      &--discuss { color: #eebb45 }
      &--tech { color: #007eff;}
      &--frontend { color: #79b518; }
      &--personal { color: var(--textNormal); }
    }
  }
`