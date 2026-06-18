import React from "react"
import * as S from "./home-hero.styles"

const HomeHero = () => {
  return (
    <S.Wrapper>
      <S.CustomContainer maxWidth="md">
        <S.Content>
          <S.Title>
            Under a <span>creative</span> makeover.
          </S.Title>
          <S.Status>New website coming soon</S.Status>
        </S.Content>
      </S.CustomContainer>
    </S.Wrapper>
  )
}

export default HomeHero
