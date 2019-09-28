import styled from 'styled-components'
import media from 'styled-media-query'

export const TitleSection = styled.h2`
  margin: 30px auto 0 auto;
  padding: 0px 25px 0 25px;
  max-width: 1200px;
  font-size: 32px;
  color: var(--highlightText);
`

export const Posts = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0px 25px 0 25px;
  position: relative;
  margin: 30px auto 0 auto;
  max-width: 1200px;

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