import React from "react";
import cls from "./SingleNew.module.scss";
import useKeyTranslation from "hooks/useKeyTranslation";
import { formatDate } from "utils/formatDate";
import Link from "next/link";

function LastNews({ news = [] }) {
  const getKey = useKeyTranslation();
  return (
    <div className={cls.rightSide}>
      {news?.map((el) => (
        <Link key={el.guid} href={`/news/${el.guid}`}>
          <a>
            <div className={cls.item}>
              <img
                src={el.photo ? el.photo : "/images/no-photo.png"}
                alt="img"
              />
              <div className={cls.content}>
                <p className={cls.title}>{el?.[getKey("name")]}</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: el?.[getKey("content")],
                  }}
                  className={cls.description}
                />
                <p className={cls.date}>{formatDate(el?.date)}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default LastNews;
