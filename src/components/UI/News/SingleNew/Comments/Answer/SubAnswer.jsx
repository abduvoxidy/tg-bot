import React from "react";
import cls from "./Answer.module.scss";
import { LikeBtnIcon } from "components/UI/Icons";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import Textarea from "components/UI/Forms/Textarea";
import MainButton from "components/UI/Buttons/MainButton";
import { formatDate } from "utils/formatDate";

function SubAnswer({
  isSubAnswer,
  subAnswer,
  setIsSubAnswer,
  setSubAnswer,
  data,
}) {
  return (
    <div className={cls.subAnswer}>
      <div className={cls.answer__header}>
        <div className={cls.user}>
          <img className={cls.user__img} src="/images/user.jpg" alt="user" />
          <p className={cls.user__name}>{data?.name || "UserName"}</p>
        </div>
        <p className={cls.date}>{formatDate(data?.updated_date)}</p>
      </div>
      <div className={cls.answer__body}>
        <div>
          <p className={cls.comment}>{data?.comment}</p>
          <div className={cls.btns}>
            <div className={cls.btn}>
              <span>
                <LikeBtnIcon />
              </span>
              <p>{data?.like || 0}</p>
            </div>
            <div className={cls.btn}>
              <p
                onClick={() => {
                  setSubAnswer("");
                  setIsSubAnswer(data?.guid);
                }}
              >
                Ответить
              </p>
            </div>
          </div>
          {isSubAnswer === data?.guid && (
            <div className={cls.message}>
              <Textarea
                rows="3"
                placeholder="Напишите свой вопрос"
                className={cls.textarea}
                onChange={(e) => {
                  setSubAnswer(e.target.value);
                }}
              />
              <div className={cls.textAreaBtns}>
                <SecondaryButton
                  onClick={() => {
                    setSubAnswer("");
                    setIsSubAnswer("");
                  }}
                  className={cls.cancelBtn}
                >
                  Отмена
                </SecondaryButton>
                <MainButton disabled={!subAnswer} className={cls.sendBtn}>
                  Отправить
                </MainButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubAnswer;
