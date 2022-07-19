import React from "react"
import * as S from "./custom-input.styles.jsx"

const CustomInput = props => {
  const {
    children,
    name,
    className,
    errors,
    customError,
    isRequired,
    rows,
    register,
    rowsMax,
    label,
    type = "text",
    variant = "standard",
  } = props

  const getError = () => {
    if (errors[name]) {
      if (customError) {
        return customError
      }
      return "This is a required field"
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
        required={!!isRequired}
        className={className}
        color="secondary"
        label={label}
        type={type}
        helperText={getError()}
        {...register(name, { required: isRequired })}
        {...props}
      />
    </>
  )
}
export default CustomInput
