import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import GradientBG from "../../assets/gradient.svg"
import { Container, Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  backdrop-filter: blur(16px);
  height: 100vh;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Gradient = styled(GradientBG)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CustomContainer = styled(Container)`
  position: relative;
  z-index: 2;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.pxToRem(64)};
  line-height: 64px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.light};
  text-align: center;
  margin: auto;
  white-space: nowrap;
  .Typewriter {
    display: inline-block;
    font-weight: 400;
    -webkit-text-stroke: 1px ${({ theme }) => theme.palette.text.light};
    color: transparent;
  }
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(104)};
    line-height: 104px;
  }
`

export const TypewriterText = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  font-family: ${({ theme }) => theme.fonts.tertiary};
  margin-top: 0.5rem;
  white-space: nowrap;
  text-transform: uppercase;
  color: #46281f;
  .Typewriter {
    display: inline-block;
    color: #00b2e4;
  }
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(48)};
  }
`

export const ScrollWrapper = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
`
