import React from "react";
import cls from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";

function Card({ data }) {
  return (
    <Link href={`/category/${data.guid}`}>
      <a>
        <div className={cls.card}>
          <div className={cls.img}>
            <Image
              objectFit="contain"
              layout="fill"
              src={`/images/no-photo.png`}
              alt="photo"
            />
          </div>
          <p className={cls.title}>{data?.name_ru}</p>
        </div>
      </a>
    </Link>
  );
}

export default Card;
