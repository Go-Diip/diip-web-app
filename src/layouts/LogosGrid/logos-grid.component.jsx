import React from "react"
import * as S from "./logos-grid.styles"
import { Container } from "@mui/material"

const LogosGrid = ({ title, logos }) => {
  if (!logos) return null
  return (
    <S.Wrapper>
      <Container maxWidth="md">
        {title && <S.Title>{title}</S.Title>}
        <S.LogosWrapper>
          {logos.map(({ logo }, index) => (
            <S.ImageWrapper key={`logo-${index}`}>
              <S.Logo img={logo} />
            </S.ImageWrapper>
          ))}
        </S.LogosWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default LogosGrid
