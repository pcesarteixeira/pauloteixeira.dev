import React from 'react'
import Img from "gatsby-image"
import rehypeReact from 'rehype-react'
import ReactDisqusComments from 'react-disqus-comments'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useStaticQuery, graphql, Link } from "gatsby"

import IconLinkedIn from "../../../static/svg/linkedin-color.svg"
import IconTwitter from "../../../static/svg/twitter.svg"
import IconFacebook from "../../../static/svg/facebook.svg"
import IconComment from "../../../static/svg/comment.svg"
import IconBack from "../../../static/svg/back.svg"
import * as S from './Post.style'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  // components: { 'image-cover': ImageCover },
  components: {},
}).Compiler

export default function LayoutPost({ post }) {
  const windowGlobal = typeof window !== 'undefined' && window
  const images = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile-pc.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [fixedaside, setFixedaside] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 87 ? setFixedaside(true) : setFixedaside(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const share = () => {
    if (windowGlobal.navigator.share !== undefined) {
      windowGlobal.navigator.share({
        title: post.frontmatter.title,
        text: post.excerpt,
        url: `https://pauloteixeira.dev${post.fields.slug}`,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    }
  }

  return <React.Fragment>
    <S.Wrapper className="content">
      <div className="aside">

        <Link className="back-home" to="/" style={{ textDecoration: 'none', borderBottom: 'none' }}>
          <S.BackListPosts>
            <IconBack className="icon" />
            <div className="label">Ver lista de artigos</div>
          </S.BackListPosts>
        </Link>

        <div className={`${fixedaside && 'fixed-aside'}`}>
          <S.Profile>
            <Img className="picture" fluid={images.profile.childImageSharp.fluid} />
            <div className="info">
              <div className="info__name">Paulo Teixeira</div>
              <div className="info__bio">Desenvolvedor javascript atualmente vivendo e trabalhando em Curitiba.</div>
            </div>
          </S.Profile>

          <S.Share>
            {!windowGlobal.navigator.hasOwnProperty('share')
              ? <React.Fragment>
                  <div className="title">Compartilhe esse artigo</div>
                  <div className="networks">
                    <a target="_blank" rel="noopener noreferrer" className="networks__item" href={`https://twitter.com/intent/tweet?url=https://pauloteixeira.dev${post.fields.slug}&text=${post.frontmatter.title}&via=pcesarteixeira`}><IconTwitter className="twitter" /></a>
                    <a target="_blank" rel="noopener noreferrer" className="networks__item" href={`https://www.linkedin.com/shareArticle?mini=true&url=https://pauloteixeira.dev${post.fields.slug}`}><IconLinkedIn className="linkedin" /></a>
                    <a target="_blank" rel="noopener noreferrer" className="networks__item" href={`https://www.facebook.com/sharer/sharer.php?u=https://pauloteixeira.dev${post.fields.slug}`} ><IconFacebook className="facebook" /></a>
                  </div>
                </React.Fragment>
              : <button onClick={() => share()} className="share-post-mobile">Clique aqui para compartilhar</button>}
          </S.Share>

          <AnchorLink
            style={{ borderBottom: 0, textDecoration: 'none' }}
            to={`${post.fields.slug}#comments`}
            title="Comente esse artigo"
            className="comments-link"
            stripHash
          >
            <S.Comments>
              <IconComment className="icon" />
              <div className="label">Comente esse artigo</div>
            </S.Comments>
          </AnchorLink>
        </div>

      </div>
      <div className="main post">
        <div className="post__timetoread">Publicado em <span>{post.frontmatter.date}</span> - {post.timeToRead} minuto{post.timeToRead > 1 ? 's' : ''} de leitura</div>
        <h1 className="post__title">{post.frontmatter.title}</h1>
        <div className="post__subtitle">{post.frontmatter.subtitle}</div>
        <div className="post__content">{renderAst(post.htmlAst)}</div>
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