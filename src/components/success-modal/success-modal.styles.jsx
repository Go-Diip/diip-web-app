import styled from "styled-components"
import { Dialog, DialogContent, SwipeableDrawer } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

export const CustomDialog = styled(Dialog)`
  display: none;

  @media (min-width: 375px) {
    display: block;
  }
`

export const CustomSwipeableDrawer = styled(SwipeableDrawer)`
  display: none;
  border-radius: 16px 16px 0px 0px;
  @media (max-width: 375px) {
    display: block;
  }
`

export const CustomDialogContent = styled(DialogContent)`
  max-width: 320px;
  padding: 1.8em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const CustomDrawerBody = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em 1.5em 1.5em 1.5em;
`

export const DrawerContainer = styled.div`
  max-width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 32px;
  color: ${({ theme }) => theme.palette.secondary.main};
  margin: 0;
  text-align: center;
`

export const Description = styled.p`
  font-weight: 500;

  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 24px;
  letter-spacing: 0;
  margin: 0 0 2em;
  text-align: center;
`

export const SuccessIcon = styled(CheckCircle)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 64px;
`
