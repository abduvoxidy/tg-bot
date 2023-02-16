import React from "react";
import cls from "./News.module.scss";
import { Container } from "@mui/material";
import Card from "./Card";

function News() {
  const news = [
    {
      url: "iwatch.png",
      name: "Apple Watch получат неинвазивный глюкометр",
    },
    {
      url: "chip.png",
      name: "Windows 10 станет возможным запускать на Apple M1 Mac",
    },
    {
      url: "airpods.png",
      name: "AirPods – Стоит ли покупать AirPods 1 в 2021 году?",
    },
  ];
  return (
    <div className={cls.root}>
      <Container>
        <h1>Новости</h1>
        <div className={cls.row}>
          {news.map((el, index) => (
            <Card data={el} key={index + "news"} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default News;
