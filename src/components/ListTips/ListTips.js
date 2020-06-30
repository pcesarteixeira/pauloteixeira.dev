import React from 'react'
import { Link } from 'gatsby'

import * as S from './ListTips.style'

export default function ListTips({ tips, title, totalTips }) {
  const labelCategory = ({ total }) => total > 1 ? 'dicas publicadas nessa categoria' : 'dica publicada nessa categoria'

  return <React.Fragment>
    <S.Page className="content">Dicas</S.Page>
    <S.Title className="content">{title}</S.Title>
    <S.Subtitle className="content">Você está acessando a tela de dicas sobre <strong>{title}</strong>. Se você deseja ver meus artigos publicados <Link to="/">clique aqui</Link>.</S.Subtitle>
    <S.TotalTips className="content">
      <span>{totalTips} {labelCategory({ total: totalTips })}</span>
    </S.TotalTips>

  </React.Fragment>
}