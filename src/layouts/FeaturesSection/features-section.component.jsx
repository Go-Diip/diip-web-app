import React from "react"
import * as S from "./features-section.styles"
import { Container } from "@mui/material"

const FeaturesSection = ({ title, features }) => {
  return (
    <S.Wrapper>
      <Container>
        <h1>{title}</h1>
      </Container>
    </S.Wrapper>
  )
}

export default FeaturesSection
