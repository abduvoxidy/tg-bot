import React from "react";
import cls from "./NewsList.module.scss";
import Card from "./Card";
import { useNewsQuery } from "services/news.service";

function NewsList() {
  const { data } = useNewsQuery({
    data: {
      data: {
        offset: 0,
      },
    },
  });

  console.log("data", data);

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
      <h1>Новости</h1>
      <div className={cls.row}>
        {news.map((el, index) => (
          <Card data={el} key={index + "news"} />
        ))}
      </div>
    </div>
  );
}

export default NewsList;
