import React from "react"
import * as S from "./slider-arrow.styles.jsx"
import ArrowBack from "../../assets/arrow-white.svg"

const SliderArrow = ({ className, onClick }) => (
  <S.Button
    disableRipple
    className={className}
    onClick={onClick}
    component="div"
  >
    <S.IconWrapper>
      <ArrowBack />
    </S.IconWrapper>
  </S.Button>
)

export default SliderArrow
