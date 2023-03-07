import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import React from "react";
import cls from "./Order.module.scss";
import { ChatIcon } from "components/UI/Icons";

function OrderPaymentInfo() {
  return (
    <div className={cls.card}>
      <h3 className={cls.title}>Информация о заказе №23115</h3>
      <address>
        <p>Адрес</p>
        <p>Чорсу 12, А</p>
      </address>
      <div className={cls.productOptions}>
        <div className={cls.option}>
          <p>Товар:</p>
          <img src="/images/phones/black.png" alt="img" />
        </div>
        <div className={cls.option}>
          <p>Модель:</p>
          <p className={cls.value}>
            Apple / Смартфон iPhone 11 256GB (новая компле - ктация)
          </p>
        </div>
        <div className={cls.option}>
          <p>Сумма:</p>
          <h3>120 650 000 сум</h3>
        </div>
      </div>
      <div className={cls.aboutPrice}>
        <p className={cls.priceTitle}>Оплата</p>
        <div className={cls.row}>
          <p>Стоимость товаров</p>
          <p>120 650 000 сум</p>
        </div>
        <div className={cls.row}>
          <p>Стоимость доставки</p>
          <p>10 000 сум</p>
        </div>
        <div className={cls.row}>
          <p>Сервисный сбор</p>
          <p>1 000 сум</p>
        </div>
      </div>
      <div className={cls.allPrice}>
        <p>Итого</p>
        <p>120 662 000 сум</p>
      </div>
      <SecondaryButton
        className={cls.btn}
        fullWidth
        icon={<ChatIcon />}
        size="large"
      >
        Связаться с поддержкой
      </SecondaryButton>
    </div>
  );
}

export default OrderPaymentInfo;
