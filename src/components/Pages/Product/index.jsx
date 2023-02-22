import React from "react";
import cls from "./styles.module.scss";
import SingleProduct from "components/UI/SingleProduct";
import BreadCrumbs from "components/UI/BreadCrumbs";
import { Container } from "@mui/material";
import ProductSimilar from "components/UI/Products/ProductSimilar";
import ProductTab from "components/UI/ProductTab";

function Product() {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs />
        <SingleProduct />
        <ProductTab />
        <ProductSimilar />
      </Container>
    </main>
  );
}

export default Product;
