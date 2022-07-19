import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

export const Wrapper = styled(SectionWrapper)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  backdrop-filter: blur(16px);
  padding-top: 2em;
  padding-bottom: 2em;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.text.light};
`

export const Description = styled.p`
  color: ${({ theme }) => theme.palette.text.light};
`
