import styled from 'styled-components'
import media from 'styled-media-query'
// padding: 60px 25px 90px 25px;

export const HeaderPostWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 60px 25px 90px 25px;
  max-width: 1100px;

  ${media.lessThan("small")`
    padding-top: 0;
    padding-bottom: 50px;
    flex-direction: column-reverse;
  `}
`

export const ColumnData = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.lessThan("small")`
  flex-basis: 100%;
  `}
`

export const ImagePost = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;

  ${media.lessThan("small")`
    flex-basis: 100%;
  `}
`

export const Cover = styled.div`
  width: 100%;
  border-radius: 7px;
  height: 400px;
  background-position: center;
  background-size: cover;

  ${media.lessThan("small")`
    margin-bottom: 20px;
  `}

  ${media.lessThan("medium")`
    height: 200px;
  `}

  ${media.between("medium", "large")`
    height: 300px;
  `}
`

export const PostTitle = styled.h1`
  color: var(--highlightText);
  text-align: right;
  font-size: 42px;
  font-weight: 500;
  width: 100%;
  max-width: 780px;
  line-height: 1;
  padding-right: 20px;

  ${media.lessThan("small")`
    text-align: left;
  `}

  ${media.lessThan("medium")`
    font-size: 32px;
  `}

  ${media.between("medium", "large")`
    font-size: 42px;
  `}
`

export const PostDate = styled.small`
  color: var(--textNormal);
  opacity: 0.5;
  text-align: right;
  font-size: 18px;
  margin-top: 15px;
  padding-right: 20px;
  width: 100%;

  ${media.lessThan("small")`
    text-align: left;
  `}
`

export const PostComments = styled.small`
  color: var(--textNormal);
  text-align: right;
  font-size: 18px;
  padding-right: 20px;
  width: 100%;

  ${media.lessThan("small")`
    text-align: left;
  `}
`

export const PostAuthor = styled.small`
  color: var(--textNormal);
  text-align: right;
  font-size: 18px;
  padding-right: 20px;
  width: 100%;
  margin-bottom: 10px;

  ${media.lessThan("small")`
    text-align: left;
  `}
`