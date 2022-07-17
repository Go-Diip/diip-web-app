import styled from "styled-components"
import { AppBar, Container } from "@mui/material"

export const Navbar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: ${({ theme }) => theme.navHeight}px;
  //z-index: 4;
  //color: white;
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
