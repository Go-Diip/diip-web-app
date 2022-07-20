import styled from "styled-components"
import { Box, CircularProgress, FormControlLabel } from "@mui/material"
import CustomButton from "../custom-button/custom-button.component"

export const FormWrapper = styled.form`
  .MuiFormControl-root {
    margin-bottom: 4.7rem;
  }
  .last-child {
    margin-bottom: 2.2rem !important;
  }
`

export const CustomFormControlLabel = styled(FormControlLabel)`
  margin-bottom: 2em;

  .MuiTypography-root,
  .MuiCheckbox-root {
    color: white !important;
  }

  .MuiTypography-root {
    font-size: ${({ theme }) => theme.typography.pxToRem(14)};
    max-width: 250px;
  }

  .MuiSvgIcon-root {
    font-size: 30px;
  }
`

export const SubmitCustomButton = styled(CustomButton)`
  padding: 0.8em 5em;
`

export const FormSpinner = styled(Box)`
  position: absolute;
  left: 5px;
  right: 0;
  top: 20px;
  bottom: 0;
  width: 17%;
  height: 17%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

export const CustomSpinner = styled(CircularProgress)`
  color: ${({ theme }) => theme.palette.text.primary};
  width: 15px !important;
  height: 15px !important;
`

export const Message = styled.div`
  padding-top: 1em;
  margin: 0;
  padding-bottom: 0;
  color: red;
  font-size: ${({ theme }) => theme.typography.pxToRem(14)};
`
