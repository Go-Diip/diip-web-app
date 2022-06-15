import React, { useEffect, useRef } from "react"

import * as S from "./coming-soon.styles"
import { Container } from "@mui/material"

import DiipLogo from "../../assets/diip.svg"
import PoweredByLogo from "../../assets/powered-by.svg"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"

import gsap from "gsap"

import Blue from "../../assets/blue.svg"

const ComingSoon = () => {
  const blueBlurRef = useRef(null)
  const redBlurRef = useRef(null)
  const yellowBlurRef = useRef(null)
  useEffect(() => {
    gsap.to(blueBlurRef.current, {
      y: -100,
      duration: 4,
      repeat: -1,
      yoyo: true,
    })
  }, [])
  return (
    <S.Wrapper>
      <S.BlueWrapper ref={blueBlurRef}>
        <Blue />
      </S.BlueWrapper>
      <S.RedBlur ref={redBlurRef} />
      <S.YellowBlur ref={yellowBlurRef} />
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
