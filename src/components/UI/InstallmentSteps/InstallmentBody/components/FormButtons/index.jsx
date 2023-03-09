import React from "react";
import cls from "./FormButtons.module.scss";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import MainButton from "components/UI/Buttons/MainButton";

function FormButtons({
  handleBack = () => {},
  handleNext = () => {},
  className,
  initialStep,
}) {
  return (
    <div className={`${cls.formBtns} ${className}`}>
      {!initialStep && (
        <SecondaryButton
          onClick={handleBack}
          className={`${cls.btn} ${cls.firstBtn}`}
        >
          Вернуться назад
        </SecondaryButton>
      )}
      <MainButton onClick={handleNext} className={cls.btn} type="submit">
        Продолжить
      </MainButton>
    </div>
  );
}

export default FormButtons;
