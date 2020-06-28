import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo:400,700,800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    background: var(--background);
  }

  body {
    padding-top: 80px;
  }

  .main-wrapper {
    min-height: calc(100% - 62px);
    box-shadow: 0 0px 7px rgba(0,0,0,0.10);
  }

  .content {
    margin: 0 auto;
    padding: 0 25px;
    width: 100%;
    max-width: 1200px;
  }

  body.light {
    --background: #fff;
    --backgroundNavbar: #fff;
    --backgroundFooter: #f1f1f1;
    --highlightText: #000;
    --normalText: #5d5d5d;
    --iconNavbar: #333;
    --borderColorHoverCard: #8c8c8c;
    --colorTextFooter: rgba(0,0,0,0.4);
    --borderColorProfileMobile: #ececec;
    --backgroundButtonShare: #dadada;
  }

  body.dark {
    --background: #000;
    --backgroundNavbar: #121212;
    --highlightText: #fff;
    --normalText: #979797;
    --iconNavbar: #fff;
    --backgroundFooter: #000;
    --borderColorHoverCard: #424242;
    --colorTextFooter: rgba(255,255,255,0.4);
    --borderColorProfileMobile: #1a1a1a;
    --backgroundButtonShare: #242424;
  }
`

export default GlobalStyles