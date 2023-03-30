import React from "react";
import cls from "./styles.module.scss";
import SingleProduct from "components/UI/SingleProduct";
import BreadCrumbs from "components/UI/BreadCrumbs/Index2";
import { Container } from "@mui/material";
import ProductSimilar from "components/UI/Products/ProductSimilar";
import ProductTab from "components/UI/ProductTab";
import Reviews from "components/UI/Reviews";

export function Product() {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs />
        <SingleProduct />
        <ProductTab />
        <Reviews />
        <ProductSimilar />
      </Container>
    </main>
  );
}
