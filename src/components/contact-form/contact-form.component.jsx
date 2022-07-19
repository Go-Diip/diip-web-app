import React, { useState } from "react"
import { useForm } from "react-hook-form"
import CustomInput from "../custom-input/custom-input.component"
import { Checkbox, FormGroup, MenuItem } from "@mui/material"
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material"

import * as S from "./contact-form.styles"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })
  const [successMessage, setSuccessMessage] = useState("")

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [aceptedPrivacy, setAceptedPrivacy] = useState(false)
  const [interest, setInterest] = useState(" ")

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
        type="email"
      />
      <CustomInput
        register={register}
        label="What are you interested in?"
        isRequired
        errors={errors}
        name="interestedin"
        value={interest}
        onChange={event => setInterest(event.target.value)}
        select
      >
        <MenuItem value=" " selected disabled>
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
        minRows={2}
        className="last-child"
      />

      <FormGroup>
        <S.CustomFormControlLabel
          value="isAcepted"
          control={
            <Checkbox
              icon={<RadioButtonUnchecked />}
              checkedIcon={<RadioButtonChecked />}
              onChange={event => setAceptedPrivacy(event.target.checked)}
            />
          }
          label="By submitting this form, I agree to the privacy policy."
        />
      </FormGroup>
      <S.SubmitCustomButton
        type="submit"
        className="blue"
        disabled={!aceptedPrivacy}
      >
        SEND
      </S.SubmitCustomButton>
    </S.FormWrapper>
  )
}

export default ContactForm
