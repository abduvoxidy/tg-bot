import React from "react";
import SetpsWrapper from "../components/StepsWrapper";
import FormButtons from "../components/FormButtons";
import cls from "./StepTwo.module.scss";
import Input from "components/UI/Forms/Input";
import InputMask from "components/UI/Forms/InputMask";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePicker from "components/UI/Forms/DatePicker";

function StepTwo({ setActiveStep }) {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const {
    handleSubmit,
    watch,
    control,
    register,
    setValue,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {},
  });

  const handleChange = (newValue) => {
    console.log("newValue", newValue);
    setSelectedDate(newValue);
  };

  const onSubmit = (data) => {
    console.log("data", data);
    setActiveStep(3);
  };
  return (
    <SetpsWrapper className={cls.stepTwo} title="Личные данные">
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.row}>
          <div className={cls.col}>
            <Input
              id="name"
              placeholder={"Имя"}
              name="name"
              register={register}
              errors={errors}
              labelText="ФИО"
              required
            />
            <InputMask
              id="phone"
              mask={`+\\9\\9\\8 99 999 99 99`}
              placeholder={"Номер телефона"}
              control={control}
              name="phone"
              labelText="Имя"
              required
            />
            <Input
              id="address"
              placeholder={"Адрес"}
              name="address"
              register={register}
              errors={errors}
              labelText="Адрес"
              required
            />
          </div>
          <div className={cls.col}>
            <DatePicker
              labelText="Дата рождения"
              selectedDate={selectedDate}
              open={open}
              setOpen={setOpen}
              handleChange={handleChange}
            />
            <Input
              id="passport"
              placeholder={"Паспорт серия и номер"}
              name="passport"
              register={register}
              errors={errors}
              labelText="Паспорт серия и номер"
              required
            />
          </div>
        </div>
        <FormButtons
          handleBack={() => {
            setActiveStep((prev) => prev - 1);
          }}
        />
      </form>
    </SetpsWrapper>
  );
}

export default StepTwo;
