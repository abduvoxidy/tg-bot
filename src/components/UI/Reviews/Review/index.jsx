import React from "react";
import cls from "./Review.module.scss";
import Checkbox from "components/UI/Forms/Checkbox";
import { useState } from "react";
import CStar from "components/UI/CStars/CStar";
import Input from "components/UI/Forms/Input";
import { ShowMoreIcon } from "components/UI/Icons";

const images = ["black.png", "blue.png", "white.png", "yellow.png"];

function Review() {
  const [checked, setChecked] = useState(false); 

  return (
    <div className={cls.reviewBody}>
      <div className={cls.images}>
        {images.map((el, i) => (
          <img
            className={cls.imgBox}
            key={el}
            src={`/images/phones/${el}`}
            alt={el}
          />
        ))}
      </div>
      <div className={cls.selectMenu}>
        <select className={cls.select} id="Сначала полезные" name="ddProducts">
          <option>Сначала полезные </option>
          <option>Сначала </option>
          <option>Сначала</option>
        </select>
        <div
          className={cls.checkbox}
          onClick={(e) => {
            setChecked((prev) => !prev);
          }}
        >
          <Checkbox id="check" checked={checked} />
          <label htmlFor="check">Только с фото</label>
        </div>
      </div>
      <div className={cls.comments}>
        <div className={cls.header}>
          <div className={cls.left}>
            <div className={cls.avatar}>A</div>
            <h3>Александр</h3>
          </div>
          <div className={cls.right}>
            <p className={cls.date}>10 Февраля 2023</p>
            <CStar />
          </div>
        </div>
        <div className={cls.body}>
          <p className={cls.review}>Качественный товар! Спасибо большое!</p>
          <div className={cls.inputs}>
            <div className={cls.col}>
              <label>Достоинства</label>
              <Input value="Удобные" />
              <Input value="Качественные" />
            </div>
            <div className={cls.col}>
              <label>Недостатки</label>
              <Input value="Короткие шнурки" />
              <Input value="Цвет не на 100% схожий с фотографией" />
            </div>
          </div>
          <p className={cls.answerText}>Вам помог этот ответ?</p>

          <div className={cls.badges}>
            <div className={cls.badge}>Да 4</div>
            <div className={cls.badge}>Нет 0</div>
          </div>
        </div>
        <div className={cls.header}>
          <div className={cls.left}>
            <div className={cls.avatar}>A</div>
            <h3>Александр</h3>
          </div>
          <div className={cls.right}>
            <p className={cls.date}>10 Февраля 2023</p>
            <CStar />
          </div>
        </div>
        <div className={cls.body}>
          <p className={cls.review}>Качественный товар! Спасибо большое!</p>
          <div className={cls.commentImages}>
            <img className={cls.img} src="/images/news/card1.png" alt="card" />
            <img className={cls.img} src="/images/news/card2.png" alt="card" />
          </div>
          <p className={cls.answerText}>Вам помог этот ответ?</p>

          <div className={cls.badges}>
            <div className={cls.badge}>Да 4</div>
            <div className={cls.badge}>Нет 0</div>
          </div>
        </div>
      </div>
      <div className={cls.showMore}>
        Показать еще
        <span>
          <ShowMoreIcon />
        </span>
      </div>
    </div>
  );
}

export default Review;
