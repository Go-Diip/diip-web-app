import React from "react"
import CustomButton from "../custom-button/custom-button.component"
import * as S from "./success-modal-drawer.styles"

const SuccessModal = ({ successMessage, open, handleClose, handleOpen }) => {
  return (
    <>
      <S.CustomDialog open={open} onClose={handleClose}>
        <S.CustomDialogContent>
          <S.SuccessIcon />
          <S.Title>Message sent successfully</S.Title>
          <S.Description>{successMessage}</S.Description>
          <CustomButton onClick={handleClose} fullWidth>
            SEND A NEW MESSAGE
          </CustomButton>
        </S.CustomDialogContent>
      </S.CustomDialog>

      <S.CustomSwipeableDrawer
        open={open}
        anchor={"bottom"}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        <S.CustomDrawerBody>
          <S.DrawerContainer>
            <S.SuccessIcon />
            <S.Title>Message sent successfully</S.Title>
            <S.Description>{successMessage}</S.Description>
            <CustomButton onClick={handleClose} fullWidth>
              SEND A NEW MESSAGE
            </CustomButton>
          </S.DrawerContainer>
        </S.CustomDrawerBody>
      </S.CustomSwipeableDrawer>
    </>
  )
}

export default SuccessModal
