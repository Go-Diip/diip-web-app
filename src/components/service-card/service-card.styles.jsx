import styled from "styled-components"
import CustomImage from "../custom-image/custom-image.component"

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 8px;
`

export const TextWrapper = styled.div`
  padding: 56px 48px;
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
