import React from "react"
import * as S from "./next-step-banner.styles"
import { Container } from "@mui/material"
import CustomButton from "../../components/custom-button/custom-button.component"

const NextStepBanner = () => {
  return (
    <S.Wrapper>
      <Container maxWidth="md">
        <S.Title>Ready to take the next step?</S.Title>
        <CustomButton className="transparent">Get in Touch</CustomButton>
      </Container>
    </S.Wrapper>
  )
}

export default NextStepBanner
