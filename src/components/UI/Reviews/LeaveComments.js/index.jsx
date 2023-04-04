import React, { useState } from "react";
import cls from "./LeaveComments.module.scss";
import { Container } from "@mui/material";
import CStar from "components/UI/CStars/CStar";
import Textarea from "components/UI/Forms/Textarea";
import Inputs from "./Inputs";
import ImgUpload from "./ImgUpload";
import { CheckedRadioIcon } from "components/UI/Icons";
import MainButton from "components/UI/Buttons/MainButton";

export function LeaveComments() {
  const [state, setState] = useState({
    advantages: [],
    disAdvantages: [],
  });
  const [checked, setChecked] = useState("yes");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={cls.main}>
      <Container>
        <form onSubmit={onSubmit}>
          <h1>Отзыв о товаре Мужские кроссовки Timberland, ...</h1>
          <div className={cls.body}>
            <img src="/images/user.jpg" alt="user photo" />
            <div className={cls.rightSide}>
              <div className={cls.overall}>
                <h3>Общая оценка</h3>
                <CStar width={39} height={38} />
              </div>
              <h3 className={cls.sayMore}>Расскажите подробнее</h3>
              <div className={cls.inputs}>
                <div className={cls.left}>
                  <p className={cls.title}>Достоинства</p>
                  <Inputs formState="advantages" setState={setState} />
                </div>
                <div className={cls.right}>
                  <p className={cls.title}>Недостатки</p>
                  <Inputs formState="disAdvantages" setState={setState} />
                </div>
              </div>
              <Textarea
                className={cls.textArea}
                labelText="Комментарии"
                placeholder="Напишите здесь"
              />
              <ImgUpload />
              <div className={cls.radioWrapper}>
                <p>Порекомендовали бы товар друзьям?</p>
                <div className={cls.radios}>
                  <div className={cls.radio} onClick={() => setChecked("yes")}>
                    {checked === "yes" ? (
                      <CheckedRadioIcon />
                    ) : (
                      <span className={cls.box} />
                    )}

                    <label>Да</label>
                  </div>
                  <div className={cls.radio} onClick={() => setChecked("no")}>
                    {checked === "no" ? (
                      <CheckedRadioIcon />
                    ) : (
                      <span className={cls.box} />
                    )}
                    <label>Нет</label>
                  </div>
                </div>
              </div>
              <MainButton type="submit" fullWidth className={cls.btn}>
                Готово
              </MainButton>
            </div>
          </div>
        </form>
      </Container>
    </main>
  );
}
