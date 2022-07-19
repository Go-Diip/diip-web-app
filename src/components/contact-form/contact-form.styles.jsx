import styled from "styled-components"
import { FormControlLabel } from "@mui/material"
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
  display: block;

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
