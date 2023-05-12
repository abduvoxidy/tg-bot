import React from "react";
import MainDialog from "components/UI/Dialogs/MainDialog";
import MainButton from "components/UI/Buttons/MainButton";
import Input from "components/UI/Forms/Input";
import InputMask from "components/UI/Forms/InputMask";
import { useForm } from "react-hook-form";
import cls from "./ContactUs.module.scss";
import { useState } from "react";
import Textarea from "components/UI/Forms/Textarea";

function ContactDialog({ open, handleClose }) {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      mail: "",
      phone: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <MainDialog className={cls.dialog} open={open} handleClose={handleClose}>
      <div>
        <h2>Оставить заявку</h2>
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="fullname"
            placeholder="Алексеев Алексей Алексеевич"
            name="fullname"
            register={register}
            errors={errors}
            labelText="ФИО"
            required
          />

          <Input
            id="mail"
            placeholder="@1234abcd"
            name="mail"
            type="mail"
            register={register}
            errors={errors}
            labelText="Электронная почта"
            required
          />
          <InputMask
            id="phone"
            mask={`+\\9\\9\\8 99 999 99 99`}
            placeholder="+998 00 000-00-00"
            control={control}
            name="phone"
            labelText="Номер телефона"
            required
          />

          <Textarea
            labelText={"Ваша заявка *"}
            required
            placeholder="Сообщение"
            rows={3}
          />

          <MainButton
            onClick={handleClose}
            fullWidth
            type="submit"
            className={cls.btn}
          >
            Отправить
          </MainButton>
        </form>
      </div>
    </MainDialog>
  );
}

export default ContactDialog;
