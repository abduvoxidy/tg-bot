import React from "react";
import cls from "./CheckoutPrice.module.scss";
import MainButton from "components/UI/Buttons/MainButton";

function CheckoutPrice() {
  return (
    <div className={cls.root}>
      <h3 className={cls.title}>Сумма заказа</h3>
      <div className={cls.body}>
        <div className={cls.row}>
          <p className={cls.name}>Метод оплаты</p>
          <p className={cls.value}>Наличными</p>
        </div>
        <div className={cls.row}>
          <p className={cls.name}>Стоимость товаров</p>
          <p className={cls.value}>10 560 000 сум</p>
        </div>
        <div className={cls.row}>
          <p className={cls.name}>Услуга доставки</p>
          <p className={cls.value}>20 000 сум</p>
        </div>
      </div>
      <div className={cls.total}>
        <div className={cls.row}>
          <p className={cls.totalName}>Итого</p>
          <p className={cls.totalValue}>10 580 000 сум</p>
        </div>
      </div>
      <MainButton className={cls.btn} fullWidth>
        Подтвердить заказ
      </MainButton>
    </div>
  );
}

export default CheckoutPrice;
