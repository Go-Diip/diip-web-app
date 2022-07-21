import styled from "styled-components"
import { List, ListItemButton, SwipeableDrawer } from "@mui/material"

export const CustomSwipeableDrawer = styled(SwipeableDrawer)`
  border-radius: 16px 16px 0px 0px;
`

export const CustomDrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.4em;
`

export const DrawerTitle = styled.div`
  padding: 1.2em;

  p {
    color: ${({ theme }) => theme.palette.secondary.main};
    margin: 0;
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    line-height: 24px;
  }
`

export const CustomList = styled(List)`
  padding-top: 0;
`

export const CustomListItemButton = styled(ListItemButton)`
  display: flex;
  justify-content: space-between;
  padding: 0.7em 1.2em;
  &.selected {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: white;
  }

  p {
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    line-height: 24px;
    margin: 0;
  }

  .MuiSvgIcon-root {
    color: white;
  }
`
