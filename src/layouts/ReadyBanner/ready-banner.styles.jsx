import styled from "styled-components"
import SectionWrapper from "../../components/section-wrapper/section-wrapper.component"
import CustomButton from "../../components/custom-button/custom-button.component"

export const Wrapper = styled(SectionWrapper)`
  position: relative;
  z-index: 4;
`

export const Title = styled.h3`
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.pxToRem(40)};
  line-height: 56px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled(CustomButton)`
  margin-top: 24px;
  overflow: hidden;
  background: transparent !important;
  position: relative;
  text-decoration: none;
  transition: 0.2s transform ease-in-out;
  will-change: transform;
  z-index: 5;
  border: 2px solid white;
  span {
    position: relative;
    z-index: 6;
  }

  &:after {
    background-color: white;
    border-radius: 3rem;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: 0.2s transform ease-out;
    will-change: transform;
    z-index: 4;
  }
  &:hover::after {
    transform: translate(0, 0);
    z-index: 4;
    span {
      z-index: 6;
    }
  }
  &:hover {
    border: 2px solid transparent;
    span {
      color: #001ef5;
    }
    will-change: transform;
  }
`
