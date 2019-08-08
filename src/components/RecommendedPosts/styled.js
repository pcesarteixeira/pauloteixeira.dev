import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  background: var(--backgroundRecommended);
  border-top: 1px solid rgba(0,0,0,.1);
`

export const Posts = styled.ul`
  list-style: none;
  padding: 0 25px;
  margin: 0 auto;
  max-width: 1200px;
  
  display: flex;

  ${media.lessThan("medium")`
    display: block;
    padding: 0;
  `}

  > li {
    min-height: 90px;
    width: 50%;
  
    align-items: center;
    display: flex;

    ${media.lessThan("medium")`
      width: 100%;
      min-height: auto;
    `}

    a {
      height: 100%;
      padding: 15px 30px;
      width: 100%;
      
      align-items: center;
      display: flex;
      justify-content: center;
      flex-direction: column;

      .title {
        font-size: 18px;
        text-align: center;
      }

      .action {
        color: #989898;
        font-size: 14px;
      }

      &:hover {
        background: rgba(0,0,0,0.05)
      }
    }

    &:nth-child(1) {
      border-right: 1px solid rgba(0,0,0,.1);

      ${media.lessThan("medium")`
        border-right: none;
        border-bottom: 1px solid rgba(0,0,0,.1);
      `}
    }
  }
`