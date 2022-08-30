import React from "react"
import * as S from "./custom-input.styles.jsx"

const CustomInput = props => {
  const {
    children,
    name,
    className,
    errors,
    customError,
    rows,
    register,
    rowsMax,
    label,
    type = "text",
    variant = "standard",
    validations,
  } = props

  const getError = () => {
    if (errors[name]) {
      if (customError) {
        return customError
      }
      switch (errors[name].type) {
        case "required":
          return "This field is required"
        case "maxLength":
          return `The min lenght is ${validations.maxLength}`
        case "minLength":
          return `The min lenght is ${validations.minLength}`
        case "pattern":
          return `The ${name} is invalid`
        case "validate":
          return errors[name].message
        default:
          return ""
      }
    }
  }

  return (
    <>
      <S.Wrapper
        fullWidth
        multiline={!!rows || !!rowsMax}
        error={!!errors[name]}
        variant={variant}
        rows={rows}
        rowsMax={rowsMax}
        className={className}
        color="secondary"
        label={label}
        type={type}
        helperText={getError()}
        {...register(name, validations)}
        {...props}
      />
    </>
  )
}
export default CustomInput
