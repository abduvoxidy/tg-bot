import Image from "next/image";
import React from "react";
import { formatDate } from "utils/formatDate";
import cls from "./DiscountCard.module.scss";

const DiscountCard = ({
  name,
  periodFrom,
  periodTil,
  image,
  time,
  discount,
  icon,
}) => {
  return (
    <div className={cls.wrap}>
      <div className={cls.image}>
        <Image src={image} layout="fill" />
      </div>
      <div className={cls.period}>
        <span>{formatDate(periodFrom)} </span> -{" "}
        <span> {formatDate(periodTil)}</span>
      </div>
      <p className={cls.name}>{name}</p>
      <span className={cls.discount}> {discount}%</span>
      <div>
        <span className={cls.time}>11:36:08</span>
      </div>
    </div>
  );
};

export default DiscountCard;
