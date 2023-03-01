import React from "react";
import CSelect from "components/UI/Forms/Select";
import cls from "./CheckoutModal.module.scss";
import { useForm } from "react-hook-form";

function PickUp() {
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
    <div className={cls.pickUp}>
      <CSelect
        className={cls.select}
        placeholder="Выберите район"
        defaultValue={[options[0]]}
        isClearable
        isSearchable
        options={options}
        errors={errors}
        control={control}
        name="region"
      />
      <div className={cls.regions}>
        {[0, 1, 2].map((el) => (
          <div key={el} className={cls.regionItem}>
            <div className={cls.address}>
              <img src="/icons/metro.png" alt="metro" />
              <p className={cls.name}>Буюк Ипак Йули</p>
            </div>
            <p className={cls.street}>Ташкент, улица Буюк Ипак Йули</p>
            <p className={cls.time}>Открыто до 23:00</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PickUp;
