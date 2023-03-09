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
          <p className={cls.desc}>{data.name}</p>
        </div>
      </a>
    </Link>
  );
}

export default Card;
