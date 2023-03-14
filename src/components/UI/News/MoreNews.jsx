import React from "react";
import Image from "next/image";
import cls from "./News.module.scss";
import Link from "next/link";

function MoreNews({ news = [] }) {
  return (
    <div className={cls.moreNews}>
      {news.map((el, i) => (
        <Link href="/news/1234">
          <a>
            <div key={i} className={cls.mainCard}>
              <div className={cls.img}>
                <Image
                  src={`/images/news/${el.url}`}
                  objectFit="contain"
                  layout="fill"
                  loading="lazy"
                />
              </div>
              <div className={cls.cardBody}>
                <p className={cls.text}>Новости</p>
                <p className={cls.description}>{el.description}</p>
                <p className={cls.date}>1 марта 2023 г.</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default MoreNews;