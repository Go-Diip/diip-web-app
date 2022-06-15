import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Typography } from "@mui/material"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  max-width: 510px;
  margin: auto;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`

export const BottomWrapper = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 0;
  left: 0;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(29, 9, 2, 0.25);
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
`

export const Description = styled(Typography)`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
`

export const Button = styled(CustomButton)`
  background-color: transparent;
  border-radius: 100px;
  padding: 1em;
  color: ${({ theme }) => theme.palette.primary.dark};
  border: 1px solid ${({ theme }) => theme.palette.primary.dark};
  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.light};
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`
