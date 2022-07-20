import React from "react"
import { Dialog, DialogContent } from "@mui/material"
import CustomButton from "../custom-button/custom-button.component"
import * as S from "./success-modal.styles"
import { SuccessIcon } from "./success-modal.styles"

const SuccessModal = ({ successMessage, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <S.CustomDialogContent>
        <S.SuccessIcon />
        <S.Title>Message sent successfully</S.Title>
        <S.Description>{successMessage}</S.Description>
        <CustomButton onClick={handleClose} fullWidth>
          SEND A NEW MESSAGE
        </CustomButton>
      </S.CustomDialogContent>
    </Dialog>
  )
}

export default SuccessModal
