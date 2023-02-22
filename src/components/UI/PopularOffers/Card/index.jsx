import React from "react";
import cls from "./Card.module.scss";
import Image from "next/image";

function Card({ img }) {
  return (
    <div className={cls.card}>
      <div className={cls.left}>
        <div className={cls.img}>
          <Image
            objectFit="contain"
            layout="fill"
            src={`/images/main/${img}`}
            alt="tel1"
          />
        </div>
      </div>
      <div className={cls.right}>
        <p className={cls.title}>Смарт-часы Samsung Galaxy Watch3 45mm</p>
        <div className={cls.priceMonth}>
          <div className={cls.badge}>1 000 000 сум</div>
          <span>x 9 мес</span>
        </div>
        <p className={cls.discount}>
          1200 650 000 сум &nbsp; <span>-5%</span>
        </p>
        <p className={cls.price}>120 650 000 сум</p>
      </div>
    </div>
  );
}

export default Card;
