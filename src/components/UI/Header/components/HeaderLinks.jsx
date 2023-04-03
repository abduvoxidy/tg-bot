import React from "react";
import cls from "./styles.module.scss";
import { CompareIcon, HeartIcon, BasketIcon } from "components/UI/Icons";
import Link from "next/link";

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
      link: "/user/favorites",
    },
    {
      icon: <BasketIcon />,
      title: "Корзина",
      link: "/cart",
    },
  ];
  return (
    <div className={cls.HeaderLinks}>
      {icons.map((el, index) => (
        <Link href={el.link} key={index}>
          <a>
            <div className={cls.link}>
              <span>{el.icon}</span>
              <p>{el.title}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default HeaderLinks;
