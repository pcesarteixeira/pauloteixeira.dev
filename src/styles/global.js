import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Exo:400,700,800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body.light {
    --background: #ffffff;
    --textNormal: #353535;
    --textLink: #2a99ff;
    --highlightText: #000000;
    --inlineCode-bg: rgba(255, 229, 100, 0.2);
    --inlineCode-text: #1a1a1a;
    --backgroundComments: rgba(0,0,0,.04);
    --backgroundRecommended: rgba(0,0,0,.04);
  }

  body.dark {
    -webkit-font-smoothing: antialiased;
    --background: #282c35;
    --textNormal: #adb7c7;
    --textLink: #2a99ff;
    --highlightText: #ffffff;
    --inlineCode-bg: hsl(222, 14%, 25%);
    --inlineCode-text: #e6e6e6;
    --backgroundComments: #15181d;
    --backgroundRecommended: #1c2027;
  }

  html, body {
    font-family: 'Open Sans', sans-serif;
    background: var(--background);
  }

  hr {
    width: 300px;
    margin: 65px auto 59px auto;
    border: 1px dashed #bcbebc;
  }

  .dark {
    #lg-github { fill: #fff; }
    #lg-linkedin { fill: #fff; }
    #lg-twitter { fill: #fff; }
  }

  .light {
    #lg-github { fill: #000000; }
    #lg-linkedin { fill: #0077B7; }
    #lg-twitter { fill: #03A9F4; }
  }

  a {
    text-decoration: none;
    color: var(--textLink);
  }

  .bio-footer {
    margin: 90px auto 30px auto;
    max-width: 500px;
  }

  .post-content {
    width: 100%;
    color: var(--textNormal);

    .gatsby-resp-image-wrapper {
      border-radius: 7px;
      overflow: hidden;
    }

    p img {
      margin: 0 auto;
      display: block;
      border-radius: 7px;
      max-width: 100%;
      -webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.1);
      -moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.1);
      box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.1);
    }

    p strong {
      color: var(--highlightText);
    }

    .full-image {
      border-radius: 0;
      max-width: 100%;
      width: 100%;

      & ~ div {
        font-style: italic;
        color: #9c9c9c;
        margin: 0 auto;
        text-align: center;
        font-size: 14px;
        margin-bottom: 20px;
        max-width: 700px;
        padding: 0 25px;
      }
    }
    
    .twitter-tweet {
      margin-left: auto !important;
      margin-right: auto !important;
      margin-bottom: 25px !important;
    }

    blockquote {
      margin: 0 auto;
      max-width: 700px;
      color: var(--textNormal);
      padding: 0 0 0 25px;
      opacity: .6;

      p {
        border-left: 5px solid #d2d2d2;
      }
    }

    p, h1, h2, h3, h4, h5, h6, ul, ol {
      padding: 0 25px;
      max-width: 700px;
      margin: 0 auto;
    }

    a:hover {
      text-decoration: underline;
    }

    h1, h2, h3, h4, h5 {
      margin-bottom: 20px;
      padding-top: 20px;
      line-height: 1.1;
      color: var(--highlightText);
    }

    h2 { font-size: 32px; }
    h3 { font-size: 24px; }
    h4 { font-size: 20px; }
    h5 { font-size: 16px; }

    p, ul, ol {
      margin-bottom: 30px;
      font-size: 18px;
      line-height: 1.4;
    }

    ul li p, ul li ul { margin-bottom: 0 }

    ul, ol {
      padding: 0 0 0 45px;
    }
  }

  code[class*='language-'], pre[class*='language-'] {
    color: white;
    background: none;
    font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
    font-feature-settings: normal;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    margin-bottom: 0;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-'] {
    overflow: auto;
    padding: 1.3125rem;
  }

  pre[class*='language-']::-moz-selection {
    background: hsl(207, 4%, 16%);
  }

  pre[class*='language-']::selection {
    background: hsl(207, 4%, 16%);
  }

  pre[class*='language-']::-moz-selection, pre[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  pre[class*='language-']::selection, pre[class*='language-'] ::selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  :not(pre) > code[class*='language-'] {
    border-radius: 0.3em;
    background: var(--inlineCode-bg);
    color: var(--inlineCode-text);
    padding: 0.15em 0.2em 0.05em;
    white-space: normal;
  }

  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.comment {
    color: rgb(128, 147, 147);
  }

  .token.string, .token.url {
    color: rgb(173, 219, 103);
  }

  .token.variable {
    color: rgb(214, 222, 235);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.builtin, .token.char, .token.constant, .token.function {
    color: rgb(130, 170, 255);
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .token.selector, .token.doctype {
    color: rgb(199, 146, 234);
    font-style: 'italic';
  }

  .token.class-name {
    color: rgb(255, 203, 139);
  }

  .token.tag, .token.operator, .token.keyword {
    color: #ffa7c4;
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.namespace {
    color: rgb(178, 204, 214);
  }

  pre[data-line] {
    padding: 1em 0 1em 3em;
    position: relative;
  }

  .gatsby-highlight-code-line {
    background-color: hsla(207, 95%, 15%, 1);
    display: block;
    margin-right: -1.3125rem;
    margin-left: -1.3125rem;
    padding-right: 1em;
    padding-left: 1.25em;
    border-left: 0.25em solid #ffa7c4;
  }

  .gatsby-highlight {
    margin-left: -1.3125rem;
    margin-right: -1.3125rem;
    border-radius: 10px;
    background: #011627;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    max-width: 700px;
    margin: 0 auto 1.75rem auto;
  }

  @media (max-width: 672px) {
    .gatsby-highlight {
      border-radius: 0;
    }
  }

  .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }
`

export default GlobalStyles