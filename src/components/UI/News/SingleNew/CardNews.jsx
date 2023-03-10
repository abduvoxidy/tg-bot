import React from "react";
import Link from "next/link";
import cls from "./SingleNew.module.scss";
import Image from "next/image";

function CardNews() {
  return (
    <Link href="/news/1234">
      <a>
        <div className={cls.card}>
          <div className={cls.img}>
            <Image
              src={`/images/news/img1.png`}
              objectFit="cover"
              layout="fill"
              loading="lazy"
            />
          </div>
          <div className={cls.cardBody}>
            <p className={cls.text}>Новости</p>
            <p className={cls.description}>
              Будущая Siri сможет разговаривать со всеми, кто вам звонит, и
              делать заметки
            </p>
            <p className={cls.date}>1 марта 2023 г.</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default CardNews;
