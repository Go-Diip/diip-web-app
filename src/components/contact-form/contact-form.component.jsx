import React, { useState } from "react"
import { useForm } from "react-hook-form"
import CustomInput from "../custom-input/custom-input.component"
import { Checkbox, FormGroup, InputAdornment, MenuItem } from "@mui/material"
import { RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material"
import { emailRegexExpression, isBrowser } from "../../utils"
import SuccessModal from "../success-modal-drawer/success-modal-drawer.component"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { contactFormApi } from "../../apis/apis"
import CustomDrawerSelect from "../custom-drawer-select/custom-drawer-select.component"

import * as S from "./contact-form.styles"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  })

  const selectItems = [
    "E-commerce",
    "Software",
    "Website",
    "Partnership",
    "Other",
  ]

  const [successMessage, setSuccessMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [aceptedPrivacy, setAceptedPrivacy] = useState(false)
  const [interest, setInterest] = useState("")

  const [open, setOpen] = React.useState(false)
  const [openSelect, setOpenSelect] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleOpenSelect = () => {
    setOpenSelect(true)
  }
  const handleCloseSelect = () => {
    setOpenSelect(false)
  }

  const onSubmit = async data => {
    setErrorMessage("")
    setIsLoading(true)

    const form = new FormData()
    form.append("your-name", data.name)
    form.append("your-email", data.email)
    form.append("your-interest", data.interestedin)
    form.append("your-message", data.message)

    contactFormApi
      .post(`/47/feedback`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(response => {
        setIsLoading(false)
        if (response.data) {
          if (response.data.status === "mail_sent") {
            setOpen(true)
            setSuccessMessage(response.data.message)
            setAceptedPrivacy(false)
            setInterest("")
            reset()
          } else {
            console.log(response.data)
            setErrorMessage(response.data.message)
          }
        }
      })
      .catch(err => {
        console.log(err.message)
        setErrorMessage("Something has happened try again")
        setIsLoading(false)
      })
  }

  return (
    <>
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          register={register}
          label="Name"
          errors={errors}
          name="name"
          validations={{ required: true }}
        />
        <CustomInput
          register={register}
          label="E-mail"
          errors={errors}
          name="email"
          type="email"
          validations={{ required: true, pattern: emailRegexExpression }}
        />
        <CustomInput
          id="outlined-select-currency"
          register={register}
          label="What are you interested in?"
          errors={errors}
          name="interestedin"
          value={interest}
          onChange={event => setInterest(event.target.value)}
          select
          valueDisabled={
            interest === "" ? "rgba(255, 255, 255, 0.32);" : "#FFFFFF"
          }
          validations={{ required: true }}
          className="select-box"
        >
          <MenuItem value=" " selected disabled>
            Select an option
          </MenuItem>
          {selectItems.map((item, index) => (
            <MenuItem value={item} key={`interest-${index}`}>
              {item}
            </MenuItem>
          ))}
        </CustomInput>

        <CustomInput
          register={register}
          label="What are you interested in?"
          errors={errors}
          name="interestedin"
          value={interest}
          validations={{ required: true }}
          className={
            openSelect ? "text-field-select rotate" : "text-field-select"
          }
          onClick={handleOpenSelect}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ArrowDropDownIcon />
              </InputAdornment>
            ),
          }}
        />

        <CustomInput
          register={register}
          label="Message"
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
        {errorMessage && (
          <S.Message color="red">
            <p>{errorMessage}</p>
          </S.Message>
        )}
        <S.SubmitCustomButton
          type="submit"
          className="blue"
          disabled={!aceptedPrivacy || isLoading}
        >
          {isLoading && (
            <S.FormSpinner>
              <S.CustomSpinner />
            </S.FormSpinner>
          )}
          SEND
        </S.SubmitCustomButton>
      </S.FormWrapper>
      <CustomDrawerSelect
        open={openSelect}
        handleClose={handleCloseSelect}
        handleOpen={handleOpenSelect}
        items={selectItems}
        itemSelected={interest}
        setSelected={setInterest}
      />
      <SuccessModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        successMessage={successMessage}
      />
    </>
  )
}

export default ContactForm
