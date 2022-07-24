import styled from "styled-components"
import CustomImage from "../custom-image/custom-image.component"
import { Typography } from "@mui/material"

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 8px;
`

export const TextWrapper = styled.div`
  padding: 32px 24px;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    padding: 56px 48px;
  }
`

export const Image = styled(CustomImage)`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover !important;
  }
`

export const Title = styled.h2`
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 32px;
  margin-bottom: 8px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    margin-bottom: ${({ theme }) => theme.typography.pxToRem(56)};
    font-size: ${({ theme }) => theme.typography.pxToRem(40)};
    line-height: 48px;
  }
`

export const Description = styled(Typography)`
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.pxToRem(18)};
    line-height: 28px;
  }
`
