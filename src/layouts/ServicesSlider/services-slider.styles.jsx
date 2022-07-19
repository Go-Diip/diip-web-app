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
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.pxToRem(40)};
    line-height: 48px;
  }
`

export const Description = styled(Typography)`
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-weight: 400;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 32px;
  }
`

export const TextWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.typography.pxToRem(64)};
`
