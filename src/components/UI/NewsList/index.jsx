import React from "react";
import cls from "./NewsList.module.scss";
import Card from "./Card";
import { useNewsQuery } from "services/news.service";

function NewsList() {
  const { data: news } = useNewsQuery({
    data: {},
  });

  return (
    <div className={cls.root}>
      <h1>Новости</h1>
      <div className={cls.row}>
        {news
          ? news.data.response.map((el, index) => (
              <Card data={el} key={el.guid} />
            ))
          : null}
      </div>
    </div>
  );
}

export default NewsList;
