import React from 'react'
import { Link } from 'gatsby'

import * as S from './TipsHome.style'

export default function TipsHome({ tips }) {
  const labelCategory = ({ total }) => total > 1 ? 'dicas publicadas' : 'dica publicada'

  return <React.Fragment>
    <S.Title className="content">Dicas</S.Title>
    <S.SubTitle className="content">Algumas pequenas dicas não valem um artigo completo, então separei uma sessão para isso, separadas por tecnologias. Como funcionam funções especificas, propriedades do CSS, você encontra aqui... <span role="img" aria-label="smile">😄</span></S.SubTitle>

    <S.Tags className="content">
      {tips.map((tip, index) => <Link key={index} className="tag" to={`/tips/${tip.fieldValue}`} >
        {tip.fieldValue}<br />
        <span><span>{tip.totalCount}</span> {labelCategory({ total: tip.totalCount })}</span>
      </Link>)}
    </S.Tags>
  </React.Fragment>
}