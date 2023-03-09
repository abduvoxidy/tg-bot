import React from "react";
import cls from "./PopularBrands.module.scss";
import Card from "./Card";
import { Container } from "@mui/material";

function PopularBrands() {
  const brands = [
    {
      url: "samsung.png",
    },
    {
      url: "nokia.png",
    },
    {
      url: "samsung.png",
    },
    {
      url: "adidas.png",
    },
    {
      url: "nokia.png",
    },
    {
      url: "lenovo.png",
    },
    {
      url: "nokia.png",
    },
    {
      url: "samsung.png",
    },
    {
      url: "hm.png",
    },
    {
      url: "lenovo.png",
    },
    {
      url: "nokia.png",
    },
    {
      url: "hm.png",
    },
  ];
  return (
    <div className={cls.root}>
      <h1>Популярные бренды</h1>
      <div className={cls.row}>
        {brands.map((el, index) => (
          <Card data={el} key={index + "brands"} />
        ))}
      </div>
    </div>
  );
}

export default PopularBrands;
