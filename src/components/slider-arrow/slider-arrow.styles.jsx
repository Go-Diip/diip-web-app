import styled from "styled-components"
import { IconButton } from "@mui/material"

export const Button = styled(IconButton)`
  border-radius: 100px;
  width: 64px !important;
  height: 64px !important;
  display: flex !important;
  justify-content: center;!important;
  align-items: center;!important;
  
  svg {
    //fill: white;
  }
  transition: 0.3s all ease;
  :not(&.swiper-button-disabled) {
    border: 2px solid white;
    &:hover {
      border: 2px solid ${({ theme }) => theme.palette.secondary.main};
      background-color: ${({ theme }) => theme.palette.secondary.main};
    }
  }

  //padding: 1.75rem !important;

  &.swiper-button-disabled {
    border: 2px solid rgba(255, 255, 255, 0.16);
    svg {
      opacity: 0.16;
    }
  }
  &.next-testimonial,
  &.next {
    transform: rotate(180deg);
  }
`

export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
