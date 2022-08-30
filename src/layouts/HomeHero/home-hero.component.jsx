import React, { useEffect } from "react"
import * as S from "./home-hero.styles"
import { Container } from "@mui/material"
import ScrollTo from "../../components/scroll-to/scroll-to.component"

const HomeHero = ({ title }) => {
  return (
    <S.Wrapper>
      <Container>{title && <S.Title>{title}</S.Title>}</Container>
      <S.ScrollWrapper>
        <ScrollTo />
      </S.ScrollWrapper>
    </S.Wrapper>
  )
}

export default HomeHero
