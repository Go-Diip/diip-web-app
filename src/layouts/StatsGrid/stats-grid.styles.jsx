import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import { Grid, Typography } from "@mui/material"

export const Wrapper = styled(SectionWrapper)`
  backdrop-filter: blur(16px);
  color: white;
  position: relative;
  z-index: 4;
`

export const Title = styled.h2`
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-weight: 600;
    font-size: ${({ theme }) => theme.typography.pxToRem(40)};
    line-height: 48px;
  }
`

export const RightWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.24);
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const InfoWrapper = styled.div`
  //flex: 1;
  display: flex;
  gap: ${({ theme }) => theme.typography.pxToRem(24)};
  padding: ${({ theme }) => theme.typography.pxToRem(24)} 0;
  &.border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  }
`

export const Value = styled.span`
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.pxToRem(64)};
  line-height: 72px;
  &.right {
    text-align: right;
  }
`

export const InfoColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Description = styled(Typography)`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: 24px;
  margin-bottom: 8px;
  &.small {
    font-size: ${({ theme }) => theme.typography.pxToRem(12)};
  }
  &.right {
    text-align: right;
  }
`
