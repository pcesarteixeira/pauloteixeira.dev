import React from 'react'
import GlobalStyles from '../../styles/global'
import * as S from './LayoutBase.style'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function LayoutBase({ children, location }) {
  
  return <React.Fragment>
    <GlobalStyles />
    <Header location={location} />

    <S.Wrapper>
      <div className="main-wrapper">{children}</div>
      <Footer />
    </S.Wrapper>

  </React.Fragment>
}