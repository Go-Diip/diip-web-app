import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  backdrop-filter: blur(16px);
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.24);
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  text-align: center;
`

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.typography.pxToRem(36)};
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.pxToRem(48)};
    line-height: 56px;
  }
`
