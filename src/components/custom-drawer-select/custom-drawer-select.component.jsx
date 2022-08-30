import React from "react"
import CheckIcon from "@mui/icons-material/Check"

import * as S from "./custom-drawer-select.styles"

const CustomDrawerSelect = ({
  open,
  handleClose,
  handleOpen,
  items,
  itemSelected,
  setSelected,
}) => {
  if (!items) return null

  return (
    <S.CustomSwipeableDrawer
      open={open}
      anchor={"bottom"}
      onClose={handleClose}
      onOpen={handleOpen}
    >
      <S.CustomDrawerBody>
        <S.DrawerTitle>
          <p>Select an option</p>
        </S.DrawerTitle>
        <S.CustomList>
          {items?.map((item, index) => (
            <S.CustomListItemButton
              key={`item-${index}`}
              onClick={() => {
                setSelected(item)
                handleClose()
              }}
              className={itemSelected === item && "selected"}
            >
              <p>{item}</p>
              <CheckIcon />
            </S.CustomListItemButton>
          ))}
        </S.CustomList>
      </S.CustomDrawerBody>
    </S.CustomSwipeableDrawer>
  )
}

export default CustomDrawerSelect
