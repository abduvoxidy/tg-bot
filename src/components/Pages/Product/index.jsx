import React from "react";
import cls from "./styles.module.scss";
import SingleProduct from "components/UI/SingleProduct";
import BreadCrumbs from "components/UI/BreadCrumbs";
import { Container } from "@mui/material";

function Product() {
  return (
    <main className={cls.main}>
      <Container>
        <BreadCrumbs />
        <SingleProduct />
      </Container>
    </main>
  );
}

export default Product;
