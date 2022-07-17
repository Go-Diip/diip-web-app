import React from "react"
import * as S from "./header.styles.jsx"
import { Container } from "@mui/material"
import Logo from "../../assets/white-logo.svg"
import CustomLink from "../custom-link/custom-link.component"
import CustomButton from "../custom-button/custom-button.component"

const Header = () => {
  return (
    <S.Navbar elevation={0}>
      <S.CustomContainer maxWidth="xl">
        <S.Wrapper>
          <S.Link url="/">
            <Logo />
          </S.Link>
          <CustomButton className="blue">Contact Us</CustomButton>
        </S.Wrapper>
      </S.CustomContainer>
    </S.Navbar>
  )
}
export default Header
