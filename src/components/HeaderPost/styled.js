import styled from 'styled-components'
import media from 'styled-media-query'

export const HeaderPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 25px 90px 25px;
  margin: 0 auto;
  max-width: 1200px;
`

export const PostTitle = styled.h1`
  color: var(--highlightText);
  text-align: center;
  font-size: 48px;
  width: 100%;
  max-width: 780px;
  line-height: 1;

  ${media.lessThan("medium")`
    font-size: 32px;
  `}

  ${media.between("medium", "large")`
    font-size: 42px;
  `}
`

export const PostDate = styled.small`
  color: var(--highlightText);
  text-align: center;
  font-size: 18px;
  margin-top: 15px;
`