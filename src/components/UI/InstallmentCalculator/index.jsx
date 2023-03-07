import React, { useState } from "react";
import MainDialog from "../Dialogs/MainDialog";
import cls from "./InstallmentCalculator.module.scss";
import AntSwitch from "../Forms/AntSwitch";
import { useForm } from "react-hook-form";
import InputPrice from "../Forms/InputPrice";
import { PhoneIcon } from "../Icons";
import MainButton from "../Buttons/MainButton";

const months = [3, 4, 5, 6, 8, 9, 10, 11, 12, 18, 24, 36];

function InstallmentCalculator({ open, setOpen }) {
  const [activeItem, setActiveItem] = useState(months[0]);
  const [checked, setChecked] = useState(true);

  const {
    handleSubmit,
    watch,
    control,
    register,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      price: "",
    },
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <MainDialog
      open={open}
      handleClose={() => {
        setOpen(false);
      }}
      className={cls.modal}
    >
      <h2>Платежный калькулятор</h2>
      <div className={cls.initialFee}>
        <p>Первоначальный взнос</p>
        <AntSwitch checked={checked} onChange={handleChange} />
      </div>
      <InputPrice
        className={cls.input}
        placeholder={"Number"}
        control={control}
        name="price"
        errors={errors}
        // customOnChange={handleChange}
        disabled={!checked}
        required
      />
      <div className={cls.row}>
        <p className={cls.title}>Ежемесячный платеж:</p>
        <div className={cls.dashed} />
        <p className={cls.title}>1 808 000 сум</p>
      </div>
      <div className={cls.row}>
        <p className={cls.subTitle}>Общая сумма оплаты:</p>
        <div className={cls.dashed} />
        <p className={cls.subTitle}>27 687 000 сум</p>
      </div>
      <div className={cls.monthTitle}>Выберите срок рассрочки (месяц)</div>

      <div className={cls.months}>
        {months.map((el) => (
          <div
            onClick={() => setActiveItem(el)}
            key={el}
            className={`${cls.month} ${activeItem === el ? cls.active : ""}`}
          >
            {el}
          </div>
        ))}
      </div>

      <div className={cls.contact}>
        <p>Остались вопросы? Позваните нам</p>
        <div className={cls.phone}>
          <PhoneIcon />
          <a href="tel:+998 78 777 20 20">+998 78 777 20 20</a>
        </div>
      </div>
      <MainButton onClick={() => setOpen(false)} fullWidth className={cls.btn}>
        Оформить в рассрочку
      </MainButton>
    </MainDialog>
  );
}

export default InstallmentCalculator;
