import React from "react";
import SetpsWrapper from "../components/StepsWrapper";
import FormButtons from "../components/FormButtons";
import cls from "./StepThree.module.scss";
import Input from "components/UI/Forms/Input";
import InputMask from "components/UI/Forms/InputMask";
import { useForm } from "react-hook-form";
import { useState } from "react";

function StepThree({ setActiveStep }) {
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

  const onSubmit = (data) => {
    console.log("data", data);
    setActiveStep(4);
  };
  return (
    <SetpsWrapper className={cls.stepThree} title="Дополнительные контакты">
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.contact}>
          <div className={cls.firstRow}>
            <h3>Контакт 1</h3>
            <select id="брат" name="ddProducts">
              <option>брат </option>
              <option>сестра </option>
              <option>папа</option>
            </select>
          </div>
          <div className={cls.secondRow}>
            <InputMask
              id="phone"
              mask={`+\\9\\9\\8 99 999 99 99`}
              placeholder={"Номер телефона"}
              control={control}
              name="phone"
              errors={errors}
              labelText="Имя"
              //   required
            />
            <Input
              id="name"
              placeholder={"ФИО"}
              name="name"
              register={register}
              errors={errors}
              labelText="ФИО"
              //   required
            />
          </div>
        </div>
        <div className={cls.contact}>
          <div className={cls.firstRow}>
            <h3>Контакт 2</h3>
            <select id="брат" name="ddProducts">
              <option>сестра </option>
              <option> брат </option>
              <option>папа</option>
            </select>
          </div>
          <div className={cls.secondRow}>
            <InputMask
              id="phone"
              mask={`+\\9\\9\\8 99 999 99 99`}
              placeholder={"Номер телефона"}
              control={control}
              name="phone"
              errors={errors}
              labelText="Имя"
              //   required
            />
            <Input
              id="name"
              placeholder={"ФИО"}
              name="name"
              register={register}
              errors={errors}
              labelText="ФИО"
              //   required
            />
          </div>
        </div>
        <div className={cls.contact}>
          <div className={cls.firstRow}>
            <h3>Контакт 3</h3>
            <select id="брат" name="ddProducts">
              <option>папа</option>
              <option>сестра </option>
              <option>брат</option>
            </select>
          </div>
          <div className={cls.secondRow}>
            <InputMask
              id="phone"
              mask={`+\\9\\9\\8 99 999 99 99`}
              placeholder={"Номер телефона"}
              control={control}
              name="phone"
              errors={errors}
              labelText="Имя"
              //   required
            />
            <Input
              id="name"
              placeholder={"ФИО"}
              name="name"
              register={register}
              errors={errors}
              labelText="ФИО"
              //   required
            />
          </div>
          <FormButtons
            handleBack={() => {
              setActiveStep((prev) => prev - 1);
            }}
          />
        </div>
      </form>
    </SetpsWrapper>
  );
}

export default StepThree;
