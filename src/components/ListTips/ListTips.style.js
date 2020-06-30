import styled from 'styled-components'
// import media from 'styled-media-query'

export const Title = styled.h1`
  max-width: 768px !important;
  margin: 0 auto;
  font-size: 42px;
  
  padding-bottom: 10px !important;
  font-weight: 700;
  color: var(--highlightText);
`

export const Page = styled.div`
  max-width: 768px !important;
  margin: 0 auto;
  padding-top: 60px !important;
  color: var(--normalText);
  line-height: 1;
`

export const Subtitle = styled.div`
  max-width: 768px !important;
  margin: 0 auto;
  padding-top: 0px !important;
  color: var(--normalText);
  line-height: 1.2;

  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--highlightText);
  }
`

export const TotalTips = styled.div`
  max-width: 768px !important;
  margin: 0 auto;
  display: flex;
  margin-top: 10px;
  /* padding: 0; */

  span {
    color: var(--highlightText);
    padding: 15px 25px;
    border-radius: 5px;
    border: 1px solid var(--borderColorHoverCard);
  }
`