import styled from "styled-components"
import ScrollIcon from "../../assets/scroll.svg"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

export const Wrapper = styled.div`
  position: relative;
  height: 128px;
  width: 128px;
`
export const Scroll = styled(ScrollIcon)`
  height: 128px;
  width: 128px;
`

export const Arrow = styled(KeyboardArrowDownIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: white;
`
