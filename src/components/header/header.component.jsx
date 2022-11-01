import React from "react"
import * as S from "./header.styles.jsx"
import Logo from "../../assets/white-logo.svg"
import CustomButton from "../custom-button/custom-button.component"

const Header = () => {
  return (
    <S.Navbar elevation={0}>
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
