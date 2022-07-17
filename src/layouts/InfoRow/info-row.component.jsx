import React from "react"
import * as S from "./info-row.styles"
import { Container } from "@mui/material"

const InfoRow = ({ title, description }) => {
  return (
    <S.Wrapper>
      <Container>
        <S.TextWrapper>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description>{description}</S.Description>}
        </S.TextWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default InfoRow
