import React from "react";
import cls from "./CatalogList.module.scss";
import Card from "./Card";

function CatalogList({ catalogs = [] }) {
  return (
    <div className={cls.root}>
      <div className={cls.row}>
        {catalogs.map((el, index) => (
          <Card data={el} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CatalogList;
