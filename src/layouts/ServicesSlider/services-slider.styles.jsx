import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  backdrop-filter: blur(16px);
  color: white;
  .swiper {
    padding: 1rem;
    ${({ theme }) => theme.breakpoints.up("sm")} {
      padding: 0;
      margin-bottom: 0;
    }
    overflow: unset;
  }
  .swiper-slide {
    height: auto;
    box-sizing: border-box;
  }
  .MuiContainer-root {
    position: relative;
  }
`

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.pxToRem(28)};
  line-height: 36px;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(40)};
    line-height: 48px;
  }
`

export const Description = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: 24px;
  font-weight: 400;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 32px;
  }
`

export const TextWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.typography.pxToRem(64)};
`

export const ArrowGrid = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .next {
    margin-left: 1.75rem;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`

export const IndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Number = styled.span``

export const LineWrapper = styled.div`
  position: relative;
  height: 2px;
  width: 290px;
  background-color: rgba(255, 255, 255, 0.24);
`

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 48px 0;
  gap: ${({ theme }) => theme.typography.pxToRem(40)};
`

export const WhiteLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  background-color: white;
  transition: 0.3s all ease;
`
