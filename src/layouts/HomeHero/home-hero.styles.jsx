import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"

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

export const Title = styled.h1`
  color: ${({ theme }) => theme.palette.text.light};
  max-width: 504px;
  margin: auto;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.pxToRem(64)};
    line-height: 64px;
  }
`

export const ScrollWrapper = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
`
