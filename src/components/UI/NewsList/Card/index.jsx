import React from "react";
import cls from "../NewsList.module.scss";
import Link from "next/link";
import Image from "next/image";

function Card({ data }) {
  return (
    <Link href="/">
      <a>
        <div className={cls.card}>
          <div className={cls.img}>
            <Image
              objectFit="cover"
              layout="fill"
              src={`/images/main/${data.url}`}
              alt={data.url}
            />
          </div>
          <div className={cls.cardBody}>
            <h3 className={cls.title}>
              {"Отдел радиологии работает круглосуточно"}
            </h3>
            <p className={cls.desc}>{data.name}</p>
            <p className={cls.date}>01.03.2023</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Card;
