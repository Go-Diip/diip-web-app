import React from "react"
import * as S from "./header.styles.jsx"
import Logo from "../../assets/white-logo.svg"
import CustomButton from "../custom-button/custom-button.component"
import { useScrollTrigger } from "@mui/material"

const Header = () => {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  })
  return (
    <S.Navbar elevation={0} className={!scrollTrigger ? "transparent" : ""}>
      <S.CustomContainer maxWidth="xl">
        <S.Wrapper>
          <S.Link url="/">
            <Logo />
          </S.Link>
          <CustomButton className="blue" href="/contact-us">
            Contact Us
          </CustomButton>
        </S.Wrapper>
      </S.CustomContainer>
    </S.Navbar>
  )
}
export default Header
