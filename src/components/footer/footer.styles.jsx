import styled from "styled-components"

export const Wrapper = styled.footer`
  color: white;
  //padding: 4em 0 0;
  background-color: ${({ theme }) => theme.palette.primary.main};

  // ${({ theme }) => theme.breakpoints.down("sm")} {
  //   .MuiContainer-root {
  //     padding-right: 2.5em;
  //     padding-left: 2.5em;
  //   }
  // }
`

export const TopWrapper = styled.div`
  padding: 5em 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  text-align: center;
`

export const BottomWrapper = styled.div`
  padding: ${({ theme }) => theme.typography.pxToRem(30)} 0;
`

export const Title = styled.h2`
  margin-bottom: 1rem;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    line-height: 24px;
  }
`

export const Link = styled.a`
  text-decoration: none;
  transition: 0.3s all ease;
  ${({ theme }) => theme.breakpoints.up("md")} {
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    line-height: 32px;
  }
  &:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`

export const Description = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
  line-height: 20px;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up("md")} {
    text-align: left;
  }
`
