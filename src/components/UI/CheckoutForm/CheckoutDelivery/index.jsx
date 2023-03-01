import React from "react";
import cls from "./CheckoutDelivery.module.scss";
import CSelect from "components/UI/Forms/Select";
import Input from "components/UI/Forms/Input";
import Textarea from "components/UI/Forms/Textarea";
import { useForm } from "react-hook-form";

function CheckoutDelivery() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
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
  return (
    <div className={cls.root}>
      <CSelect
        placeholder="Region"
        defaultValue={[options[0]]}
        isClearable
        isSearchable
        options={options}
        errors={errors}
        control={control}
        name="region"
      />
      <div className={cls.inputs}>
        <Input type="number" placeholder="дом *" />
        <Input type="number" placeholder="Этаж *" />
      </div>
      <div className={cls.inputs}>
        <Input type="number" placeholder="Квартира *" />
        <Input type="number" placeholder="Подезд *" />
      </div>
      <Textarea placeholder="Комментрий к заказу" />
    </div>
  );
}

export default CheckoutDelivery;
