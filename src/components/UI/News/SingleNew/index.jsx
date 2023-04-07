import React from "react";
import cls from "./SingleNew.module.scss";
import { Container } from "@mui/material";
import Image from "next/image";
import { useNewsByIdQuery, useNewsQuery } from "services/news.service";
import { useRouter } from "next/router";
import useKeyTranslation from "hooks/useKeyTranslation";
import LastNews from "./LastNews";
import Comments from "components/UI/Comments";
import BreadCrumbs from "components/UI/BreadCrumbs";
import { BannerSkeleton } from "components/UI/Loaders/BannerSkeleton";

export function SingleNew() {
  const getKey = useKeyTranslation();
  const router = useRouter();
  const news_id = router.query?.id;

  const { data: news } = useNewsQuery();

  const newsData = news?.data?.response;

  const { data, isLoading } = useNewsByIdQuery({
    id: news_id,
    params: {},
  });

  const newsItem = data?.data?.response;

  if (isLoading)
    return (
      <Container>
        <BannerSkeleton />;
      </Container>
    );

  const breadcrumbItems = [
    {
      link: "/",
      label: "Главная",
    },
    {
      label: newsItem?.[getKey("name")],
    },
  ];

  return (
    <main className={cls.main}>
      <Container className={cls.container}>
        <div className={cls.leftSide}>
          {" "}
          <BreadCrumbs items={breadcrumbItems} />
          <h1 className={cls.title}>{newsItem?.[getKey("name")]}</h1>
          <div className={cls.body}>
            <div className={cls.bannerImg}>
              <Image
                src={newsItem?.photo || `/images/no-photo.png`}
                objectFit="contain"
                layout="fill"
                placeholder="blur"
                blurDataURL="/images/skeleton.webp"
                alt="img"
              />
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: newsItem && newsItem?.[getKey("content")],
              }}
              className={cls.description}
            />
          </div>
          <Comments />
        </div>
        <div className={cls.rightSide}>
          <LastNews news={newsData} />
        </div>
      </Container>
    </main>
  );
}
