import React from "react";
import Input from "components/UI/Forms/Input";
import InputMask from "components/UI/Forms/InputMask";
import { useForm } from "react-hook-form";
import DatePicker from "components/UI/Forms/DatePicker";
import { useState } from "react";
import MainButton from "components/UI/Buttons/MainButton";
import cls from "./PersonalData.module.scss";
import { BlueTelegramIcon, GmailIcon } from "components/UI/Icons";

function PersonalData() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const {
    handleSubmit,
    watch,
    control,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      username: "",
      phone: "",
      subPhone: "",
      passportSeria: "",
      pinfl: "",
    },
    // resolver: smsSend ? yupResolver(schema) : yupResolver(schemaCard),
  });

  const handleChange = (newValue) => {
    console.log("newValue", newValue);
    setSelectedDate(newValue);
  };

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={cls.title}>Прикрепить</div>
      <div className={cls.attachBtns}>
        <div className={cls.attachBtn}>
          <span>
            <BlueTelegramIcon />
          </span>
          <p> Telegram</p>
        </div>
        <div className={cls.attachBtn}>
          <span>
            <GmailIcon />
          </span>
          <p> Gmail</p>
        </div>
      </div>

      <div className={cls.inputs}>
        <Input
          id='name'
          placeholder={"Имя"}
          name='name'
          register={register}
          errors={errors}
          labelText='Имя'
          required
        />
        <Input
          id='surname'
          placeholder={"Фамилия"}
          name='surname'
          register={register}
          errors={errors}
          labelText='Фамилия'
          required
        />
        <Input
          id='username'
          placeholder={"Telegram user name"}
          name='username'
          register={register}
          errors={errors}
          labelText='Telegram username'
          required
        />
        <InputMask
          id='phone'
          mask={`+\\9\\9\\8 99 999 99 99`}
          placeholder={"Введите номер"}
          control={control}
          name='phone'
          labelText='Номер телефона'
          errors={errors}
          required
        />
        <InputMask
          id='subPhone'
          mask={`+\\9\\9\\8 99 999 99 99`}
          placeholder={"Номер телефона (Доп)"}
          control={control}
          name='subPhone'
          labelText='Номер телефона'
          errors={errors}
        />
        <DatePicker
          labelText='Дата рождения'
          selectedDate={selectedDate}
          open={open}
          setOpen={setOpen}
          handleChange={handleChange}
        />
      </div>

      <div className={cls.title}>Паспортные данные</div>
      <div className={cls.inputs}>
        <Input
          id='passportSeria'
          placeholder={"АА 0000000"}
          name='passportSeria'
          register={register}
          labelText='Серия и номер'
          errors={errors}
          required
        />
        <Input
          id='passportSeria'
          placeholder={"00000000000000"}
          name='passportSeria'
          register={register}
          labelText='ПИНФЛ'
          errors={errors}
          required
        />
      </div>

      <MainButton type='submit' className={cls.btn}>
        Сохранить изменения
      </MainButton>
    </form>
  );
}

export default PersonalData;
