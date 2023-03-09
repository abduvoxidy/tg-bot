import React from "react";
import cls from "./ProductImages.module.scss";
import ProductImgCard from "./ProductImgCard";
import Link from "next/link";

function ProductImages({
  products = [],
  title,
  className = "",
  productKey = "product",
}) {
  return (
    <div className={`${cls.root} ${className}`}>
      {title && <h1>{title}</h1>}
      <div className={cls.row}>
        {products.map((el, index) => (
          <ProductImgCard data={el} key={index + productKey} />
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
