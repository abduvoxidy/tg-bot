import React from "react";
import Image from "next/image";
import cls from "./News.module.scss";
import Link from "next/link";
import { DatePickerIcon, CommentIcon, NewsEyeIcon } from "../Icons";
import useKeyTranslation from "hooks/useKeyTranslation";
import { formatDate } from "utils/formatDate";
import { useRouter } from "next/router";
import SecondaryButton from "../Buttons/SecondaryButton";

function MoreNews({ news = [] }) {
  const router = useRouter();
  const getKey = useKeyTranslation();
  return (
    <div className={cls.moreNews}>
      {news.map((el) => (
        <div className={cls.mainCard}>
          <div className={cls.img}>
            <Image
              src={el?.photo || "/images/no-photo.png"}
              objectFit="contain"
              layout="fill"
              loading="lazy"
            />
          </div>
          <div className={cls.cardBody}>
            <div className={cls.header}>
              <div className={cls.item}>
                <span>
                  <DatePickerIcon />
                </span>
                <p>{formatDate(el?.date)}</p>
              </div>
              <div className={cls.item}>
                <span>
                  <CommentIcon />
                </span>
                <p>13 Комментарии</p>
              </div>
              <div className={cls.item}>
                <span>
                  <NewsEyeIcon />
                </span>
                <p>52</p>
              </div>
            </div>
            <p className={cls.text}>{el?.[getKey("name")]}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: el?.[getKey("content")],
              }}
              className={cls.description}
            />
            <SecondaryButton
              onClick={() => {
                router.push(`/news/${el?.guid}`);
              }}
              className={cls.moreBtn}
            >
              Читать подробно
            </SecondaryButton>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoreNews;
