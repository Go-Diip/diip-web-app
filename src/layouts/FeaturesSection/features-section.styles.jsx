import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  z-index: 4;
`

export const Icon = styled(CheckCircleOutlineRoundedIcon)`
  width: 20px;
  height: 20px;
  fill: white;
`

export const FeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

export const Feature = styled.span`
  color: white;
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.pxToRem(24)};
  line-height: 32px;
`

export const Title = styled.h2`
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.pxToRem(40)};
  line-height: 48px;
  margin-bottom: 40px;
`
