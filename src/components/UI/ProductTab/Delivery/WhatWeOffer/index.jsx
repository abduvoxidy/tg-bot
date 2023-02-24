import React from "react";
import cls from "./WhatWeOffer.module.scss";
import { TimerIcon } from "components/UI/Icons";
import { whatWeOffer } from "../data";

function WhatWeOffer() {
  return (
    <div className={cls.root}>
      <h1>Что мы предлагаем</h1>
      <div className={cls.items}>
        {whatWeOffer.map((el) => (
          <div key={el.title} className={cls.item}>
            <div className={cls.iconBox}>{el.icon()}</div>
            <h3 className={cls.title}>{el.title}</h3>
            <p className={cls.desc}>{el.description}</p>
            <a className={cls.link} href={el.link}>
              Подробно
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeOffer;
