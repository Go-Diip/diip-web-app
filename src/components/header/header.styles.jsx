import styled from "styled-components"
import { AppBar, Container } from "@mui/material"
import CustomLink from "../custom-link/custom-link.component"

export const Navbar = styled(AppBar)`
  background-color: rgba(16, 16, 16, 0.8);
  backdrop-filter: blur(10px);
  //background-color: transparent;
  height: ${({ theme }) => theme.navHeight}px;
  //z-index: 4;
  //color: white;

  &.transparent {
    background-color: transparent;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CustomContainer = styled(Container)`
  height: 100%;
  width: 100%;
`

export const Link = styled(CustomLink)`
  display: flex;
  align-items: center;
`
