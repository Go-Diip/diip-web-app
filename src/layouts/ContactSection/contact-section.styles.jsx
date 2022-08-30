import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  backdrop-filter: blur(16px);
  padding-top: 8rem;
  padding-bottom: 2em;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.text.light};
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.pxToRem(40)};
  line-height: 125%;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(32)};
  }
`

export const Description = styled.p`
  color: ${({ theme }) => theme.palette.text.light};
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: 150%;
`
