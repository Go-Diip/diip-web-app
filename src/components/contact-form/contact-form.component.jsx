import React from "react"
import { useForm } from "react-hook-form"
import CustomInput from "../custom-input/custom-input.component"

import * as S from "./contact-form.styles"
import { MenuItem } from "@mui/material"
import CustomButton from "../custom-button/custom-button.component"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })

  return (
    <S.FormWrapper>
      <CustomInput
        register={register}
        label="Name"
        isRequired
        errors={errors}
        name="fullname"
      />
      <CustomInput
        register={register}
        label="E-mail"
        isRequired
        errors={errors}
        name="email"
      />
      <CustomInput
        register={register}
        label="What are you interested in?"
        isRequired
        errors={errors}
        name="interestedin"
        value={"E-commerce"}
        onChange={() => {}}
        select
        SelectProps={{
          native: true,
        }}
      >
        <MenuItem value="" disabled>
          Select an option
        </MenuItem>
        <MenuItem value="E-commerce">E-commerce</MenuItem>
        <MenuItem value="E-commerce">E-commerce</MenuItem>
        <MenuItem value="E-commerce">E-commerce</MenuItem>
      </CustomInput>

      <CustomInput
        register={register}
        label="Message"
        isRequired
        errors={errors}
        name="message"
        multiline
        rows={2}
      />
      <CustomButton className="blue" disabled>
        SEND
      </CustomButton>
    </S.FormWrapper>
  )
}

export default ContactForm
