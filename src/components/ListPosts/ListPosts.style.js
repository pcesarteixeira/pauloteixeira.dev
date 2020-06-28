import styled from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.div`
  max-width: 768px !important;
  margin: 0 auto;
  font-size: 20px;
  padding-top: 60px !important;
  padding-bottom: 10px !important;
  font-weight: 600;
  color: var(--highlightText);
`

export const Posts = styled.div`
  padding: 0;
  padding-bottom: 80px;

  ${media.lessThan("medium")`
    padding: 5px;
  `}

  .post {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    max-width: 768px;
    margin: 0 auto;
    padding: 25px;
    border: 1px solid transparent;
    border-radius: 5px;
    margin-bottom: 10px;

    ${media.lessThan("medium")`
      flex-direction: column;
      padding: 20px;
    `}

    &:hover {
      border: 1px solid var(--borderColorHoverCard);
    }

    &__image {
      width: 220px;
      height: 120px;
      background-size: cover;
      background-position: center center;
      margin-right: 20px;
      border-radius: 4px;

      ${media.lessThan("medium")`
        width: 100%;
        height: 240px;
        margin-right: 0;
        margin-bottom: 20px;
      `}

      ${media.lessThan("small")`
        height: 180px;
      `}
    }

    &__info {
      flex: 1;
      color: var(--normalText);

      &-timetoread {
        line-height: 1;
        margin-bottom: 8px;
        font-size: 12px;
        opacity: .7;

        span {
          letter-spacing: 1px;
        }
      }

      &-title {
        font-size: 22px;
        font-weight: 600;
        line-height: 1.1;
        margin-bottom: 10px;
        color: var(--highlightText);
      }

      &-excerpt {
        font-weight: 400;
        line-height: 1.2;
      }
    }
  }
`