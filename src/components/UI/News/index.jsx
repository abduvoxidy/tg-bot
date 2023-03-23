import React from "react";
import cls from "./News.module.scss";
import BreadCrumbs from "components/UI/BreadCrumbs";
import { Container } from "@mui/material";
import Image from "next/image";
import MoreNews from "./MoreNews";
import { useNewsQuery } from "services/news.service";
import useKeyTranslation from "hooks/useKeyTranslation";
import { formatDate } from "utils/formatDate";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useRouter } from "next/router";

export function News() {
  const { data: news } = useNewsQuery();
  const getKey = useKeyTranslation();
  const router = useRouter();

  const response = news && news?.data?.response;
  const lastNew = response && response[response.length - 1];

  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs title="Главная / Новости" />
        <h1 className={cls.title}>Новости</h1>
        {lastNew && (
          <div className={cls.bannerImg}>
            <Image
              src={lastNew.photo || "/images/news/banner.jpg"}
              objectFit="cover"
              layout="fill"
              loading="lazy"
            />
            <div className={cls.content}>
              <h2>{lastNew?.[getKey("name")]}</h2>
              <div
                className={cls.text}
                dangerouslySetInnerHTML={{
                  __html: lastNew?.[getKey("content")],
                }}
              />
              <p className={cls.date}>{formatDate(lastNew?.date)}</p>
              <SecondaryButton
                onClick={() => {
                  router.push(`/news/${lastNew?.guid}`);
                }}
                className={cls.moreBtn}
              >
                Читать подробно
              </SecondaryButton>
            </div>
          </div>
        )}
        <MoreNews news={response} />
      </Container>
    </main>
  );
}
