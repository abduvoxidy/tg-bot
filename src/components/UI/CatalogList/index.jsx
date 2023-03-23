import React from "react";
import cls from "./CatalogList.module.scss";
import Card from "./Card";

function CatalogList({ title = "", categories = [] }) {
  return (
    <div className={cls.root}>
      <h2>{title}</h2>
      <div className={cls.row}>
        {categories.map((el, index) => (
          <Card data={el} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CatalogList;
