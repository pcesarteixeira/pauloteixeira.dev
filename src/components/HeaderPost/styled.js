import styled from 'styled-components'
import media from 'styled-media-query'
// padding: 60px 25px 90px 25px;

export const Header = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;

  .title {
    font-size: 34px;
    font-weight: bold;
    color: var(--highlightText);
    line-height: 1.2;
    margin-bottom: 7px;

    ${media.lessThan("small")`
      margin-top: 10px;
      font-size: 30px;
    `}
  }

  .subtitle {
    font-size: 20px;
    color: var(--textNormal);
    opacity: 0.8;

    ${media.lessThan("small")`
      font-size: 16px;
      padding-bottom: 10px;
    `}
  }
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

export const InfoPost = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 700px;
  margin: 20px auto 0 auto;
  padding: 0 25px;

  .comments {
    height: 53px;
    display: flex;
    align-items: center;
  }

  .author {
    display: flex;

    &__photo {
      margin-right: 15px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 1.2;

      &-name {
        color: var(--textNormal);
        font-size: 18px;

        ${media.lessThan("small")`
          font-size: 16px;
        `}
      }

      &-date {
        color: var(--textNormal);
        opacity: 0.7;

        ${media.lessThan("small")`
          font-size: 14px;
        `}
      }
    }
  }
`

export const Cover = styled.div`
  margin-top: 20px;

  img {
    width: 100%;
  }
`

export const HeaderPostWrapper = styled.div`
  margin: 0 auto;
  padding: 60px 0 60px 0;
  width: 100%;

  ${media.lessThan("small")`
    padding-top: 10px;
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

// export const Cover = styled.div`
//   width: 100%;
//   border-radius: 7px;
//   height: 400px;
//   background-position: center;
//   background-size: cover;

//   ${media.lessThan("small")`
//     margin-bottom: 20px;
//   `}

//   ${media.lessThan("medium")`
//     height: 200px;
//   `}

//   ${media.between("medium", "large")`
//     height: 300px;
//   `}
// `

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