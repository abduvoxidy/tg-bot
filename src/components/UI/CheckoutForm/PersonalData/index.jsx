import React from "react";
import Input from "components/UI/Forms/Input";
import InputMask from "components/UI/Forms/InputMask";
import { useForm } from "react-hook-form";
import cls from "./PersonalData.module.scss";

function PersonalData() {
  const {
    handleSubmit,
    watch,
    control,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      phone: "",
      name: "",
    },
  });
  return (
    <div className={cls.root}>
      <Input value="Алексеев Алексей Алексеевич" name="name" disabled />
      <InputMask
        value={"+998901234567"}
        id="phone"
        mask={`+\\9\\9\\8 99 999 99 99`}
        placeholder={"Введите номер"}
        name="phone"
        control={control}
        disabled
      />
    </div>
  );
}

export default PersonalData;
