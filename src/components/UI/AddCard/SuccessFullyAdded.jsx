import React from "react";
import { SuccessFullyAddedIcon } from "components/UI/Icons";
import cls from "./AddCard.module.scss";
import MainButton from "components/UI/Buttons/MainButton";

function SuccessFullyAdded({ handleClose }) {
  return (
    <div className={cls.success}>
      <h2>Вы успешно добавили карту</h2>
      <span>
        <SuccessFullyAddedIcon />
      </span>
      <p className={cls.text}>
        Добавленные карты будут отображаться в разделе мои карты
      </p>
      <MainButton fullWidth onClick={handleClose} className={cls.btn}>
        Вернуться на главную
      </MainButton>
    </div>
  );
}

export default SuccessFullyAdded;
