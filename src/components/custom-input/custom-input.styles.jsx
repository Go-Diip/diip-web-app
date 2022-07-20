import styled from "styled-components"
import { TextField } from "@mui/material"

export const Wrapper = styled(TextField)`
  color: white;
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .MuiFormLabel-root {
    color: ${({ theme }) => theme.palette.text.light};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    line-height: ${({ theme }) => theme.typography.pxToRem(24)};
    font-width: 500;
  }

  .MuiInputBase-root {
    color: white;
    padding-bottom: 9px;
  }

  .MuiOutlinedInput-input {
    padding: 13px 14px;
  }

  .MuiInputLabel-outlined,
  .MuiOutlinedInput-notchedOutline {
    color: white !important;
    border-color: white !important;
  }

  .MuiInput-underline:after {
    border-bottom-color: ${({ theme }) => theme.palette.secondary.main};
  }

  .MuiInput-underline:before {
    border-bottom: 1px solid rgba(255, 255, 255, 0.42);
  }

  .MuiFormHelperText-root {
    color: #d32f2f;
    position: absolute;
    bottom: -25px;
  }

  .Mui-error:after {
    border-bottom-color: #d32f2f;
  }
  .MuiSelect-select {
    color: ${({ valueDisabled }) => valueDisabled};
  }
`
