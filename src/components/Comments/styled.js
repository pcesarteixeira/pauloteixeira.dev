import styled from 'styled-components'

export const CommentsWrapper = styled.section`
  width: 100%;
  background: var(--backgroundComments);
  border-top: 1px solid rgba(0,0,0,.1);
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding: 40px 0;
  
  iframe[src*='ads-iframe'] {
    display: none;
  }
  
  #disqus_thread {
    padding: 0 25px;
    max-width: 1200px;
    margin: 0 auto;

    a {
      color: var(--textLink) !important;
    }
  }
`

export const CommentsTitle = styled.h3`
  color: var(--highlightText);
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 25px 20px 25px;
`