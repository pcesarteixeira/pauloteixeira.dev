import React from 'react'
import GlobalStyles from '../../styles/global'
import * as S from './LayoutBase.style'
import Header from '../../_components/Header/Header'
import Footer from '../../_components/Footer/Footer'

export default function LayoutBase({ children, location }) {
  
  return <S.Wrapper>
    <GlobalStyles />
    <div className="main-wrapper">
      <Header location={location} />
      {children}
    </div>
    <Footer />
  </S.Wrapper>
}