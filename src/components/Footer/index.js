import React from "react"

import * as S from './styled'

export default function Footer(props) {
  return (
    <S.Footer>© {new Date().getFullYear()}, Paulo Teixeira</S.Footer>
  )
}