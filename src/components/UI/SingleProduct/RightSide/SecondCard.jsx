import React, { useState } from "react";
import cls from "./RightSide.module.scss";
import { QuestionIcon } from "components/UI/Icons";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";

function SecondCard() {
  const [isActive, setIsActive] = useState(false);
  const months = [3, 6, 9, 12];
  return (
    <div className={cls.SecondCard}>
      <h3>Купить товар в рассрочку</h3>
      <p className={cls.info}>
        Первоначальный взнос нет{" "}
        <span>
          <QuestionIcon />
        </span>
      </p>
      <div className={cls.installmentsMonth}>
        <p className={cls.term}>Срок рассрочки, месяц: </p>
        <div className={cls.items}>
          {months.map((el) => (
            <div
              onClick={() => setIsActive(el)}
              key={el}
              className={`${cls.item} ${isActive === el ? cls.activeItem : ""}`}
            >{`${el} мес`}</div>
          ))}
        </div>
      </div>
      <div className={cls.monthly}>
        <p className={cls.label}>Ежемесячный платеж:</p>
        <h3>100 911 000 сум</h3>
      </div>
      <div className={cls.all}>
        <p className={cls.label}>Общая сумма:</p>
        <h2>100 911 000 сум</h2>
      </div>
      <SecondaryButton fullWidth className={cls.btn}>
        Купить в рассрочку
      </SecondaryButton>
    </div>
  );
}

export default SecondCard;
