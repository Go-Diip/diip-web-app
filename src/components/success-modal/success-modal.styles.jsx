import styled from "styled-components"
import { DialogContent } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

export const CustomDialogContent = styled(DialogContent)`
  max-width: 320px;
  padding: 1.8em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Title = styled.h2`
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 32px;
  color: ${({ theme }) => theme.palette.secondary.main};
  margin: 0;
`

export const Description = styled.p`
  font-weight: 500;

  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 24px;
  letter-spacing: 0;
  margin: 0 0 2em;
`

export const SuccessIcon = styled(CheckCircle)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 64px;
`
