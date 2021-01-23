import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px !important;

  ${media.lessThan("medium")`
    flex-direction: column;
    padding-top: 25px;
  `}

  .aside {
    min-width: 250px;
    width: 250px;
    margin-right: 45px;
    position: relative;

    ${media.lessThan("medium")`
      width: 100%;
      min-width: 100%;
      margin-bottom: 30px;

      .back-home {
        display: none;
      }
    `}

    .fixed-aside {
      ${media.greaterThan("medium")`
        position: fixed;
        top: 105px;
        width: 250px;
      `}
    }

    .comments-link {
      text-decoration: none;
    }
  }

  .main {
    position: relative;

    .progress-bar {
      width: 8px;
      height: 200px;
      position: absolute;
      left: -55px;
      display: flex;
      justify-content: flex-end;

      &--fixed {
        position: fixed;
        left: auto;
        margin-left: -55px;
        top: 140px;
      }

      &__background {
        background: var(--backgroundProgressbar);
        width: 8px;
        height: 200px;
        border-radius: 4px;
        overflow: hidden;
      }

      &__bar-complete {
        width: 100%;
        height: 40px;
        background: #4ad870;
      }
    }

    flex: 1;
    width: 100%;
    max-width: 700px;
    color: var(--normalText);

    ${media.lessThan("medium")`
      max-width: 100%;
    `}

    .share-post-mobile {
      width: 100%;
      height: 45px;
      padding: 0 15px;
      border-radius: 6px;
      border: 0;
      outline: none;
      font-size: 14px;
      margin-bottom: 10px;
      background: var(--backgroundButtonShare);
      color: var(--highlightText);
    }

    .post {

      &__timetoread {
        line-height: 1;
        margin-bottom: 0px;
        font-size: 14px;
        opacity: .7;

        span {
          letter-spacing: 1px;
        }
      }
      &__title {
        font-size: 42px;
        color: var(--highlightText);
        margin: 0;
        
        ${media.lessThan("medium")`
          font-size: 32px;
          line-height: 1.1;
          margin-bottom: 10px;
        `}
      }

      &__subtitle {
        font-size: 22px;
        line-height: 1.3;
        margin-bottom: 25px;
        color: var(--highlightText);
        opacity: .8;
      }

      &__share {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        &-title {
          font-size: 12px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        &-networks {
          display: flex;

          &-item {
            margin-left: 10px;
            border-radius: 4px;
            overflow: hidden;
          }

          &-item, &-item svg {
            width: 24px;
            height: 24px;

            .twitter { fill: #1da1f2; }
          }
        }
      }

      &__publish {
        display: flex;
        margin-bottom: 60px;

        ${media.lessThan("medium")`
          flex-direction: column;
        `}

        &-avatar {
          width: 60px;
          margin-right: 20px;

          ${media.lessThan("medium")`
            margin-bottom: 15px;
          `}

          img {
            border-radius: 30px;
          }
        }

        &-info {
          flex: auto;
          font-size: 16px; 
          line-height: 1.1;
          display: flex;
          flex-direction: column;
          justify-content: center;

          ${media.lessThan("medium")`
            margin-bottom: 15px;
          `}

          &-timetoread {
            opacity: .7;

            span {
              font-weight: bold;
            }
          }

          &-name { 
            font-size: 16px;
            margin-bottom: 5px;
            font-weight: 600; 
            color: var(--highlightText);
          }
        }
      }

      &__cover {
        margin-bottom: 30px;

        img {
          width: calc(100% + 30px);
          border-radius: 8px;
          margin-left: -15px;
        }
      }

      &__comments {
        &-title {
          padding-top: 80px;
          font-size: 28px;
          font-weight: 600;
          color: var(--highlightText);
          text-align: center;
          margin-bottom: 30px;
        }

        &-component {
          margin-bottom: 30px;
        }
      }

      &__content {
        font-size: 18px;
        line-height: 1.4;

        ${media.lessThan("medium")`
          font-size: 16px;
        `}

        a {
          color: #2a99ff;
          text-decoration: none;
          font-weight: 600;
        }

        p, ul, ol {
          margin-bottom: 20px;
        }

        h1, h2, h3, h4, h5 {
          margin-bottom: 20px;
          padding-top: 30px;
          line-height: 1.1;
          color: var(--highlightText);
        }

        ul li p, ul li ul { margin-bottom: 0 }
        ul, ol {
          padding: 0 0 0 40px;
        }

        h2 { font-size: 32px; }
        h3 { font-size: 24px; }
        h4 { font-size: 20px; }
        h5 { font-size: 16px; }

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

        hr {
          width: 300px;
          margin: 65px auto 59px;
          border-width: 1px;
          border-style: dashed;
          border-color: rgb(188, 190, 188);
          border-image: initial;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: white;
          background: none;
          font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
          font-feature-settings: normal;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.4;
          margin-bottom: 0;

          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;

          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }

        /* Code blocks */
        pre[class*='language-'] {
          overflow: auto;
          padding: 1.3125rem;
        }

        pre[class*='language-']::-moz-selection {
          /* Firefox */
          background: hsl(207, 4%, 16%);
        }

        pre[class*='language-']::selection {
          /* Safari */
          background: hsl(207, 4%, 16%);
        }

        /* Text Selection colour */
        pre[class*='language-']::-moz-selection,
        pre[class*='language-'] ::-moz-selection {
          text-shadow: none;
          background: hsla(0, 0%, 100%, 0.15);
        }

        pre[class*='language-']::selection,
        pre[class*='language-'] ::selection {
          text-shadow: none;
          background: hsla(0, 0%, 100%, 0.15);
        }

        /* Inline code */
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

        .token.string,
        .token.url {
          color: rgb(173, 219, 103);
        }

        .token.variable {
          color: rgb(214, 222, 235);
        }

        .token.number {
          color: rgb(247, 140, 108);
        }

        .token.builtin,
        .token.char,
        .token.constant,
        .token.function {
          color: rgb(130, 170, 255);
        }

        .token.punctuation {
          color: rgb(199, 146, 234);
        }

        .token.selector,
        .token.doctype {
          color: rgb(199, 146, 234);
          font-style: 'italic';
        }

        .token.class-name {
          color: rgb(255, 203, 139);
        }

        .token.tag,
        .token.operator,
        .token.keyword {
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
          margin-bottom: 1.75rem;
          margin-left: -1.3125rem;
          margin-right: -1.3125rem;
          border-radius: 10px;
          background: #011627;
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          font-size: 16px;
          max-width: calc(100% + 1.3125rem + 1.3125rem);
        }

        @media (max-width: 672px) {
          .gatsby-highlight {
            border-radius: 0;
          }
        }

        .gatsby-highlight pre[class*='language-'] {
          float: left;
          
        }

      }
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  ${media.lessThan("medium")`
    padding: 25px;
    margin-left: -25px;
    margin-top: -25px;
    width: calc(100% + 50px);
    background: var(--borderColorProfileMobile);
  `}

  .picture {
    border-radius: 50%;
    width: 60px;
    margin-right: 15px;
  }

  .info {
    flex: 1;

    &__name {
      color: var(--highlightText);
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 3px;
    }

    &__bio {
      line-height: 1.2;
      color: var(--normalText);
      opacity: .6;
      font-size: 14px;
    }
  }
`

export const BackListPosts = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  border-bottom: 0px solid transparent;
  margin-bottom: 30px;

  .icon {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    fill: var(--highlightText);
  }

  .label {
    font-size: 16px;
    color: var(--normalText);
    text-decoration: none;
  }

  &:hover {    
    .label {
      color: var(--highlightText);
    }
  }
`

export const Share = styled.div`
  margin-bottom: 20px;

  .title {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 5px;
    color: var(--normalText);
    margin-bottom: 10px;
  }

  .networks {
    &__item {
      margin-right: 10px;
    }

    &__item, &__item svg {
      width: 24px;
      height: 24px;

      .twitter { fill: #1da1f2; }
      /* .linkedin { fill: #0077b5; } */
    }
  }
`

export const Comments = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  border-bottom: 0px solid transparent;

  .icon {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    fill: var(--highlightText);
  }

  .label {
    font-size: 14px;
    color: var(--normalText);
    text-decoration: none;
    font-weight: 600;
  }

  &:hover {    
    .label {
      color: var(--highlightText);
    }
  }
`