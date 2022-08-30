import React, { useEffect, useRef } from "react"

import gsap from "gsap"

import * as S from "./coming-soon.styles"

import DiipLogo from "../../assets/diip.svg"
import PoweredByLogo from "../../assets/powered-by.svg"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import Blue from "../../assets/blob-02.svg"
import Red from "../../assets/blob-01.svg"
import Yellow from "../../assets/blob-03.svg"

const ComingSoon = () => {
  const blueBlurRef = useRef(null)
  const redBlurRef = useRef(null)
  const yellowBlurRef = useRef(null)

  useEffect(() => {
    gsap.defaults({
      duration: 10,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    })
    gsap.to(blueBlurRef.current, {
      y: -100,
      rotateZ: 120,
      scale: 1.5,
    })
    gsap.to(redBlurRef.current, {
      x: -100,
      rotateZ: 120,
    })
    gsap.to(yellowBlurRef.current, {
      rotate: 120,
    })
  }, [])

  return (
    <S.Wrapper>
      <S.BlueWrapper ref={blueBlurRef}>
        <Blue />
      </S.BlueWrapper>
      <S.RedWrapper ref={redBlurRef}>
        <Red />
      </S.RedWrapper>
      <S.YellowWrapper ref={yellowBlurRef}>
        <Yellow />
      </S.YellowWrapper>
      <S.CustomContainer>
        <S.ContentWrapper>
          <DiipLogo />
          <S.Title>A new website coming soon</S.Title>
          <S.Description>
            A design & development boutique specialized in digital products
          </S.Description>
          <S.ExternalLink href="mailto:hello@godiip.com">
            <S.Button>
              <S.ButtonWrapper>
                <EmailOutlinedIcon />
                <span>Contact Us</span>
              </S.ButtonWrapper>
            </S.Button>
          </S.ExternalLink>
        </S.ContentWrapper>
      </S.CustomContainer>
      <S.BottomWrapper>
        <PoweredByLogo />
      </S.BottomWrapper>
    </S.Wrapper>
  )
}

export default ComingSoon
