import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  backdrop-filter: blur(16px);
  position: relative;
  z-index: 4;
  color: white;
  padding: 9rem 0 6rem 0;
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: 24px;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 32px;
  }
`

export const Description = styled(Typography)`
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.pxToRem(28)};
  line-height: 36px;
`

export const TextWrapper = styled.div`
  max-width: 855px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
