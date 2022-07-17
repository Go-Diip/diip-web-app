import React, { useEffect } from "react"
import * as S from "./home-hero.styles"
import { Container } from "@mui/material"
import ScrollTo from "../../components/scroll-to/scroll-to.component"

const HomeHero = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Title>The next step for your company.</S.Title>
      </Container>
      <S.ScrollWrapper>
        <ScrollTo />
      </S.ScrollWrapper>
    </S.Wrapper>
  )
}

export default HomeHero
