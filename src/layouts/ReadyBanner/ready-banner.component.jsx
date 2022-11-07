import React from "react"
import * as S from "./ready-banner.styles"
import { Container } from "@mui/material"
const ReadyBanner = ({ title }) => {
  return (
    <S.Wrapper>
      <Container>
        {title && <S.Title>{title}</S.Title>}
        <S.ButtonWrapper>
          <S.Button href="/contact-us/">
            <span>Get in touch</span>
          </S.Button>
        </S.ButtonWrapper>
      </Container>
    </S.Wrapper>
  )
}

export default ReadyBanner
