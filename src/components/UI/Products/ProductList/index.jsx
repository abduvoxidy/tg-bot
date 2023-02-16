import React from "react";
import cls from "./ProductList.module.scss";
import ProductCard from "components/UI/Cards/ProductCard";
import { Container } from "@mui/material";

function ProductList() {
  return (
    <div className={cls.root}>
      <Container>
        <h1>Новинки</h1>
        <div className={cls.row}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </div>
  );
}

export default ProductList;
