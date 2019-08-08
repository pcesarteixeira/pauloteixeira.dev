import React from "react"

import Header from '../Header'
import Footer from '../Footer'

import GlobalStyles from '../../styles/global'
import * as S from './styled'

export default function Layout(props) {
  const { children } = props

  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </S.LayoutWrapper>
  )
}