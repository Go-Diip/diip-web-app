import styled, { keyframes } from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Container } from "@mui/material"

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.8); }
`

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`

export const Wrapper = styled(SectionWrapper)`
  background-color: transparent;
  backdrop-filter: blur(16px);
  min-height: var(--viewport-height, 100vh);
  position: relative;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.navHeight}px 0 4rem;
`

export const CustomContainer = styled(Container)`
  position: relative;
  z-index: 2;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.75rem;
  padding: 0 1.5rem;

  /* Staggered entrance — respects reduced-motion below */
  > * {
    animation: ${fadeUp} 0.6s ease-out both;
  }
  > *:nth-child(2) {
    animation-delay: 0.08s;
  }
  > *:nth-child(3) {
    animation-delay: 0.16s;
  }
  > *:nth-child(4) {
    animation-delay: 0.24s;
  }

  @media (prefers-reduced-motion: reduce) {
    > * {
      animation: none;
    }
  }
`

export const Status = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 0.5rem;
  color: rgba(247, 251, 255, 0.65);
  font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  font-weight: 600;
  letter-spacing: 0.34em;
  text-transform: uppercase;

  ${({ theme }) => theme.breakpoints.up("md")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(13)};
  }
`

export const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  box-shadow: 0 0 0 4px rgba(0, 30, 245, 0.18);
  animation: ${pulse} 2s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.pxToRem(40)};
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.light};
  text-align: center;
  line-height: 1.1;
  margin: 0;

  > span {
    display: inline-block;
    font-weight: 400;
    -webkit-text-stroke: 1px ${({ theme }) => theme.palette.text.light};
    color: transparent;
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(58)};
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    font-size: ${({ theme }) => theme.typography.pxToRem(96)};
    line-height: 1.05;
  }
`
