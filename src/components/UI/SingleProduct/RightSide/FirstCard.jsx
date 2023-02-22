import React from "react";
import cls from "./RightSide.module.scss";
import { HeartIcon, CompareIcon } from "components/UI/Icons";
import MainButton from "components/UI/Buttons/MainButton";
import SecondaryButton from "components/UI/Buttons/SecondaryButton";

function FirstCard() {
  return (
    <div className={cls.FirstCard}>
      <p className={cls.discount}>
        1200 650 000 сум <span className={cls.badge}>-5%</span>
      </p>
      <h3 className={cls.price}>120 650 000 сум</h3>
      <div className={cls.peerMonth}>
        <span className={cls.priceBadge}>202 800 сум/24мес</span>
        <p>в рассрочку</p>
      </div>
      <p className={cls.delivery}>Доставка: 3-5 июня</p>

      <div className={cls.divider} />

      <div className={cls.items}>
        <div className={cls.item}>
          <span>
            <HeartIcon />
          </span>
          <p>В избранном</p>
        </div>
        <div className={cls.item}>
          <span>
            <CompareIcon />
          </span>
          <p>В сравнении</p>
        </div>
      </div>

      <div className={cls.btns}>
        <MainButton fullWidth className={cls.basketBtn}>
          Добавить в корзину
        </MainButton>
        <SecondaryButton fullWidth className={cls.buyBtn}>
          Купить сейчас
        </SecondaryButton>
      </div>
    </div>
  );
}

export default FirstCard;
