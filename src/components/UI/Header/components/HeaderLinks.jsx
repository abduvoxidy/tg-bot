import React from "react";
import cls from "./styles.module.scss";
import { CompareIcon, HeartIcon, BasketIcon } from "components/UI/Icons";

function HeaderLinks() {
  const icons = [
    {
      icon: <CompareIcon />,
      title: "Сравнение",
      link: "/",
    },
    {
      icon: <HeartIcon />,
      title: "Избранное",
      link: "/",
    },
    {
      icon: <BasketIcon />,
      title: "Корзина",
      link: "/",
    },
  ];
  return (
    <div className={cls.HeaderLinks}>
      {icons.map((el, index) => (
        <div key={index} className={cls.link}>
          <span>{el.icon}</span>
          <p>{el.title}</p>
        </div>
      ))}
    </div>
  );
}

export default HeaderLinks;
