import React from "react";
import Input from "components/UI/Forms/Input";
import InputMask from "components/UI/Forms/InputMask";
import { useForm } from "react-hook-form";
import DatePicker from "components/UI/Forms/DatePicker";
import { useState } from "react";
import MainButton from "components/UI/Buttons/MainButton";
import cls from "./Profile.module.scss";

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
    },
  });

  const handleChange = (newValue) => {
    console.log("newValue", newValue);
    setSelectedDate(newValue);
  };

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="name"
        placeholder={"Имя"}
        name="name"
        register={register}
        errors={errors}
        labelText="Имя"
        required
      />
      <Input
        id="surname"
        placeholder={"Фамилия"}
        name="surname"
        register={register}
        errors={errors}
        labelText="Фамилия"
        required
      />
      <Input
        id="username"
        placeholder={"Telegram user name"}
        name="username"
        register={register}
        errors={errors}
        labelText="Telegram user name"
        required
      />
      <InputMask
        id="phone"
        mask={`+\\9\\9\\8 99 999 99 99`}
        placeholder={"Введите номер"}
        control={control}
        name="phone"
        labelText="Номер телефона"
        errors={errors}
        required
      />
      <InputMask
        id="subPhone"
        mask={`+\\9\\9\\8 99 999 99 99`}
        placeholder={"Номер телефона (Доп)"}
        control={control}
        name="subPhone"
        labelText="Номер телефона"
        errors={errors}
      />
      <DatePicker
        labelText="Дата рождения"
        selectedDate={selectedDate}
        open={open}
        setOpen={setOpen}
        handleChange={handleChange}
      />
      <MainButton type="submit" className={cls.btn}>
        Сохранить изменения
      </MainButton>
    </form>
  );
}

export default PersonalData;
