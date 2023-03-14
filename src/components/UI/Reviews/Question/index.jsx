import React from "react";
import cls from "./Question.module.scss";
import Image from "next/image";
import { LikeBtnIcon } from "components/UI/Icons";
import { ShowMoreIcon } from "components/UI/Icons";

function Question() {
  return (
    <div className={cls.questionBody}>
      <div className={cls.banner}>
        <h3 className={cls.title}>Задайте вопрос о товаре</h3>
        <p className={cls.description}>
          Вам ответит продавец, представитель бренда или пользователь, купивший
          этот товар. Пришлем уведомление, когда поступит ответ
        </p>
        <input
          type="text"
          placeholder="Напишите свой вопрос"
          className={cls.input}
        />
      </div>
      <select className={cls.select} id="Сначала полезные" name="ddProducts">
        <option>Сначала полезные </option>
        <option>сестра </option>
        <option>папа</option>
      </select>
      <div className={cls.comments}>
        <div className={cls.question}>
          <div className={cls.img}>
            <Image
              src="/images/boots.png"
              layout="fill"
              objectFit="contain"
              alt="boot"
            />
          </div>
          <div className={cls.content}>
            <p className={cls.name}>
              Мужские кроссовки Timberland TB454/0A2DW8
            </p>
            <p className={cls.description}>
              Здравствуйте подтвердите пожалуйста платформа этих кроссовок
              насколько удобна или насколько не удобна. Можно ли спокойно в них
              бегать, не чувствуя платформу? Заранее большое спасибо за
              последующие ответы.
            </p>
            <p className={cls.autor}>Наталья К.</p>
            <div className={cls.btns}>
              <div className={cls.btn}>
                <span>
                  <LikeBtnIcon />
                </span>
                <p>324</p>
              </div>
              <div className={cls.btn}>
                <p>Ответить</p>
              </div>
            </div>
          </div>
          <span className={cls.dateQuestion}>10 Февраля 2023</span>
          <div className={cls.offset}></div>
          <div className={cls.answer}>
            <div className={cls.answerHeader}>
              <img
                className={cls.answerImg}
                src="/images/paragraphLogo.png"
                alt="logo"
              />
              <span className={cls.answerDate}>10 Февраля 2023</span>
            </div>
            <div className={cls.answerBody}>
              <p>
                Здравствуйте, Наталья! Да, на этих кроссовках очень удобно
                бегать. Платформа совсем не мешает.
              </p>
              <p>Вам помог этот ответ?</p>

              <div className={cls.badges}>
                <div className={cls.badge}>Да 4</div>
                <div className={cls.badge}>Нет 0</div>
              </div>
            </div>
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

export default Question;
