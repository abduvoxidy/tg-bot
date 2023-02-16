import React from "react";
import cls from "./Brands.module.scss";
import Card from "./Card";
import { Container } from "@mui/material";

function Brands() {
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
      <Container>
        <h1>Популярные бренды</h1>
        <div className={cls.row}>
          {brands.map((el, index) => (
            <Card data={el} key={index + "brands"} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Brands;
