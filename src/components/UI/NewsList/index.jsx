import React from "react";
import cls from "./NewsList.module.scss";
import Card from "./Card";
import { useNewsQuery } from "services/news.service";
import ProductCardSkeleton from "../Loaders/ProductCardSkeleton";

function NewsList() {
  const { data: news, isLoading } = useNewsQuery({
    data: {
      limit: 3,
    },
    queryParams: {},
  });

  if (isLoading) return <ProductCardSkeleton items={3} />;

  return (
    <div className={cls.root}>
      <h1>Новости</h1>
      <div className={cls.row}>
        {news
          ? news.map((el, index) => <Card data={el} key={el.guid} />)
          : null}
      </div>
    </div>
  );
}

export default NewsList;
