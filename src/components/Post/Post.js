import React from 'react'
import Img from "gatsby-image"
import rehypeReact from 'rehype-react'
import ReactDisqusComments from 'react-disqus-comments'
import { useStaticQuery, graphql } from "gatsby"

import IconLinkedIn from "../../../static/svg/linkedin-color.svg"
import IconTwitter from "../../../static/svg/twitter.svg"
import IconFacebook from "../../../static/svg/facebook.svg"

import * as S from './Post.style'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

export default function LayoutPost({ post }) {
  const [fixedProgressbar, setFixedProgressbar] = React.useState(false)
  const [enabledShareAPI, setEnabledShareAPI] = React.useState(false)
  const [percentageRead, setPercentageRead] = React.useState(0)
  
  const images = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "personal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  React.useEffect(() => setEnabledShareAPI('share' in navigator), [])

  React.useEffect(() => {
    const comments = document.querySelector('#comments')
    const handleScroll = () => {
      window.pageYOffset > 87 ? setFixedProgressbar(true) : setFixedProgressbar(false)
      const totalPercentage = (window.pageYOffset * 100) / comments.offsetTop
      setPercentageRead(totalPercentage > 100 ? 100 : totalPercentage)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  async function share() {
    const shareData = {
      title: post.frontmatter.title,
      text: post.excerpt,
      url: `https://pauloteixeira.dev${post.fields.slug}`,
    }

    await navigator.share(shareData)
  }

  return <React.Fragment>
    <S.Wrapper className="content">
      <div className="main post">
        <div className={`progress-bar ${fixedProgressbar && 'progress-bar--fixed'}`}>
          <div className="progress-bar__background">
            <div className="progress-bar__bar-complete" style={{ height: `${percentageRead}%` }} />
          </div>
        </div>
        <h1 className="post__title">{post.frontmatter.title}</h1>
        <div className="post__subtitle">{post.frontmatter.subtitle}</div>
        <div className="post__publish">
          <div className="post__publish-avatar">
            <Img className="picture" fluid={images.profile.childImageSharp.fluid} />
          </div>
          <div className="post__publish-info">
            <div className="post__publish-info-name">Paulo Teixeira</div>
            <div className="post__publish-info-timetoread">Publicado em <span>{post.frontmatter.date}</span></div>
            <div className="post__publish-info-timetoread">{post.timeToRead} minuto{post.timeToRead > 1 ? 's' : ''} de leitura</div>
          </div>
          <div className="post__share">
            {enabledShareAPI
              ? <button onClick={() => share()} className="share-post-mobile">Clique aqui para compartilhar</button>
              : <>
                  <div className="post__share-title">Compartilhe esse artigo</div>
                  <div className="post__share-networks">
                    <a aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="post__share-networks-item" href={`https://twitter.com/intent/tweet?url=https://pauloteixeira.dev${post.fields.slug}&text=${post.frontmatter.title}&via=pcesarteixeira`}><IconTwitter className="twitter" /></a>
                    <a aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="post__share-networks-item" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://pauloteixeira.dev${post.fields.slug}`}><IconLinkedIn className="linkedin" /></a>
                    <a aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="post__share-networks-item" href={`https://www.facebook.com/sharer/sharer.php?u=https://pauloteixeira.dev${post.fields.slug}`} ><IconFacebook className="facebook" /></a>
                  </div>  
                </>}
          </div>
        </div>
        <div id="content-post" className="post__content">{renderAst(post.htmlAst)}</div>
        <div id="comments" className="post__comments-title">Comente esse artigo</div>
        <div className="post__comments-component">
          <ReactDisqusComments
            shortname="paulo-teixeira-blog"
            identifier={`https://pauloteixeira.dev${post.fields.slug}`}
            title={post.frontmatter.title}
            url={`https://pauloteixeira.dev${post.fields.slug}`}
          />
        </div>
      </div>
    </S.Wrapper>
  </React.Fragment>
}