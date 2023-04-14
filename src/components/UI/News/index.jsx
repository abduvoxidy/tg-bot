import React from "react";
import cls from "./News.module.scss";
import BreadCrumbs from "components/UI/BreadCrumbs";
import { Container } from "@mui/material";
import Image from "next/image";
import MoreNews from "./MoreNews";
import { formatDate } from "utils/formatDate";
import SecondaryButton from "../Buttons/SecondaryButton";
import { useRouter } from "next/router";
import { BannerSkeleton } from "../Loaders/BannerSkeleton";

import useKeyTranslation from "hooks/useKeyTranslation";

const breadcrumbItems = [
  {
    link: "/",
    label: "Главная",
  },
  {
    link: "/news",
    label: "Новости",
  },
];

export function News({ news, isLoading }) {
  const getKey = useKeyTranslation();
  const router = useRouter();

  const lastNew = news && news[news.length - 1];

  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs items={breadcrumbItems} />
        <h1 className={cls.title}>Новости</h1>
        {isLoading ? (
          <BannerSkeleton />
        ) : (
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
        <MoreNews news={news} />
      </Container>
    </main>
  );
}
