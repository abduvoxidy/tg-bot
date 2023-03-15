import React from "react";
import cls from "../NewsList.module.scss";
import Link from "next/link";
import Image from "next/image";
import useKeyTranslation from "hooks/useKeyTranslation";
import format from "date-fns/format";

function Card({ data }) {
  const getKey = useKeyTranslation();
  const day = new Date(data?.date);
  const formatDay = format(day, "dd.MM.yyyy");
  return (
    <Link href={`/news/${data.guid}`}>
      <a>
        <div className={cls.card}>
          <div className={cls.img}>
            <Image
              objectFit="cover"
              layout="fill"
              src={data.photo}
              alt={data?.[getKey("name")]}
            />
          </div>
          <div className={cls.cardBody}>
            <h3 className={cls.title}>{data?.[getKey("name")]}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.[getKey("content")],
              }}
              className={cls.desc}
            />
            <p className={cls.date}>{formatDay || ""}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Card;
