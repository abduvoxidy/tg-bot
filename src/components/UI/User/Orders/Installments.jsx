import React, { useState } from "react";
import cls from "./Orders.module.scss";
import { ReadMoreIcon } from "components/UI/Icons";
import classNames from "classnames";

const products = [
  {
    img: "/images/phones/black.png",
    model: `Apple / Смартфон iPhone  11 256GB (новая компле-ктация)`,
    order_number: "№ 55822",
    count: "1 шт",
    price: "120 650 000 сум",
    allPrice: "1 200 650 000 сум",
    status: "В ожидание",
    child: {
      deliveryType: "Стандарт",
      orderTime: "Время заказа:",
      paymentType: "Не оплачен",
      contact: "User99833713761",
      phone: "+998 99 999 99 99",
      address: "Ташкент, Юнисабатский раён хамза 8/7",
    },
  },
];

function Installments() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={cls.product}>
      <div className={cls.content}>
        <div className={cls.item}>
          <p className={cls.name}>Товар:</p>
          <img src="/images/phones/black.png" width={96} alt="img" />
        </div>
        <div className={cls.item}>
          <p className={cls.name}>Модел:</p>
          <p className={cls.value}>
            Apple / Смартфон iPhone 11 256GB (новая компле- ктация)
          </p>
        </div>
        <div className={cls.item}>
          <p className={cls.name}>Номер заказа:</p>
          <p className={cls.value}>№ 55822</p>
        </div>
        <div className={cls.item}>
          <p className={cls.name}>Количества:</p>
          <p className={cls.value}>1 шт</p>
        </div>
        <div className={cls.item}>
          <p className={cls.name}>Сумма:</p>
          <p className={cls.value}>120 650 000 сум</p>
        </div>
      </div>
      <div
        className={classNames(cls.info, {
          [cls.activeInfo]: toggle,
        })}
      >
        <div className={cls.left}>
          <div className={cls.title}>
            <p>Номер заказа:</p>
            <p>№ 55822</p>
          </div>
          <div className={cls.title}>
            <p>Тип доставка:</p>
            <p>Стандарт</p>
          </div>
          <div className={cls.title}>
            <p>Время заказа:</p>
            <p>29.05.2021 03:39</p>
          </div>
          <div className={cls.title}>
            <p>Статус платежа:</p>
            <p>Не оплачен</p>
          </div>
        </div>
        <div className={cls.right}>
          <div className={cls.title}>
            <p>Контакнае лицо:</p>
            <p>User99833713761</p>
          </div>
          <div className={cls.title}>
            <p>Телефон:</p>
            <p>+998 99 999 99 99</p>
          </div>
          <div className={cls.title}>
            <p>Адрес:</p>
            <p>Ташкент, Юнисабатский раён хамза 8/7</p>
          </div>
        </div>
      </div>
      <div className={cls.bottom}>
        <div className={cls.bottomLeft}>
          <p className={cls.status}>В ожидание</p>
          <p className={cls.price}>
            Обшая сумма: <span>1 200 650 000 сум</span>
          </p>
        </div>
        <div
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className={cls.showMore}
        >
          Подробнее{" "}
          <span>
            <ReadMoreIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Installments;
