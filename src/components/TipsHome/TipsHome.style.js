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

export const SubTitle = styled.div`
  color: var(--normalText);
  max-width: 768px !important;
  line-height: 1.2;
  margin-bottom: 8px;
`

export const Tags = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  ${media.lessThan("medium")`
    padding: 5px;
  `}

  .tag {
    text-decoration: none; 
    color: var(--highlightText);
    padding: 15px 25px;
    margin-right: 5px;
    border-radius: 5px;
    border: 1px solid transparent;
    line-height: 1.4;
    margin-bottom: 5px;

    ${media.lessThan("medium")`
      padding: 15px 20px;
    `}

    &:hover {
      border: 1px solid var(--borderColorHoverCard);
    }

    > span {
      font-size: 10px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      letter-spacing: 1px;

      > span {
        background: #333;
        color: #fff;
        width: 15px;
        height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        margin-right: 4px;
      }
    }
  }
`