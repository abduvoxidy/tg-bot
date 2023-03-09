import React from "react";
import cls from "./News.module.scss";
import BreadCrumbs from "../BreadCrumbs";
import { Container } from "@mui/material";
import Image from "next/image";
import LastNews from "./LastNews";
import MoreNews from "./MoreNews";
import { lastNews, moreNews } from "./data";
import TextContent from "../TextContent";

export function News() {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs title="Главная / Новости" />
        <h1 className={cls.title}>Новости</h1>
        <div className={cls.bannerImg}>
          <Image
            src="/images/news/banner.jpg"
            objectFit="cover"
            layout="fill"
            loading="lazy"
          />
        </div>

        <LastNews news={lastNews} />
        <MoreNews news={moreNews} />
        <TextContent />
      </Container>
    </main>
  );
}
