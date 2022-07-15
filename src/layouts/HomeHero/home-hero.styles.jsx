import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  backdrop-filter: blur(16px);
  height: 100vh;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.text.light};
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.pxToRem(64)};
    line-height: 64px;
  }
`
