import React from "react";
import CSelect from "components/UI/Forms/Select";
import cls from "./CheckoutModal.module.scss";
import Input from "components/UI/Forms/Input";
import { useForm } from "react-hook-form";

function Delivery() {
  const {
    handleSubmit,
    watch,
    control,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      region: "",
    },
  });
  const options = [
    { value: "tashkent", label: "Tashkent" },
    { value: "syrdarya", label: "Sirdaryo" },
    { value: "jizzakh", label: "Jizzax" },
  ];
  return (
    <div className={cls.delivery}>
      <CSelect
        placeholder="Выберите район"
        defaultValue={[options[0]]}
        isClearable
        isSearchable
        options={options}
        errors={errors}
        control={control}
        name="region"
      />
      <Input className={cls.input} placeholder="Напишите адрес получения " />
    </div>
  );
}

export default Delivery;
