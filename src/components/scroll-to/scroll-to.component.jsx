import React, { useEffect } from "react"
import * as S from "./scroll-to.styles"
import { gsap } from "gsap"

const ScrollTo = () => {
  useEffect(() => {
    gsap.to(".scroll", {
      rotate: 360,
      duration: 8,
      repeat: -1,
      ease: "none",
    })
  }, [])
  return (
    <S.Wrapper>
      <S.Scroll className="scroll" />
      <S.Arrow />
    </S.Wrapper>
  )
}

export default ScrollTo
