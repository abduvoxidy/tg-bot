import React from "react";
import cls from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";

function Card({ data }) {
  return (
    <Link href="/">
      <a>
        <div className={cls.card}>
          <div className={cls.img}>
            <Image
              objectFit="contain"
              layout="fill"
              src={`/images/catalog/${data.url}`}
              alt="tel1"
            />
          </div>
          <p className={cls.title}>{data.name}</p>
        </div>
      </a>
    </Link>
  );
}

export default Card;
