import React from "react"
import * as S from "./slider-arrow.styles.jsx"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

const SliderArrow = ({ className, onClick }) => (
  <S.Button className={className} onClick={onClick} component="div">
    <S.IconWrapper>
      <ArrowBackIosIcon />
    </S.IconWrapper>
  </S.Button>
)

export default SliderArrow
