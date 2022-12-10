import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import GradientBG from "../../assets/gradient.svg"
import { Container, Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  background-color: transparent;
  backdrop-filter: blur(16px);
  height: var(--viewport-height, 100vh);
  position: relative;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Gradient = styled(GradientBG)``

export const GradientWrapper = styled.div`
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
  font-size: ${({ theme }) => theme.typography.pxToRem(52)};
  //line-height: 140%;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.light};
  text-align: left;

  line-height: 64px;
  margin: auto;
  //white-space: nowrap;

  > span {
    display: inline-block;
    font-weight: 400;
    line-height: 64px;
    -webkit-text-stroke: 1px ${({ theme }) => theme.palette.text.light};
    color: transparent;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding-left: 2rem;
    padding-right: 2rem;
    line-height: normal;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.pxToRem(64)};

    > span {
      line-height: 140%;
    }
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
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
