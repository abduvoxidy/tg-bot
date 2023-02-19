import React from "react";
import cls from "./ProductImages.module.scss";
import { Container } from "@mui/material";
import ProductImgCard from "./ProductImgCard";

function ProductImages({
  products = [],
  title = "Product",
  className = "",
  productKey = "product",
}) {
  return (
    <div className={`${cls.root} ${className}`}>
      <Container>
        <h1>{title}</h1>
        <div className={cls.row}>
          {products.map((el, index) => (
            <ProductImgCard data={el} key={index + productKey} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ProductImages;
