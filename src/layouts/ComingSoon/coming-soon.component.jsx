import React from "react"

import * as S from "./coming-soon.styles"
import { Container } from "@mui/material"

import DiipLogo from "../../assets/diip.svg"
import PoweredByLogo from "../../assets/powered-by.svg"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"

const ComingSoon = () => {
  return (
    <S.Wrapper>
      <S.BlueBlur />
      <S.RedBlur />
      <S.YellowBlur />
      <Container>
        <S.ContentWrapper>
          <DiipLogo />
          <S.Title>A new website coming soon</S.Title>
          <S.Description>
            A design & development boutique specialized in digital products
          </S.Description>
          <S.Button>
            <S.ButtonWrapper>
              <EmailOutlinedIcon />
              <span>Contact Us</span>
            </S.ButtonWrapper>
          </S.Button>
        </S.ContentWrapper>
      </Container>
      <S.BottomWrapper>
        <PoweredByLogo />
      </S.BottomWrapper>
    </S.Wrapper>
  )
}

export default ComingSoon
